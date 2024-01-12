"use client";

import { Show } from "@/_components";
import { GreaterThanIcon, LessThanIcon, TwitchIcon } from "@/_components/icons";
import { usePagination } from "@/_hooks";
import { ROUTES, Streamers } from "@/_lib";
import Image from "next/image";
import Link from "next/link";

type Props = {
  streamers: Streamers;
};

export function Streamers({ streamers }: Props) {
  const [list, page, _, switchPage] = usePagination(streamers.streamers, 18);

  function handlePrev(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    switchPage("prev");
  }
  function handleNext(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    switchPage("next");
  }

  return (
    <section className="mx-auto max-w-sm space-y-4 sm:max-w-md md:max-w-lg lg:max-w-2xl">
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <TwitchIcon className="inline h-auto w-5 fill-neutral-900 pt-1 sm:w-6 md:w-8 dark:fill-neutral-200" />
        <strong className="text-lg uppercase sm:text-2xl md:text-4xl">
          streamers
        </strong>
        <div className="ml-auto flex items-center text-neutral-500">
          <button onClick={handlePrev}>
            <GreaterThanIcon className="mx-1 h-3 w-3" />
          </button>
          <h5 className="text-xs text-neutral-500 sm:text-sm">
            {page + 1} of {list.length}
          </h5>
          <button onClick={handleNext}>
            <LessThanIcon className="mx-1 h-3 w-3" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {list[page].map((n) => (
          <div key={n.username} className="w-full p-1 sm:w-1/2 md:w-1/3">
            <div className="relative gap-y-4 rounded-sm border border-neutral-400 bg-neutral-200 p-4 pb-1 dark:border-neutral-800 dark:bg-neutral-900 ">
              <Show when={n.is_live === true}>
                <div className="absolute right-2 top-2 h-2 w-2 animate-pulse rounded-full bg-red-600" />
              </Show>
              <div className="flex w-full items-center gap-x-2">
                <Image
                  src={n?.avatar ?? "/icons/default-avatar.svg"}
                  alt={`${n.username} avatar`}
                  width={0}
                  height={0}
                  unoptimized
                  className="size-6 rounded-sm"
                />
                <Link
                  href={`${ROUTES.player}/${n.username}`}
                  className="truncate text-sm font-semibold hover:underline sm:max-w-24 md:max-w-32 lg:max-w-48"
                >
                  {n.username}
                </Link>
              </div>
              <button className="w-full py-2">
                <a
                  className="group flex w-full items-center justify-center gap-x-2 rounded-sm bg-neutral-300 py-2 transition-colors duration-150 ease-in-out hover:bg-primary-1 dark:bg-neutral-800 dark:hover:bg-primary-2"
                  target="_blank"
                  href={n.twitch_url}
                >
                  <TwitchIcon className="h-6 w-auto fill-twitch" />
                  <h2>Twitch</h2>
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
