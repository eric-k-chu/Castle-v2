"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { SearchSuggestions } from "./SearchSuggestions";
import { Country } from "./lib/types";

type Props = {
  countries: Country[];
};

export function SearchInput({ countries }: Props) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const encodedQuery = encodeURIComponent(query);
    router.push(`/search?q=${encodedQuery}`);
  }

  return (
    <div className="w-full max-w-[800px] px-6">
      <form
        className="relative z-10 flex h-10 w-full items-center justify-center rounded-full bg-white px-6 text-black shadow-sm shadow-gray-400 sm:h-14"
        onSubmit={handleSearch}
      >
        <div className="flex w-fit items-center justify-center">
          <img
            src="/icons/search.svg"
            alt="search icon"
            className="z-10 h-4 w-4 sm:h-6 sm:w-6"
          />
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          className="z-10 h-full w-full bg-transparent px-4 text-base focus:outline-none sm:text-lg"
          placeholder="Search for a player"
        />
        <SearchSuggestions query={query} countryList={countries} />
      </form>
    </div>
  );
}
