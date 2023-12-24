"use client";

import { ErrorDisplay, Loading, SearchInput } from "./components";
import { useFetcher } from "./hooks/useFetcher";
import { getPlayerSuggestions } from "./utils/fetcher";

export default function Home() {
  const { data, isLoading, error } = useFetcher(getPlayerSuggestions);

  if (isLoading) return <Loading />;

  if (error) return <ErrorDisplay error={error as Error} />;

  if (!data) return <Loading />;

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
      <SearchInput players={data} />
    </main>
  );
}
