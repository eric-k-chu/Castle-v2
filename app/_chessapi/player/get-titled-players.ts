import { CHESS_API_BASE } from "@/_lib/constants";
import { Title, Players } from "@/_lib/types";
import { ChessApiError } from "@/_utils/exceptions";

export async function getTitledPlayers(title: Title): Promise<Players> {
  const url = createUrl(title);
  const res = await fetch(url);
  if (!res.ok) throw new ChessApiError(res.status, title);
  return await res.json();
}

function createUrl(title: Title) {
  return `${CHESS_API_BASE}titled/${title}`;
}
