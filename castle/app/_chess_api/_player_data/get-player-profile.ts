import { CHESS_API_PROFILE } from "@/_lib/constants";
import { ChessAPIData, Player } from "@/_lib/types";
import { getError } from "@/_utils";

export async function getPlayerProfile(
  username: string | null,
): Promise<ChessAPIData<Player>> {
  try {
    if (!username) throw new Error("Username is undefined");

    const res = await fetch(`${CHESS_API_PROFILE}${username.trim()}`);
    if (!res.ok) throw new Error(`Fetch Error: ${res.status}`);

    const player = (await res.json()) as Player;

    if (!player) throw new Error(`Username does not exist: ${404}`);

    return { data: player, error: undefined };
  } catch (error) {
    return { data: undefined, error: getError(error) };
  }
}
