import { CHESS_API_BASE } from "@/_lib/constants";

export function getTournamentName(url: string): string {
  const urlPattern = `${CHESS_API_BASE}tournament/`;
  return url
    .split(urlPattern)[1]
    .split("-")
    .filter((n) => n.length > 0)
    .join(" ");
}
