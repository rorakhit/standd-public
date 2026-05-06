import type { Match, TeamConfig } from '../../shared/types';

export const team: TeamConfig = {
  name: 'Toronto Tempo',
  slug: 'toronto-tempo',
  color: '#CE1141',
  badge: 'https://cdn.wnba.com/logos/wnba/1611661332/primary/L/logo.svg',
  standingsKey: 'Toronto Tempo',
  officialUrl: 'https://tempo.wnba.com/',
  ticketsUrl: 'https://tempo.wnba.com/tickets/',
};

export const matches: Match[] = [
  { date: '2026-05-08', opponent: 'Washington Mystics', homeAway: 'home', broadcast: ['ION'] },
  { date: '2026-05-13', opponent: 'Seattle Storm', homeAway: 'home', broadcast: [] },
  { date: '2026-05-15', opponent: 'Los Angeles Sparks', homeAway: 'away', broadcast: ['ION'] },
  { date: '2026-05-17', opponent: 'Los Angeles Sparks', homeAway: 'away', broadcast: [] },
  { date: '2026-05-19', opponent: 'Phoenix Mercury', homeAway: 'away', broadcast: [] },
  { date: '2026-05-21', opponent: 'Minnesota Lynx', homeAway: 'away', broadcast: [] },
  { date: '2026-05-23', opponent: 'Portland Fire', homeAway: 'home', broadcast: [] },
  { date: '2026-05-27', opponent: 'Chicago Sky', homeAway: 'away', broadcast: [] },
  { date: '2026-05-30', opponent: 'Seattle Storm', homeAway: 'home', broadcast: [] },
];
