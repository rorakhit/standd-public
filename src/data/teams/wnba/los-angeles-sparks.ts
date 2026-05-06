import type { Match, TeamConfig } from '../../shared/types';

export const team: TeamConfig = {
  name: 'Los Angeles Sparks',
  slug: 'los-angeles-sparks',
  color: '#702F8A',
  standingsKey: 'Los Angeles Sparks',
  officialUrl: 'https://sparks.wnba.com/',
  ticketsUrl: 'https://sparks.wnba.com/tickets/',
};

export const matches: Match[] = [
  { date: '2026-05-10', opponent: 'Las Vegas Aces', homeAway: 'home', broadcast: ['USA Network'] },
  { date: '2026-05-13', opponent: 'Indiana Fever', homeAway: 'home', broadcast: ['USA Network'] },
  { date: '2026-05-15', opponent: 'Toronto Tempo', homeAway: 'home', broadcast: ['ION'] },
  { date: '2026-05-17', opponent: 'Toronto Tempo', homeAway: 'home', broadcast: [] },
  { date: '2026-05-21', opponent: 'Phoenix Mercury', homeAway: 'away', broadcast: ['Amazon Prime Video'] },
  { date: '2026-05-23', opponent: 'Las Vegas Aces', homeAway: 'away', broadcast: ['CBS/Paramount+'] },
  { date: '2026-05-29', opponent: 'Washington Mystics', homeAway: 'away', broadcast: ['ION'] },
  { date: '2026-05-30', opponent: 'Connecticut Sun', homeAway: 'away', broadcast: [] },
];
