"use client";

import { MonthlyArchive } from "@/_lib/types";
import { getPages } from "@/_utils";
import { useState } from "react";

type Props = {
  archive: MonthlyArchive;
};

export function ArchivesDisplay({ archive }: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const games = getPages(archive.games);

  return (
    <div className="flex w-full flex-col p-4">
      {games[currentPage].map((n) => (
        <h1 key={n.url}>{n.white.username}</h1>
      ))}
      <nav className="ml-auto mr-2 mt-8">
        <div className="flex h-8 items-center text-xs">
          <button
            className="ms-0 flex h-8 items-center justify-center rounded-l-lg border border-e-0 border-gray-600 bg-transparent px-3 leading-tight text-gray-300 hover:bg-gray-500"
            onClick={() =>
              setCurrentPage((currentPage - 1 + games.length) % games.length)
            }
          >
            <svg
              className="h-2.5 w-2.5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
          <button
            className="ms-0 flex h-8 items-center justify-center rounded-r-lg border border-e-0 border-gray-600 bg-transparent px-3 leading-tight text-gray-300 hover:bg-gray-500"
            onClick={() => setCurrentPage((currentPage + 1) % games.length)}
          >
            <svg
              className="h-2.5 w-2.5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}
