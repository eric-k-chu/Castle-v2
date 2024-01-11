import {
  Archives,
  Clubs,
  CountryClubs,
  CountryPlayers,
  DailyPuzzle,
  Leaderboards,
  MonthlyArchive,
  PlayerProfile,
  Stats,
  Streamers,
  Title,
  TitledPlayers,
  Tournaments,
} from "@/_lib";

export class ChessApi {
  public static baseUrl = "https://api.chess.com/pub/";

  public static async getData<T extends ChessApi>(
    func: () => Promise<T>,
  ): Promise<[data: T | null, error: string | null]> {
    try {
      const res = await func();
      return [res, null];
    } catch (err) {
      return [
        null,
        err instanceof Error ? err.message : "Something has gone wrong!",
      ];
    }
  }

  public static async getPlayerProfile(
    username: string,
  ): Promise<PlayerProfile> {
    const url = ChessApi.baseUrl + `player/${username}`;
    const res = await fetch(url);
    if (!res.ok) throw new ChessApiError(res.status, username);
    return await res.json();
  }

  public static async getTitledPlayers(title: Title): Promise<TitledPlayers> {
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

  public static async getDailyPuzzle(): Promise<DailyPuzzle> {
    const url = ChessApi.baseUrl + "puzzle";
    const res = await fetch(url);
    if (!res.ok) throw new ChessApiError(res.status, "puzzle");
    return await res.json();
  }

  public static async getRandomDailyPuzzle(): Promise<DailyPuzzle> {
    const url = ChessApi.baseUrl + "puzzle/random";
    const res = await fetch(url);
    if (!res.ok) throw new ChessApiError(res.status, "puzzle");
    return await res.json();
  }

  public static async getPlayersByCountry(
    code: string,
  ): Promise<CountryPlayers> {
    const url = ChessApi.baseUrl + `country/${code}/players`;
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new ChessApiError(res.status, `"${code}"`);
    return await res.json();
  }

  public static async getClubsByCountry(code: string): Promise<CountryClubs> {
    const url = ChessApi.baseUrl + `country/${code}/clubs`;
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new ChessApiError(res.status, `"${code}"`);
    return await res.json();
  }
}

class ChessApiError extends Error {
  constructor(
    public status: number,
    public key: string,
  ) {
    let message = "";
    switch (status) {
      case 404:
        message = `No search results for ${key}`;
        break;
      case 410:
        message = `The current URL is unavailable.`;
        break;
      case 429:
        message = `Too many requests have been made.`;
        break;
      default:
        message = "An unknown error has occured.";
    }
    super(message);
  }
}
