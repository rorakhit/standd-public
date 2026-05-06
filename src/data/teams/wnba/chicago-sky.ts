import type { Match, TeamConfig } from '../../shared/types';

export const team: TeamConfig = {
  name: 'Chicago Sky',
  slug: 'chicago-sky',
  color: '#5091CD',
  badge: 'https://cdn.wnba.com/logos/wnba/1611661329/primary/L/logo.svg',
  standingsKey: 'Chicago Sky',
  officialUrl: 'https://sky.wnba.com/',
  ticketsUrl: 'https://sky.wnba.com/tickets/',
};

export const matches: Match[] = [
  { date: '2026-05-09', opponent: 'Portland Fire', homeAway: 'away', broadcast: ['NBA TV'] },
  { date: '2026-05-13', opponent: 'Golden State Valkyries', homeAway: 'away', broadcast: [] },
  { date: '2026-05-15', opponent: 'Phoenix Mercury', homeAway: 'away', broadcast: ['ION'] },
  { date: '2026-05-17', opponent: 'Minnesota Lynx', homeAway: 'away', broadcast: [] },
  { date: '2026-05-20', opponent: 'Dallas Wings', homeAway: 'home', broadcast: ['USA Network'] },
  { date: '2026-05-23', opponent: 'Minnesota Lynx', homeAway: 'home', broadcast: ['CBS/Paramount+'] },
  { date: '2026-05-27', opponent: 'Toronto Tempo', homeAway: 'home', broadcast: [] },
  { date: '2026-05-29', opponent: 'Minnesota Lynx', homeAway: 'home', broadcast: ['ION'] },
];
