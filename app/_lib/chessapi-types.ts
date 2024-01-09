import { LEADERBOARDS } from ".";
import { Status, Title } from "./types";

export interface DailyPuzzle {
  title: string;
  url: string;
  publish_time: EpochTimeStamp;
  fen: string;
  pgn: string;
  image: string;
}

// /titled/{Title}

export interface TitledPlayers {
  players: string[];
}

export interface TitledPlayer {
  title: Title;
  name: string;
}

// /player/{username}

export interface PlayerProfile {
  "@id": string;
  url: string;
  username: string;
  player_id: number;
  title?: Title;
  status: string;
  name?: string;
  avatar?: string;
  location?: string;
  country: string;
  joined: EpochTimeStamp;
  last_online: EpochTimeStamp;
  followers: number;
  is_streamer: boolean;
  fide?: number;
  league?: string;
  verified: boolean;
  twitch_url: string;
}

// /player/{username}/stats

interface StatData {
  rating: number;
  date: EpochTimeStamp;
}

interface Last extends StatData {
  rd: number;
}

interface Best extends StatData {
  game: string;
}

interface GameStat {
  last: Last;
  best: Best;
  record: Record;
  tournament?: Tournament;
}

interface TacticsStat {
  highest: StatData;
  lowest: StatData;
}

export interface Stats {
  chess_daily?: GameStat;
  chess960_daily?: GameStat;
  chess_rapid?: GameStat;
  chess_bullet?: GameStat;
  chess_blitz?: GameStat;
  tactics?: TacticsStat;
  lessons?: TacticsStat;
  puzzle_rush: {
    best?: {
      total_attempts: number;
      score: number;
    };
  };
  fide?: number;
}

// /player/{username}/tournaments

interface Record {
  win: number;
  loss: number;
  draw: number;
  time_per_move: number;
  timeout_percent: number;
}

interface Tournament {
  count: number;
  withdraw: number;
  points: number;
  highest_finish: number;
}

interface MatchData {
  url: string;
  "@id": string;
}

export interface FinishedMatchData extends MatchData {
  wins: number;
  losses: number;
  draws: number;
  points_awarded: number;
  placement: number;
  status: Exclude<Status, "invited" | "registered">;
  total_players: number;
}

export interface InProgMatchData extends MatchData {
  status: Exclude<Status, "invited" | "registered">;
}

export interface RegisteredMatchData extends MatchData {
  status: Extract<Status, "invited" | "registered">;
}

export interface Tournaments {
  finished: FinishedMatchData[];
  in_progress: InProgMatchData[];
  registered: RegisteredMatchData[];
}

// /player/{username}/clubs

interface ClubInfo {
  "@id": string;
  name: string;
  last_activity: EpochTimeStamp;
  icon: string;
  url: string;
  joined: EpochTimeStamp;
}

export interface Clubs {
  clubs: ClubInfo[];
}

// /player/{username}/games/archives

export interface Archives {
  archives: string[];
}

// /player/{username}/games/{yyyy}/{mm}

export type GameResultCode =
  | "win"
  | "checkmated"
  | "agreed"
  | "repetition"
  | "timeout"
  | "resigned"
  | "stalemate"
  | "lose"
  | "insufficient"
  | "50move"
  | "abandoned"
  | "kingofthehill"
  | "threecheck"
  | "timevsinsufficient"
  | "bughousepartnerlose";

export interface PieceData {
  username: string;
  rating: number;
  result: GameResultCode;
  "@id": string;
}

interface Game {
  white: PieceData;
  black: PieceData;
  accuracies?: {
    white: number;
    black: number;
  };
  url: string;
  fen: string;
  pgn: string;
  start_time?: EpochTimeStamp;
  end_time: EpochTimeStamp;
  time_control: string;
  rules: string;
  eco?: string;
  tournament?: string;
  match?: string;
  rated?: boolean;
  tcn: string;
  uuid: string;
  time_class: string;
}

export interface MonthlyArchive {
  games: Game[];
}

// /leaderboards

export interface Trend {
  direction: -1 | 0 | 1;
  delta: number;
}

export interface LeaderboardPlayer {
  player_id: number;
  "@id": string;
  url: string;
  username: string;
  score: number;
  rank: number;
  country?: string;
  title?: Title;
  name?: string;
  status: string;
  avatar?: string;
  trend_score?: Trend;
  trend_rank?: Trend;
  flair_code?: string;
  win_count: number;
  loss_count: number;
  draw_count: number;
}

type LeaderboardMap = {
  [K in keyof typeof LEADERBOARDS]: LeaderboardPlayer[];
};

export interface Leaderboards extends LeaderboardMap {}

// /streamers

interface Streamer {
  username: string;
  avatar?: string;
  twitch_url: string;
  url: string;
  is_live: boolean;
  is_community_streamer: boolean;
}

export interface Streamers {
  streamers: Streamer[];
}
