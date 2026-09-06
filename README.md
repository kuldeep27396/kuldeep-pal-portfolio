# Kuldeep Pal — Portfolio

My personal portfolio and blog — live at **[kuldeep-pal.in](https://www.kuldeep-pal.in/)**.

Built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui (Radix primitives). Deployed on Vercel.

## Features

- Responsive portfolio — projects, experience, and writing in one place
- Blog page with content synced from Medium and LinkedIn newsletter RSS sources
- Dark/light theming built on Radix primitives + Tailwind
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
