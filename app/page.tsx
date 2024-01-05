import { getPlayerSuggestions } from "@/_utils/fetcher";
import { PageLayout, SearchInput } from "./_components";

export default async function HomePage() {
  const players = await getPlayerSuggestions();

  return (
    <PageLayout>
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-semibold uppercase sm:text-4xl">
            Castle
          </h1>
          <p className="mt-4 text-base font-medium text-gray-200 sm:text-xl">
            A player search engine. Powered by Chess.com API
          </p>
        </div>
        <SearchInput players={players} />
      </div>
    </PageLayout>
  );
}
