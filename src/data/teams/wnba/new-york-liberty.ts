import type { Match, TeamConfig } from '../../shared/types';

export const team: TeamConfig = {
  name: 'New York Liberty',
  slug: 'new-york-liberty',
  color: '#173F35',
  standingsKey: 'New York Liberty',
  officialUrl: 'https://liberty.wnba.com/',
  ticketsUrl: 'https://liberty.wnba.com/tickets/',
};

export const matches: Match[] = [
  { date: '2026-05-08', opponent: 'Connecticut Sun', homeAway: 'home', broadcast: ['ION'] },
  { date: '2026-05-10', opponent: 'Washington Mystics', homeAway: 'away', broadcast: [] },
  { date: '2026-05-12', opponent: 'Portland Fire', homeAway: 'away', broadcast: [] },
  { date: '2026-05-14', opponent: 'Portland Fire', homeAway: 'away', broadcast: ['Amazon Prime Video'] },
  { date: '2026-05-21', opponent: 'Golden State Valkyries', homeAway: 'home', broadcast: ['Amazon Prime Video'] },
  { date: '2026-05-24', opponent: 'Dallas Wings', homeAway: 'home', broadcast: ['NBC/Peacock'] },
  { date: '2026-05-25', opponent: 'Portland Fire', homeAway: 'home', broadcast: ['NBC/Peacock', 'NBC Sports'] },
  { date: '2026-05-27', opponent: 'Phoenix Mercury', homeAway: 'home', broadcast: ['USA Network'] },
  { date: '2026-05-29', opponent: 'Phoenix Mercury', homeAway: 'home', broadcast: ['ION'] },
];
