"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function Navbar() {
  const path = usePathname();
  const router = useRouter();

  return (
    <nav
      className={`flex w-full items-center border-b px-6 py-4 ${
        path === "/home"
          ? "absolute border-b-transparent bg-transparent"
          : "fixed z-10 border-b-gray-900 bg-zinc-950/50"
      }`}
    >
      <Image
        src="/icons/logo.svg"
        alt="logo icon"
        width="0"
        height="0"
        className="mr-6 h-auto w-10 hover:cursor-pointer"
        onClick={() => router.push("/home")}
      />
      <div
        className={`ml-auto hidden space-x-8 border-l sm:block ${
          path === "/home" ? "border-l-gray-800" : "border-l-gray-900"
        }`}
      >
        <Link
          href="/streamers"
          className="text-lg font-semibold uppercase tracking-wider hover:text-gray-300"
          aria-label="Streamers"
        >
          Streamers
        </Link>
        <Link
          href="/leaderboards"
          className="text-lg font-semibold uppercase tracking-wider hover:text-gray-300"
          aria-label="Leaderboards"
        >
          Leaderboards
        </Link>
        <Link
          href=""
          className="text-lg font-semibold uppercase tracking-wider hover:text-gray-300"
          aria-label="Daily Puzzle"
        >
          Daily Puzzle
        </Link>
      </div>
    </nav>
  );
}
