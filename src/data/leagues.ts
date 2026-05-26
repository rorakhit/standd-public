/**
 * Canonical catalog of all leagues Standd tracks (live + coming soon).
 *
 * Per-league domain data (standings, schedules, rosters) lives in
 * `src/data/leagues/<slug>/` and `src/data/teams/<slug>/`. This file
 * is just the catalog — name, brand color, status, ETA, crests, broadcasters.
 */

export type LeagueStatus = 'live' | 'coming-soon';
export type SportIcon = 'soccer' | 'basketball' | 'hockey' | 'volleyball';

export interface Broadcaster {
  key: string;   // maps to BroadcasterKey in BroadcastBadge.astro
  label: string; // display text on the badge
}

export interface LeagueCatalogEntry {
  slug: string;
  name: string;
  longName: string;
  sport: string;
  sportIcon: SportIcon;
  status: LeagueStatus;
  color: string;
  eyebrow: string;
  countryCode: string;
  season: string;
  /** Full label shown in SOON pill and Coming Season stat: "2026 Playoffs", "2026 Season" */
  etaLabel: string;
  teamCount: number | null;
  href: string;
  blurb: string;
  crests: string[];
  broadcasters: Broadcaster[];
  intro: string;
}

export const LEAGUES: LeagueCatalogEntry[] = [
  {
    slug: 'nwsl',
    name: 'NWSL',
    longName: "National Women's Soccer League",
    sport: 'Soccer',
    sportIcon: 'soccer',
    status: 'live',
    color: '#003865',
    eyebrow: 'Soccer · USA',
    countryCode: 'USA',
    season: '2026',
    etaLabel: '',
    teamCount: 16,
    href: '/nwsl',
    blurb: 'Sixteen clubs from coast to coast. Schedules, scores, standings, and squad pages.',
    crests: [
      'https://images.nwslsoccer.com/image/private/t_q-best/v1710436088/prd/assets/teams/angel-city-fc.svg',
      'https://images.nwslsoccer.com/image/private/t_q-best/v1710436090/prd/assets/teams/bay-fc.svg',
      'https://images.nwslsoccer.com/image/private/t_q-best/v1749431607/prd/assets/teams/bos-nation-fc.png',
      'https://images.nwslsoccer.com/image/private/t_q-best/v1776368471/prd/assets/teams/chicago-stars.png',
      'https://images.nwslsoccer.com/image/private/t_q-best/v1757004382/prd/assets/teams/denver-summit-fc.png',
      'https://images.nwslsoccer.com/image/private/t_q-best/v1768567024/prd/assets/teams/nj-ny-gotham-fc.png',
      'https://images.nwslsoccer.com/image/private/t_q-best/v1710436093/prd/assets/teams/houston-dash.svg',
      'https://images.nwslsoccer.com/image/private/t_q-best/v1710436094/prd/assets/teams/kansas-city-current.svg',
      'https://images.nwslsoccer.com/image/private/t_q-best/v1712866345/prd/assets/teams/north-carolina-courage.svg',
      'https://images.nwslsoccer.com/image/private/t_q-best/v1710436099/prd/assets/teams/orlando-pride.svg',
      'https://images.nwslsoccer.com/image/private/t_q-best/v1710436103/prd/assets/teams/racing-louisville-fc.svg',
      'https://images.nwslsoccer.com/image/private/t_q-best/v1710436101/prd/assets/teams/portland-thorns-fc.svg',
      'https://images.nwslsoccer.com/image/private/t_q-best/v1710436105/prd/assets/teams/san-diego-wave-fc.svg',
      'https://images.nwslsoccer.com/image/private/t_q-best/v1710436107/prd/assets/teams/seattle-reign.svg',
      'https://images.nwslsoccer.com/image/private/t_q-best/v1710436109/prd/assets/teams/utah-royals-fc.svg',
      'https://images.nwslsoccer.com/image/private/t_q-best/v1712866158/prd/assets/teams/washington-spirit.svg',
    ],
    broadcasters: [
      { key: 'cbs',       label: 'CBS Sports' },
      { key: 'ion',       label: 'ION' },
      { key: 'paramount', label: 'Paramount+' },
      { key: 'nwslp',    label: 'NWSL+' },
      { key: 'victory',  label: 'Victory+' },
    ],
    intro: "Top-flight US women's soccer. 16 clubs, March–November, playoffs end with the NWSL Championship.",
  },
  {
    slug: 'wnba',
    name: 'WNBA',
    longName: "Women's National Basketball Association",
    sport: 'Basketball',
    sportIcon: 'basketball',
    status: 'live',
    color: '#E85D00',
    eyebrow: 'Basketball · USA',
    countryCode: 'USA',
    season: '2026',
    etaLabel: '',
    teamCount: 15,
    href: '/wnba',
    blurb: 'Fifteen teams across two conferences. Schedules, standings, and where every game airs.',
    crests: [
      'https://cdn.wnba.com/logos/wnba/1611661323/primary/L/logo.svg',
      'https://cdn.wnba.com/logos/wnba/1611661321/primary/L/logo.svg',
      'https://cdn.wnba.com/logos/wnba/1611661330/primary/L/logo.svg',
      'https://cdn.wnba.com/logos/wnba/1611661329/primary/L/logo.svg',
      'https://cdn.wnba.com/logos/wnba/1611661331/primary/L/logo.svg',
      'https://cdn.wnba.com/logos/wnba/1611661325/primary/L/logo.svg',
      'https://cdn.wnba.com/logos/wnba/1611661324/primary/L/logo.svg',
      'https://cdn.wnba.com/logos/wnba/1611661320/primary/L/logo.svg',
      'https://cdn.wnba.com/logos/wnba/1611661319/primary/L/logo.svg',
      'https://cdn.wnba.com/logos/wnba/1611661317/primary/L/logo.svg',
      'https://cdn.wnba.com/logos/wnba/1611661313/primary/L/logo.svg',
      'https://cdn.wnba.com/logos/wnba/1611661327/primary/L/logo.svg',
      'https://cdn.wnba.com/logos/wnba/1611661328/primary/L/logo.svg',
      'https://cdn.wnba.com/logos/wnba/1611661322/primary/L/logo.svg',
      'https://cdn.wnba.com/logos/wnba/1611661332/primary/L/logo.svg',
    ],
    broadcasters: [
      { key: 'espn',   label: 'ESPN' },
      { key: 'prime',  label: 'Prime Video' },
      { key: 'cbs',    label: 'CBS Sports' },
      { key: 'wnbalp', label: 'League Pass' },
    ],
    intro: "Top-flight US women's basketball. 15 teams, May–October, finals in the fall.",
  },
  {
    slug: 'pwhl',
    name: 'PWHL',
    longName: "Professional Women's Hockey League",
    sport: 'Hockey',
    sportIcon: 'hockey',
    status: 'coming-soon',
    color: '#6A35B8',
    eyebrow: 'Hockey · Pro · USA / Canada',
    countryCode: 'USA + CA',
    season: '',
    etaLabel: '2027',
    teamCount: 8,
    href: '#',
    blurb: 'The PWHL — eight teams, two countries, one of the fastest-growing pro leagues in sport.',
    crests: [],
    broadcasters: [],
    intro: "Top-flight pro women's hockey across the US and Canada. 8 teams, November–May, playoffs for the Walter Cup.",
  },
  {
    slug: 'nsl',
    name: 'NSL',
    longName: "Northern Super League",
    sport: 'Soccer',
    sportIcon: 'soccer',
    status: 'coming-soon',
    color: '#00806B',
    eyebrow: 'Soccer · Pro · Canada',
    countryCode: 'CA',
    season: '',
    etaLabel: '2027',
    teamCount: 7,
    href: '#',
    blurb: "Canada's first professional women's soccer league — seven clubs from coast to coast.",
    crests: [],
    broadcasters: [],
    intro: "Canada's first pro women's soccer league. 7 founding clubs across the country, April–November.",
  },
  {
    slug: 'liga-mx-femenil',
    name: 'Liga MXF',
    longName: 'Liga MX Femenil',
    sport: 'Soccer',
    sportIcon: 'soccer',
    status: 'coming-soon',
    color: '#CC0066',
    eyebrow: 'Soccer · Pro · Mexico',
    countryCode: 'MEX',
    season: '',
    etaLabel: '2027',
    teamCount: 18,
    href: '#',
    blurb: "Mexico's top-flight women's league — eighteen clubs, some of the best talent in CONCACAF.",
    crests: [],
    broadcasters: [],
    intro: "Mexico's top women's soccer league. 18 clubs, split into Apertura (fall) and Clausura (spring) tournaments.",
  },
  {
    slug: 'lovb-pro',
    name: 'LOVB',
    longName: 'League One Volleyball Pro',
    sport: 'Volleyball',
    sportIcon: 'volleyball',
    status: 'coming-soon',
    color: '#00B4D8',
    eyebrow: 'Volleyball · Pro · USA',
    countryCode: 'USA',
    season: '',
    etaLabel: '2027',
    teamCount: 6,
    href: '#',
    blurb: 'Pro volleyball, on TV, in the US. Six teams, one season, brand-new league.',
    crests: [],
    broadcasters: [],
    intro: "Pro indoor volleyball in the US. 6 founding teams, January–April, championship in the spring.",
  },
  {
    slug: 'wsl',
    name: 'WSL',
    longName: "Women's Super League",
    sport: 'Soccer',
    sportIcon: 'soccer',
    status: 'coming-soon',
    color: '#3D195B',
    eyebrow: 'Soccer · Pro · England',
    countryCode: 'ENG',
    season: '',
    etaLabel: '2027',
    teamCount: 12,
    href: '#',
    blurb: "England's top flight. Twelve clubs, one trophy, one of the world's strongest leagues.",
    crests: [],
    broadcasters: [],
    intro: "England's top tier of women's soccer. 12 clubs, August–May, with the FA Cup running alongside.",
  },
];

export const LIVE_LEAGUES = LEAGUES.filter(l => l.status === 'live');
export const COMING_LEAGUES = LEAGUES.filter(l => l.status === 'coming-soon');
