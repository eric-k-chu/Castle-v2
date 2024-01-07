export const CHESS_API_BASE = "https://api.chess.com/pub/";

export const ROUTES = {
  home: "/",
  player: "/player",
  leaderboards: "/leaderboards",
  streamers: "/streamers",
  "daily puzzles": "/daily-puzzles",
  countries: "/countries",
} as const;

export type RouteKeys = keyof typeof ROUTES;

export type Route = (typeof ROUTES)[RouteKeys];
