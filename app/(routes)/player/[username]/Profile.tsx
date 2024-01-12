/* eslint-disable @next/next/no-img-element */

import { ChessTitle, PersonIcon, Show, TwitchIcon } from "@/_components";
import { PlayerProfile } from "@/_lib";
import { getDateFromUtc } from "@/_utils";
import Image from "next/image";

type Props = {
  player: PlayerProfile;
};

export function Profile({ player }: Props) {
  return (
    <>
      <section className="relative my-8 flex items-center gap-x-2 rounded-sm bg-neutral-900 px-4 py-6">
        <img
          src={player?.avatar ?? "/icons/default-avatar.svg"}
          alt={`${player.username} avatar`}
          className="absolute right-0 max-h-full object-cover"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(25,25,55,0), rgba(25,25,55,.5))",
          }}
        />
        <div className="relative flex items-center justify-center">
          <Image
            src={player?.avatar ?? "/icons/default-avatar.svg"}
            unoptimized
            width={0}
            height={0}
            alt={`${player.username} avatar`}
            className="size-20 rounded-sm border-2 border-primary-1 sm:size-24"
          />
          <Show when={player.league !== undefined}>
            <Image
              src={`/icons/${player?.league?.toLocaleLowerCase()}.svg`}
              alt={`${player?.league} icon`}
              width={0}
              height={0}
              className="absolute bottom-[-10px] h-auto w-10 rounded-sm border border-primary-1 bg-neutral-900 px-2 py-1 sm:w-12"
            />
          </Show>
        </div>
        <div className="z-[1] space-y-2">
          <div className="flex items-center gap-x-2 text-lg sm:text-2xl">
            <ChessTitle title={player.title} />
            <a
              className="font-semibold capitalize hover:underline"
              role="heading"
              aria-level={1}
              href={player.url}
              target="_blank"
            >
              {player.username}
            </a>
            <Show when={player?.twitch_url !== undefined}>
              <a target="_blank" href={player?.twitch_url} className="pt-1">
                <TwitchIcon className="h-auto w-6 fill-twitch sm:w-8" />
              </a>
            </Show>
          </div>
          <div className="flex gap-x-2 empty:hidden">
            <h3 className="w-fit truncate rounded-sm bg-neutral-800 p-2 text-xs empty:hidden sm:text-sm">
              {player?.name}
            </h3>
            <h3 className="w-fit truncate rounded-sm bg-neutral-800 p-2 text-xs empty:hidden sm:text-sm">
              {player?.location}
            </h3>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-around gap-y-2 rounded-sm bg-neutral-900 px-4 py-6">
        <h3 className="flex items-center gap-x-2 p-1 text-xs sm:text-sm">
          <PersonIcon className="h-auto w-3 fill-zinc-200 sm:w-4" />
          {player.followers.toLocaleString()}
        </h3>
        <h3 className="p-1 text-xs sm:text-sm">
          Joined {getDateFromUtc(player.joined).half}
        </h3>
        <h3 className="p-1 text-xs sm:text-sm">
          Last Online {getDateFromUtc(player.last_online).half}
        </h3>
      </section>
    </>
  );
}
