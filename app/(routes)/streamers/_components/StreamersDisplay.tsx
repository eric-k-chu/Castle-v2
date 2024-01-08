"use client";

import { Show } from "@/_components";
import { TwitchIcon } from "@/_components/icons";
import { ROUTES } from "@/_lib/constants";
import { Streamers } from "@/_lib/types";
import { getPages } from "@/_utils";
import Link from "next/link";
import { useMemo, useState } from "react";

type Props = {
  streamers: Streamers;
};

export function StreamersDisplay({ streamers: list }: Props) {
  const [page, setPage] = useState(0);
  const streamers = useMemo(() => getPages(list.streamers, 50), [list]);

  function handlePrev(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setPage((page - 1 + streamers.length) % streamers.length);
  }
  function handleNext(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setPage((page + 1) % streamers.length);
  }

  return (
    <section className="mx-auto max-w-sm space-y-4 sm:max-w-md md:max-w-lg lg:max-w-2xl">
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <TwitchIcon className="inline h-auto w-5 fill-zinc-200 sm:w-6 md:w-8" />
        <strong className="text-lg uppercase sm:text-2xl md:text-4xl">
          streamers
        </strong>
      </div>
      <div className="flex flex-wrap">
        {streamers[page].map((n) => (
          <div key={n.username} className="w-full p-1 sm:w-1/2 md:w-1/3">
            <div className="relative flex flex-col items-center gap-y-4 bg-zinc-900 py-4 transition-colors duration-150 ease-in-out hover:bg-zinc-800">
              <Show when={n.is_live === true}>
                <div className="absolute right-3 top-3 h-2 w-2 animate-pulse rounded-full bg-green-500" />
              </Show>
              <Link
                href={`${ROUTES.player}${n.username}`}
                className="truncate text-sm font-semibold hover:underline sm:max-w-24 md:max-w-32 lg:max-w-48"
              >
                {n.username}
              </Link>
              <a target="_blank" href={n.twitch_url}>
                <img
                  src={
                    n?.avatar ??
                    "https://www.chess.com/bundles/web/images/user-image.007dad08.svg"
                  }
                  className="max-w-[50px] rounded-md"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      <nav className="flex justify-between pt-10">
        <button className="uppercase" onClick={handlePrev}>
          Previous
        </button>
        <button className="uppercase" onClick={handleNext}>
          Next
        </button>
      </nav>
    </section>
  );
}
