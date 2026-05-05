import type { StandingsRow } from '../../shared/types';

export const nwslStandings: StandingsRow[] = [
  { rank:  1,  team: 'Portland Thorns'       , played: 7, wins: 5, draws: 1, losses: 1, goalsFor: 12, goalsAgainst:  6,  goalDiff:  6,  points: 16 },
  { rank:  2,  team: 'San Diego Wave'        , played: 7, wins: 5, draws: 0, losses: 2, goalsFor: 11, goalsAgainst:  7,  goalDiff:  4,  points: 15 },
  { rank:  3,  team: 'Washington Spirit'     , played: 7, wins: 3, draws: 3, losses: 1, goalsFor: 10, goalsAgainst:  4,  goalDiff:  6,  points: 12 },
  { rank:  4,  team: 'Gotham FC'             , played: 7, wins: 3, draws: 2, losses: 2, goalsFor:  7, goalsAgainst:  4,  goalDiff:  3,  points: 11 },
  { rank:  5,  team: 'Seattle Reign'         , played: 7, wins: 3, draws: 2, losses: 2, goalsFor:  7, goalsAgainst:  7,  goalDiff:  0,  points: 11 },
  { rank:  6,  team: 'Houston Dash'          , played: 6, wins: 3, draws: 1, losses: 2, goalsFor:  9, goalsAgainst:  6,  goalDiff:  3,  points: 10 },
  { rank:  7,  team: 'Utah Royals'           , played: 6, wins: 3, draws: 1, losses: 2, goalsFor:  9, goalsAgainst:  6,  goalDiff:  3,  points: 10 },
  { rank:  8,  team: 'Angel City'            , played: 5, wins: 3, draws: 0, losses: 2, goalsFor: 11, goalsAgainst:  6,  goalDiff:  5,  points:  9 },
  { rank:  9,  team: 'North Carolina Courage', played: 6, wins: 2, draws: 3, losses: 1, goalsFor:  8, goalsAgainst:  8,  goalDiff:  0,  points:  9 },
  { rank: 10,  team: 'Orlando Pride'         , played: 6, wins: 2, draws: 2, losses: 2, goalsFor:  9, goalsAgainst:  7,  goalDiff:  2,  points:  8 },
  { rank: 11,  team: 'Denver Summit'         , played: 6, wins: 1, draws: 3, losses: 2, goalsFor:  6, goalsAgainst:  6,  goalDiff:  0,  points:  6 },
  { rank: 12,  team: 'Bay'                   , played: 5, wins: 2, draws: 0, losses: 3, goalsFor:  6, goalsAgainst: 10,  goalDiff: -4,  points:  6 },
  { rank: 13,  team: 'Kansas City Current'   , played: 6, wins: 2, draws: 0, losses: 4, goalsFor:  5, goalsAgainst: 13,  goalDiff: -8,  points:  6 },
  { rank: 14,  team: 'Chicago Stars'         , played: 7, wins: 2, draws: 0, losses: 5, goalsFor:  4, goalsAgainst: 13,  goalDiff: -9,  points:  6 },
  { rank: 15,  team: 'Racing Louisville'     , played: 6, wins: 1, draws: 1, losses: 4, goalsFor: 10, goalsAgainst: 13,  goalDiff: -3,  points:  4 },
  { rank: 16,  team: 'Boston Legacy'         , played: 6, wins: 0, draws: 1, losses: 5, goalsFor:  3, goalsAgainst: 11,  goalDiff: -8,  points:  1 },
];

// Set automatically by scripts/fetch-standings.ts on each successful update
export const standingsLastUpdated = 'May 2, 2026';

const DISPLAY_NAMES: Record<string, string> = {
  'Bay': 'Bay FC',
};

export function standingsDisplayName(team: string): string {
  return DISPLAY_NAMES[team] ?? team;
}
