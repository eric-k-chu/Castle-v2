import { getTitledPlayers } from "@/chessapi/player";
import { TITLES } from "@/lib/constants";
import { TitledPlayers } from "@/lib/types";

export async function getPlayerSuggestions() {
  /*
  const res = await Promise.all(
    TITLES.map((n) =>
      getTitledPlayers(n).then((data) =>
        data.players.map((name) => ({ title: n, name }) as TitledPlayers),
      ),
    ),
  );
  */
  const res: TitledPlayers[][] = [];
  for (const title of TITLES) {
    const data = await getTitledPlayers(title);
    const arr = data.players.map((name) => ({ title, name }));
    res.push(arr);
  }
  return res.flat();
}
