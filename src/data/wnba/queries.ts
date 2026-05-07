import type { WNBAGame, WNBAStanding, WNBATeamStats } from './types';

const ACCOUNT_ID = import.meta.env.CLOUDFLARE_ACCOUNT_ID;
const DB_ID = import.meta.env.CLOUDFLARE_D1_DATABASE_ID;
const API_TOKEN = import.meta.env.CLOUDFLARE_D1_API_TOKEN;

const D1_URL = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/d1/database/${DB_ID}/query`;

interface D1Response<T> {
  success: boolean;
  errors?: unknown[];
  result?: Array<{ results: T[] }>;
}

async function d1query<T>(sql: string, params: unknown[] = []): Promise<T[]> {
  if (!ACCOUNT_ID || !DB_ID || !API_TOKEN) {
    console.warn('[queries] D1 env vars not set — returning empty data (expected during local dev)');
    return [];
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10_000);
  let res: Response;
  try {
    res = await fetch(D1_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sql, params }),
      signal: controller.signal,
    });
  } catch (err) {
    clearTimeout(timer);
    if (controller.signal.aborted) {
      throw new Error('D1 query timed out after 10s');
    }
    throw err;
  }
  clearTimeout(timer);
  if (!res.ok) {
    const body = await res.text().catch(() => '(unreadable)');
    throw new Error(`D1 HTTP ${res.status}: ${body}`);
  }
  let json: D1Response<T>;
  try {
    json = await res.json() as D1Response<T>;
  } catch {
    throw new Error(`D1 response is not JSON (status ${res.status})`);
  }
  if (!json.success) {
    throw new Error(`D1 query failed: ${JSON.stringify(json.errors)}`);
  }
  return json.result?.[0]?.results ?? [];
}

export async function getTeamSchedule(teamSlug: string): Promise<WNBAGame[]> {
  const rows = await d1query<Omit<WNBAGame, 'broadcast'> & { broadcast: string }>(
    `SELECT * FROM wnba_games
     WHERE (home_team = ? OR away_team = ?)
       AND (season_type = '2' OR season_type = '3')
     ORDER BY date ASC`,
    [teamSlug, teamSlug]
  );
  return rows.map(r => {
    let broadcast: string[];
    try {
      broadcast = JSON.parse(r.broadcast) as string[];
    } catch {
      broadcast = [];
    }
    return { ...r, broadcast };
  });
}

export async function getStandings(): Promise<WNBAStanding[]> {
  return d1query<WNBAStanding>(
    `SELECT * FROM wnba_standings ORDER BY wins DESC, losses ASC`
  );
}

export async function getTeamStats(teamSlug: string): Promise<WNBATeamStats | null> {
  const rows = await d1query<WNBATeamStats>(
    `SELECT * FROM wnba_team_stats WHERE team = ?`,
    [teamSlug]
  );
  return rows[0] ?? null;
}
