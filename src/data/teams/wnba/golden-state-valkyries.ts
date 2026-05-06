import type { Match, TeamConfig } from '../../shared/types';

export const team: TeamConfig = {
  name: 'Golden State Valkyries',
  slug: 'golden-state-valkyries',
  color: '#1D428A',
  standingsKey: 'Golden State Valkyries',
  officialUrl: 'https://valkyries.wnba.com/',
  ticketsUrl: 'https://valkyries.wnba.com/tickets/',
};

export const matches: Match[] = [
  { date: '2026-05-08', opponent: 'Seattle Storm', homeAway: 'away', broadcast: ['ION'] },
  { date: '2026-05-10', opponent: 'Phoenix Mercury', homeAway: 'home', broadcast: [] },
  { date: '2026-05-13', opponent: 'Chicago Sky', homeAway: 'home', broadcast: [] },
  { date: '2026-05-21', opponent: 'New York Liberty', homeAway: 'away', broadcast: ['Amazon Prime Video'] },
  { date: '2026-05-22', opponent: 'Indiana Fever', homeAway: 'away', broadcast: ['ION'] },
  { date: '2026-05-25', opponent: 'Connecticut Sun', homeAway: 'home', broadcast: [] },
  { date: '2026-05-28', opponent: 'Indiana Fever', homeAway: 'home', broadcast: ['Amazon Prime Video'] },
];
