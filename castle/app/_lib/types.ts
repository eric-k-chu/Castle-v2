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

export type ChessAPIData<T> = {
  data: T | undefined;
  error: Error | undefined;
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
