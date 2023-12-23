import { Suspense } from "react";
import { getPlayerData } from "./chessapi/player";
import { ErrorMsg, Loading, SearchInput } from "./components";
import { TITLES } from "./lib/constants";
import { Players, TitledPlayers } from "./lib/types";

async function getPlayerSuggestions() {
  try {
    const res = await Promise.all(
      TITLES.map((n) =>
        getPlayerData<Players>(`titled/${n}`).then((data) =>
          data.players.map((name) => ({ title: n, name }) as TitledPlayers),
        ),
      ),
    );
    return { players: res.flat(), error: undefined };
  } catch (err) {
    return { players: undefined, error: err };
  }
}

export default async function Home() {
  const { players, error } = await getPlayerSuggestions();

  if (error || !players) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-hero bg-cover bg-top bg-no-repeat">
        <ErrorMsg
          error={
            error instanceof Error
              ? error.message
              : "An unexpected error has occured"
          }
        />
      </div>
    );
  }

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
