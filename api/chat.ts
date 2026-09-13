import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Server-side proxy for the portfolio chat assistant.
 * The OpenRouter API key lives ONLY in the server environment
 * (OPENROUTER_API_KEY on Vercel) — it is never shipped to the browser.
 */

const PRIORITY_MODELS = [
  "google/gemini-2.0-flash-exp:free",
  "meta-llama/llama-3.1-8b-instruct:free",
  "google/gemma-2-9b-it:free",
  "minimax/minimax-01:free",
];

const SYSTEM_PROMPT = `You are the AI assistant on Kuldeep Pal's portfolio, answering questions from recruiters and engineers about his professional background.

Kuldeep is a Senior Software Engineer at Walmart Global Tech, working across backend systems, data platforms, and AI. He is a versatile senior software engineer: strong backend fundamentals first (FastAPI, Spring Boot, Flask), with deep specialization in data engineering (Spark, Kafka, PySpark, BigQuery) and AI systems (agentic RAG, LangGraph, Milvus/Pinecone). Known for high ownership, technical curiosity, and raising the engineering bar. Recognized with the 2026 Engineering Innovation Award and 2025 Bravo Award.

Career history:
- Walmart Global Tech (June 2022 - Present): Senior Software Engineer — Backend, Data & AI. FastAPI services, Spring Boot integrations, streaming pipelines, platform ETL, AI agents, secure large-file workflows.
- ZS Associates (Sept 2021 - June 2022): Senior Software Engineer (Software Engineer 2). Built backend services in Flask alongside analytics and warehouse pipelines; Airflow orchestration, Spark optimization, data modeling on AWS.
- Tata Consultancy Services (Sept 2018 - Sept 2021): Software Engineer (Data & Cloud). ETL, cloud migration, warehousing, and backend-integrated systems for enterprise clients (Morgan Stanley, Nassau Re) using AWS Glue, PySpark, SQL.

Notable projects: Agentic PDF RAG (privacy-first serverless RAG with page-level citations), PR-Review-Agent (autonomous code review), a technical writing series with 12k+ views.

Guidelines:
- Tailor emphasis to the question: lean backend-first for software engineering roles, data/AI-first when asked about those domains — he is one engineer, not three profiles.
- Answer only from the profile above; for anything else, politely redirect to his professional background.
- Be concise and professional. Use bold for key technologies and metrics; short bullets when helpful.
- For contact or collaboration questions, point to his LinkedIn or Substack.`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

function sanitizeMessages(input: unknown): ChatMessage[] | null {
  if (!Array.isArray(input) || input.length === 0 || input.length > MAX_MESSAGES) return null;
  const out: ChatMessage[] = [];
  for (const m of input) {
    if (!m || typeof m !== "object") return null;
    const { role, content } = m as Record<string, unknown>;
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") return null;
    if (content.length === 0 || content.length > MAX_MESSAGE_LENGTH) return null;
    out.push({ role, content });
  }
  return out;
}

async function resolveContent(messages: ChatMessage[], apiKey: string): Promise<string> {
  const models = new Set<string>(PRIORITY_MODELS);
  try {
    const modelsResp = await fetch("https://openrouter.ai/api/v1/models");
    if (modelsResp.ok) {
      const { data } = (await modelsResp.json()) as { data?: Array<{ id: string }> };
      for (const m of data ?? []) if (m.id.endsWith(":free")) models.add(m.id);
    }
  } catch {
    // fall back to the priority list only
  }

  for (const model of models) {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          temperature: 0.6,
          max_tokens: 1000,
        }),
      });

      if (response.ok) {
        const result = (await response.json()) as {
          choices?: Array<{ message?: { content?: string } }>;
        };
        const content = result.choices?.[0]?.message?.content;
        if (content) return content;
      }
    } catch {
      // try the next model
    }
  }
  throw new Error("all models failed");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Assistant is not configured" });
    return;
  }

  const messages = sanitizeMessages(req.body?.messages);
  if (!messages) {
    res.status(400).json({ error: "Invalid messages payload" });
    return;
  }

  try {
    const content = await resolveContent(messages, apiKey);
    res.status(200).json({ content });
  } catch {
    res.status(502).json({ error: "Assistant is unavailable right now" });
  }
}
