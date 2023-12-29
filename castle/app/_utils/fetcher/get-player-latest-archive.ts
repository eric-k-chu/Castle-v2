import { MonthlyArchive } from "@/_lib/types";
import { getPlayerArchives } from ".";
import { getPlayerMonthlyArchive } from "@/_chessapi/player";

export async function getPlayerLatestArchive(
  username: string,
): Promise<MonthlyArchive> {
  const archives = await getPlayerArchives(username);
  if (archives.archives.length === 0) return { games: [] };
  const latestUrl = archives.archives[archives.archives.length - 1];
  return await getPlayerMonthlyArchive(latestUrl);
}
