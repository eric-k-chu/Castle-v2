"use client";

import { MonthlyArchive } from "@/_lib/types";
import { getDaysElapsed, getGameResultColor, getPages } from "@/_utils";
import Image from "next/image";
import { useState } from "react";
import { Pagination } from "..";

type Props = {
  archive: MonthlyArchive;
  username: string;
};

export function ArchivesDisplay({ archive, username }: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const games = getPages(archive.games.toReversed());

  return (
    <div className="w-full p-4">
      <header className="grid grid-cols-4 gap-4 border-l-8 border-l-transparent p-4 text-xs sm:grid-cols-7">
        <strong className="hidden uppercase sm:inline">time</strong>
        <strong className="col-span-2 uppercase">players</strong>
        <strong className="hidden uppercase sm:inline">result</strong>
        <strong className="hidden text-center uppercase sm:inline">
          accuracies
        </strong>
        <strong className="text-right uppercase">time class</strong>
        <strong className="text-right uppercase">link</strong>
      </header>
      {games[currentPage].map((n) => (
        <div
          key={n.uuid}
          className={`my-2 grid grid-cols-4 gap-4 rounded-sm border-l-8 p-4 text-xs shadow-2xl odd:bg-zinc-900 even:bg-zinc-800 sm:grid-cols-7 ${getGameResultColor(
            username,
            n.pgn,
          )}`}
        >
          <div className="hidden text-gray-400 sm:inline">
            {getDaysElapsed(n.end_time)}
          </div>
          <div className="col-span-2">
            <div className="truncate">
              <Image
                src="/icons/white-square.svg"
                alt="W"
                width={10}
                height={10}
                className="mr-1 inline"
              />
              {n.white.username}
            </div>
            <div className="truncate">
              <Image
                src="/icons/black-square.svg"
                alt="B"
                width={10}
                height={10}
                className="mr-1 inline"
              />
              {n.black.username}
            </div>
          </div>
          <div className="hidden capitalize sm:inline">
            <div>{n.white.result}</div>
            <div>{n.black.result}</div>
          </div>
          <div className="hidden text-center sm:inline">
            <div>{n.accuracies?.white ?? "-"}</div>
            <div>{n.accuracies?.black ?? "-"}</div>
          </div>
          <div className="text-right uppercase">{n.time_class}</div>
          <div className="flex justify-end">
            <a href={n.url} target="_blank" className="hover:cursor-pointer">
              <Image
                src="/icons/dots.svg"
                alt="url to game"
                width={0}
                height={0}
                className="h-5 w-auto"
              />
            </a>
          </div>
        </div>
      ))}
      <Pagination
        arrLength={games.length}
        activePage={currentPage}
        setter={setCurrentPage}
      />
    </div>
  );
}
