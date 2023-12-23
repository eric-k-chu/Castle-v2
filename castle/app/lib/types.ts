export type Players = {
  players: string[];
};

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

export type TitledPlayers = {
  title: Title;
  name: string;
};

export type Country = {
  code: string;
  name: string;
  src: string;
};

export type ChessApiData<T> = {
  data: T | undefined;
  isLoading: boolean | undefined;
  error: unknown;
};

export type Club = {};

export type Player = {
  "@id": URL;
  url: URL;
  username: string;
  player_id: number;
  title?: string;
  status: string;
  name?: string;
  avatar?: URL;
  location?: string;
  country: URL;
  joined: EpochTimeStamp;
  last_online: EpochTimeStamp;
  followers: number;
  is_streamer: boolean;
  twitch_url?: URL;
  fide?: number;
  league?: string;
  verified: boolean;
};

type StatData = {
  rating: number;
  date: EpochTimeStamp;
};

type GameStat = {
  last?: StatData & {
    rd: number;
  };
  best?: StatData & {
    game: URL;
  };
  record?: {
    win: number;
    loss: number;
    draw: number;
    time_per_move: number;
    timeout_percent: number;
  };
  tournament?: {
    count: number;
    withdraw: number;
    points: number;
    highest_finish: number;
  };
};

type PuzzleStat = {
  highest: StatData;
  lowest: StatData;
};

export type Stats = {
  chess_daily?: GameStat;
  chess960_daily?: GameStat;
  chess_rapid?: GameStat;
  chess_bullet?: GameStat;
  chess_blitz?: GameStat;
  tactics?: PuzzleStat;
  lessons?: PuzzleStat;
  puzzle_rush?: {
    best: {
      total_attempts: number;
      score: number;
    };
  };
  fide?: number;
};

export type Archives = {
  archives: URL[];
};

type FinishedMatchData = {
  url: URL;
  "@id": URL;
  wins: number;
  losses: number;
  draws: number;
  points_awarded: number;
  placement: number;
  status: "winner" | "eliminated" | "withdraw" | "removed";
  total_players: number;
};

type InProgMatchData = Pick<FinishedMatchData, "url" | "@id" | "status">;

type RegisteredMatchData = Pick<FinishedMatchData, "url" | "@id"> & {
  status: "invited" | "registered";
};

export type Tournaments = {
  finished: FinishedMatchData[];
  in_progress: InProgMatchData[];
  registered: RegisteredMatchData[];
};
