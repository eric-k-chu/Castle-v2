import { ClientError } from "./client-error";

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

export type APIError = ClientError | null;

export type ChessAPIData<T> = {
  data: T;
  error: APIError;
};

export type Club = {
  "@id": string;
  name: string;
  club_id: number;
  country: string;
  average_daily_rating: number;
  members_count: number;
  created: number;
  last_activity: number;
  admin: string[];
  visibility: "public" | "private";
  join_request: string;
  icon: string;
  description: string;
  url: string;
};
