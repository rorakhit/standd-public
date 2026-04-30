import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Match recap content collection.
 *
 * Files in `src/content/matches/*.md` become individual recap pages at
 * `/boston-legacy/matches/[filename-without-extension]`.
 *
 * Files starting with `_` (e.g. `_example.md`) are excluded — use the
 * underscore prefix for templates and drafts you don't want to publish yet.
 */
const matches = defineCollection({
  loader: glob({
    base: './src/content/matches',
    pattern: '**/[!_]*.md',
  }),
  schema: z.object({
    // What
    opponent: z.string(),
    homeAway: z.enum(['home', 'away']),
    venue: z.string(),
    broadcast: z.string(),

    // When
    date: z.coerce.date(),
    publishedAt: z.coerce.date(),

    // Result
    bostonScore: z.number().int().min(0),
    opponentScore: z.number().int().min(0),

    // Page metadata (optional — sensible defaults will be derived if omitted)
    title: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { matches };
