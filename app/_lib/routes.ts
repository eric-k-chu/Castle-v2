interface RouteObject {
  name: string;
}

export type Route =
  | "leaderboards"
  | "streamers"
  | "daily-puzzles"
  | "countries";

export const routes: Readonly<Record<Route, RouteObject>> = {
  leaderboards: {
    name: "Leaderboards",
  },
  streamers: {
    name: "Streamers",
  },
  "daily-puzzles": {
    name: "Daily Puzzles",
  },
  countries: {
    name: "Countries",
  },
};

export function getRoutes(): Route[] {
  return Object.keys(routes) as Route[];
}
