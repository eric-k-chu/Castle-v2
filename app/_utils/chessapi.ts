import { ChessApi } from "@/_chessapi";
import { MonthlyArchive, TITLES, TitledPlayer } from "@/_lib";

export async function getAllPlayerData(username: string) {
  const player = await ChessApi.getPlayerProfile(username);
  const stats = await ChessApi.getPlayerStats(username);
  const clubs = await ChessApi.getPlayerClubs(username);
  const archives = await getPlayerLatestArchive(username);
  const tournaments = await ChessApi.getPlayerTournaments(username);

  return {
    player,
    stats,
    clubs,
    archives,
    tournaments,
  };
}

export async function getPlayerLatestArchive(
  username: string,
): Promise<MonthlyArchive> {
  const archives = await ChessApi.getPlayerArchives(username);
  if (archives.archives.length === 0) return { games: [] };
  const latestUrl = archives.archives[archives.archives.length - 1];
  return await ChessApi.getPlayerMonthlyArchive(latestUrl);
}

export async function getPlayerSuggestions() {
  /*
  const res = await Promise.all(
    TITLES.map((n) =>
      getTitledPlayers(n).then((data) =>
        data.players.map((name) => ({ title: n, name }) as TitledPlayers),
      ),
    ),
  );
  */
  const res: TitledPlayer[][] = [];
  for (const title of TITLES) {
    const data = await ChessApi.getTitledPlayers(title);
    const arr = data.players.map((name) => ({ title, name }));
    res.push(arr);
  }
  return res.flat();
}
