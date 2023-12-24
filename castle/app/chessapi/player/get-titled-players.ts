import { CHESS_API_URL } from "@/lib/constants";
import { Players, Title } from "@/lib/types";
import { ChessApiError } from "@/utils/exceptions";

export async function getTitledPlayers(title: Title): Promise<Players> {
  const url = createUrl(title);
  const res = await fetch(url);
  if (!res.ok) throw new ChessApiError(res.status, title);
  return await res.json();
}

function createUrl(title: Title) {
  return `${CHESS_API_URL}titled/${title}`;
}
