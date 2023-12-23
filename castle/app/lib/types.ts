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

export interface ChessApiData<T> {
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
  twitch_string?: string;
  fide?: number;
  league?: string;
  verified: boolean;
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
  last?: Last;
  best?: Best;
  record?: Record;
  tournament?: Tournament;
}

interface TacticsStat {
  highest: StatData;
  lowest: StatData;
}

interface PuzzleBest {
  total_attemps: number;
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

type Status =
  | "winner"
  | "eliminated"
  | "withdraw"
  | "removed"
  | "invited"
  | "registered";

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
