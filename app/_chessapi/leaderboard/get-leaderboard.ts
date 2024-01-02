import { CHESS_API_URL } from "@/_lib/constants";
import { Leaderboards } from "@/_lib/types";
import { ChessApiError } from "@/_utils/exceptions";

export async function getLeaderboards(): Promise<Leaderboards> {
  const res = await fetch(CHESS_API_URL + "leaderboards");
  if (!res.ok) throw new ChessApiError(res.status, "Leaderboards");
  return await res.json();
}
