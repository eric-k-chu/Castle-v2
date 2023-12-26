"use client";

import { ErrorDisplay, Loading, PlayerDataDisplay } from "@/_components";
import { useSearchParams } from "next/navigation";
import { useFetcher } from "@/_hooks/useFetcher";
import { getPlayer } from "@/_utils/fetcher";
import { PlayerProfileDisplay } from "@/_components/PlayerProfileDisplay";

export default function SearchPage() {
  const search = useSearchParams().get("q");
  const { data, isLoading, error } = useFetcher(getPlayer, search);

  if (isLoading) return <Loading />;

  if (error) return <ErrorDisplay error={error} />;

  if (!data) return <Loading />;

  return (
    <div className="flex min-h-screen w-full flex-col bg-hero-2 bg-cover bg-top bg-no-repeat pt-24">
      <div className="mx-auto w-full max-w-7xl px-4">
        <PlayerProfileDisplay player={data} />
        <PlayerDataDisplay username={search} />
      </div>
    </div>
  );
}
