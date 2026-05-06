import type { Match, TeamConfig } from '../../shared/types';

export const team: TeamConfig = {
  name: 'Dallas Wings',
  slug: 'dallas-wings',
  color: '#002B5C',
  standingsKey: 'Dallas Wings',
  officialUrl: 'https://wings.wnba.com/',
  ticketsUrl: 'https://wings.wnba.com/tickets/',
};

export const matches: Match[] = [
  { date: '2026-05-09', opponent: 'Indiana Fever', homeAway: 'away', broadcast: ['ABC'] },
  { date: '2026-05-12', opponent: 'Atlanta Dream', homeAway: 'home', broadcast: [] },
  { date: '2026-05-14', opponent: 'Minnesota Lynx', homeAway: 'home', broadcast: ['Amazon Prime Video'] },
  { date: '2026-05-18', opponent: 'Washington Mystics', homeAway: 'home', broadcast: ['NBC/Peacock', 'NBC Sports'] },
  { date: '2026-05-20', opponent: 'Chicago Sky', homeAway: 'away', broadcast: ['USA Network'] },
  { date: '2026-05-22', opponent: 'Atlanta Dream', homeAway: 'away', broadcast: ['ION'] },
  { date: '2026-05-24', opponent: 'New York Liberty', homeAway: 'away', broadcast: ['NBC/Peacock'] },
  { date: '2026-05-28', opponent: 'Las Vegas Aces', homeAway: 'home', broadcast: ['Amazon Prime Video'] },
];
