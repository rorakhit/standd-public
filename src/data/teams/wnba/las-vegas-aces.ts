import type { Match, TeamConfig } from '../../shared/types';

export const team: TeamConfig = {
  name: 'Las Vegas Aces',
  slug: 'las-vegas-aces',
  color: '#C8102E',
  standingsKey: 'Las Vegas Aces',
  officialUrl: 'https://aces.wnba.com/',
  ticketsUrl: 'https://aces.wnba.com/tickets/',
};

export const matches: Match[] = [
  { date: '2026-05-09', opponent: 'Phoenix Mercury', homeAway: 'home', broadcast: ['ABC'] },
  { date: '2026-05-10', opponent: 'Los Angeles Sparks', homeAway: 'away', broadcast: ['USA Network'] },
  { date: '2026-05-13', opponent: 'Connecticut Sun', homeAway: 'away', broadcast: ['USA Network'] },
  { date: '2026-05-15', opponent: 'Connecticut Sun', homeAway: 'away', broadcast: [] },
  { date: '2026-05-17', opponent: 'Atlanta Dream', homeAway: 'away', broadcast: ['NBC/Peacock'] },
  { date: '2026-05-23', opponent: 'Los Angeles Sparks', homeAway: 'home', broadcast: ['CBS/Paramount+'] },
  { date: '2026-05-28', opponent: 'Dallas Wings', homeAway: 'away', broadcast: ['Amazon Prime Video'] },
];
