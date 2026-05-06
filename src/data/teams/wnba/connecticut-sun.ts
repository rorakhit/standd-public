import type { Match, TeamConfig } from '../../shared/types';

export const team: TeamConfig = {
  name: 'Connecticut Sun',
  slug: 'connecticut-sun',
  color: '#E07E25',
  standingsKey: 'Connecticut Sun',
  officialUrl: 'https://sun.wnba.com/',
  ticketsUrl: 'https://sun.wnba.com/tickets/',
};

export const matches: Match[] = [
  { date: '2026-05-08', opponent: 'New York Liberty', homeAway: 'away', broadcast: ['ION'] },
  { date: '2026-05-10', opponent: 'Seattle Storm', homeAway: 'home', broadcast: [] },
  { date: '2026-05-13', opponent: 'Las Vegas Aces', homeAway: 'home', broadcast: ['USA Network'] },
  { date: '2026-05-15', opponent: 'Las Vegas Aces', homeAway: 'home', broadcast: [] },
  { date: '2026-05-18', opponent: 'Portland Fire', homeAway: 'away', broadcast: [] },
  { date: '2026-05-20', opponent: 'Seattle Storm', homeAway: 'away', broadcast: [] },
  { date: '2026-05-22', opponent: 'Seattle Storm', homeAway: 'away', broadcast: ['ION'] },
  { date: '2026-05-25', opponent: 'Golden State Valkyries', homeAway: 'away', broadcast: [] },
  { date: '2026-05-27', opponent: 'Portland Fire', homeAway: 'away', broadcast: [] },
  { date: '2026-05-30', opponent: 'Los Angeles Sparks', homeAway: 'home', broadcast: [] },
];
