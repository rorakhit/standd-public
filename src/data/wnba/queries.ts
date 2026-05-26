/// <reference types="@cloudflare/workers-types" />
import type { WNBAGame, WNBAStanding, WNBATeamStats } from './types';
import type { WNBAPlayer, WNBAPlayerStats } from '../shared/types';

const ACCOUNT_ID = import.meta.env.CLOUDFLARE_ACCOUNT_ID;
const DB_ID = import.meta.env.CLOUDFLARE_D1_DATABASE_ID;
const API_TOKEN = import.meta.env.CLOUDFLARE_D1_API_TOKEN;

const D1_URL = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/d1/database/${DB_ID}/query`;

interface D1Response<T> {
  success: boolean;
  errors?: unknown[];
  result?: Array<{ results: T[] }>;
}

async function d1query<T>(sql: string, params: unknown[] = [], db?: D1Database): Promise<T[]> {
  // Use native binding when available (Cloudflare Workers runtime)
  if (db) {
    const stmt = db.prepare(sql);
    const result = await stmt.bind(...params).all<T>();
    return result.results ?? [];
  }
  // Fall back to REST API (GitHub Actions / local dev with env vars)
  if (!ACCOUNT_ID || !DB_ID || !API_TOKEN) {
    console.warn('[wnba/queries] D1 env vars not set — returning empty data (expected during local dev)');
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

export async function getTeamSchedule(teamSlug: string, db?: D1Database): Promise<WNBAGame[]> {
  const rows = await d1query<Omit<WNBAGame, 'broadcast'> & { broadcast: string }>(
    `SELECT * FROM wnba_games
     WHERE (home_team = ? OR away_team = ?)
       AND (season_type = '2' OR season_type = '3')
     ORDER BY date ASC`,
    [teamSlug, teamSlug],
    db
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

export async function getStandings(db?: D1Database): Promise<WNBAStanding[]> {
  return d1query<WNBAStanding>(
    `SELECT * FROM wnba_standings ORDER BY wins DESC, losses ASC`,
    [],
    db
  );
}

export async function getTeamStats(teamSlug: string, db?: D1Database): Promise<WNBATeamStats | null> {
  const rows = await d1query<WNBATeamStats>(
    `SELECT * FROM wnba_team_stats WHERE team = ?`,
    [teamSlug],
    db
  );
  return rows[0] ?? null;
}

export async function getTeamRoster(teamSlug: string, db?: D1Database): Promise<WNBAPlayer[]> {
  return d1query<WNBAPlayer>(
    `SELECT * FROM wnba_players WHERE team_slug = ? ORDER BY
       CASE position WHEN 'G' THEN 1 WHEN 'F' THEN 2 WHEN 'C' THEN 3 ELSE 4 END,
       CAST(jersey AS INTEGER) ASC`,
    [teamSlug],
    db
  );
}

function todayET(): string {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'America/New_York' });
}

export async function getTodaysGames(db?: D1Database): Promise<WNBAGame[]> {
  const today = todayET();
  const rows = await d1query<Omit<WNBAGame, 'broadcast'> & { broadcast: string }>(
    `SELECT * FROM wnba_games
     WHERE date = ?
       AND (season_type = '2' OR season_type = '3')
     ORDER BY time ASC`,
    [today],
    db
  );
  return rows.map(r => {
    let broadcast: string[];
    try { broadcast = JSON.parse(r.broadcast) as string[]; } catch { broadcast = []; }
    return { ...r, broadcast };
  });
}

export async function getUpcomingGames(days = 7, db?: D1Database): Promise<WNBAGame[]> {
  const today = todayET();
  const until = new Date(Date.now() + days * 86_400_000).toLocaleDateString('en-CA', { timeZone: 'America/New_York' });
  const rows = await d1query<Omit<WNBAGame, 'broadcast'> & { broadcast: string }>(
    `SELECT * FROM wnba_games
     WHERE date >= ? AND date <= ?
       AND (season_type = '2' OR season_type = '3')
     ORDER BY date ASC, time ASC
     LIMIT 8`,
    [today, until],
    db
  );
  return rows.map(r => {
    let broadcast: string[];
    try { broadcast = JSON.parse(r.broadcast) as string[]; } catch { broadcast = []; }
    return { ...r, broadcast };
  });
}

export async function getPlayerStats(espnIds: string[], db?: D1Database): Promise<WNBAPlayerStats[]> {
  if (espnIds.length === 0) return [];
  const placeholders = espnIds.map(() => '?').join(', ');
  return d1query<WNBAPlayerStats>(
    `SELECT * FROM wnba_player_stats WHERE espn_id IN (${placeholders})`,
    espnIds,
    db
  );
}
