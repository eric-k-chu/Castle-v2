"use client";

import { ErrorMsg, Loading, PlayerDisplay } from "@/components";
import { useSearchParams } from "next/navigation";
import { useChessApi } from "@/hooks/useChessApi";
import { getPlayerData } from "@/chessapi/player";
import { Archives, Player, Stats, Tournaments } from "@/lib/types";

async function getPlayerInfo(username: string) {
  const apiCalls = [
    getPlayerData<Player>(`player/${username}`),
    getPlayerData<Stats>(`player/${username}/stats`),
    getPlayerData<Archives>(`player/${username}/games/archives`),
    getPlayerData<Tournaments>(`player/${username}/tournaments`),
  ];

  const [player, stats, archives, tournaments] = await Promise.all(apiCalls);
  return { player, stats, archives, tournaments } as {
    player: Player;
    stats: Stats;
    archives: Archives;
    tournaments: Tournaments;
  };
}

export default function SearchPage() {
  const search = useSearchParams().get("q");
  const { data, isLoading, error } = useChessApi(getPlayerInfo, search);

  if (isLoading) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-hero bg-cover bg-top bg-no-repeat pt-24">
        <Loading />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-hero bg-cover bg-top bg-no-repeat pt-24">
        <ErrorMsg
          error={
            error instanceof Error
              ? error.message
              : "An unknown error has occured."
          }
        />
      </div>
    );
  }

  const { player, stats, archives, tournaments } = data;

  return (
    <div className="flex min-h-screen w-full flex-col bg-hero-2 bg-cover bg-top bg-no-repeat pt-24">
      <div className="mx-auto w-full max-w-7xl px-4">
        <PlayerDisplay player={player} />
      </div>
    </div>
  );
}
