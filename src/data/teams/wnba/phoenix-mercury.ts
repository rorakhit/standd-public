import type { Match, TeamConfig } from '../../shared/types';

export const team: TeamConfig = {
  name: 'Phoenix Mercury',
  slug: 'phoenix-mercury',
  color: '#E56020',
  standingsKey: 'Phoenix Mercury',
  officialUrl: 'https://mercury.wnba.com/',
  ticketsUrl: 'https://mercury.wnba.com/tickets/',
};

export const matches: Match[] = [
  { date: '2026-05-09', opponent: 'Las Vegas Aces', homeAway: 'away', broadcast: ['ABC'] },
  { date: '2026-05-10', opponent: 'Golden State Valkyries', homeAway: 'away', broadcast: [] },
  { date: '2026-05-12', opponent: 'Minnesota Lynx', homeAway: 'home', broadcast: [] },
  { date: '2026-05-15', opponent: 'Chicago Sky', homeAway: 'home', broadcast: ['ION'] },
  { date: '2026-05-19', opponent: 'Toronto Tempo', homeAway: 'home', broadcast: [] },
  { date: '2026-05-21', opponent: 'Los Angeles Sparks', homeAway: 'home', broadcast: ['Amazon Prime Video'] },
  { date: '2026-05-24', opponent: 'Atlanta Dream', homeAway: 'away', broadcast: [] },
  { date: '2026-05-27', opponent: 'New York Liberty', homeAway: 'away', broadcast: ['USA Network'] },
  { date: '2026-05-29', opponent: 'New York Liberty', homeAway: 'away', broadcast: ['ION'] },
];
