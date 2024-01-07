import {
  getPlayerData,
  getPlayerMonthlyArchive,
  getTitledPlayers,
} from "@/_chessapi/player";
import {
  Archives,
  Clubs,
  MonthlyArchive,
  Player,
  Stats,
  TitledPlayers,
  Tournaments,
} from "@/_lib/types";

import { TITLES } from "@/_lib/constants";

export async function getAllPlayerData(username: string) {
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

export async function getPlayerLatestArchive(
  username: string,
): Promise<MonthlyArchive> {
  const archives = await getPlayerArchives(username);
  if (archives.archives.length === 0) return { games: [] };
  const latestUrl = archives.archives[archives.archives.length - 1];
  return await getPlayerMonthlyArchive(latestUrl);
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
  const res: TitledPlayers[][] = [];
  for (const title of TITLES) {
    const data = await getTitledPlayers(title);
    const arr = data.players.map((name) => ({ title, name }));
    res.push(arr);
  }
  return res.flat();
}

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
