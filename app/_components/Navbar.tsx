"use client";

import { TitledPlayer } from "@/_lib";
import { getPlayerSuggestions } from "@/_utils";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Show } from ".";
import { MobileSidebar } from "./MobileSidebar";
import { Logo } from "./icons";
import { MobileSearch } from "./search";

export function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const [suggestions, setSuggestions] = useState<TitledPlayer[]>();

  async function getSuggestions() {
    if (suggestions) return;
    const players = await getPlayerSuggestions();
    setSuggestions(players);
  }

  return (
    <div className="/50 fixed z-20 flex w-full items-center justify-center bg-neutral-900 px-6 py-4 sm:bg-transparent">
      <div className="mr-auto flex items-center gap-x-4 sm:hidden">
        <MobileSidebar />
        <button onClick={() => router.push("/")}>
          <Logo />
        </button>
      </div>

      <Show when={path !== "/"}>
        <div className="ml-auto" onFocus={getSuggestions}>
          <MobileSearch suggestions={suggestions} />
        </div>
      </Show>
    </div>
  );
}
