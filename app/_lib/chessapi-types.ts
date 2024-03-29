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

interface Tournament {
  count: number;
  withdraw: number;
  points: number;
  highest_finish: number;
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

export interface FinishedTournament extends UnfinishedTournament {
  wins: number;
  losses: number;
  draws: number;
  points_awarded: number;
  placement: number;
  status: string;
  total_players: number;
}

export interface UnfinishedTournament {
  url: string;
  "@id": string;
  status: string;
}

export interface Tournaments {
  finished: FinishedTournament[];
  in_progress: UnfinishedTournament[];
  registered: UnfinishedTournament[];
}

// /player/{username}/clubs

export interface ClubInfo {
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

export interface Game {
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

// /country/{code}/players

export interface CountryPlayers {
  players: string[];
  comment: string;
}

// /country/{code}/clubs

export interface CountryClubs {
  clubs: string[];
}

// /club/{club-name}

export interface Club {
  "@id": string;
  name: string;
  club_id: number;
  country: string;
  location: string;
  average_daily_rating: number;
  members_count: number;
  created: EpochTimeStamp;
  last_activity: EpochTimeStamp;
  admin: string[];
  visibility: "private" | "public";
  join_request: string;
  icon: string;
  description: string;
  url: string;
}

// /club/{club-name}/members

interface ClubMember {
  username: string;
  joined: EpochTimeStamp;
}

export interface ClubMembers {
  weekly: ClubMember[];
  monthly: ClubMember[];
  all_time: ClubMember[];
}

export interface PlayerData {
  player: PlayerProfile;
  stats: Stats;
  clubs: Clubs;
  archives: MonthlyArchive;
  tournaments: Tournaments;
}
