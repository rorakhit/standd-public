// wnba-redesign/astro/data/wnba/broadcasters.ts
//
// Broadcaster chip metadata for the How-to-Watch CTA band.
// Each broadcaster has its real brand color so the chip grid reads as a
// network logo wall, not generic pills.
//
// Drop this file at src/data/wnba/broadcasters.ts.

export interface BroadcasterChip {
  label: string;
  /** CSS background color (use the network's real brand color). */
  bg: string;
  /** Foreground color — chosen for contrast against `bg`. */
  fg: string;
}

export const wnbaBroadcasters: BroadcasterChip[] = [
  { label: 'ESPN',        bg: '#D00000', fg: '#FFFFFF' },
  { label: 'ABC',         bg: '#0E0E11', fg: '#FFFFFF' },
  { label: 'CBS',         bg: '#003791', fg: '#FFFFFF' },
  { label: 'ION',         bg: '#009E60', fg: '#FFFFFF' },
  { label: 'Prime',       bg: '#00A8E1', fg: '#0E0E11' },
  { label: 'Amazon',      bg: '#FF9900', fg: '#0E0E11' },
  { label: 'NBA TV',      bg: '#17408B', fg: '#FFFFFF' },
  { label: 'League Pass', bg: '#F4EBDC', fg: '#0E0E11' },
];
