"use client";

import { ErrorDisplay, Loading } from "@/_components";
import { useSearchParams } from "next/navigation";
import { useFetcher } from "@/_hooks/useFetcher";
import { getPlayer } from "@/_utils/fetcher";
import { PlayerProfileDisplay, PlayerDataDisplay } from "./_components";

export default function SearchPage() {
  const search = useSearchParams().get("q");
  const { data, isLoading, error } = useFetcher(getPlayer, search);

  if (isLoading) return <Loading />;

  if (error) return <ErrorDisplay error={error} />;

  if (!data) return <Loading />;

  return (
    <div className="flex w-full flex-col pt-24">
      <div className="mx-auto w-full max-w-7xl px-4">
        <PlayerProfileDisplay player={data} />
        <PlayerDataDisplay username={search} />
      </div>
    </div>
  );
}
