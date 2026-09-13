# Environment setup

## Variables

| Variable | Where | Used by | Secret? |
| --- | --- | --- | --- |
| `VITE_WEB3FORMS_ACCESS_KEY` | `.env.local` (local) + Vercel Environment Variables | Contact form (`src/components/Contact.tsx`) | Public-facing by design (Web3Forms access keys are meant for client-side forms) |
| `OPENROUTER_API_KEY` | **Server only**: Vercel Environment Variables (prod) / shell env (local) | Chat assistant proxy (`api/chat.ts`) | **Never** expose with a `VITE_` prefix or ship to the browser |
| `MEDIUM_RSS_URL`, `LINKEDIN_NEWSLETTER_RSS_URL`, `SUBSTACK_RSS_URL` | `.env` | `scripts/sync-articles.mjs` (build step) | No |

## Local development

1. Copy `.env.example` to `.env.local` and fill in real values. `.env.local` is gitignored — never commit it.
2. Start the dev servers in two terminals:

```bash
npm run dev          # site on http://localhost:8080
npm run dev:proxy    # chat proxy on :8787 (auto-loads .env.local)
```

Vite already proxies `/api` → `http://localhost:8787` (see `vite.config.ts`). Without the proxy
running, everything works except the chat assistant.

> The local proxy is a simplified emulation of `api/chat.ts`. The deployed function is the
> source of truth for the system prompt and model fallback.

## Production (Vercel)

1. Push/merge; Vercel deploys automatically. `api/chat.ts` is picked up as a serverless function
   serving `POST /api/chat`.
2. In the Vercel dashboard → Project → Settings → Environment Variables, add:
   - `VITE_WEB3FORMS_ACCESS_KEY`
   - `OPENROUTER_API_KEY` (no `VITE_` prefix — server-only)
3. Redeploy so the new variables take effect.

## Security notes

- The chat assistant used to call OpenRouter **directly from the browser** with a `VITE_` key
  embedded in the bundle. It now goes through `api/chat.ts`; the key never leaves the server.
- The Web3Forms key was hardcoded in `Contact.tsx`; it now loads from `import.meta.env`.
- If either key was ever committed or deployed in a public bundle, **rotate it** at the provider
  (Web3Forms dashboard / OpenRouter dashboard).
