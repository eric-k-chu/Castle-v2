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
    selected: <TrophyIcon className="h-auto w-6 fill-neutral-200" />,
  },
  {
    path: "/streamers",
    name: "streamers",
    icon: <TwitchIcon />,
    selected: <TwitchIcon className="h-auto w-6 fill-neutral-200" />,
  },
  {
    path: "/daily-puzzle",
    name: "daily puzzle",
    icon: <DailyPuzzleIcon />,
    selected: <DailyPuzzleIcon className="h-auto w-6 fill-neutral-200" />,
  },
  {
    path: "/random-puzzle",
    name: "random puzzle",
    icon: <RandomDailyPuzzleIcon />,
    selected: <RandomDailyPuzzleIcon className="h-auto w-6 fill-neutral-200" />,
  },
  {
    path: "/countries",
    name: "countries",
    icon: <WorldIcon />,
    selected: <WorldIcon className="h-auto w-6 fill-neutral-200" />,
  },
];
