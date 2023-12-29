export type Title =
  | "GM"
  | "WGM"
  | "IM"
  | "WIM"
  | "FM"
  | "WFM"
  | "NM"
  | "WNM"
  | "CM"
  | "WCM";

type Status =
  | "winner"
  | "eliminated"
  | "withdrew"
  | "removed"
  | "invited"
  | "registered";

export type Endpoint =
  | "stats"
  | "clubs"
  | "profile"
  | "tournaments"
  | "archives";

export type Tab = Extract<
  Endpoint,
  "stats" | "clubs" | "archives" | "tournaments"
>;

export interface Players {
  players: string[];
}

export interface TitledPlayers {
  title: Title;
  name: string;
}

export interface Country {
  code: string;
  name: string;
  src: string;
}

export interface Fetcher<T> {
  data: T | undefined;
  isLoading: boolean | undefined;
  error: unknown;
}

export interface Club {}

export interface Player {
  "@id": string;
  url: string;
  username: string;
  player_id: number;
  title?: string;
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

interface PuzzleBest {
  total_attempts: number;
  score: number;
}

interface PuzzleStat {
  best: PuzzleBest;
}

export interface Stats {
  chess_daily?: GameStat;
  chess960_daily?: GameStat;
  chess_rapid?: GameStat;
  chess_bullet?: GameStat;
  chess_blitz?: GameStat;
  tactics?: TacticsStat;
  lessons?: TacticsStat;
  puzzle_rush?: PuzzleStat;
  fide?: number;
}

export interface Archives {
  archives: string[];
}

interface MatchData {
  url: string;
  "@id": string;
}

interface FinishedMatchData extends MatchData {
  wins: number;
  losses: number;
  draws: number;
  points_awarded: number;
  placement: number;
  status: Exclude<Status, "invited" | "registered">;
  total_players: number;
}

interface InProgMatchData extends MatchData {
  status: Exclude<Status, "invited" | "registered">;
}

interface RegisteredMatchData extends MatchData {
  status: Extract<Status, "invited" | "registered">;
}

export interface Tournaments {
  finished: FinishedMatchData[];
  in_progress: InProgMatchData[];
  registered: RegisteredMatchData[];
}

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

interface PieceData {
  username: string;
  rating: number;
  result: GameResultCode;
  "@id": string;
}

interface AccuracyData {
  white: number;
  black: number;
}

interface Game {
  white: PieceData;
  black: PieceData;
  accuracies?: AccuracyData;
  url: string;
  fen: string;
  pgn: string;
  start_time?: EpochTimeStamp;
  end_Time: EpochTimeStamp;
  time_control: string;
  rules: string;
  eco?: string;
  tournament?: string;
  match?: string;
}

export interface MonthlyArchive {
  games: Game[];
}
