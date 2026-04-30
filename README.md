# Standd

The source code for [standd.fan](https://standd.fan) — a fan companion for women's professional sports, starting with a Boston Legacy NWSL tracker.

Built with Astro, deployed on Cloudflare Pages.

## Features

- Schedule and upcoming fixtures with kickoff countdown
- Live NWSL standings (auto-updated daily via a private data pipeline)
- Broadcast info for every match
- Form guide (last 5 results)
- Match recaps with full article pages
- Ticket links for home and away games

## Dev setup

```bash
npm install
npm run dev        # http://localhost:4321
npm run preview    # preview production build locally
```

**Note:** `npm run build` runs a standings scraper as a `prebuild` step — that script is part of a private data pipeline and not included in this repo. To build locally, either set `FIRECRAWL_API_KEY` (see below) or run `astro build` directly to skip it.

## How it works

Static site built with Astro. Every push to `main` triggers a Cloudflare Pages rebuild (~30 seconds to live).

Standings update automatically via a private cron job that:
1. Fires at **2 AM ET** and **7 PM ET** daily
2. Scrapes `nwslsoccer.com/standings` via Firecrawl
3. Rewrites `src/data/boston-legacy.ts` with fresh standings data
4. Triggers a Cloudflare Pages rebuild

## Folder structure

```
src/
  pages/          — routes (.astro → URL)
  layouts/        — BaseLayout (HTML shell, head, meta, OG tags)
  components/     — Header, Footer, EmailSignup, etc.
  data/           — boston-legacy.ts (matches, standings, season record)
  styles/         — global CSS + Tailwind
  content/
    config.ts     — content collection schema (match recaps)
    matches/      — markdown match recaps
public/           — favicon, OG image, logos, robots.txt
```

## Data file: `src/data/boston-legacy.ts`

Everything the tracker page needs lives here:

| Export | Type | Updated by |
|---|---|---|
| `playedMatches` | `Match[]` | Manually after each game |
| `upcomingMatches` | `Match[]` | Manually when schedule changes |
| `seasonRecord` | `SeasonRecord` | Manually (derived from played matches) |
| `nwslStandings` | `StandingsRow[]` | Automatically by data pipeline |
| `standingsLastUpdated` | `string` | Automatically by data pipeline |

### Match shape

```typescript
{
  date: '2026-05-10',          // ISO date — used to link to recap page
  time: '7:00 PM',             // ET kickoff time (optional for upcoming)
  opponent: 'Portland Thorns FC',
  homeAway: 'home' | 'away',
  venue: 'Gillette Stadium, Foxborough, MA',
  broadcast: 'ABC',
  bostonScore: 2,              // omit for upcoming matches
  opponentScore: 1,            // omit for upcoming matches
}
```

## Adding a match recap

Drop a Markdown file in `src/content/matches/` — the `[...slug].astro` page picks it up automatically. The tracker links to recap pages by matching the `date` field.

Required frontmatter:

```markdown
---
opponent: Portland Thorns FC
homeAway: away
venue: Providence Park, Portland, OR
broadcast: Paramount+
date: 2026-05-10
publishedAt: 2026-05-11
bostonScore: 2
opponentScore: 1
title: Optional custom headline
description: Optional meta description
---

Recap body in Markdown...
```

Files starting with `_` are excluded from the build — use for drafts.

## Tech stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — styling
- [Cloudflare Pages](https://pages.cloudflare.com) — hosting + CDN
- [Firecrawl](https://firecrawl.dev) — standings scraping (private pipeline)
