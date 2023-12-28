import { Player } from "@/_lib/types";
import Image from "next/image";
import { getDateFromUtc } from "@/_utils";

type Props = {
  player: Player;
};

export function PlayerProfileDisplay({ player }: Props) {
  return (
    <>
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
            <h1 className="flex items-center text-2xl font-semibold drop-shadow-glow sm:text-4xl">
              {player.username}
              <span className="ml-4 rounded-md bg-[#7C2929] px-2 py-0.5 font-mono text-lg text-white empty:hidden">
                {player?.title}
              </span>
            </h1>
            <div className="flex items-center gap-x-2 text-sm text-gray-300 empty:hidden sm:text-lg">
              <h2 className="drop-shadow-glow empty:hidden">{player?.name}</h2>
              &#124;
              <Image
                src="/icons/location.svg"
                alt="location icon"
                width="0"
                height="0"
                className="h-5 w-5 drop-shadow-glow"
              />
              <h2 className="drop-shadow-glow empty:hidden">
                {player?.location}
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-end gap-2 sm:flex-row md:ml-auto md:flex-col lg:flex-row">
          <a
            className="flex h-10 w-36 items-center rounded-md border-2 border-gray-600 bg-black p-2 px-4 text-xl hover:border-blue-600 hover:bg-blue-600 md:h-12 md:w-48"
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
            className={`h-10 w-36 items-center rounded-md border-2 border-gray-600 bg-black p-2 px-4 text-xl hover:border-blue-600 hover:bg-blue-600 md:h-12 md:w-48 ${
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
      <div className="mt-0 grid w-full grid-cols-2 gap-4 border-b-2 border-b-gray-600 py-10 sm:grid-cols-4 md:mt-6">
        <div className="flex items-center justify-center gap-x-2 rounded-md border border-gray-600 bg-black px-4 py-3 text-xs">
          <Image
            src="/icons/followers.svg"
            alt="followers icon"
            width="0"
            height="0"
            className="h-auto w-5"
          />
          {player.followers.toLocaleString()}
        </div>
        <div className="flex items-center justify-center gap-x-2 rounded-md border border-gray-600 bg-black px-4 py-3 text-xs">
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
        <div className="flex items-center justify-center gap-x-2 rounded-md border border-gray-600 bg-black px-4 py-3 text-xs">
          <Image
            src="/icons/pawn.svg"
            alt="pawn icon"
            width="0"
            height="0"
            className="h-auto w-4"
          />
          {getDateFromUtc(player.joined)}
        </div>
        <div className="flex items-center justify-center gap-x-2 rounded-md border border-gray-600 bg-black px-4 py-3 text-xs">
          <Image
            src="/icons/status.svg"
            alt="status icon"
            width="0"
            height="0"
            className="h-auto w-5"
          />
          {getDateFromUtc(player.last_online)}
        </div>
      </div>
    </>
  );
}
