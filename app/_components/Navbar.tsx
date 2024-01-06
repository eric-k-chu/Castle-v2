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
      <MobileSearch />
      <form
        className={`relative w-full items-center justify-center rounded-full bg-white px-4 py-2 sm:max-w-lg lg:max-w-xl xl:max-w-2xl ${
          path === "/" ? "hidden" : "hidden sm:flex"
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

function MobileSearch() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    console.log(e.currentTarget.id);
    setIsOpen(e.currentTarget.id === "search-bg" ? false : true);
  }

  return (
    <div className="ml-auto block sm:hidden">
      <button onClick={() => setIsOpen(true)}>
        <svg
          className="h-auto w-4 fill-zinc-200"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.195 0c4.527 0 8.196 3.62 8.196 8.084a7.989 7.989 0 0 1-1.977 5.267l5.388 5.473a.686.686 0 0 1-.015.98.71.71 0 0 1-.993-.014l-5.383-5.47a8.23 8.23 0 0 1-5.216 1.849C3.67 16.169 0 12.549 0 8.084 0 3.62 3.67 0 8.195 0Zm0 1.386c-3.75 0-6.79 2.999-6.79 6.698 0 3.7 3.04 6.699 6.79 6.699s6.791-3 6.791-6.699c0-3.7-3.04-6.698-6.79-6.698Z" />
        </svg>
      </button>
      <div
        id="search-bg"
        className={`fixed left-0 top-0 z-50 h-screen w-full bg-zinc-800/20 backdrop-blur-sm transition-opacity duration-150 ease-in-out ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={handleClick}
      >
        <div id="search-input" className="z-[60] w-full bg-red-400 text-4xl">
          test
        </div>
      </div>
    </div>
  );
}
