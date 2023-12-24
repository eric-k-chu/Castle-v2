import { getTitledPlayers } from "@/chessapi/player";
import { TITLES } from "@/lib/constants";
import { TitledPlayers } from "@/lib/types";

export async function getPlayerSuggestions() {
  const res = await Promise.all(
    TITLES.map((n) =>
      getTitledPlayers(n).then((data) =>
        data.players.map((name) => ({ title: n, name }) as TitledPlayers),
      ),
    ),
  );
  return res.flat();
}
