---
# This file is a TEMPLATE for match recaps. It starts with `_` so the content
# collection ignores it — Astro won't try to render this as a page.
#
# To write a real recap:
#   1. Copy this file to a new name like `2026-04-26-racing-louisville.md`
#      (the slug pattern is YYYY-MM-DD-opponent-short-name)
#   2. Fill in the frontmatter below
#   3. Replace the placeholder body with your actual recap
#   4. Push to GitHub — Cloudflare Pages auto-deploys

opponent: "Racing Louisville FC"
homeAway: "home"
venue: "Gillette Stadium, Foxborough"
broadcast: "Paramount+"
date: 2026-04-26
publishedAt: 2026-04-27
bostonScore: 2
opponentScore: 1
title: "Boston Legacy vs Racing Louisville FC — April 26, 2026"
description: "Recap of Boston Legacy's 2-1 home win over Racing Louisville at Gillette Stadium. The first three points of the season."
tags: ["recap", "win", "home", "first-win"]
---

Replace this entire body with your actual recap.

The voice rules from `brand.md` apply:

- **Lead with what it felt like, not just what happened.** The data's in the box score; we're after the texture.
- **Use the vernacular fans actually use.** "Brace," "tunnel fit," "shutout," "matchday."
- **Make calls.** "This was a bad call." "She should have started." Take a stance.
- **Treat the reader as a fellow fan, not a beginner.** But explain the thing if a new fan would need it.
- **Don't sound like ESPN.** We are not the broadcast. We are the fan in section 119.

## Suggested structure

A loose structure that works for most recaps:

1. **One paragraph opener** — the moment that defined the match. Could be a goal, a substitution, the crowd, the weather, anything.
2. **What worked** — 2-3 things that went right. Bullet points or short paragraphs.
3. **What didn't** — 2-3 things that didn't. Honest, specific, not punching down on individual players unless the call's clear.
4. **One paragraph closer** — what this means for the next match or the season arc.

You can violate the structure anytime the match deserves a different shape.

## Markdown reminders

You can use **bold**, *italic*, [links](https://standd.fan), and:

- bullet lists
- like this

> Block quotes for moments worth pulling out — a chant from the crowd, a quote from a postgame presser, the line from your own notes.

## Final reminders

- Keep recaps to ~500-800 words. Long enough for SEO (Google treats <300-word pages as thin), short enough that you'll actually write one every week.
- Update `seasonRecord` and `playedMatches` in `src/data/boston-legacy.ts` when you publish a recap, so the tracker reflects the new result.
- The recap page will auto-link from the tracker's "Last 3 results" section if the date matches.
