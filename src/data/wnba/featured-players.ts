// wnba-redesign/astro/data/wnba/featured-players.ts
//
// Curated "Players to watch" list — the early-season storyline carriers.
// Plain content, hand-edited; not derived from D1 because the editorial
// blurbs + "leaderIn" chips are voice-driven, not stat-driven.
//
// Drop this file at src/data/wnba/featured-players.ts.

export type Position = 'G' | 'F' | 'C';

export interface FeaturedPlayer {
  /** ESPN id — used to join against wnba_player_stats in queries.ts */
  espnId: string;
  /** Display name. */
  name: string;
  /** Jersey number, integer 0-99. Rendered zero-padded to two digits. */
  number: number;
  /** Position. G→"Guard", F→"Forward", C→"Center" in the UI. */
  position: Position;
  /** Team slug — must match a WNBATeamConfig.slug. */
  teamSlug: string;
  /** Show the small lava "ROOKIE" chip next to the name. */
  rookie?: boolean;
  /** One-line editorial blurb. Keep punchy — sentence case, 1-2 sentences. */
  blurb: string;
  /** Chips on the card (chartreuse, ★ prefix). Max ~3, often 1-2. */
  leaderIn: string[];
}

export const featuredPlayers: FeaturedPlayer[] = [
  {
    espnId: '2529128',
    name: "A'ja Wilson",
    number: 22, position: 'F', teamSlug: 'las-vegas-aces',
    blurb: 'Three-peat MVP chase. Leading the league in PPG for the third straight April.',
    leaderIn: ['PPG', 'BPG'],
  },
  {
    espnId: '4433403',
    name: 'Caitlin Clark',
    number: 22, position: 'G', teamSlug: 'indiana-fever',
    blurb: 'Sophomore leap. Pulling up from logo range and quarterbacking the league in assists.',
    leaderIn: ['APG', '3PM/G'],
  },
  {
    espnId: '4279857',
    name: 'Napheesa Collier',
    number: 24, position: 'F', teamSlug: 'minnesota-lynx',
    blurb: 'Most efficient possession-by-possession scorer in the league. The MVP runner-up everyone forgets.',
    leaderIn: ['SPG', 'TS%'],
  },
  {
    espnId: '2987869',
    name: 'Breanna Stewart',
    number: 30, position: 'F', teamSlug: 'new-york-liberty',
    blurb: "Two-way anchor on the league's best net rating. The Liberty go where Stewie goes.",
    leaderIn: [],
  },
  // ...add the other 4 for /wnba/players page. Keep this file as the
  // single source of truth for the "Players to watch" curation.
];
