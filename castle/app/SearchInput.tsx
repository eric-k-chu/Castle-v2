"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { SearchSuggestions } from "./SearchSuggestions";

export function SearchInput() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const encodedQuery = encodeURIComponent(query);
    router.push(`/search?q=${encodedQuery}`);
  }

  return (
    <form
      className="z-1 relative flex h-14 w-full max-w-[800px] items-center justify-center rounded-full bg-white px-6 text-black shadow-sm shadow-gray-400"
      onSubmit={handleSearch}
    >
      <div className="flex w-fit items-center justify-center">
        <Image
          src="/icons/search.svg"
          alt="search icon"
          width={22}
          height={22}
          className="z-10"
        />
      </div>
      <input
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        className="z-10 h-full w-full bg-transparent px-4 text-lg focus:outline-none"
        placeholder="Search for a player"
      />
      <SearchSuggestions query={query} />
    </form>
  );
}
