import { CHESS_API_BASE } from "@/_lib/constants";
import { Endpoint } from "@/_lib/types";
import { ChessApiError } from "@/_utils";

export async function getPlayerData<T>(
  username: string | null,
  endpoint: Endpoint,
): Promise<T> {
  if (!username) throw new Error("Username cannot be empty.");
  const url = createUrl(username, endpoint);
  const res = await fetch(url);
  if (!res.ok) throw new ChessApiError(res.status, username);
  return await res.json();
}

export async function getPlayerMonthlyArchive(url: string) {
  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) throw new ChessApiError(res.status, url);
  return await res.json();
}

function createUrl(username: string, endpoint: Endpoint) {
  let url = CHESS_API_BASE + "player";
  switch (endpoint) {
    case "profile":
      url += `/${username}`;
      break;
    case "clubs":
      url += `/${username}/clubs`;
      break;
    case "archives":
      url += `/${username}/games/archives`;
      break;
    case "tournaments":
      url += `/${username}/tournaments`;
      break;
    case "stats":
      url += `/${username}/stats`;
      break;
    default:
      throw new Error("Faulty Endpoint");
  }
  return url;
}
