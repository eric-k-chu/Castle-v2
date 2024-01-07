"use client";

import { TitledPlayers } from "@/_lib/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Suggestions } from "./Suggestions";
import { SearchIcon } from "../icons/index";

type Props = {
  suggestions: TitledPlayers[] | undefined;
};

export function MobileSearch({ suggestions }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/player/${query}`);
    setIsOpen(false);
    setQuery("");
  }

  function handleSuggestionClick(username: string) {
    router.push(`/player/${username}`);
    setIsOpen(false);
    setQuery("");
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <SearchIcon />
      </button>
      <div
        className={`fixed left-0 top-0 z-50 h-screen w-full bg-zinc-800/20 backdrop-blur-sm transition-opacity duration-150 ease-in-out ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="z-[55] h-full w-full"
          onClick={() => setIsOpen(false)}
        />
        <div className="absolute top-0 z-[60] flex w-full flex-col items-center gap-y-2 p-4">
          <form
            className="relative flex w-full items-center rounded-full bg-white px-4 py-2 text-black"
            onSubmit={handleSubmit}
          >
            <div className="z-[61] flex w-fit items-center justify-center border-r border-zinc-400 pr-2">
              <SearchIcon className="h-auto w-4 fill-zinc-400" />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
              className="z-[61] w-full bg-transparent pl-2 text-sm focus:outline-none"
              placeholder="search for a player"
            />
          </form>
          <Suggestions
            query={query}
            suggestions={suggestions}
            onClick={handleSuggestionClick}
          />
        </div>
      </div>
    </>
  );
}
