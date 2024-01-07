import {
  DailyPuzzleIcon,
  TrophyIcon,
  TwitchIcon,
  WorldIcon,
} from "@/_components/icons";
import { Route, RouteKeys } from "./constants";

interface RouteObject {
  path: Route;
  name: RouteKeys;
  icon: JSX.Element;
}

export const routes: RouteObject[] = [
  {
    path: "/leaderboards",
    name: "leaderboards",
    icon: <TrophyIcon />,
  },
  {
    path: "/streamers",
    name: "streamers",
    icon: <TwitchIcon />,
  },
  {
    path: "/daily-puzzles",
    name: "daily puzzles",
    icon: <DailyPuzzleIcon />,
  },
  {
    path: "/countries",
    name: "countries",
    icon: <WorldIcon />,
  },
];
