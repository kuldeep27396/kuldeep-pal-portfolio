# Kuldeep Pal Portfolio

Personal portfolio built with Vite, React, TypeScript, and Tailwind CSS.

## Scripts

```sh
npm install
npm run dev
npm run build
```

## Content Sync

The blogs page uses RSS-backed content sources.

```sh
npm run sync:articles
```

`npm run build` already runs the sync step through `prebuild`.

## Deployment

Free hosting options that work well for this project:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

For Vercel, Netlify, or Cloudflare Pages, this repo is already set up for SPA routing:

- Build command: `npm run build`
- Output directory: `dist`

Included files:

- `vercel.json` for Vercel rewrites
- `public/_redirects` for Netlify and Cloudflare Pages

If you use a generated LinkedIn newsletter RSS feed, add the required env var in your hosting dashboard before building.
