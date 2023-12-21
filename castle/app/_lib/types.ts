export type Players = {
  players: string[];
};

export type Title =
  | "GM"
  | "WGM"
  | "IM"
  | "WIM"
  | "FM"
  | "WFM"
  | "NM"
  | "WNM"
  | "CM"
  | "WCM";

export type TitledPlayers = {
  title: Title;
  name: string;
};

export type Country = {
  code: string;
  name: string;
  src: string;
};
