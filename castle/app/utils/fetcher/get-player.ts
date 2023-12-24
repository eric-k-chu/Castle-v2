import { getPlayerData } from "@/chessapi/player";
import { PlayerInfo, Player, Archives, Tournaments, Stats } from "@/lib/types";

export async function getPlayer(username: string | null): Promise<PlayerInfo> {
  const player = await getPlayerData<Player>(username, "profile");
  const stats = await getPlayerData<Stats>(username, "stats");
  const archives = await getPlayerData<Archives>(username, "archives");
  const tournaments = await getPlayerData<Tournaments>(username, "tournaments");

  return { player, stats, archives, tournaments };
}
