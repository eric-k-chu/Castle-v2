import { TitledPlayers } from "@/_lib/types";

export function filterPlayers(
  players: TitledPlayers[] | undefined,
  query: string,
  limit = 3,
): TitledPlayers[] | undefined {
  return players
    ?.filter((player) =>
      player.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    )
    .slice(0, limit);
}
