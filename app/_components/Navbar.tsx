"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { TitledPlayers } from "@/_lib/types";
import { getPlayerSuggestions } from "@/_utils/fetcher";
import { Logo, Show } from ".";
import { MobileSidebar } from "./MobileSidebar";
import { MobileSearch } from "./search/MobileSearch";
import { Search } from "./search/Search";

export function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const [suggestions, setSuggestions] = useState<TitledPlayers[]>();

  async function getSuggestions() {
    if (suggestions) return;
    const players = await getPlayerSuggestions();
    setSuggestions(players);
  }

  return (
    <div className="fixed z-20 flex w-full items-center justify-center bg-zinc-900/50 px-6 py-4">
      <div className="mr-auto flex items-center gap-x-4 sm:hidden">
        <MobileSidebar />
        <button onClick={() => router.push("/")}>
          <Logo className="h-auto w-5" />
        </button>
      </div>

      <Show when={path !== "/"}>
        <div
          className="hidden w-full max-w-md justify-center sm:flex md:max-w-lg lg:max-w-2xl"
          onFocus={getSuggestions}
        >
          <Search suggestions={suggestions} />
        </div>
        <div className="ml-auto block sm:hidden" onFocus={getSuggestions}>
          <MobileSearch suggestions={suggestions} />
        </div>
      </Show>
    </div>
  );
}
