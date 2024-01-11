import {
  ChessTitle,
  PawnIcon,
  PersonIcon,
  Show,
  StatusIcon,
  TwitchIcon,
} from "@/_components";
import { PlayerProfile } from "@/_lib";
import { getDateFromUtc } from "@/_utils";
import Image from "next/image";

type Props = {
  player: PlayerProfile;
};

export function Profile({ player }: Props) {
  return (
    <div className="my-8 flex gap-x-2">
      <div className="relative flex items-center justify-center">
        <Image
          src={player?.avatar || "/icons/default-avatar.svg"}
          alt="avatar"
          width="0"
          height="0"
          unoptimized
          className="size-28 rounded-sm border-2 border-amber-400 object-cover sm:size-36 sm:h-36"
        />
        <Show when={player.league !== undefined}>
          <div className="absolute bottom-[-10px] rounded-sm border border-amber-400 bg-neutral-900 px-4 py-1">
            <Image
              src={`/icons/${player?.league?.toLocaleLowerCase()}.svg`}
              alt={`${player?.league} icon`}
              width={0}
              height={0}
              className="h-auto w-6 sm:w-8"
            />
          </div>
        </Show>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <a
            className="text-xl font-semibold capitalize hover:underline sm:text-4xl"
            role="heading"
            aria-level={1}
            href={player.url}
            target="_blank"
          >
            {player.username}
          </a>
          <ChessTitle title={player.title} />
          <Show when={player.twitch_url !== undefined}>
            <a
              href={player.twitch_url}
              target="_blank"
              className="rounded-md bg-neutral-900 px-2 py-1"
            >
              <TwitchIcon className="h-auto w-5 fill-[#6441a4]" />
            </a>
          </Show>
        </div>
        <div className="flex items-center gap-x-2 empty:hidden">
          <h2 className="text-xs text-neutral-400 sm:text-sm">
            {player?.name}
          </h2>
          <Show
            when={player.name !== undefined && player.location !== undefined}
          >
            <span className="text-xs text-neutral-400 sm:text-sm">|</span>
          </Show>
          <h2 className="text-xs text-neutral-400 sm:text-sm">
            {player?.location}
          </h2>
        </div>
        <div className="mt-6 flex items-center gap-x-2 sm:mt-8 sm:gap-x-6">
          <div className="flex flex-col items-center text-center text-xs sm:text-sm">
            <PawnIcon />
            {getDateFromUtc(player.joined).half}
          </div>
          <div className="flex flex-col items-center text-center text-xs sm:text-sm">
            <StatusIcon />
            {getDateFromUtc(player.last_online).half}
          </div>
          <div className="flex flex-col items-center text-center text-xs sm:text-sm">
            <PersonIcon />
            {player.followers.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
