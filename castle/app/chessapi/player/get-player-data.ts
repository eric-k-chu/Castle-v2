import { CHESS_API_URL } from "@/lib/constants";
import { getError } from "@/utils";

export async function getPlayerData<T>(slug: string): Promise<T> {
  const res = await fetch(CHESS_API_URL + slug);
  if (!res.ok) throw new Error(getError(res.status));
  return await res.json();
}
