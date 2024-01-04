import { getPlayerSuggestions } from "@/_utils/fetcher";
import { PageLayout, SearchInput } from "./_components";

export default async function HomePage() {
  const players = await getPlayerSuggestions();

  return (
    <PageLayout>
      <div className="pb-[400px] pt-[30px]">
        <div className="mb-10 mt-64 text-center">
          <h1 className="text-2xl font-semibold uppercase drop-shadow-glow sm:text-4xl">
            Castle
          </h1>
          <p className="mt-4 text-base font-medium text-gray-200 drop-shadow-glow sm:text-xl">
            A player search engine. Powered by Chess.com API
          </p>
        </div>
        <SearchInput players={players} />
      </div>
    </PageLayout>
  );
}
