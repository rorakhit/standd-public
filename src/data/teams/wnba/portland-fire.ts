import type { Match, TeamConfig } from '../../shared/types';

export const team: TeamConfig = {
  name: 'Portland Fire',
  slug: 'portland-fire',
  color: '#D22B2B',
  badge: 'https://cdn.wnba.com/logos/wnba/1611661327/primary/L/logo.svg',
  standingsKey: 'Portland Fire',
  officialUrl: 'https://fire.wnba.com/',
  ticketsUrl: 'https://fire.wnba.com/tickets/',
};

export const matches: Match[] = [
  { date: '2026-05-09', opponent: 'Chicago Sky', homeAway: 'home', broadcast: ['NBA TV'] },
  { date: '2026-05-12', opponent: 'New York Liberty', homeAway: 'home', broadcast: [] },
  { date: '2026-05-14', opponent: 'New York Liberty', homeAway: 'home', broadcast: ['Amazon Prime Video'] },
  { date: '2026-05-18', opponent: 'Connecticut Sun', homeAway: 'home', broadcast: [] },
  { date: '2026-05-20', opponent: 'Indiana Fever', homeAway: 'away', broadcast: ['USA Network'] },
  { date: '2026-05-23', opponent: 'Toronto Tempo', homeAway: 'away', broadcast: [] },
  { date: '2026-05-25', opponent: 'New York Liberty', homeAway: 'away', broadcast: ['NBC/Peacock', 'NBC Sports'] },
  { date: '2026-05-27', opponent: 'Connecticut Sun', homeAway: 'home', broadcast: [] },
  { date: '2026-05-29', opponent: 'Atlanta Dream', homeAway: 'home', broadcast: ['ION'] },
  { date: '2026-05-30', opponent: 'Indiana Fever', homeAway: 'home', broadcast: ['CBS/Paramount+'] },
];
