import type { Match, TeamConfig } from '../../shared/types';

export const team: TeamConfig = {
  name: 'Seattle Storm',
  slug: 'seattle-storm',
  color: '#2C5234',
  standingsKey: 'Seattle Storm',
  officialUrl: 'https://storm.wnba.com/',
  ticketsUrl: 'https://storm.wnba.com/tickets/',
};

export const matches: Match[] = [
  { date: '2026-05-08', opponent: 'Golden State Valkyries', homeAway: 'home', broadcast: ['ION'] },
  { date: '2026-05-10', opponent: 'Connecticut Sun', homeAway: 'away', broadcast: [] },
  { date: '2026-05-13', opponent: 'Toronto Tempo', homeAway: 'away', broadcast: [] },
  { date: '2026-05-17', opponent: 'Indiana Fever', homeAway: 'away', broadcast: ['NBC/Peacock', 'NBC Sports'] },
  { date: '2026-05-20', opponent: 'Connecticut Sun', homeAway: 'home', broadcast: [] },
  { date: '2026-05-22', opponent: 'Connecticut Sun', homeAway: 'home', broadcast: ['ION'] },
  { date: '2026-05-24', opponent: 'Washington Mystics', homeAway: 'home', broadcast: [] },
  { date: '2026-05-27', opponent: 'Washington Mystics', homeAway: 'home', broadcast: [] },
  { date: '2026-05-30', opponent: 'Toronto Tempo', homeAway: 'away', broadcast: [] },
];
