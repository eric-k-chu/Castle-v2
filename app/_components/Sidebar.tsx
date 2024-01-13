"use client";

import { TitledPlayer, routes } from "@/_lib";
import { getPlayerSuggestions } from "@/_utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MobileSearch, ThemeSelector } from ".";
import { Logo, SearchIcon } from "./icons";

export function Sidebar() {
  const path = usePathname();
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState<TitledPlayer[]>();

  async function getSuggestions() {
    setIsSearching(true);

    if (suggestions) return;
    const players = await getPlayerSuggestions();
    setSuggestions(players);
  }

  return (
    <>
      <div className="group fixed z-50 hidden h-full bg-neutral-200 shadow-md dark:bg-neutral-900 sm:block">
        <div className="flex h-full w-16 flex-col transition-all duration-150 ease-in-out group-hover:w-72">
          <Link className="mb-2 px-3" href="/">
            <div className="flex w-full items-center gap-x-6 border-b border-b-neutral-700 py-5 hover:cursor-pointer">
              <Logo />
              <h1 className="flex-1 select-none overflow-hidden whitespace-nowrap text-2xl font-semibold text-neutral-900 opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100 dark:text-neutral-200">
                Castle
              </h1>
            </div>
          </Link>
          <button className="mb-2 px-3" type="button" onClick={getSuggestions}>
            <div className="flex w-full items-center gap-x-6 border-b border-b-neutral-700 pb-4 pl-2 pt-3 hover:cursor-pointer">
              <div>
                <SearchIcon className="size-6 fill-primary-1" />
              </div>
              <h1 className="flex-1 select-none overflow-hidden whitespace-nowrap text-left text-base capitalize text-neutral-500 opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100">
                Search
              </h1>
            </div>
          </button>
          {routes.map((n) => (
            <div
              className={`w-full border-l-4 py-3 pl-3 pr-4 ${
                path.includes(n.path)
                  ? "border-l-neutral-900 dark:border-l-neutral-200"
                  : "border-l-transparent"
              }`}
              key={n.name}
            >
              <Link
                className="flex w-full items-center gap-x-6 rounded-sm py-2 pl-1 hover:cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-800"
                href={n.path}
              >
                <div>{path.includes(n.path) ? n.selected : n.icon}</div>
                <h1
                  className={`flex-1 select-none overflow-hidden whitespace-nowrap text-base capitalize opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100 ${
                    path.includes(n.path)
                      ? "text-neutral-900 dark:text-neutral-200"
                      : "text-neutral-500"
                  }`}
                >
                  {n.name}
                </h1>
              </Link>
            </div>
          ))}
          <ThemeSelector />
        </div>
      </div>
      <MobileSearch
        isOpen={isSearching}
        setIsOpen={setIsSearching}
        suggestions={suggestions}
      />
    </>
  );
}
