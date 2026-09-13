/**
 * Lightweight local stand-in for the Vercel serverless function (api/chat.ts).
 * Purpose: allow the chat assistant to work during local development without
 * ever shipping the API key to the browser.
 *
 * Usage:
 *   OPENROUTER_API_KEY=sk-or-... node scripts/dev-proxy.mjs
 * (Vite's dev server already proxies /api -> http://localhost:8787.)
 *
 * This is a simplified emulation of the production function — the deployed
 * api/chat.ts remains the source of truth for prompt and model fallback.
 */
import http from "node:http";
import { readFileSync } from "node:fs";

// Load .env.local (KEY=VALUE lines) so a plain `npm run dev:proxy` works.
try {
  for (const line of readFileSync(new URL("../.env.local", import.meta.url), "utf8").split("\n")) {
    const match = line.match(/^\s*([\w.]+)\s*=\s*(.*)?\s*$/);
    if (match && !line.trim().startsWith("#")) {
      const key = match[1];
      const value = (match[2] ?? "").replace(/^["']|["']$/g, "");
      if (!(key in process.env)) process.env[key] = value;
    }
  }
} catch {
  // no .env.local — the OPENROUTER_API_KEY check below reports it
}

const PORT = process.env.PORT ?? 8787;
const API_KEY = process.env.OPENROUTER_API_KEY;

const PRIORITY_MODELS = [
  "google/gemini-2.0-flash-exp:free",
  "meta-llama/llama-3.1-8b-instruct:free",
  "google/gemma-2-9b-it:free",
  "minimax/minimax-01:free",
];

const SYSTEM_PROMPT =
  "You are the AI assistant on Kuldeep Pal's portfolio. Answer questions from recruiters and engineers " +
  "about his professional background: Senior Software Engineer (Data & AI) at Walmart Global Tech — data " +
  "engineering, AI agents (RAG, LangGraph), and backend systems (FastAPI, Spring Boot, Spark, Kafka). " +
  "Be concise and professional. For unrelated topics, politely redirect to his background.";

if (!API_KEY) {
  console.error("[dev-proxy] OPENROUTER_API_KEY is not set. Add it to .env.local and load it, e.g.:");
  console.error("[dev-proxy]   env $(grep -v '^#' .env.local | xargs) node scripts/dev-proxy.mjs");
  process.exit(1);
}

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204).end();
    return;
  }

  if (req.method !== "POST" || req.url !== "/api/chat") {
    res.writeHead(404, { "Content-Type": "application/json" }).end(JSON.stringify({ error: "Not found" }));
    return;
  }

  let body = "";
  for await (const chunk of req) body += chunk;
  let messages;
  try {
    ({ messages } = JSON.parse(body));
  } catch {
    res.writeHead(400, { "Content-Type": "application/json" }).end(JSON.stringify({ error: "Invalid JSON" }));
    return;
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    res.writeHead(400, { "Content-Type": "application/json" }).end(JSON.stringify({ error: "Invalid messages" }));
    return;
  }

  for (const model of PRIORITY_MODELS) {
    try {
      const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          temperature: 0.6,
          max_tokens: 1000,
        }),
      });

      if (upstream.ok) {
        const result = await upstream.json();
        const content = result?.choices?.[0]?.message?.content;
        if (content) {
          res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify({ content }));
          return;
        }
      }
    } catch {
      // try the next model
    }
  }

  res.writeHead(502, { "Content-Type": "application/json" }).end(JSON.stringify({ error: "Assistant unavailable" }));
});

server.listen(PORT, () => {
  console.log(`[dev-proxy] chat proxy listening on http://localhost:${PORT} (/api/chat)`);
});
