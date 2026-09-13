# PR: Portfolio redesign — editorial design system, SWE repositioning, SEO, security

## Summary

Full redesign of the portfolio around an editorial design system (Lora display + Inter body, warm
cream/terracotta tokens) and repositioning as a versatile **Senior Software Engineer — Backend,
Data & AI**. Same Vite + React + TS + Tailwind + shadcn/ui stack — no framework migration.

## Highlights

### Design system
- Token-driven foundation in `src/index.css` + `tailwind.config.ts`; documented in `docs/DESIGN.md`
  (principles, type scale, spacing, component recipes, a11y + visual-consistency checklists)
- Lora serif display headings; themed `::selection`, focus rings, scrollbar, tabular numerals
- One card recipe / radius scale; brand-colored skill logos (Devicon); company + client + issuer
  logos (Walmart, ZS, TCS, Morgan Stanley, Nassau Re, HackerRank, Databricks, …)
- Working **light theme only** (dark-mode dead code removed); WCAG AA+ contrast (primary text 8.3:1)

### Positioning
- Hero: "Building production software across backend, data & AI." with a "Builder, end to end"
  block (UI vibe-coded well enough to ship; whole apps delivered to prod solo)
- Roles: Walmart — Senior SWE (Backend, Data & AI); ZS — SWE 2 (Data Eng & AI); TCS — SWE (Data Eng & Cloud)
- Skills reordered backend-first; hero facts: distributed systems, big data (OLTP/OLAP, modeling,
  cost savings), AI agents (RAG, multi-agent, multitenant SaaS)
- Awards page rebuilt as "Awards & Credentials": award cards (incl. 2026 HackerRank hackathon
  bronze) + domain-grouped certification ledger (Backend / Data / AI & ML / Professional)

### SEO
- Per-route titles/descriptions/canonicals (`react-helmet-async`), og.png + apple-touch-icon,
  sitemap.xml, JSON-LD Person, canonical domain `kuldeep-pal.in`

### Security
- Web3Forms key out of source → `VITE_WEB3FORMS_ACCESS_KEY`
- OpenRouter key moved off the client → `api/chat.ts` serverless proxy (`OPENROUTER_API_KEY`,
  server-only env). Assistant persona synced with site positioning.

### Cleanup & quality
- Net −1,300 LOC: 41 unused shadcn components + 28 unused deps removed; `strict: true` TypeScript
  passes; `no-unused-vars` enforced; fonts self-hosted (@fontsource); route-level code splitting
- A11y: focus rings everywhere, skip link, aria on menus/dialog/toggles, 12px font floor,
  reduced-motion safe; console-clean on all routes; no horizontal overflow 390→1440px

## Deploy notes (Vercel)

- Set env vars before/with deploy: `VITE_WEB3FORMS_ACCESS_KEY`, `OPENROUTER_API_KEY`
  (see `ENV_SETUP.md`). Without them the site works; contact form + assistant degrade gracefully.
- `api/chat.ts` deploys as a serverless function (POST /api/chat) — no config change needed.
- ⚠️ Both previously-exposed keys should be **rotated** — old values exist in git history.

## Verification

- Build / ESLint / strict `tsc` clean; Impeccable design detector: 0 findings
- Production preview smoke-tested: all routes 200, SPA fallback OK, all logos/icons resolve
- Browser-tested: desktop + mobile across routes, keyboard pass, contact form submit, chat flow,
  reduced-motion; Lighthouse-friendly (route chunks 1–5 KB gzip)
