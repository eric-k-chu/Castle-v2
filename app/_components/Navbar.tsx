"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchInput } from ".";
import { useFetcher } from "@/_hooks/useFetcher";
import { getPlayerSuggestions } from "@/_utils/fetcher";

export function Navbar() {
  const path = usePathname();

  return (
    <div
      className={`flex w-full items-center justify-center px-6 py-4 ${
        path === "/" ? "absolute bg-transparent" : "fixed z-10 bg-zinc-950/50"
      }`}
    >
      <form className="w-full max-w-2xl rounded-full bg-white px-4 py-0.5">
        <input
          placeholder="Search for a player"
          className="w-full bg-transparent text-sm text-black focus:outline-none"
        />
      </form>
    </div>
  );
}
