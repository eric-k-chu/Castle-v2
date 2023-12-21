import { ClientError } from "@/_lib/client-error";
import { TITLES } from "@/_lib/constants";
import { TitledPlayers, Players, ChessAPIData, APIError } from "@/_lib/types";

export async function getTitledPlayers(): Promise<
  ChessAPIData<TitledPlayers[]>
> {
  let error: APIError = null;
  const titledPlayers = await Promise.all(
    TITLES.map(async (title) => {
      const res = await fetch(`https://api.chess.com/pub/titled/${title}`, {
        cache: "force-cache",
      });
      error = res.ok ? null : new ClientError(res.status, "Fetch Error.");

      const { players } = (await res.json()) as Players;
      return players.map((name) => ({ title, name }));
    }),
  );

  return { data: titledPlayers.flat(), error };
}
