import { CHESS_API_TITLED, TITLES } from "@/_lib/constants";
import { TitledPlayers, Players, ChessAPIData } from "@/_lib/types";
import { getError } from "@/_utils";

export async function getTitledPlayers(): Promise<
  ChessAPIData<TitledPlayers[]>
> {
  try {
    const titledPlayers = await Promise.all(
      TITLES.map(async (title) => {
        const res = await fetch(`${CHESS_API_TITLED}${title}`, {
          cache: "force-cache",
        });
        if (!res.ok) throw new Error(`Fetch Error: ${res.status}`);

        const { players } = (await res.json()) as Players;
        return players.map((name) => ({ title, name }));
      }),
    );
    return { data: titledPlayers.flat(), error: undefined };
  } catch (error) {
    return { data: undefined, error: getError(error) };
  }
}
