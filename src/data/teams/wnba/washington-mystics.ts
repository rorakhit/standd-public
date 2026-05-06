import type { Match, TeamConfig } from '../../shared/types';

export const team: TeamConfig = {
  name: 'Washington Mystics',
  slug: 'washington-mystics',
  color: '#E03A3E',
  badge: 'https://cdn.wnba.com/logos/wnba/1611661322/primary/L/logo.svg',
  standingsKey: 'Washington Mystics',
  officialUrl: 'https://mystics.wnba.com/',
  ticketsUrl: 'https://mystics.wnba.com/tickets/',
};

export const matches: Match[] = [
  { date: '2026-05-08', opponent: 'Toronto Tempo', homeAway: 'away', broadcast: ['ION'] },
  { date: '2026-05-10', opponent: 'New York Liberty', homeAway: 'home', broadcast: [] },
  { date: '2026-05-15', opponent: 'Indiana Fever', homeAway: 'away', broadcast: ['ION'] },
  { date: '2026-05-18', opponent: 'Dallas Wings', homeAway: 'away', broadcast: ['NBC/Peacock', 'NBC Sports'] },
  { date: '2026-05-24', opponent: 'Seattle Storm', homeAway: 'away', broadcast: [] },
  { date: '2026-05-27', opponent: 'Seattle Storm', homeAway: 'away', broadcast: [] },
  { date: '2026-05-29', opponent: 'Los Angeles Sparks', homeAway: 'home', broadcast: ['ION'] },
];
