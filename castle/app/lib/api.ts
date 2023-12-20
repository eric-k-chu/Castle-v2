import { Players, Title, TitledPlayers } from "./types";
import { ClientError } from "./client-error";

async function getTitledPlayers(title: Title): Promise<TitledPlayers[]> {
  const res = await fetch(`https://api.chess.com/pub/titled/${title}`);
  if (!res.ok) {
    throw new ClientError(
      res.status,
      "Error in retrieving players from Chess.com",
    );
  }
  const { players } = (await res.json()) as Players;
  return players.map((name) => ({ title, name }));
}

export async function getAllTitledPlayers(): Promise<TitledPlayers[]> {
  const players = sessionStorage.getItem("titledPlayers");
  if (players) {
    return JSON.parse(players);
  }

  const titles: Title[] = [
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
  ];
  const titledPlayers = await Promise.all(
    titles.map((title) => getTitledPlayers(title)),
  );
  const names = titledPlayers.flat();
  sessionStorage.setItem("titledPlayers", JSON.stringify(names));
  return names;
}
