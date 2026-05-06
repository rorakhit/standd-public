import type { Match, TeamConfig } from '../../shared/types';

export const team: TeamConfig = {
  name: 'Minnesota Lynx',
  slug: 'minnesota-lynx',
  color: '#236192',
  standingsKey: 'Minnesota Lynx',
  officialUrl: 'https://lynx.wnba.com/',
  ticketsUrl: 'https://lynx.wnba.com/tickets/',
};

export const matches: Match[] = [
  { date: '2026-05-09', opponent: 'Atlanta Dream', homeAway: 'home', broadcast: [] },
  { date: '2026-05-12', opponent: 'Phoenix Mercury', homeAway: 'away', broadcast: [] },
  { date: '2026-05-14', opponent: 'Dallas Wings', homeAway: 'away', broadcast: ['Amazon Prime Video'] },
  { date: '2026-05-17', opponent: 'Chicago Sky', homeAway: 'home', broadcast: [] },
  { date: '2026-05-21', opponent: 'Toronto Tempo', homeAway: 'home', broadcast: [] },
  { date: '2026-05-23', opponent: 'Chicago Sky', homeAway: 'away', broadcast: ['CBS/Paramount+'] },
  { date: '2026-05-27', opponent: 'Atlanta Dream', homeAway: 'home', broadcast: ['USA Network'] },
  { date: '2026-05-29', opponent: 'Chicago Sky', homeAway: 'away', broadcast: ['ION'] },
];
