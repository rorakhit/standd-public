/**
 * Boston Legacy 2026 NWSL season data.
 *
 * Update this file weekly as the season progresses. Push to GitHub and
 * Cloudflare Pages auto-deploys within ~30 seconds.
 *
 * Last updated: 2026-04-25
 * Source: NWSLsoccer.com
 */

export interface MatchResult {
  bostonScore: number;
  opponentScore: number;
  notes?: string;
}

export interface Match {
  date: string; // ISO date "YYYY-MM-DD"
  time?: string; // local ET kickoff time e.g. "7:00 PM"
  opponent: string;
  homeAway: 'home' | 'away';
  venue: string;
  broadcast: string[];
  result?: MatchResult;
}

export interface StandingsRow {
  rank: number;
  team: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDiff: number;
  points: number;
}


// ============================================================================
// ALL MATCHES (chronological) — result field present = played, absent = upcoming
// Played matches are updated automatically by scripts/fetch-schedule.ts
// ============================================================================

export const matches: Match[] = [
  {
    date: '2026-03-14',
    opponent: 'NJ/NY Gotham FC',
    homeAway: 'home',
    venue: 'Gillette Stadium, Foxborough, MA',
    broadcast: ['ABC', 'ESPN App', 'Disney+'],
    result: { bostonScore: 0, opponentScore: 1 },
  },
  {
    date: '2026-03-21',
    opponent: 'Houston Dash',
    homeAway: 'away',
    venue: 'Shell Energy Stadium, Houston, TX',
    broadcast: ['ION'],
    result: { bostonScore: 0, opponentScore: 3 },
  },
  {
    date: '2026-03-28',
    opponent: 'Utah Royals',
    homeAway: 'home',
    venue: 'Gillette Stadium, Foxborough, MA',
    broadcast: ['ESPN2', 'ESPN Deportes', 'ESPN App'],
    result: { bostonScore: 1, opponentScore: 2 },
  },
  {
    date: '2026-04-03',
    opponent: 'San Diego Wave',
    homeAway: 'home',
    venue: 'Gillette Stadium, Foxborough, MA',
    broadcast: ['NWSL+'],
    result: { bostonScore: 0, opponentScore: 1 },
  },
  {
    date: '2026-04-25',
    opponent: 'Chicago Stars',
    homeAway: 'away',
    venue: 'Northwestern Medicine Field at Martin Stadium, Evanston, IL',
    broadcast: ['ION'],
    result: { bostonScore: 0, opponentScore: 2 },
  },
  // -- upcoming --
  {
    date: '2026-04-29',
    time: '7:00 PM',
    opponent: 'North Carolina Courage',
    homeAway: 'home',
    venue: 'Gillette Stadium, Foxborough, MA',
    broadcast: ['Victory+'],
    result: { bostonScore: 2, opponentScore: 2 },
  },
  {
    date: '2026-05-03',
    time: '3:00 PM',
    opponent: 'Denver Summit',
    homeAway: 'home',
    venue: 'Gillette Stadium, Foxborough, MA',
    broadcast: ['CBS Sports'],
  },
  {
    date: '2026-05-09',
    time: '6:30 PM',
    opponent: 'NJ/NY Gotham FC',
    homeAway: 'away',
    venue: 'Sports Illustrated Stadium, Harrison, NJ',
    broadcast: ['ION'],
  },
  {
    date: '2026-05-12',
    time: '7:00 PM',
    opponent: 'Orlando Pride',
    homeAway: 'home',
    venue: 'Gillette Stadium, Foxborough, MA',
    broadcast: ['Victory+'],
  },
  {
    date: '2026-05-15',
    time: '10:00 PM',
    opponent: 'Bay',
    homeAway: 'away',
    venue: 'PayPal Park, San Jose, CA',
    broadcast: ['Victory+'],
  },
  {
    date: '2026-05-22',
    time: '8:00 PM',
    opponent: 'Seattle Reign',
    homeAway: 'home',
    venue: 'Centreville Bank Stadium, Pawtucket, RI',
    broadcast: ['Prime Video'],
  },
  {
    date: '2026-05-30',
    time: '1:00 PM',
    opponent: 'Kansas City Current',
    homeAway: 'away',
    venue: 'CPKC Stadium, Kansas City, MO',
    broadcast: ['ION'],
  },
  {
    date: '2026-07-05',
    time: '12:00 PM',
    opponent: 'Bay',
    homeAway: 'home',
    venue: 'Centreville Bank Stadium, Pawtucket, RI',
    broadcast: ['ESPN', 'ESPN App'],
  },
  {
    date: '2026-07-10',
    time: '8:00 PM',
    opponent: 'Chicago Stars',
    homeAway: 'home',
    venue: 'Centreville Bank Stadium, Pawtucket, RI',
    broadcast: ['NWSL+'],
  },
  {
    date: '2026-07-15',
    time: '7:00 PM',
    opponent: 'Orlando Pride',
    homeAway: 'away',
    venue: 'Inter&Co Stadium, Orlando, FL',
    broadcast: ['NWSL+'],
  },
  {
    date: '2026-07-19',
    time: '7:00 PM',
    opponent: 'Washington Spirit',
    homeAway: 'home',
    venue: 'Centreville Bank Stadium, Pawtucket, RI',
    broadcast: ['Victory+'],
  },
  {
    date: '2026-07-25',
    time: '5:00 PM',
    opponent: 'Kansas City Current',
    homeAway: 'home',
    venue: 'Centreville Bank Stadium, Pawtucket, RI',
    broadcast: ['ION'],
  },
  {
    date: '2026-08-02',
    time: '9:00 PM',
    opponent: 'Denver Summit',
    homeAway: 'away',
    venue: 'Centennial Stadium, Centennial, CO',
    broadcast: ['ESPN', 'ESPN Deportes', 'ESPN App'],
  },
  {
    date: '2026-08-09',
    time: '4:00 PM',
    opponent: 'Portland Thorns',
    homeAway: 'home',
    venue: 'Centreville Bank Stadium, Pawtucket, RI',
    broadcast: ['CBS Sports'],
  },
  {
    date: '2026-08-15',
    time: '6:30 PM',
    opponent: 'Racing Louisville',
    homeAway: 'away',
    venue: 'Lynn Family Stadium, Louisville, KY',
    broadcast: ['ION'],
  },
  {
    date: '2026-08-22',
    time: '7:30 PM',
    opponent: 'North Carolina Courage',
    homeAway: 'away',
    venue: 'First Horizon Stadium at WakeMed Soccer Park, Cary, NC',
    broadcast: ['NWSL+'],
  },
  {
    date: '2026-08-31',
    time: '8:00 PM',
    opponent: 'Angel City',
    homeAway: 'home',
    venue: 'Gillette Stadium, Foxborough, MA',
    broadcast: ['CBS Sports'],
  },
  {
    date: '2026-09-04',
    time: '9:30 PM',
    opponent: 'Utah Royals',
    homeAway: 'away',
    venue: 'America First Field, Sandy, UT',
    broadcast: ['NWSL+'],
  },
  {
    date: '2026-09-13',
    time: '1:00 PM',
    opponent: 'Washington Spirit',
    homeAway: 'away',
    venue: 'Audi Field, Washington, DC',
    broadcast: ['ESPN', 'ESPN App'],
  },
  {
    date: '2026-09-20',
    time: '2:00 PM',
    opponent: 'Houston Dash',
    homeAway: 'home',
    venue: 'Centreville Bank Stadium, Pawtucket, RI',
    broadcast: ['CBS Sports'],
  },
  {
    date: '2026-09-25',
    time: '8:30 PM',
    opponent: 'Seattle Reign',
    homeAway: 'away',
    venue: 'Lumen Field, Seattle, WA',
    broadcast: ['NWSL+'],
  },
  {
    date: '2026-10-03',
    time: '8:45 PM',
    opponent: 'Portland Thorns',
    homeAway: 'away',
    venue: 'Providence Park, Portland, OR',
    broadcast: ['ION'],
  },
  {
    date: '2026-10-16',
    time: '8:00 PM',
    opponent: 'Racing Louisville',
    homeAway: 'home',
    venue: 'Gillette Stadium, Foxborough, MA',
    broadcast: ['Prime Video'],
  },
  {
    date: '2026-10-25',
    time: '7:00 PM',
    opponent: 'San Diego Wave',
    homeAway: 'away',
    venue: 'Snapdragon Stadium, San Diego, CA',
    broadcast: ['Victory+'],
  },
  {
    date: '2026-11-01',
    time: '5:00 PM',
    opponent: 'Angel City',
    homeAway: 'away',
    venue: 'TBD',
    broadcast: ['ESPN'],
  },
];


// ============================================================================
// NWSL STANDINGS
// Source: NWSLsoccer.com — refresh weekly
// Last updated: 2026-04-27
// Note: site header shows "Regular Season 2025" but dropdown is set to 2026.
//       Boston Legacy didn't exist in 2025 — this is confirmed 2026 data.
// ============================================================================

export const nwslStandings: StandingsRow[] = [
  { rank:  1,  team: 'Portland Thorns'       , played: 7, wins: 5, draws: 1, losses: 1, goalsFor: 12, goalsAgainst:  6,  goalDiff:  6,  points: 16 },
  { rank:  2,  team: 'San Diego Wave'        , played: 7, wins: 5, draws: 0, losses: 2, goalsFor: 11, goalsAgainst:  7,  goalDiff:  4,  points: 15 },
  { rank:  3,  team: 'Washington Spirit'     , played: 7, wins: 3, draws: 3, losses: 1, goalsFor: 10, goalsAgainst:  4,  goalDiff:  6,  points: 12 },
  { rank:  4,  team: 'Gotham FC'             , played: 7, wins: 3, draws: 2, losses: 2, goalsFor:  7, goalsAgainst:  4,  goalDiff:  3,  points: 11 },
  { rank:  5,  team: 'Seattle Reign'         , played: 7, wins: 3, draws: 2, losses: 2, goalsFor:  7, goalsAgainst:  7,  goalDiff:  0,  points: 11 },
  { rank:  6,  team: 'Houston Dash'          , played: 6, wins: 3, draws: 1, losses: 2, goalsFor:  9, goalsAgainst:  6,  goalDiff:  3,  points: 10 },
  { rank:  7,  team: 'Utah Royals'           , played: 6, wins: 3, draws: 1, losses: 2, goalsFor:  9, goalsAgainst:  6,  goalDiff:  3,  points: 10 },
  { rank:  8,  team: 'Angel City'            , played: 5, wins: 3, draws: 0, losses: 2, goalsFor: 11, goalsAgainst:  6,  goalDiff:  5,  points:  9 },
  { rank:  9,  team: 'North Carolina Courage', played: 6, wins: 2, draws: 3, losses: 1, goalsFor:  8, goalsAgainst:  8,  goalDiff:  0,  points:  9 },
  { rank: 10,  team: 'Orlando Pride'         , played: 6, wins: 2, draws: 2, losses: 2, goalsFor:  9, goalsAgainst:  7,  goalDiff:  2,  points:  8 },
  { rank: 11,  team: 'Denver Summit'         , played: 6, wins: 1, draws: 3, losses: 2, goalsFor:  6, goalsAgainst:  6,  goalDiff:  0,  points:  6 },
  { rank: 12,  team: 'Bay'                   , played: 5, wins: 2, draws: 0, losses: 3, goalsFor:  6, goalsAgainst: 10,  goalDiff: -4,  points:  6 },
  { rank: 13,  team: 'Kansas City Current'   , played: 6, wins: 2, draws: 0, losses: 4, goalsFor:  5, goalsAgainst: 13,  goalDiff: -8,  points:  6 },
  { rank: 14,  team: 'Chicago Stars'         , played: 7, wins: 2, draws: 0, losses: 5, goalsFor:  4, goalsAgainst: 13,  goalDiff: -9,  points:  6 },
  { rank: 15,  team: 'Racing Louisville'     , played: 6, wins: 1, draws: 1, losses: 4, goalsFor: 10, goalsAgainst: 13,  goalDiff: -3,  points:  4 },
  { rank: 16,  team: 'Boston Legacy'         , played: 6, wins: 0, draws: 1, losses: 5, goalsFor:  3, goalsAgainst: 11,  goalDiff: -8,  points:  1 },
];

// Set automatically by scripts/fetch-standings.ts on each successful update
export const standingsLastUpdated = 'May 2, 2026';

// ============================================================================
// ROSTER — update as trades/injuries occur
// Source: bostonlegacyfc.com/pages/roster
// ============================================================================

export type Position = 'GK' | 'DEF' | 'MID' | 'FWD';

export interface Player {
  number: number;
  name: string;
  position: Position;
  hometown: string;
  countryCode?: string; // ISO 3166-1 alpha-2, only for capped internationals
  notable?: string;
  height?: string;      // e.g. "5'7\""
  bio?: string;
  socialHandle?: string; // without @ prefix
  photo?: string;        // path under /public, e.g. "/players/casey-murphy.webp"
}

export function playerSlug(player: Player, allPlayers?: Player[]): string {
  const parts = player.name.trim().split(/\s+/);
  const firstInitial = parts[0]?.[0] ?? '';
  const lastName = parts[parts.length - 1] ?? parts[0] ?? '';

  const normalize = (s: string) =>
    s
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '') // strip combining accents
      .replace(/[^a-zA-Z0-9]/g, '')    // strip apostrophes, hyphens, etc.
      .toLowerCase();

  const base = `${normalize(lastName)}-${normalize(firstInitial)}`;

  if (allPlayers) {
    const collision = allPlayers.some(
      p => p.number !== player.number && playerSlug(p) === base
    );
    if (collision) return `${base}-${player.number}`;
  }

  return base;
}

export const roster: Player[] = [
  // Goalkeepers
  {
    number: 1, name: 'Casey Murphy', position: 'GK', hometown: 'Bridgewater, NJ',
    countryCode: 'us', notable: 'Olympic Gold Medalist', height: "6'0",
    photo: '/players/casey-murphy.webp', socialHandle: 'caseymurphy11',
    bio: "Casey Murphy has seen extensive time with the US Women's National Team, earning 20 international caps and a gold medal during the 2024 Olympics in France. She also earned 108 caps for the Courage, including an Iron Woman year in 2024 during which she played every minute of the regular season and became the Courage's all-time regular season wins leader. After being traded to the Courage in 2020, Murphy quickly earned a starting position, being named multiple times to NWSL's Best XI for the month and conceding only one goal during the 2023 Challenge Cup, which the Courage ultimately won.",
  },
  {
    number: 18, name: 'Laurel Ivory', position: 'GK', hometown: 'Atlanta, GA',
    height: "5'7", photo: '/players/laurel-ivory.webp', socialHandle: 'laurelivory12',
    bio: "Laurel Ivory comes to Boston with a strong background of excellence in NWSL, helping to win the NWSL Shield with the Washington Spirit in 2021 and the NWSL Championship with Gotham in 2023. In 2024, she was on loan at Racing Louisville before returning to Gotham FC for the 2025 season. Ivory was named to the NWSL Team of the Month for May and September 2024. She attended the University of California, Berkeley, where she played from 2017 to 2020.",
  },
  {
    number: 87, name: 'Hannah Stambaugh', position: 'GK', hometown: 'Tokyo, Japan',
    countryCode: 'jp', height: "5'7", photo: '/players/hannah-stambaugh.webp',
    socialHandle: 'stambaugh_hannah',
    bio: "Hannah Stambaugh originally transferred to Angel City in 2024 from Japanese Club Omiya Ardija Ventus, where she represented Japan with 7 international caps. Having grown up in Tokyo, Stambaugh played college soccer at Santa Clara University before beginning her professional career in Japan. After a loan to Racing Louisville in 2024, she joins Boston Legacy for 2026.",
  },
  // Defenders
  {
    number: 3, name: 'Kaká', position: 'DEF', hometown: 'Brasília, Brazil',
    countryCode: 'br', height: "5'7", photo: '/players/kaka.webp', socialHandle: 'kaka_fgf',
    bio: "Kaká comes to Boston Legacy from top flight Brazilian club São Paulo, with whom she won the inter-league Cup in 2024. She represented Brazil at the youth level and has been capped by the Brazilian senior national team. A versatile defender known for her reading of the game and composure on the ball.",
  },
  {
    number: 4, name: 'Emerson Elgin', position: 'DEF', hometown: 'Franklin Lakes, NJ',
    height: "5'5", photo: '/players/emerson-elgin.webp', socialHandle: 'emerson_elgin_',
    bio: "Emerson Elgin most recently played for Gainbridge Super League side Tampa Bay Sun on loan from the Legacy. A New Jersey native and former University of Virginia standout, Elgin was selected in the 2024 NWSL Draft and brings tenacity and energy to the back line.",
  },
  {
    number: 16, name: 'Jorelyn Carabalí', position: 'DEF', hometown: 'Jamundí, Colombia',
    countryCode: 'co', height: "5'5", photo: '/players/jorelyn-carabali.webp',
    socialHandle: 'jorelyn_j16',
    bio: "Jorelyn Carabalí joined Boston Legacy FC after three seasons with Brighton & Hove Albion, where she made over 50 appearances and established herself as one of the WSL's most tenacious defenders. A regular for the Colombian national team, Carabalí has represented her country at multiple senior international tournaments.",
  },
  {
    number: 20, name: 'Nicki Hernandez', position: 'DEF', hometown: 'Naperville, IL',
    countryCode: 'mx', height: "5'6", photo: '/players/nicki-hernandez.webp',
    socialHandle: 'nickihernandez20',
    bio: "Before coming to Boston, Nicki Hernandez was a stalwart of top Liga MX Femenil side Club América, making over 60 appearances. A dual US-Mexican citizen, Hernandez has chosen to represent Mexico internationally and has earned multiple senior caps for El Tri Femenil.",
  },
  {
    number: 23, name: 'Sam Angel', position: 'DEF', hometown: 'St. Charles, MO',
    height: "5'8", photo: '/players/sam-angel.webp', socialHandle: 'sam.angel00',
    bio: "Angel was initially drafted by Racing Louisville in the fourth round of the 2024 NWSL draft before signing with Boston Legacy. A former University of Notre Dame defender, Angel spent the 2025 season on loan at Tampa Bay Sun in the Gainbridge Super League. Her versatility allows her to play across the back line.",
  },
  {
    number: 24, name: 'Laís Araújo', position: 'DEF', hometown: 'Salvador, Brazil',
    countryCode: 'br', height: "5'9", photo: '/players/lais-araujo.webp',
    socialHandle: 'laiaraujo08',
    bio: "Before joining the Legacy, Laís Araújo played at Benfica, where she won the Campeonato Nacional Feminino. A Brazilian international with senior caps, Araújo brings pace and composure from the back. She has also represented Brazil at multiple youth levels before earning her senior debut.",
  },
  {
    number: 34, name: 'Laurel Ansbrow', position: 'DEF', hometown: 'Cary, NC',
    height: "5'9", photo: '/players/laurel-ansbrow.webp', socialHandle: 'laurelansbrow',
    bio: "Laurel Ansbrow played for four years at Wake Forest, appearing in the 2024 NCAA championship game against UCLA. The Cary, NC native was selected by Boston Legacy in the 2025 NWSL Draft and brings an aerial presence and range of passing that belie her rookie status.",
  },
  {
    number: 53, name: 'Bianca St-Georges', position: 'DEF', hometown: 'Quebec, Canada',
    countryCode: 'ca', height: "5'4", photo: '/players/bianca-st-georges.webp',
    socialHandle: 'biancastgeorges',
    bio: "Before joining the Legacy, Bianca St-Georges played the 2025 season for the Utah Royals, where she scored her first NWSL goal. A Canadian international, St-Georges has earned caps at both the youth and senior level for Canada. She is known for her attacking instincts from the back line.",
  },
  // Midfielders
  {
    number: 5, name: 'Josefine Hasbo', position: 'MID', hometown: 'Copenhagen, Denmark',
    countryCode: 'dk', height: "5'4", photo: '/players/josefine-hasbo.webp',
    socialHandle: 'josefinehasbo',
    bio: "24-year-old Hasbo made 11 appearances for Gotham in 2025 as part of the club's run to the NWSL championship. Previously, she played for Danish powerhouse Brøndby IF, starting at just 17 years old. With Brøndby, Hasbo won the 2019 A-Liga championship and competed in Champions League two seasons in a row. She left Brøndby in 2021, when she moved to the United States to attend Harvard University, where she double-majored in economics and psychology.",
  },
  {
    number: 6, name: 'Annie Karich', position: 'MID', hometown: 'Surfside, CA',
    height: "5'9", photo: '/players/annie-karich.webp', socialHandle: 'anniekarich',
    bio: "Annie Karich comes to Boston from Frauen-Bundesliga club SC Freiburg as a free agent, where Karich was a consistent starter for three seasons. A former University of Virginia Cavalier, Karich was selected in the 2022 NWSL Draft before heading to Germany. Her engine in midfield and ability to win the ball back quickly make her a key piece of Boston's press.",
  },
  {
    number: 11, name: 'Chloe Ricketts', position: 'MID', hometown: 'Dexter, MI',
    height: "5'0", photo: '/players/chloe-ricketts.webp', socialHandle: '_chloericketts39',
    bio: "Chloe Ricketts turned professional at just 15 years old and quickly emerged as one of the league's standout young players. A Michigan native, Ricketts played youth soccer for the NWSL's academy system before earning her first professional contract. Despite her stature, her technical ability and creativity in tight spaces make her a constant threat.",
  },
  {
    number: 15, name: 'Aleigh Gambone', position: 'MID', hometown: 'Clifton, VA',
    height: "5'3", photo: '/players/aleigh-gambone.webp', socialHandle: 'aleigh_gambone',
    bio: "Aleigh Gambone played four years for the University of North Carolina Tar Heels, where she helped UNC win the 2022 ACC Championship. A Virginia native, Gambone was drafted by Boston Legacy in the 2025 NWSL College Draft. Her technical passing and vision in the middle third drew comparisons to some of UNC's greatest midfielders.",
  },
  {
    number: 21, name: 'Barbara Olivieri', position: 'MID', hometown: 'Katy, TX',
    countryCode: 've', height: "5'5", photo: '/players/barbara-olivieri.webp',
    socialHandle: 'barb.olivieri',
    bio: "As a standout midfielder for the Houston Dash, Bárbara Olivieri appeared in 13 matches in 2025, starting 9. A Venezuelan international, Olivieri has earned multiple senior caps and brings an intensity and technical quality developed in South American club football before coming to the NWSL.",
  },
  {
    number: 25, name: 'Sophia Lowenberg', position: 'MID', hometown: 'Trumbull, CT',
    height: "5'7", photo: '/players/sophia-lowenberg.webp', socialHandle: 'ssophlow',
    bio: "Sophia Lowenberg was Boston Legacy FC's first ever college player signing from a local university. She attended Northeastern University in Boston, where she was a four-year starter and team captain. Lowenberg brings local pride and a tireless work rate to midfield, and her familiarity with New England makes her an instant fan favorite.",
  },
  {
    number: 26, name: 'Alba Caño', position: 'MID', hometown: 'Catalonia, Spain',
    countryCode: 'es', height: "5'5", photo: '/players/alba-cano.webp',
    socialHandle: 'albacano_10',
    bio: "Alba Caño made four starts for Barcelona's senior team during the 2024-25 season, tallying one goal and one assist. A product of Barcelona's famed La Masia academy, Caño has represented Spain at the youth level and brings the technical precision and positional intelligence synonymous with Spanish football.",
  },
  // Forwards
  {
    number: 7, name: 'Amanda Allen', position: 'FWD', hometown: 'Mississauga, Canada',
    countryCode: 'ca', height: "5'3", photo: '/players/amanda-allen.webp',
    socialHandle: 'amanda.marriie',
    bio: "Amanda Allen began her professional career with the Orlando Pride as their youngest-ever signing at just 16 years old. After several seasons developing her game in Florida, Allen joined Boston Legacy as a key creative piece in attack. The Canadian forward has earned senior caps for Canada and is known for her pace and ability to take on defenders.",
  },
  {
    number: 8, name: 'Sammy Smith', position: 'FWD', hometown: 'Hanson, MA',
    height: "5'6", photo: '/players/sammy-smith.webp', socialHandle: 'sammysmlth',
    bio: "Sammy Smith joins Boston Legacy from first-division Icelandic club Breiðablik, having helped them win the Úrvalsdeild kvenna in 2024. A Massachusetts native from Hanson, Smith is a homecoming story — playing for her home-state club in front of New England fans. She brings a direct style and a nose for goal developed over several seasons abroad.",
  },
  {
    number: 9, name: 'Amanda Gutierres', position: 'FWD', hometown: 'Brazil',
    countryCode: 'br', notable: "2025 Ballon d'Or Féminin nominee",
    height: "5'7", photo: '/players/amanda-gutierres.webp', socialHandle: 'amandaa_gutierres',
    bio: "Amanda Gutierres was nominated for the 2025 Ballon d'Or Féminin, finishing 21st in the global ranking. A regular for the Brazilian National Team, Gutierres played a key role in securing Brazil's victorious 2025 Copa América Femenina, finishing as joint top scorer with six goals and scoring in the final against Colombia. She claimed the Campeonato Brasileiro Feminino Golden Boot in both 2023 and 2024, and won the prestigious Bola de Prata award in 2024.",
  },
  {
    number: 10, name: 'Ella Stevens', position: 'FWD', hometown: 'Snellville, GA',
    height: "5'8", photo: '/players/ella-stevens.webp', socialHandle: 'ellahstevens',
    bio: "Ella Stevens joined the Legacy from 2025 NWSL national champions Gotham FC, where she made 32 appearances over two seasons. A Georgia native, Stevens played college soccer at Florida State before being selected in the NWSL Draft. Her combination of size, technical ability, and finishing make her a versatile threat across the forward line.",
  },
  {
    number: 12, name: 'Nichelle Prince', position: 'FWD', hometown: 'Ajax, Canada',
    countryCode: 'ca', height: "5'4", photo: '/players/nichelle-prince.webp',
    socialHandle: 'nprince7',
    bio: "Longtime Canadian stalwart Nichelle Prince joins the Legacy from 2025 NWSL Shield winners Kansas City Current. A veteran of multiple Women's World Cups with Canada, Prince brings international pedigree and relentless energy to Boston's attack. Her ability to press from the front and create chances out of nothing makes her a nightmare for defenders.",
  },
  {
    number: 13, name: 'Fauzia Najjemba', position: 'FWD', hometown: 'Nagalama, Uganda',
    countryCode: 'ug', height: "5'6", photo: '/players/fauzia-najjemba.webp',
    socialHandle: 'fauzianajjemba13',
    bio: "Fauzia Najjemba joins Legacy FC from prominent Russian top flight club Dynamo Moscow, where she played for three seasons. Dynamo Moscow obtained Najjemba's rights after paying a transfer fee to Shymkent in the Kazakhstan first division, where she had been recruited after previous striker Racheal Kundananji departed. Najjemba won the league with Shymkent in 2022 and represented them during UEFA Women's Champions League qualifying. She has also represented Uganda at the youth and senior level.",
  },
  {
    number: 14, name: 'Aïssata Traoré', position: 'FWD', hometown: 'Bamako, Mali',
    countryCode: 'ml', height: "5'6", photo: '/players/aissata-traore.webp',
    socialHandle: 'aissatatraore14',
    bio: "Aïssata Traoré was first capped for the Mali senior women's national team in 2018. She was called up to play in the 2022 Africa Women Cup of Nations where she scored a goal against Morocco in the group stage, helping Mali make it to the quarterfinals. A powerful, direct forward, Traoré brings African flair and physical presence to Boston's attack.",
  },
];
