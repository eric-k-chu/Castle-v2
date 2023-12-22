import { getTitledPlayers } from "./_chess_api/_player_data";
import { SearchInput } from "./_components";

export default async function Home() {
  const { data, error } = await getTitledPlayers();

  if (error || !data) {
    throw error;
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-hero bg-cover bg-top bg-no-repeat">
      <div className="mb-10 mt-64 text-center">
        <h1 className="drop-shadow-glow text-2xl font-semibold uppercase sm:text-4xl">
          Castle
        </h1>
        <p className="drop-shadow-glow mt-4 text-base font-medium text-gray-200 sm:text-xl">
          A player search engine. Powered by Chess.com API
        </p>
      </div>
      <SearchInput players={data} />
    </main>
  );
}
