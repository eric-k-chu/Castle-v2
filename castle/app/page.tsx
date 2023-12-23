import { getPlayerData } from "./chessapi/player";
import { SearchInput } from "./components";
import { TITLES } from "./lib/constants";
import { Players, TitledPlayers } from "./lib/types";

async function getPlayerSuggestions(): Promise<TitledPlayers[]> {
  const res = await Promise.all(
    TITLES.map((n) =>
      getPlayerData<Players>(`titled/${n}`).then((data) =>
        data.players.map((name) => ({ title: n, name }) as TitledPlayers),
      ),
    ),
  );
  return res.flat();
}

export default async function Home() {
  const players = await getPlayerSuggestions();

  return (
    <main className="flex min-h-screen flex-col items-center bg-hero bg-cover bg-top bg-no-repeat">
      <div className="mb-10 mt-64 text-center">
        <h1 className="text-2xl font-semibold uppercase drop-shadow-glow sm:text-4xl">
          Castle
        </h1>
        <p className="mt-4 text-base font-medium text-gray-200 drop-shadow-glow sm:text-xl">
          A player search engine. Powered by Chess.com API
        </p>
      </div>
      <SearchInput players={players} />
    </main>
  );
}
