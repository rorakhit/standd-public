import type { APIRoute } from 'astro';

export const prerender = false;

function normalize(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ');
}

function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
  return dp[m][n];
}

interface VoteRow {
  id: number;
  entry: string;
  normalized_entry: string;
  count: number;
}

function findMatch(norm: string, rows: VoteRow[]): number | null {
  // 1. Exact normalized match
  const exact = rows.find(r => r.normalized_entry === norm);
  if (exact) return exact.id;

  // 2. Substring — handles abbreviations vs. full names (e.g. "pwhl" ↔ "professional womens hockey league")
  for (const r of rows) {
    if (r.normalized_entry.includes(norm) || norm.includes(r.normalized_entry)) {
      const ratio =
        Math.min(r.normalized_entry.length, norm.length) /
        Math.max(r.normalized_entry.length, norm.length);
      if (ratio >= 0.4) return r.id;
    }
  }

  // 3. Levenshtein fuzzy — threshold scales with length
  let bestId: number | null = null;
  let bestDist = Infinity;
  for (const r of rows) {
    const dist = levenshtein(norm, r.normalized_entry);
    const maxLen = Math.max(norm.length, r.normalized_entry.length);
    const threshold = maxLen <= 3 ? 0 : maxLen <= 6 ? 1 : maxLen <= 12 ? 2 : 3;
    if (dist <= threshold && dist < bestDist) {
      bestDist = dist;
      bestId = r.id;
    }
  }
  return bestId;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const GET: APIRoute = async ({ locals }) => {
  const db = locals.runtime.env.DB;
  const { results } = await db
    .prepare('SELECT entry, count FROM votes ORDER BY count DESC LIMIT 25')
    .all<{ entry: string; count: number }>();
  return json({ votes: results });
};

export const POST: APIRoute = async ({ request, locals }) => {
  let entry: string;
  try {
    ({ entry } = (await request.json()) as { entry: string });
  } catch {
    return json({ error: 'invalid json' }, 400);
  }

  entry = entry?.trim();
  if (!entry || entry.length > 200) return json({ error: 'invalid entry' }, 400);

  const db = locals.runtime.env.DB;
  const norm = normalize(entry);

  const { results: existing } = await db
    .prepare('SELECT id, entry, normalized_entry, count FROM votes')
    .all<VoteRow>();

  const matchedId = findMatch(norm, existing);

  if (matchedId !== null) {
    await db
      .prepare('UPDATE votes SET count = count + 1 WHERE id = ?')
      .bind(matchedId)
      .run();
  } else {
    await db
      .prepare('INSERT INTO votes (entry, normalized_entry, count) VALUES (?, ?, 1)')
      .bind(entry, norm)
      .run();
  }

  const { results: updated } = await db
    .prepare('SELECT entry, count FROM votes ORDER BY count DESC LIMIT 25')
    .all<{ entry: string; count: number }>();

  return json({ votes: updated });
};
