import type { NWSLGame, NWSLGameStats, NWSLPlayer, NWSLPlayerEvent, NWSLStanding } from './types';

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
    console.warn('[nwsl/queries] D1 env vars not set — returning empty data (expected during local dev)');
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
    if (controller.signal.aborted) throw new Error('D1 query timed out after 10s');
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
  if (!json.success) throw new Error(`D1 query failed: ${JSON.stringify(json.errors)}`);
  return json.result?.[0]?.results ?? [];
}

function todayET(): string {
  // Use Intl to get the correct ET date regardless of DST
  return new Date().toLocaleDateString('en-CA', { timeZone: 'America/New_York' });
}

function parseGames(rows: Array<Omit<NWSLGame, 'broadcast'> & { broadcast: string }>): NWSLGame[] {
  return rows.map(r => {
    let broadcast: string[];
    try {
      const parsed = JSON.parse(r.broadcast);
      broadcast = Array.isArray(parsed) ? parsed : [];
    } catch { broadcast = []; }
    return { ...r, broadcast };
  });
}

export async function getNwslTodaysGames(): Promise<NWSLGame[]> {
  const today = todayET();
  const rows = await d1query<Omit<NWSLGame, 'broadcast'> & { broadcast: string }>(
    `SELECT * FROM nwsl_games WHERE date = ? ORDER BY time ASC`,
    [today]
  );
  return parseGames(rows);
}

export async function getNwslTeamSchedule(teamSlug: string): Promise<NWSLGame[]> {
  const rows = await d1query<Omit<NWSLGame, 'broadcast'> & { broadcast: string }>(
    `SELECT * FROM nwsl_games
     WHERE (home_team = ? OR away_team = ?)
     ORDER BY date ASC`,
    [teamSlug, teamSlug]
  );
  return parseGames(rows);
}

export async function getNwslStandings(): Promise<NWSLStanding[]> {
  return d1query<NWSLStanding>(
    `SELECT * FROM nwsl_standings ORDER BY points DESC, goal_differential DESC`
  );
}

export async function getNwslTeamRoster(teamSlug: string): Promise<NWSLPlayer[]> {
  return d1query<NWSLPlayer>(
    `SELECT * FROM nwsl_players WHERE team_slug = ?
     ORDER BY CASE position WHEN 'GK' THEN 0 WHEN 'DEF' THEN 1 WHEN 'MID' THEN 2 WHEN 'FWD' THEN 3 ELSE 4 END, number ASC`,
    [teamSlug]
  );
}

export function playerNameToSlug(name: string): string {
  return name.trim().toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function getNwslPlayerByNameSlug(teamSlug: string, nameSlug: string): Promise<NWSLPlayer | null> {
  const roster = await getNwslTeamRoster(teamSlug);
  const matches = roster.filter(p => playerNameToSlug(p.name) === nameSlug);
  // Prefer starter/lower number when slugs collide (two players same name)
  if (matches.length > 1) matches.sort((a, b) => (a.number ?? 999) - (b.number ?? 999));
  return matches[0] ?? null;
}

export async function getNwslPlayerSeasonStats(espnId: string): Promise<{
  espn_id: string; player_name: string; team_slug: string;
  goals: number; assists: number; appearances: number;
  saves: number; goals_conceded: number; yellow_cards: number; red_cards: number; own_goals: number; penalty_goals: number;
} | null> {
  const rows = await d1query<{
    espn_id: string; player_name: string; team_slug: string;
    goals: number; assists: number; appearances: number;
    saves: number; goals_conceded: number; yellow_cards: number; red_cards: number; own_goals: number; penalty_goals: number;
  }>(
    `SELECT espn_id, player_name, team_slug,
            SUM(goals) AS goals, SUM(assists) AS assists, SUM(appearances) AS appearances,
            SUM(saves) AS saves, SUM(goals_conceded) AS goals_conceded,
            SUM(yellow_cards) AS yellow_cards, SUM(red_cards) AS red_cards,
            SUM(own_goals) AS own_goals, SUM(penalty_goals) AS penalty_goals
     FROM nwsl_player_events WHERE espn_id = ? GROUP BY espn_id`,
    [espnId]
  );
  return rows[0] ?? null;
}

export async function getNwslPlayerMatchLog(espnId: string): Promise<Array<NWSLPlayerEvent & {
  date: string; home_team: string; away_team: string; home_score: number | null; away_score: number | null;
}>> {
  return d1query(
    `SELECT pe.*, g.date, g.home_team, g.away_team, g.home_score, g.away_score
     FROM nwsl_player_events pe
     JOIN nwsl_games g ON pe.event_id = g.id
     WHERE pe.espn_id = ?
     ORDER BY g.date DESC`,
    [espnId]
  );
}

export async function getNwslGameStats(eventId: string): Promise<NWSLGameStats[]> {
  return d1query<NWSLGameStats>(
    `SELECT * FROM nwsl_game_stats WHERE event_id = ?`,
    [eventId]
  );
}

export async function getNwslPlayerEventsByTeam(teamSlug: string): Promise<NWSLPlayerEvent[]> {
  return d1query<NWSLPlayerEvent>(
    `SELECT * FROM nwsl_player_events WHERE team_slug = ?
     ORDER BY event_id DESC`,
    [teamSlug]
  );
}

export async function getNwslTopScorers(limit = 10): Promise<Array<{ espn_id: string; player_name: string; team_slug: string; goals: number; assists: number; appearances: number }>> {
  return d1query(
    `SELECT espn_id, player_name, team_slug,
            SUM(goals) AS goals,
            SUM(assists) AS assists,
            SUM(appearances) AS appearances
     FROM nwsl_player_events
     GROUP BY espn_id
     ORDER BY goals DESC, assists DESC
     LIMIT ?`,
    [limit]
  );
}

export async function getLastMatchFormation(teamSlug: string): Promise<Array<NWSLPlayerEvent & { formation: string | null; game_date: string; opp_slug: string; team_score: number | null; opp_score: number | null }>> {
  return d1query(
    `SELECT pe.*, gs.formation,
            g.date AS game_date,
            CASE WHEN g.home_team = ? THEN g.away_team ELSE g.home_team END AS opp_slug,
            CASE WHEN g.home_team = ? THEN g.home_score ELSE g.away_score END AS team_score,
            CASE WHEN g.home_team = ? THEN g.away_score ELSE g.home_score END AS opp_score
     FROM nwsl_player_events pe
     JOIN nwsl_games g ON pe.event_id = g.id
     LEFT JOIN nwsl_game_stats gs ON gs.event_id = pe.event_id AND gs.team_slug = pe.team_slug
     INNER JOIN (
       SELECT pe2.event_id FROM nwsl_player_events pe2
       JOIN nwsl_games g2 ON pe2.event_id = g2.id
       WHERE pe2.team_slug = ?
       ORDER BY g2.date DESC
       LIMIT 1
     ) last ON pe.event_id = last.event_id
     WHERE pe.team_slug = ?
     ORDER BY pe.starter DESC, pe.formation_place ASC`,
    [teamSlug, teamSlug, teamSlug, teamSlug, teamSlug]
  );
}

export async function getNwslUpcomingGames(days = 7): Promise<NWSLGame[]> {
  const today = todayET();
  const until = new Date(Date.now() + days * 86_400_000).toLocaleDateString('en-CA', { timeZone: 'America/New_York' });
  const rows = await d1query<Omit<NWSLGame, 'broadcast'> & { broadcast: string }>(
    `SELECT * FROM nwsl_games
     WHERE date >= ? AND date <= ?
     ORDER BY date ASC, time ASC
     LIMIT 8`,
    [today, until]
  );
  return parseGames(rows);
}
