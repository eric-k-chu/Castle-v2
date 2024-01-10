"use client";

import { ROUTES, TitledPlayer } from "@/_lib";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Suggestions } from ".";
import { SearchIcon } from "../icons";

type Props = {
  suggestions: TitledPlayer[] | undefined;
};

export function Search({ suggestions }: Props) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(query);
    router.push(`${ROUTES.player}/${query}`);
    setQuery("");
  }

  function handleSuggestionClick(username: string) {
    router.push(`${ROUTES.player}/${username}`);
    setQuery("");
  }

  return (
    <form
      className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl"
      onSubmit={handleSearch}
    >
      <div className="flex w-full items-center rounded-full bg-white px-4 py-2 text-black">
        <div className="flex w-fit items-center justify-center border-r border-neutral-400 pr-2">
          <SearchIcon className="h-auto w-4 fill-neutral-400" />
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          placeholder="Search for a player"
          className="w-full bg-transparent pl-2 text-sm text-black focus:outline-none sm:text-base"
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
