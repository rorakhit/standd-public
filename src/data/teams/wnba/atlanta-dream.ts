import type { Match, TeamConfig } from '../../shared/types';

export const team: TeamConfig = {
  name: 'Atlanta Dream',
  slug: 'atlanta-dream',
  color: '#C8102E',
  badge: 'https://cdn.wnba.com/logos/wnba/1611661330/primary/L/logo.svg',
  standingsKey: 'Atlanta Dream',
  officialUrl: 'https://dream.wnba.com/',
  ticketsUrl: 'https://dream.wnba.com/tickets/',
};

export const matches: Match[] = [
  { date: '2026-05-09', opponent: 'Minnesota Lynx', homeAway: 'away', broadcast: [] },
  { date: '2026-05-12', opponent: 'Dallas Wings', homeAway: 'away', broadcast: [] },
  { date: '2026-05-17', opponent: 'Las Vegas Aces', homeAway: 'home', broadcast: ['NBC/Peacock'] },
  { date: '2026-05-22', opponent: 'Dallas Wings', homeAway: 'home', broadcast: ['ION'] },
  { date: '2026-05-24', opponent: 'Phoenix Mercury', homeAway: 'home', broadcast: [] },
  { date: '2026-05-27', opponent: 'Minnesota Lynx', homeAway: 'away', broadcast: ['USA Network'] },
  { date: '2026-05-29', opponent: 'Portland Fire', homeAway: 'away', broadcast: ['ION'] },
];
