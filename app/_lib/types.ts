import { ROUTES, TITLES } from "./constants";

export type Title = (typeof TITLES)[number];

export type Status =
  | "winner"
  | "eliminated"
  | "withdrew"
  | "removed"
  | "invited"
  | "registered";

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

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

export type TournamentState = "finished" | "in_progress" | "registered";
