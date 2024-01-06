"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { TitledPlayers } from "@/_lib/types";
import { Suggestions } from "./Suggestions";

type Props = {
  suggestions: TitledPlayers[] | undefined;
};

export function Search({ suggestions }: Props) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/player/${query}`);
    setQuery("");
  }

  function handleSuggestionClick(username: string) {
    router.push(`/player/${username}`);
    setQuery("");
  }

  return (
    <form
      className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl"
      onSubmit={handleSearch}
    >
      <div className="flex w-full items-center rounded-full bg-white px-4 py-2 text-black">
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
          className="z-20 w-full bg-transparent pl-2 text-sm text-black focus:outline-none sm:text-base"
        />
      </div>
      <div className="absolute top-12 w-full">
        <Suggestions
          query={query}
          suggestions={suggestions}
          onClick={handleSuggestionClick}
        />
      </div>
    </form>
  );
}
