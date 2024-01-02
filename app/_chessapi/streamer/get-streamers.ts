import { CHESS_API_URL } from "@/_lib/constants";
import { Streamers } from "@/_lib/types";
import { ChessApiError } from "@/_utils/exceptions";

export async function getStreamers(): Promise<Streamers> {
  const res = await fetch(CHESS_API_URL + "streamers");
  if (!res.ok) throw new ChessApiError(res.status, "Streamers");
  return await res.json();
}
