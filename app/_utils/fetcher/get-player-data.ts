import {
  getPlayer,
  getPlayerStats,
  getPlayerClubs,
  getPlayerLatestArchive,
  getPlayerTournaments,
} from ".";

/*
 * Calls must be done sequentially
 */
export async function getPlayerData(username: string) {
  const player = await getPlayer(username);
  const stats = await getPlayerStats(username);
  const clubs = await getPlayerClubs(username);
  const archives = await getPlayerLatestArchive(username);
  const tournaments = await getPlayerTournaments(username);

  return {
    player,
    stats,
    clubs,
    archives,
    tournaments,
  };
}
