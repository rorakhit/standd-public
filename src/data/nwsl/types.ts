export interface NWSLGame {
  id: string;
  date: string;           // YYYY-MM-DD
  home_team: string;      // team slug
  away_team: string;      // team slug
  home_score: number | null;
  away_score: number | null;
  broadcast: string[];
  status: 'scheduled' | 'final';
  venue: string | null;
  time: string | null;
  utc_datetime: string | null;
  season_type: string | null;
}

export interface NWSLPlayer {
  id: string;
  team_slug: string;
  name: string;
  number: number | null;
  position: 'GK' | 'DEF' | 'MID' | 'FWD';
  height: string | null;
  country_code: string | null;
  hometown: string | null;
  photo_url: string | null;
}

export interface NWSLGameStats {
  event_id: string;
  team_slug: string;
  home_away: string;
  formation: string | null;
  possession: number | null;
  shots: number | null;
  shots_on_target: number | null;
  passes: number | null;
  pass_pct: number | null;
  tackles: number | null;
  interceptions: number | null;
  corners: number | null;
  saves: number | null;
  attendance: number | null;
}

export interface NWSLPlayerEvent {
  id: string;
  event_id: string;
  espn_id: string;
  team_slug: string;
  player_name: string;
  starter: number;         // 1 | 0
  formation_place: number | null;
  position_name: string | null;
  subbed_in: number;
  subbed_out: number;
  sub_minute: number | null;
  goals: number;
  assists: number;
  yellow_cards: number;
  red_cards: number;
  own_goals: number;
  penalty_goals: number;
  saves: number;
  goals_conceded: number;
  appearances: number;
  fouls_committed: number | null;
  fouls_suffered: number | null;
  shots: number | null;
  shots_on_target: number | null;
  offsides: number | null;
}

export interface NWSLStanding {
  team: string;              // team slug
  wins: number;
  losses: number;
  draws: number;
  points: number;
  games_played: number;
  goals_for: number | null;
  goals_against: number | null;
  goal_differential: number | null;
  overall: string | null;    // "W-L-D" string
  rank: number | null;
}
