import { Player } from "@/_lib/types";
import Image from "next/image";
import { getDateFromUtc } from "@/_utils";
import { Show } from "@/_components";

type Props = {
  player: Player;
};

export function ProfileDisplay({ player }: Props) {
  return (
    <div className="my-8 flex gap-x-2">
      <div className="relative flex items-center justify-center">
        <Image
          src={
            player?.avatar ||
            "https://www.chess.com/bundles/web/images/user-image.007dad08.svg"
          }
          alt="avatar"
          width="0"
          height="0"
          unoptimized
          className="h-28 min-h-[7rem] w-28 min-w-[7rem] rounded-sm border-4 border-zinc-900 bg-black sm:h-36 sm:min-h-[9rem] sm:w-36 sm:min-w-[9rem]"
        />
        <Show when={player.league !== undefined}>
          <div className="absolute bottom-[-10px] rounded-sm bg-zinc-900 px-4 py-1">
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
            className="text-xl font-semibold sm:text-4xl"
            role="heading"
            aria-level={1}
            href={player.url}
            target="_blank"
          >
            {player.username[0].toLocaleUpperCase() + player.username.slice(1)}
          </a>
          <span className="rounded-md bg-[#7C2929] px-2 py-0.5 font-mono text-base text-white">
            {player?.title}
          </span>
          <Show when={player.twitch_url !== undefined}>
            <a
              href={player.twitch_url}
              target="_blank"
              className="rounded-md bg-zinc-900 px-2 py-1"
            >
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
        <div className="flex items-center gap-x-2 empty:hidden">
          <h2 className="text-xs text-zinc-400 sm:text-sm">{player?.name}</h2>
          <Show
            when={player.name !== undefined && player.location !== undefined}
          >
            <span className="text-xs text-zinc-400 sm:text-sm">|</span>
          </Show>
          <h2 className="text-xs text-zinc-400 sm:text-sm">
            {player?.location}
          </h2>
        </div>
        <div className="mt-6 flex items-center gap-x-2 sm:mt-8 sm:gap-x-6">
          <div className="flex flex-col items-center text-center text-xs sm:text-sm">
            <Image
              src="/icons/pawn.svg"
              alt="pawn icon"
              width="0"
              height="0"
              className="h-auto w-4"
            />
            {getDateFromUtc(player.joined).half}
          </div>
          <div className="flex flex-col items-center text-center text-xs sm:text-sm">
            <Image
              src="/icons/status.svg"
              alt="status icon"
              width="0"
              height="0"
              className="h-auto w-4"
            />
            {getDateFromUtc(player.last_online).half}
          </div>
          <div className="flex flex-col items-center text-center text-xs sm:text-sm">
            <Image
              src="/icons/followers.svg"
              alt="followers icon"
              width="0"
              height="0"
              className="h-auto w-4"
            />
            {player.followers.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
