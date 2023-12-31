export function getTournamentName(url: string): string {
  const urlPattern = "https://api.chess.com/pub/tournament/";
  return url
    .split(urlPattern)[1]
    .split("-")
    .filter((n) => n.length > 0)
    .join(" ");
}
