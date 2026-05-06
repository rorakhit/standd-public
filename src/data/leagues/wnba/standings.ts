import type { StandingsRow } from '../../shared/types';

export const wnbaStandings: StandingsRow[] = [];

export const standingsLastUpdated = 'May 5, 2026';

const DISPLAY_NAMES: Record<string, string> = {};

export function standingsDisplayName(team: string): string {
  return DISPLAY_NAMES[team] ?? team;
}
