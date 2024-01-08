import {
  Archives,
  Clubs,
  Leaderboards,
  MonthlyArchive,
  Player,
  Players,
  Stats,
  Streamers,
  Title,
  Tournaments,
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

  public static async getPlayerTournaments(
    username: string,
  ): Promise<Tournaments> {
    const url = ChessApi.baseUrl + `player/${username}/tournaments`;
    const res = await fetch(url);
    if (!res.ok) throw new ChessApiError(res.status, username);
    return await res.json();
  }

  public static async getStreamers(): Promise<Streamers> {
    const url = ChessApi.baseUrl + "streamers";
    const res = await fetch(url);
    if (!res.ok) throw new ChessApiError(res.status, "streamers");
    return await res.json();
  }

  public static async getLeaderboards(): Promise<Leaderboards> {
    const url = ChessApi.baseUrl + "leaderboards";
    const res = await fetch(url);
    if (!res.ok) throw new ChessApiError(res.status, "leaderboards");
    return await res.json();
  }
}
