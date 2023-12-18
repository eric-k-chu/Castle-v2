"use client";

import Image from "next/image";
import { usePlayers } from "./hooks/usePlayers";

export default function Home() {
  const { players, isLoading, error } = usePlayers();

  return (
    <main className="flex min-h-screen flex-col items-center overscroll-none bg-gradient-to-t from-black to-black/40 to-90%">
      <div className="mb-12 mt-64 text-center">
        <h1 className="text-4xl font-semibold uppercase tracking-wide drop-shadow-lg">
          CASTLE
        </h1>
        <p className="mt-4 text-lg font-medium text-gray-200 drop-shadow-lg">
          A player search engine. Powered by Chess.com API
        </p>
      </div>
      <div className="flex h-14 w-full max-w-[800px] items-center rounded-full bg-white px-6 text-black shadow-sm shadow-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
        <div className="flex w-fit items-center justify-center">
          <Image
            src="/icons/search.svg"
            alt="search icon"
            width={22}
            height={22}
          />
        </div>
        <input
          className="h-full w-full bg-transparent px-4 text-lg focus:outline-none"
          placeholder="Search for a player"
        />
      </div>
    </main>
  );
}
