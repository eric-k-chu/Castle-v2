import { getPlayerSuggestions } from "@/_utils/fetcher";
import { Logo, PageLayout, SearchInput } from "./_components";

export default async function HomePage() {
  const players = await getPlayerSuggestions();

  return (
    <PageLayout>
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="mb-12 flex w-full max-w-2xl items-center justify-center gap-x-8">
          <Logo className="h-24 w-auto" />
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold uppercase">Castle</h1>
            <p className="text-xl font-medium capitalize text-gray-200">
              a chess.com search engine.
            </p>
          </div>
        </div>
        <SearchInput players={players} />
      </div>
    </PageLayout>
  );
}
