import { CHESS_API_BASE } from "@/_lib/constants";
import { Leaderboards } from "@/_lib/types";
import { ChessApiError } from "@/_utils";

export async function getLeaderboards(): Promise<Leaderboards> {
  const res = await fetch(CHESS_API_BASE + "leaderboards");
  if (!res.ok) throw new ChessApiError(res.status, "Leaderboards");
  return await res.json();
}
