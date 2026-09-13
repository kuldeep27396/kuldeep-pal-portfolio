# Kuldeep Pal — Portfolio Design System

This is the single source of truth for how this site looks and why. Every visual value in the
codebase comes from a token defined here (wired in `src/index.css` + `tailwind.config.ts`).
If you change a token, change this file in the same commit.

When editing UI with an AI agent, paste this file (or point the agent at it) first, and run the
[Visual consistency checklist](#visual-consistency-checklist) before finishing.

---

## 1. Design principles

1. **Editorial, not dashboard.** A portfolio is an *Experience* surface: the work leads from the
   first viewport and the interface recedes. Warm paper, serif display type, generous whitespace.
2. **One accent.** Terracotta is the only brand color. If everything is highlighted, nothing is.
   60-30-10 ratio: paper background / ink & surfaces / terracotta accent.
3. **Space over lines.** Separate with whitespace and surface tone, not borders. Fewer borders,
   fewer shadows — depth comes from soft, offset shadows only.
4. **Type is the interface.** Hierarchy is created with size and weight steps big enough to be
   obvious at arm's length — never with color or decorative labels.
5. **Motion has one job.** Content arrives (fade + small rise); nothing bounces, spins, or glows.
   One authored moment per page, not an identical entrance on every section.
6. **Accessible by default.** 4.5:1 contrast for body text, visible focus on every interactive
   element, 12px minimum font size, `prefers-reduced-motion` respected everywhere.

## 2. Color tokens

| Token | Light value | Role |
| --- | --- | --- |
| `--background` | `36 37% 96%` warm cream | Page canvas (the 60) |
| `--background-end` | `38 30% 93%` | Bottom of the page wash |
| `--foreground` | `214 30% 16%` ink | Body text |
| `--card` | `0 0% 100%` | Cards, raised surfaces (the 30) |
| `--primary` | `18 65% 44%` terracotta | Accent (the 10): CTAs, active states |
| `--secondary` | `202 23% 24%` deep slate-teal | Secondary emphasis |
| `--muted` / `--muted-foreground` | `38 24% 89%` / `212 18% 34%` | Quiet surfaces / secondary text |
| `--accent` | `188 28% 86%` pale cyan | Page-top wash, hover tints |
| `--border` / `--input` | `32 24% 82%` | Hairlines, form outlines |
| `--ring` | = primary | Focus rings |

**Rules**
- Body and placeholder text ≥ 4.5:1; large display text ≥ 3:1. On tinted surfaces, tint secondary
  text from that surface's hue — never reach for gray.
- No color outside these tokens. Brand icons (e.g. LinkedIn) use `tone-*` tokens or the icon's
  own glyph in `--foreground`/`--muted-foreground`, not raw hex.
- Gradient text: the brand gradient (`--gradient-hero`) is reserved for **one accent word in the
  hero**. Emphasis everywhere else comes from weight or size.

### Semantic skill-category tones

Each category pairs a tinted surface with same-hue text (never gray):

| Token | bg / fg | Used for |
| --- | --- | --- |
| `tone.data` | `204 45% 93%` / `204 40% 30%` | Data engineering, pipelines |
| `tone.ai` | `262 40% 94%` / `262 35% 34%` | AI agents, LLM work |
| `tone.backend` | `160 35% 92%` / `162 38% 26%` | APIs, backend systems |
| `tone.frontend` | `42 60% 91%` / `32 55% 30%` | Web, UI tooling |
| `tone.cloud` | `190 40% 92%` / `192 40% 28%` | Infra, cloud, DevOps |
| `tone.craft` | `350 40% 93%` / `350 35% 32%` | Practices, testing, craft |

Usage: `bg-tone-data-bg text-tone-data-fg` (badge/label pattern).

## 3. Typography

| Family | Variable | Role |
| --- | --- | --- |
| **Lora** (serif) | `font-display` | h1–h3 display headings. The site's voice. |
| **Inter** (sans) | `font-sans` | Body text, UI labels, h4–h6, buttons |
| **Space Mono** | `font-mono` | Code, real data, measurements only — never as a "technical" costume |

**Scale** (min font size anywhere: 12px)

| Step | Size | Weight | Family | Notes |
| --- | --- | --- | --- | --- |
| Display | `clamp(2.75rem, 6vw, 4rem)` / 1.05 | 600 | Lora | Hero statement; tracking −0.025em |
| h1 (page title) | `text-3xl sm:text-4xl` | 600 | Lora | tracking −0.025em |
| h2 (section) | `text-2xl sm:text-3xl` | 600 | Lora | tracking −0.02em |
| h3 (card title) | `text-lg`–`text-xl` | 600 | Inter | |
| Body | `16px` / 1.7 | 400 | Inter | measure `65–75ch` (`.text-measure`) |
| Secondary | `14px` | 400 | Inter | `text-muted-foreground` |
| Small | `13px` | 400 | Inter | metadata |
| Micro | `12px` | 500 | Inter | absolute floor; uppercase tracking +0.08em only for real labels |

**Rules**
- Headings are balanced (`text-wrap: balance`) and get **more space above than below**.
- No kicker/eyebrow labels above headings. The heading carries its own weight.
- Numbers that measure things (stats, dates, counts) use `.tnum` (tabular numerals).

## 4. Spacing & layout

- Base unit **4px**; compose sections from multiples of 4 (8/12/16/24/32/48/64/96).
- Container: `max-w-6xl` centered, `px-4 sm:px-6`.
- Section rhythm: `py-16 sm:py-24` between major sections; page top padding `pt-24` under the
  fixed header (the one true value — not 16, not 20).
- Tight groups, generous separation: items inside a group sit closer than the gap between groups.
- Cards: internal padding `p-5 sm:p-6` (small) or `p-6 sm:p-8` (featured). Nothing else.

## 5. Radius & elevation

- Radius scale derives from `--radius: 0.75rem`: `rounded-lg` (0.75) inputs/pills ·
  `rounded-xl` (1.0) standard cards · `rounded-2xl` (1.25) featured/large surfaces ·
  `rounded-full` pills/avatars. **No arbitrary values like `rounded-[1.75rem]`.**
- One card recipe: `bg-card rounded-xl` + either `shadow-card` (at rest) or `shadow-soft`
  (nested/quiet). Hover lift = `hover:shadow-lift` + `hover:-translate-y-0.5`, transition 200ms.
- Shadows always carry offset + blur. A zero-offset colored halo is decoration, not depth.

## 6. Motion

- **Entrance:** `opacity: 0 → 1`, `y: 12px → 0`, 0.4s, ease-out. Shared presets live in
  `src/lib/motion.ts` — never hand-roll per component.
- **Stagger:** 60ms between siblings, one stagger group per section.
- **Scroll reveal:** `whileInView` with `once: true`, threshold 0.15 — for below-fold sections only.
- **Hover:** small translate/scale (≤1.02 cards, ≤1.08 icons), 200ms.
- One authored moment per page (e.g. the hero). Everything else stays quiet.
- All motion is wrapped in `<MotionConfig reducedMotion="user">` and the CSS reduced-motion
  kill-switch in `index.css`.

## 7. Component recipes

- **PageHeader:** h1 (Lora) + one-sentence lede (`text-measure text-muted-foreground`). No eyebrow.
- **Card:** the one recipe above. Content order: title, description, meta. No icon-tile
  decorations unless the icon carries information.
- **TagPill:** `rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground`.
  One size everywhere.
- **Skill badge:** rounded-full, logo or monogram in a `tone-*` tinted circle, name in `text-sm`.
- **Stat:** value in `.tnum text-xl font-semibold`, label in `text-sm text-muted-foreground`.
  No gradient values, no hero-metric template — stats live inside bento cards with varied sizes.
- **Buttons:** primary = `bg-primary text-primary-foreground shadow-glow` (the only glow use);
  secondary = `border bg-card hover:bg-accent/40`. Both `rounded-lg px-5 py-2.5 text-sm font-medium`.

## 8. Accessibility checklist

- [ ] Contrast: body ≥ 4.5:1, large text ≥ 3:1 (check muted text on tinted surfaces)
- [ ] Every interactive element has a visible `:focus-visible` ring (global default in index.css)
- [ ] Icon-only controls have `aria-label`
- [ ] Mobile menu: `aria-expanded` + `aria-controls`; Radix Sheet for focus trapping
- [ ] Modals/tooltips use Radix primitives with dialog semantics and Escape-to-close
- [ ] Touch targets ≥ 44×44px on mobile
- [ ] `prefers-reduced-motion` yields a still, fully usable page
- [ ] Heading order is logical (one h1 per page, no skipped levels)

## 9. Browser surfaces (do not ship defaults)

Text selection (`::selection`), focus rings, placeholder color, scrollbar, caret, underline
offset, and tabular numerals are themed in `index.css`. If you add a surface, theme it.

## 10. Visual consistency checklist

Run before finishing any UI change:

1. Every color/size/shadow used comes from a token — zero raw hex, zero arbitrary Tailwind values.
2. One card recipe, one radius story, one pill size per page.
3. Spacing snaps to the 4px grid; groups are tighter than the gaps between them.
4. Type hierarchy is obvious when you squint: display, headings, body, meta are distinct steps.
5. No eyebrow labels, no gradient text outside the hero accent word, no decorative glass/blur.
6. Hover/disabled/loading/error states exist for every interactive element.
7. Both 1440px and 390px look intentional; nothing overflows, nothing is cramped.
8. Squint test passes: the page reads as blocks with clear priority, not as even tiles.
