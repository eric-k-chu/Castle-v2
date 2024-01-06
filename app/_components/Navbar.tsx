"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { TitledPlayers } from "@/_lib/types";
import { getPlayerSuggestions } from "@/_utils/fetcher";
import { SearchSuggestions } from "./home/SearchSuggestions";
import { Logo } from ".";
import { MobileSidebar } from "./MobileSidebar";

export function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const [suggestions, setSuggestions] = useState<TitledPlayers[]>();
  const [query, setQuery] = useState("");

  async function getSuggestions() {
    if (suggestions) return;
    try {
      const players = await getPlayerSuggestions();
      setSuggestions(players);
    } catch (err) {
      throw err;
    }
  }

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const encodedQuery = encodeURIComponent(query);
    router.push(`/player/${encodedQuery}`);
  }

  return (
    <div className="fixed z-20 flex w-full items-center justify-center bg-zinc-900/50 px-6 py-4">
      <div className="mr-auto flex items-center gap-x-4 sm:hidden">
        <MobileSidebar />
        <Logo className="h-auto w-5" />
      </div>
      <form
        className={`relative w-full max-w-xl items-center justify-center rounded-full bg-white px-4 py-2 ${
          path === "/" ? "hidden" : "flex"
        }`}
        onSubmit={handleSearch}
      >
        <div className="z-20 flex w-fit items-center justify-center border-r border-gray-500 pr-2">
          <Image
            src="/icons/search.svg"
            alt="search icon"
            className="h-auto w-4"
            width="0"
            height="0"
          />
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          placeholder="Search for a player"
          className="z-20 w-full bg-transparent pl-2 text-sm text-black focus:outline-none"
          onFocus={getSuggestions}
        />
        <SearchSuggestions query={query} playerList={suggestions} />
      </form>
    </div>
  );
}
