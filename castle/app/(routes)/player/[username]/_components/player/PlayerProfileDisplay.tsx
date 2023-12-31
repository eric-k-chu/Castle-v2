import { Player } from "@/_lib/types";
import Image from "next/image";
import { getDateFromUtc } from "@/_utils";
import { Show } from "@/_components";

type Props = {
  player: Player;
};

export function PlayerProfileDisplay({ player }: Props) {
  return (
    <>
      <div className="px-4">
        <div className="flex gap-x-8">
          <div className="relative flex items-center justify-center">
            <Image
              src={String(player?.avatar)}
              alt="avatar"
              width="0"
              height="0"
              unoptimized
              className={`h-32 w-32 rounded-full border-2 bg-black sm:h-36 sm:w-36 ${
                player.verified ? "border-green-500" : "border-white"
              }`}
            />
            <h3 className="absolute bottom-0 rounded-sm bg-green-400/90 px-1 text-sm font-medium uppercase text-black">
              {player.verified && "Verified"}
            </h3>
          </div>
          <div>
            <div className="flex items-center gap-x-4">
              <Show when={player.username !== undefined}>
                <h1 className="text-2xl font-semibold sm:text-4xl">
                  {player?.username}
                </h1>
              </Show>
              <Show when={player.title !== undefined}>
                <span className="rounded-md bg-[#7C2929] px-2 py-0.5 font-mono text-lg text-white">
                  {player?.title}
                </span>
              </Show>
              <Show when={player.league !== undefined}>
                <Image
                  src={`/icons/${player?.league?.toLocaleLowerCase()}.svg`}
                  alt={`${player?.league} icon`}
                  width={0}
                  height={0}
                  className="h-auto w-8"
                />
              </Show>
              <a href={player.url} target="_blank">
                <Image
                  src="/icons/chess-com.svg"
                  alt="chess url"
                  width={0}
                  height={0}
                  className="h-auto w-4"
                />
              </a>
              <Show when={player.twitch_url !== undefined}>
                <a href={player.twitch_url} target="_blank">
                  <Image
                    src="/icons/twitch.svg"
                    alt="twitch url"
                    width={0}
                    height={0}
                    className="h-auto w-5"
                  />
                </a>
              </Show>
            </div>
            <div className="mt-2 flex items-center gap-x-4">
              <h2 className="text-sm">{player?.name}</h2>
              <Show when={player.location !== undefined}>
                <div className="flex items-center text-xs">
                  <Image
                    src="/icons/location.svg"
                    alt="location icon"
                    width="0"
                    height="0"
                    className="ml-3 h-5 w-5"
                  />
                  {player?.location}
                </div>
              </Show>
            </div>
            <div className="mt-8 flex items-center gap-x-8">
              <div className="flex flex-col items-center text-sm">
                <Image
                  src="/icons/pawn.svg"
                  alt="pawn icon"
                  width="0"
                  height="0"
                  className="h-auto w-6"
                />
                {getDateFromUtc(player.joined)}
              </div>
              <div className="flex flex-col items-center text-sm">
                <Image
                  src="/icons/status.svg"
                  alt="status icon"
                  width="0"
                  height="0"
                  className="h-auto w-6"
                />
                {getDateFromUtc(player.last_online)}
              </div>
              <div className="flex flex-col items-center text-sm">
                <Image
                  src="/icons/followers.svg"
                  alt="followers icon"
                  width="0"
                  height="0"
                  className="h-auto w-6"
                />
                {player.followers.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
