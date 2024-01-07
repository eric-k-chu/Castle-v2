import {
  DailyPuzzleIcon,
  TrophyIcon,
  TwitchIcon,
  WorldIcon,
} from "@/_components/icons";

interface RouteObject {
  path: string;
  name: string;
  icon: JSX.Element;
}

export const routes: RouteObject[] = [
  {
    path: "leaderboards",
    name: "Leaderboards",
    icon: <TrophyIcon />,
  },
  {
    path: "streamers",
    name: "Streamers",
    icon: <TwitchIcon />,
  },
  {
    path: "daily-puzzles",
    name: "Daily Puzzles",
    icon: <DailyPuzzleIcon />,
  },
  {
    path: "countries",
    name: "Countries",
    icon: <WorldIcon />,
  },
];
