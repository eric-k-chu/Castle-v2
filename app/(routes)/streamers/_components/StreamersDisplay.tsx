"use client";

import { Show } from "@/_components";
import { TwitchIcon } from "@/_components/icons";
import { ROUTES } from "@/_lib/constants";
import { Streamers } from "@/_lib/types";
import { getPages } from "@/_utils";
import Link from "next/link";
import { useMemo, useState } from "react";
import Image from "next/image";

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
            <div className="relative gap-y-4 rounded-sm bg-zinc-900 p-4 pb-1">
              <Show when={n.is_live === true}>
                <div className="absolute right-2 top-2 h-2 w-2 animate-pulse rounded-full bg-red-600" />
              </Show>
              <div className="flex w-full items-center gap-x-2">
                <Image
                  src={
                    n?.avatar ??
                    "https://www.chess.com/bundles/web/images/user-image.007dad08.svg"
                  }
                  alt={`${n.username} avatar`}
                  width={0}
                  height={0}
                  unoptimized
                  className="h-auto w-6 rounded-sm"
                />
                <Link
                  href={`${ROUTES.player}${n.username}`}
                  className="truncate text-sm font-semibold hover:underline sm:max-w-24 md:max-w-32 lg:max-w-48"
                >
                  {n.username}
                </Link>
              </div>
              <button className="w-full py-2">
                <a
                  className="group flex w-full items-center justify-center gap-x-2 rounded-sm bg-zinc-950 py-2 transition-colors duration-150 ease-in-out hover:bg-[#5C7B41]"
                  target="_blank"
                  href={n.twitch_url}
                >
                  <TwitchIcon className="h-6 w-auto fill-[#6441a5]" />
                  <h2>Twitch</h2>
                </a>
              </button>
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
