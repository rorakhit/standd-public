export interface WNBAGame {
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
  season_type: string | null;
}

export interface WNBAStanding {
  team: string;           // team slug
  wins: number;
  losses: number;
  win_pct: number;
  games_behind: number | null;
  conference: string;
  points_for: number | null;
  points_against: number | null;
  point_differential: number | null;
  home_record: string | null;
  away_record: string | null;
  last_10: string | null;
  streak: string | null;
  conference_record: string | null;
  playoff_seed: number | null;
}

export interface WNBATeamStats {
  team: string;           // team slug
  games_played: number;
  avg_points: number | null;
  avg_points_against: number | null;
  avg_rebounds: number | null;
  avg_assists: number | null;
  avg_turnovers: number | null;
  avg_steals: number | null;
  avg_blocks: number | null;
  field_goal_pct: number | null;
  three_point_pct: number | null;
  free_throw_pct: number | null;
  scoring_efficiency: number | null;
  shooting_efficiency: number | null;
  updated_at: string;
}
