"use client";

import { ChessApi } from "@/_chessapi/ChessApi";
import { DailyPuzzle } from "@/_lib/chessapi-types";
import { getDateFromUtc } from "@/_utils";
import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  puzzle: DailyPuzzle;
};

export function Display({ puzzle }: Props) {
  const [dailyPuzzle, setDailyPuzzle] = useState(puzzle);
  const [onCooldown, setOnCooldown] = useState(true);
  const [seconds, setSeconds] = useState(15);

  async function getRandomPuzzle(): Promise<void> {
    if (onCooldown) return;
    setDailyPuzzle(await ChessApi.getRandomDailyPuzzle());
    setOnCooldown(true);
  }

  useEffect(() => {
    if (!onCooldown) return;

    const id = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [onCooldown]);

  useEffect(() => {
    if (seconds <= 0) {
      setOnCooldown(false);
      setSeconds(15);
    }
  }, [seconds]);

  return (
    <section className="mx-auto flex max-w-md flex-col items-center space-y-4 sm:max-w-lg sm:flex-row sm:bg-zinc-900 md:max-w-2xl lg:max-w-4xl">
      <div className="w-full space-y-2 sm:w-1/2">
        <Image
          src={dailyPuzzle.image}
          alt="daily dailyPuzzle board"
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
          href={dailyPuzzle.url}
        >
          {dailyPuzzle.title}&#8599;
        </a>
        <h2 className="py-1 text-sm text-zinc-400 sm:text-base md:text-lg">
          {getDateFromUtc(dailyPuzzle.publish_time).full}
        </h2>
        <button
          className={`h-fit w-[111px] rounded-lg px-5 py-2.5 text-xs font-medium sm:w-[123px] sm:text-sm ${
            onCooldown
              ? "pointer-events-none cursor-auto bg-red-900 text-zinc-500"
              : "cursor-pointer bg-[#769656] hover:bg-[#5C7B41]"
          }`}
          onClick={getRandomPuzzle}
        >
          {onCooldown ? `${seconds}s` : "Get Random"}
        </button>
      </div>
    </section>
  );
}
