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
  selected: JSX.Element;
}

export const routes: RouteObject[] = [
  {
    path: "/leaderboards",
    name: "leaderboards",
    icon: <TrophyIcon />,
    selected: <TrophyIcon className="fill-primary-1 h-auto w-6" />,
  },
  {
    path: "/streamers",
    name: "streamers",
    icon: <TwitchIcon />,
    selected: <TwitchIcon className="fill-primary-1 h-auto w-6" />,
  },
  {
    path: "/daily-puzzle",
    name: "daily puzzle",
    icon: <DailyPuzzleIcon />,
    selected: <DailyPuzzleIcon className="fill-primary-1 h-auto w-6" />,
  },
  {
    path: "/daily-puzzle/random",
    name: "random puzzle",
    icon: <RandomDailyPuzzleIcon />,
    selected: <RandomDailyPuzzleIcon className="fill-primary-1 h-auto w-6" />,
  },
  {
    path: "/countries",
    name: "countries",
    icon: <WorldIcon />,
    selected: <WorldIcon className="fill-primary-1 h-auto w-6" />,
  },
];
