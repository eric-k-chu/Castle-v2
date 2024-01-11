import { Country } from "./types";

export const CHESS_API_BASE = "https://api.chess.com/pub/";

export const ROUTES = {
  home: "/",
  player: "/player",
  leaderboards: "/leaderboards",
  streamers: "/streamers",
  "daily puzzle": "/daily-puzzle",
  "random puzzle": "/random-puzzle",
  countries: "/countries",
} as const;

export const TITLES = [
  "GM",
  "WGM",
  "IM",
  "WIM",
  "FM",
  "WFM",
  "NM",
  "WNM",
  "CM",
  "WCM",
] as const;

export const TOURNAMENT_STATES = {
  finished: "Finished Tournaments",
  in_progress: "In Progress Tournaments",
  registered: "Registered Tournaments",
};

export const LEADERBOARDS = {
  daily: "daily",
  daily960: "daily 960",
  live_rapid: "rapid",
  live_blitz: "blitz",
  live_bullet: "bullet",
  live_bughouse: "bughouse",
  live_blitz960: "blitz 960",
  live_threecheck: "3 check",
  live_crazyhouse: "crazyhouse",
  live_kingofthehill: "king of the hill",
  tactics: "puzzles",
  rush: "puzzle rush",
  battle: "puzzle battle",
} as const;

export const USER_ASSIGNED_COUNTRIES: Country[] = [
  {
    code: "XA",
    name: "Canary Islands",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Flag_of_the_Canary_Islands.svg",
  },
  {
    code: "XB",
    name: "Basque Country",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Flag_of_the_Basque_Country.svg",
  },
  {
    code: "XC",
    name: "Catalonia",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg",
  },
  {
    code: "XE",
    name: "England",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg",
  },
  {
    code: "XG",
    name: "Galicia",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Galicia.svg",
  },
  {
    code: "XP",
    name: "Palestine",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg",
  },
  {
    code: "XS",
    name: "Scotland",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg",
  },
  {
    code: "XW",
    name: "Wales",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Wales.svg",
  },
  {
    code: "XX",
    name: "International",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg",
  },
];
