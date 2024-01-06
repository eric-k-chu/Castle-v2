import { Route } from "./types";

export const routes: Readonly<Record<Route, string>> = {
  leaderboards: "Leadeboards",
  streamers: "Streamers",
  "daily-puzzles": "Daily Puzzles",
  countries: "Countries",
};

export function getRoutes(): Route[] {
  return Object.keys(routes) as Route[];
}
