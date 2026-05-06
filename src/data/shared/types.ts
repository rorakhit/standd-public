export interface TeamConfig {
  name: string;
  slug: string;
  color: string;
  badge?: string;
  standingsKey: string;
  officialUrl: string;
  ticketsUrl: string;
}

export interface MatchResult {
  teamScore: number;
  opponentScore: number;
  notes?: string;
}

export interface Match {
  date: string; // ISO date "YYYY-MM-DD"
  time?: string; // local ET kickoff time e.g. "7:00 PM"
  opponent: string;
  homeAway: 'home' | 'away';
  venue?: string;
  broadcast: string[];
  result?: MatchResult;
}

export interface StandingsRow {
  rank: number;
  team: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDiff: number;
  points: number;
}

export type Position = 'GK' | 'DEF' | 'MID' | 'FWD';

export interface Player {
  number: number;
  name: string;
  position: Position;
  hometown: string;
  leagueSlug: string;   // e.g. 'nwsl'
  teamSlug: string;     // e.g. 'boston-legacy'
  teamName: string;     // e.g. 'Boston Legacy'
  countryCode?: string; // ISO 3166-1 alpha-2, only for capped internationals
  notable?: string;
  height?: string;      // e.g. "5'7\""
  bio?: string;
  socialHandle?: string; // without @ prefix
  photo?: string;        // path under /public, e.g. "/players/casey-murphy.webp"
}

export function playerSlug(player: Player, allPlayers?: Player[]): string {
  const parts = player.name.trim().split(/\s+/);
  const firstInitial = parts[0]?.[0] ?? '';
  const lastName = parts[parts.length - 1] ?? parts[0] ?? '';

  const normalize = (s: string) =>
    s
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '') // strip combining accents
      .replace(/[^a-zA-Z0-9]/g, '')    // strip apostrophes, hyphens, etc.
      .toLowerCase();

  const base = `${normalize(lastName)}-${normalize(firstInitial)}`;

  if (allPlayers) {
    const collision = allPlayers.some(
      p => p.number !== player.number && playerSlug(p) === base
    );
    if (collision) return `${base}-${player.number}`;
  }

  return base;
}
