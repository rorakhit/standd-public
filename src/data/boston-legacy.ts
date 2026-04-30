/**
 * Boston Legacy 2026 NWSL season data.
 *
 * Update this file weekly as the season progresses. Push to GitHub and
 * Cloudflare Pages auto-deploys within ~30 seconds.
 *
 * Last updated: 2026-04-25
 * Source: NWSLsoccer.com
 */

export interface MatchResult {
  bostonScore: number;
  opponentScore: number;
  notes?: string;
}

export interface Match {
  date: string; // ISO date "YYYY-MM-DD"
  time?: string; // local ET kickoff time e.g. "7:00 PM"
  opponent: string;
  homeAway: 'home' | 'away';
  venue: string;
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


// ============================================================================
// ALL MATCHES (chronological) — result field present = played, absent = upcoming
// Played matches are updated automatically by scripts/fetch-schedule.ts
// ============================================================================

export const matches: Match[] = [
  {
    date: '2026-03-14',
    opponent: 'NJ/NY Gotham FC',
    homeAway: 'home',
    venue: 'Gillette Stadium, Foxborough, MA',
    broadcast: ['ABC', 'ESPN App', 'Disney+'],
    result: { bostonScore: 0, opponentScore: 1 },
  },
  {
    date: '2026-03-21',
    opponent: 'Houston Dash',
    homeAway: 'away',
    venue: 'Shell Energy Stadium, Houston, TX',
    broadcast: ['ION'],
    result: { bostonScore: 0, opponentScore: 3 },
  },
  {
    date: '2026-03-28',
    opponent: 'Utah Royals',
    homeAway: 'home',
    venue: 'Gillette Stadium, Foxborough, MA',
    broadcast: ['ESPN2', 'ESPN Deportes', 'ESPN App'],
    result: { bostonScore: 1, opponentScore: 2 },
  },
  {
    date: '2026-04-03',
    opponent: 'San Diego Wave',
    homeAway: 'home',
    venue: 'Gillette Stadium, Foxborough, MA',
    broadcast: ['NWSL+'],
    result: { bostonScore: 0, opponentScore: 1 },
  },
  {
    date: '2026-04-25',
    opponent: 'Chicago Stars',
    homeAway: 'away',
    venue: 'Northwestern Medicine Field at Martin Stadium, Evanston, IL',
    broadcast: ['ION'],
    result: { bostonScore: 0, opponentScore: 2 },
  },
  // -- upcoming --
  {
    date: '2026-04-29',
    time: '7:00 PM',
    opponent: 'North Carolina Courage',
    homeAway: 'home',
    venue: 'Gillette Stadium, Foxborough, MA',
    broadcast: ['Victory+'],
  },
  {
    date: '2026-05-03',
    time: '3:00 PM',
    opponent: 'Denver Summit',
    homeAway: 'home',
    venue: 'Gillette Stadium, Foxborough, MA',
    broadcast: ['CBS Sports'],
  },
  {
    date: '2026-05-09',
    time: '6:30 PM',
    opponent: 'NJ/NY Gotham FC',
    homeAway: 'away',
    venue: 'Sports Illustrated Stadium, Harrison, NJ',
    broadcast: ['ION'],
  },
  {
    date: '2026-05-12',
    time: '7:00 PM',
    opponent: 'Orlando Pride',
    homeAway: 'home',
    venue: 'Gillette Stadium, Foxborough, MA',
    broadcast: ['Victory+'],
  },
  {
    date: '2026-05-15',
    time: '10:00 PM',
    opponent: 'Bay',
    homeAway: 'away',
    venue: 'PayPal Park, San Jose, CA',
    broadcast: ['Victory+'],
  },
  {
    date: '2026-05-22',
    time: '8:00 PM',
    opponent: 'Seattle Reign',
    homeAway: 'home',
    venue: 'Centreville Bank Stadium, Pawtucket, RI',
    broadcast: ['Prime Video'],
  },
  {
    date: '2026-05-30',
    time: '1:00 PM',
    opponent: 'Kansas City Current',
    homeAway: 'away',
    venue: 'CPKC Stadium, Kansas City, MO',
    broadcast: ['ION'],
  },
  {
    date: '2026-07-05',
    time: '12:00 PM',
    opponent: 'Bay',
    homeAway: 'home',
    venue: 'Centreville Bank Stadium, Pawtucket, RI',
    broadcast: ['ESPN', 'ESPN App'],
  },
  {
    date: '2026-07-10',
    time: '8:00 PM',
    opponent: 'Chicago Stars',
    homeAway: 'home',
    venue: 'Centreville Bank Stadium, Pawtucket, RI',
    broadcast: ['NWSL+'],
  },
  {
    date: '2026-07-15',
    time: '7:00 PM',
    opponent: 'Orlando Pride',
    homeAway: 'away',
    venue: 'Inter&Co Stadium, Orlando, FL',
    broadcast: ['NWSL+'],
  },
  {
    date: '2026-07-19',
    time: '7:00 PM',
    opponent: 'Washington Spirit',
    homeAway: 'home',
    venue: 'Centreville Bank Stadium, Pawtucket, RI',
    broadcast: ['Victory+'],
  },
  {
    date: '2026-07-25',
    time: '5:00 PM',
    opponent: 'Kansas City Current',
    homeAway: 'home',
    venue: 'Centreville Bank Stadium, Pawtucket, RI',
    broadcast: ['ION'],
  },
  {
    date: '2026-08-02',
    time: '9:00 PM',
    opponent: 'Denver Summit',
    homeAway: 'away',
    venue: 'Centennial Stadium, Centennial, CO',
    broadcast: ['ESPN', 'ESPN Deportes', 'ESPN App'],
  },
  {
    date: '2026-08-09',
    time: '4:00 PM',
    opponent: 'Portland Thorns',
    homeAway: 'home',
    venue: 'Centreville Bank Stadium, Pawtucket, RI',
    broadcast: ['CBS Sports'],
  },
  {
    date: '2026-08-15',
    time: '6:30 PM',
    opponent: 'Racing Louisville',
    homeAway: 'away',
    venue: 'Lynn Family Stadium, Louisville, KY',
    broadcast: ['ION'],
  },
  {
    date: '2026-08-22',
    time: '7:30 PM',
    opponent: 'North Carolina Courage',
    homeAway: 'away',
    venue: 'First Horizon Stadium at WakeMed Soccer Park, Cary, NC',
    broadcast: ['NWSL+'],
  },
  {
    date: '2026-08-31',
    time: '8:00 PM',
    opponent: 'Angel City',
    homeAway: 'home',
    venue: 'Gillette Stadium, Foxborough, MA',
    broadcast: ['CBS Sports'],
  },
  {
    date: '2026-09-04',
    time: '9:30 PM',
    opponent: 'Utah Royals',
    homeAway: 'away',
    venue: 'America First Field, Sandy, UT',
    broadcast: ['NWSL+'],
  },
  {
    date: '2026-09-13',
    time: '1:00 PM',
    opponent: 'Washington Spirit',
    homeAway: 'away',
    venue: 'Audi Field, Washington, DC',
    broadcast: ['ESPN', 'ESPN App'],
  },
  {
    date: '2026-09-20',
    time: '2:00 PM',
    opponent: 'Houston Dash',
    homeAway: 'home',
    venue: 'Centreville Bank Stadium, Pawtucket, RI',
    broadcast: ['CBS Sports'],
  },
  {
    date: '2026-09-25',
    time: '8:30 PM',
    opponent: 'Seattle Reign',
    homeAway: 'away',
    venue: 'Lumen Field, Seattle, WA',
    broadcast: ['NWSL+'],
  },
  {
    date: '2026-10-03',
    time: '8:45 PM',
    opponent: 'Portland Thorns',
    homeAway: 'away',
    venue: 'Providence Park, Portland, OR',
    broadcast: ['ION'],
  },
  {
    date: '2026-10-16',
    time: '8:00 PM',
    opponent: 'Racing Louisville',
    homeAway: 'home',
    venue: 'Gillette Stadium, Foxborough, MA',
    broadcast: ['Prime Video'],
  },
  {
    date: '2026-10-25',
    time: '7:00 PM',
    opponent: 'San Diego Wave',
    homeAway: 'away',
    venue: 'Snapdragon Stadium, San Diego, CA',
    broadcast: ['Victory+'],
  },
  {
    date: '2026-11-01',
    time: '5:00 PM',
    opponent: 'Angel City',
    homeAway: 'away',
    venue: 'TBD',
    broadcast: ['ESPN'],
  },
];


// ============================================================================
// NWSL STANDINGS
// Source: NWSLsoccer.com — refresh weekly
// Last updated: 2026-04-27
// Note: site header shows "Regular Season 2025" but dropdown is set to 2026.
//       Boston Legacy didn't exist in 2025 — this is confirmed 2026 data.
// ============================================================================

export const nwslStandings: StandingsRow[] = [
  { rank:  1,  team: 'San Diego Wave'        , played: 6, wins: 5, draws: 0, losses: 1, goalsFor: 11, goalsAgainst:  5,  goalDiff:  6,  points: 15 },
  { rank:  2,  team: 'Portland Thorns'       , played: 6, wins: 4, draws: 1, losses: 1, goalsFor: 10, goalsAgainst:  6,  goalDiff:  4,  points: 13 },
  { rank:  3,  team: 'Utah Royals'           , played: 6, wins: 3, draws: 1, losses: 2, goalsFor:  9, goalsAgainst:  6,  goalDiff:  3,  points: 10 },
  { rank:  4,  team: 'Seattle Reign'         , played: 6, wins: 3, draws: 1, losses: 2, goalsFor:  7, goalsAgainst:  7,  goalDiff:  0,  points: 10 },
  { rank:  5,  team: 'Angel City'            , played: 5, wins: 3, draws: 0, losses: 2, goalsFor: 11, goalsAgainst:  6,  goalDiff:  5,  points:  9 },
  { rank:  6,  team: 'Washington Spirit'     , played: 6, wins: 2, draws: 3, losses: 1, goalsFor:  9, goalsAgainst:  4,  goalDiff:  5,  points:  9 },
  { rank:  7,  team: 'Houston Dash'          , played: 5, wins: 3, draws: 0, losses: 2, goalsFor:  9, goalsAgainst:  6,  goalDiff:  3,  points:  9 },
  { rank:  8,  team: 'Orlando Pride'         , played: 6, wins: 2, draws: 2, losses: 2, goalsFor:  9, goalsAgainst:  7,  goalDiff:  2,  points:  8 },
  { rank:  9,  team: 'Gotham FC'             , played: 6, wins: 2, draws: 2, losses: 2, goalsFor:  5, goalsAgainst:  4,  goalDiff:  1,  points:  8 },
  { rank: 10,  team: 'North Carolina Courage', played: 5, wins: 2, draws: 2, losses: 1, goalsFor:  6, goalsAgainst:  6,  goalDiff:  0,  points:  8 },
  { rank: 11,  team: 'Denver Summit'         , played: 6, wins: 1, draws: 3, losses: 2, goalsFor:  6, goalsAgainst:  6,  goalDiff:  0,  points:  6 },
  { rank: 12,  team: 'Bay'                   , played: 5, wins: 2, draws: 0, losses: 3, goalsFor:  6, goalsAgainst: 10,  goalDiff: -4,  points:  6 },
  { rank: 13,  team: 'Chicago Stars'         , played: 6, wins: 2, draws: 0, losses: 4, goalsFor:  4, goalsAgainst: 11,  goalDiff: -7,  points:  6 },
  { rank: 14,  team: 'Kansas City Current'   , played: 6, wins: 2, draws: 0, losses: 4, goalsFor:  5, goalsAgainst: 13,  goalDiff: -8,  points:  6 },
  { rank: 15,  team: 'Racing Louisville'     , played: 5, wins: 1, draws: 1, losses: 3, goalsFor: 10, goalsAgainst: 12,  goalDiff: -2,  points:  4 },
  { rank: 16,  team: 'Boston Legacy'         , played: 5, wins: 0, draws: 0, losses: 5, goalsFor:  1, goalsAgainst:  9,  goalDiff: -8,  points:  0 },
];

// Set automatically by scripts/fetch-standings.ts on each successful update
export const standingsLastUpdated = 'April 27, 2026';
