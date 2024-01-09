import {
  DailyPuzzleIcon,
  RandomDailyPuzzleIcon,
  TrophyIcon,
  TwitchIcon,
  WorldIcon,
} from "@/_components/icons";
import { Route } from "./types";
import { ROUTES } from "./constants";

interface RouteObject {
  path: Route;
  name: keyof typeof ROUTES;
  icon: JSX.Element;
}

export const routes: RouteObject[] = [
  {
    path: "/leaderboards/",
    name: "leaderboards",
    icon: <TrophyIcon />,
  },
  {
    path: "/streamers/",
    name: "streamers",
    icon: <TwitchIcon />,
  },
  {
    path: "/daily-puzzle/",
    name: "daily puzzle",
    icon: <DailyPuzzleIcon />,
  },
  {
    path: "/daily-puzzle/random/",
    name: "random puzzle",
    icon: <RandomDailyPuzzleIcon />,
  },
  {
    path: "/countries/",
    name: "countries",
    icon: <WorldIcon />,
  },
];
