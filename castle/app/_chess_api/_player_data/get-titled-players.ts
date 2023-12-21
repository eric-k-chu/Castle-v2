import { TITLES } from "@/_lib/constants";
import { TitledPlayers, Players } from "@/_lib/types";

export async function getTitledPlayers(): Promise<TitledPlayers[]> {
  const titledPlayers = await Promise.all(
    TITLES.map(async (title) => {
      const res = await fetch(`https://api.chess.com/pub/titled/${title}`, {
        cache: "force-cache",
      });
      if (!res.ok) {
        throw new Error("Error in retrieving players from Chess.com");
      }
      const { players } = (await res.json()) as Players;
      return players.map((name) => ({ title, name }));
    }),
  );
  return titledPlayers.flat();
}
