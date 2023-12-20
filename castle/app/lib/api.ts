import { Players } from "./types";
import { ClientError } from "./client-error";

export async function getPlayers(): Promise<Players> {
  const res = await fetch("https://api.chess.com/pub/titled/GM");
  if (!res.ok) {
    throw new ClientError(
      res.status,
      "Error in retrieving players from Chess.com",
    );
  }
  return res.json();
}
