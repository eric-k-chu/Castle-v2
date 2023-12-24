"use client";

import { ErrorDisplay, Loading, PlayerDisplay } from "@/components";
import { useSearchParams } from "next/navigation";
import { useFetcher } from "@/hooks/useFetcher";

import { getPlayer } from "@/utils/fetcher";

export default function SearchPage() {
  const search = useSearchParams().get("q");
  const { data, isLoading, error } = useFetcher(getPlayer, search);

  if (isLoading) return <Loading />;

  if (error) return <ErrorDisplay error={error as Error} />;

  if (!data) return <Loading />;

  return (
    <div className="flex min-h-screen w-full flex-col bg-hero-2 bg-cover bg-top bg-no-repeat pt-24">
      <div className="mx-auto w-full max-w-7xl px-4">
        <PlayerDisplay player={data?.player} />
      </div>
    </div>
  );
}
