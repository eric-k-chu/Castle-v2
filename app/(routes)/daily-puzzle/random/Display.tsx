"use client";

import { DailyPuzzle } from "@/_lib/chessapi-types";
import { getDateFromUtc } from "@/_utils";
import Image from "next/image";

type Props = {
  puzzle: DailyPuzzle;
};

export function Display({ puzzle }: Props) {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center space-y-4 sm:max-w-lg sm:flex-row sm:bg-zinc-900 md:max-w-2xl lg:max-w-4xl">
      <div className="w-full space-y-2 sm:w-1/2">
        <Image
          src={puzzle.image}
          alt="daily puzzle board"
          width={0}
          height={0}
          unoptimized
          className="h-auto w-[500px]"
        />
      </div>
      <div className="w-full text-center sm:w-1/2">
        <a
          className="py-2 text-lg font-semibold capitalize hover:underline md:text-xl"
          target="_blank"
          href={puzzle.url}
        >
          {puzzle.title}&#8599;
        </a>
        <h2 className="py-1 text-sm text-zinc-400 sm:text-base md:text-lg">
          {getDateFromUtc(puzzle.publish_time).full}
        </h2>
        <button className="h-fit w-fit rounded-lg bg-[#769656] px-5 py-2.5 text-xs font-medium hover:bg-[#5C7B41] focus:outline-none focus:ring-4 focus:ring-green-300 sm:text-sm">
          Get Random
        </button>
      </div>
    </section>
  );
}
