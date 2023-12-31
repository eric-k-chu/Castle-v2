import { getPlayerData } from "@/_chessapi/player";
import { Clubs, Player, Archives, Tournaments, Stats } from "@/_lib/types";

export async function getPlayer(username: string | null): Promise<Player> {
  return await getPlayerData<Player>(username, "profile");
}

export async function getPlayerStats(username: string | null): Promise<Stats> {
  return await getPlayerData<Stats>(username, "stats");
}
export async function getPlayerClubs(username: string | null): Promise<Clubs> {
  return await getPlayerData<Clubs>(username, "clubs");
}
export async function getPlayerArchives(
  username: string | null,
): Promise<Archives> {
  return await getPlayerData<Archives>(username, "archives");
}
export async function getPlayerTournaments(
  username: string | null,
): Promise<Tournaments> {
  return await getPlayerData<Tournaments>(username, "tournaments");
}
