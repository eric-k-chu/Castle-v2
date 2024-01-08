import {
  Archives,
  Clubs,
  MonthlyArchive,
  Player,
  Players,
  Stats,
  Title,
} from "@/_lib/types";
import { ChessApiError } from "@/_utils";

export class ChessApi {
  private static baseUrl = "https://api.chess.com/pub/";

  public static async getPlayerProfile(username: string): Promise<Player> {
    const url = ChessApi.baseUrl + `player/${username}`;
    const res = await fetch(url);
    if (!res.ok) throw new ChessApiError(res.status, username);
    return await res.json();
  }

  public static async getTitledPlayers(title: Title): Promise<Players> {
    const url = ChessApi.baseUrl + `titled/${title}`;
    const res = await fetch(url);
    if (!res.ok) throw new ChessApiError(res.status, title);
    return await res.json();
  }

  public static async getPlayerStats(username: string): Promise<Stats> {
    const url = ChessApi.baseUrl + `player/${username}/stats`;
    const res = await fetch(url);
    if (!res.ok) throw new ChessApiError(res.status, username);
    return await res.json();
  }

  public static async getPlayerArchives(username: string): Promise<Archives> {
    const url = ChessApi.baseUrl + `player/${username}/games/archives`;
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new ChessApiError(res.status, username);
    return await res.json();
  }

  public static async getPlayerMonthlyArchive(
    url: string,
  ): Promise<MonthlyArchive> {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new ChessApiError(res.status, url);
    return await res.json();
  }

  public static async getPlayerClubs(username: string): Promise<Clubs> {
    const url = ChessApi.baseUrl + `player/${username}/clubs`;
    const res = await fetch(url);
    if (!res.ok) throw new ChessApiError(res.status, username);
    return await res.json();
  }
}
