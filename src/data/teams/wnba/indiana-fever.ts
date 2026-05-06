import type { Match, TeamConfig } from '../../shared/types';

export const team: TeamConfig = {
  name: 'Indiana Fever',
  slug: 'indiana-fever',
  color: '#002D62',
  badge: 'https://cdn.wnba.com/logos/wnba/1611661325/primary/L/logo.svg',
  standingsKey: 'Indiana Fever',
  officialUrl: 'https://fever.wnba.com/',
  ticketsUrl: 'https://fever.wnba.com/tickets/',
};

export const matches: Match[] = [
  { date: '2026-05-09', opponent: 'Dallas Wings', homeAway: 'home', broadcast: ['ABC'] },
  { date: '2026-05-13', opponent: 'Los Angeles Sparks', homeAway: 'away', broadcast: ['USA Network'] },
  { date: '2026-05-15', opponent: 'Washington Mystics', homeAway: 'home', broadcast: ['ION'] },
  { date: '2026-05-17', opponent: 'Seattle Storm', homeAway: 'home', broadcast: ['NBC/Peacock', 'NBC Sports'] },
  { date: '2026-05-20', opponent: 'Portland Fire', homeAway: 'home', broadcast: ['USA Network'] },
  { date: '2026-05-22', opponent: 'Golden State Valkyries', homeAway: 'home', broadcast: ['ION'] },
  { date: '2026-05-28', opponent: 'Golden State Valkyries', homeAway: 'away', broadcast: ['Amazon Prime Video'] },
  { date: '2026-05-30', opponent: 'Portland Fire', homeAway: 'away', broadcast: ['CBS/Paramount+'] },
];
