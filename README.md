# Kuldeep Pal — Portfolio

My personal portfolio and blog — live at **[kuldeep-pal.in](https://www.kuldeep-pal.in/)**.

Built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui (Radix primitives). Deployed on Vercel.

## Features

- Responsive portfolio — experience, skills, projects, awards & credentials, and writing in one place
- Editorial design system on warm cream/terracotta tokens — see [`docs/DESIGN.md`](docs/DESIGN.md)
- Blog page with content synced from Medium and LinkedIn newsletter RSS sources
- AI assistant backed by a Vercel serverless proxy (`api/chat.ts`) — the LLM API key never ships to the browser
- Per-route SEO (meta, canonical, OG/Twitter cards, sitemap, JSON-LD)
- SPA fallback rewrites configured for Vercel, Netlify, and Cloudflare Pages
- Article sync runs automatically as part of every build (`prebuild`)

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI components | shadcn/ui (Radix primitives) |
| Hosting | Vercel |
| Content | RSS sync pipeline (`scripts/`, Medium / LinkedIn sources) |

## Quickstart

```sh
npm install
npm run dev       # local dev server
npm run build     # runs article sync (prebuild) + production build
```

## Content Sync

The blogs page is backed by RSS content sources:

```sh
npm run sync:articles
```

`npm run build` already runs this via the `prebuild` hook — no manual step needed for deployments.

## Deployment

Vercel (see `vercel.json`). The SPA rewrite rules also work out of the box on Netlify and Cloudflare Pages if you prefer those hosts.

### Environment variables

Set these in Vercel (Project → Settings → Environment Variables) and in `.env.local` for local dev — see [`ENV_SETUP.md`](ENV_SETUP.md):

| Variable | Scope | Purpose |
|---|---|---|
| `VITE_WEB3FORMS_ACCESS_KEY` | client (`VITE_`) | Contact form |
| `OPENROUTER_API_KEY` | **server only** | AI assistant proxy (`api/chat.ts`) |

Without them the site deploys and works, except the contact form and the AI assistant, which degrade gracefully with friendly error states.
