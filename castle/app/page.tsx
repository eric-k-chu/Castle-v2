import { notFound } from "next/navigation";
import { getCountries } from "./_utils/get-countries";
import { getTitledPlayers } from "./_chess_api/_player_data";
import { SearchInput } from "./_components";

export default async function Home() {
  const players = await getTitledPlayers();
  const countries = getCountries();

  if (!players) {
    throw new Error("Error in fetching data from Chess.com");
  }

  return (
    <main className="flex min-h-screen flex-col items-center overscroll-none bg-hero bg-cover bg-top bg-no-repeat">
      <div className="mb-12 mt-64 text-center">
        <h1 className="text-4xl font-semibold uppercase tracking-wide drop-shadow-lg">
          CASTLE
        </h1>
        <p className="mt-4 text-lg font-medium text-gray-200 drop-shadow-lg">
          A player search engine. Powered by Chess.com API
        </p>
      </div>
      <SearchInput countries={countries} players={players} />
    </main>
  );
}
