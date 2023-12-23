"use client";

import Image from "next/image";
import { ErrorMsg, Loading } from "@/components";
import { useSearchParams } from "next/navigation";
import { useChessApi } from "@/hooks/useChessApi";
import { getPlayerData } from "@/chessapi/player";
import { Archives, Player, Stats, Tournaments } from "@/lib/types";
import { getDate } from "@/utils";

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
    <div className="bg-hero-2 flex min-h-screen w-full flex-col bg-cover bg-top bg-no-repeat pt-24">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex items-center">
            <div className="relative flex items-center justify-center">
              <Image
                src={String(player?.avatar)}
                alt="avatar"
                width="0"
                height="0"
                unoptimized
                className={`h-20 w-20 rounded-full border-2 bg-black sm:h-24 sm:w-24 ${
                  player.verified ? "border-green-500" : "border-black"
                }`}
              />
              <h3 className="absolute bottom-0 rounded-sm bg-green-400/90 px-1 text-sm font-medium uppercase text-black empty:hidden">
                {player.verified && "Verified"}
              </h3>
            </div>
            <div className="ml-8 flex flex-col gap-y-4">
              <h1 className="flex items-center text-2xl font-semibold sm:text-4xl">
                {player.username}
                <span className="ml-4 rounded-md bg-[#7C2929] px-2 py-0.5 font-mono text-lg text-white empty:hidden">
                  {player?.title}
                </span>
              </h1>
              <div className="flex items-center gap-x-2 text-sm text-gray-300 empty:hidden sm:text-lg">
                <h2 className="empty:hidden">{player?.name}</h2>
                <h2 className="empty:hidden">{player?.location}</h2>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-end gap-2 sm:flex-row md:ml-auto md:flex-col lg:flex-row">
            <a
              className="flex h-10 w-36 items-center rounded-sm border-2 border-gray-600 bg-black p-2 px-4 text-xl hover:border-blue-600 hover:bg-blue-600 md:h-12 md:w-48"
              target="_blank"
              href={String(player.url)}
            >
              <Image
                src="/icons/chess-com.svg"
                alt="Chess.com Logo"
                width="0"
                height="0"
                className="h-auto w-2 sm:w-4"
              />
              <h2 className="px-2 text-xs uppercase md:text-base">Chess.com</h2>
              <Image
                src="/icons/exit.svg"
                alt="exit icon"
                width="0"
                height="0"
                className="ml-auto h-auto w-4 sm:w-6"
              />
            </a>
            <a
              className={`h-10 w-36 items-center rounded-sm border-2 border-gray-600 bg-black p-2 px-4 text-xl hover:border-blue-600 hover:bg-blue-600 md:h-12 md:w-48 ${
                player?.twitch_url ? "flex" : "hidden"
              }`}
              target="_blank"
              href={String(player?.twitch_url)}
            >
              <Image
                src="/icons/twitch.svg"
                alt="Twitch Logo"
                width="0"
                height="0"
                className="h-auto w-4 sm:w-6"
              />
              <h2 className="px-2 text-xs uppercase md:text-base">Twitch</h2>
              <Image
                src="/icons/exit.svg"
                alt="exit icon"
                width="0"
                height="0"
                className="ml-auto h-auto w-4 sm:w-6"
              />
            </a>
          </div>
        </div>
        <div className="mt-0 grid w-full grid-cols-4 gap-4 border-b-2 border-b-gray-600 py-10 text-xs md:mt-10 md:text-sm">
          <div className="flex items-center justify-center gap-x-2 rounded-md border border-gray-600 bg-gray-900 px-4 py-3">
            <Image
              src="/icons/followers.svg"
              alt="followers icon"
              width="0"
              height="0"
              className="h-auto w-5"
            />
            {player.followers.toLocaleString()}
          </div>
          <div className="flex items-center justify-center gap-x-2 rounded-md border border-gray-600 bg-gray-900 px-4 py-3">
            <Image
              src={`/icons/${
                player?.league ? player.league.toLocaleLowerCase() : "no-league"
              }.svg`}
              alt={`${player?.league ? player.league : "no league"} icon`}
              width="0"
              height="0"
              className="h-auto w-7"
            />
            <span className="uppercase">
              {player?.league ? player.league : "No division found"}
            </span>
          </div>
          <div className="flex items-center justify-center gap-x-2 rounded-md border border-gray-600 bg-gray-900 px-4 py-3">
            <Image
              src="/icons/pawn.svg"
              alt="pawn icon"
              width="0"
              height="0"
              className="h-auto w-4"
            />
            {getDate(player.joined)}
          </div>
          <div className="flex items-center justify-center gap-x-2 rounded-md border border-gray-600 bg-gray-900 px-4 py-3">
            <Image
              src="/icons/status.svg"
              alt="status icon"
              width="0"
              height="0"
              className="h-auto w-5"
            />
            {getDate(player.last_online)}
          </div>
        </div>
      </div>
    </div>
  );
}
