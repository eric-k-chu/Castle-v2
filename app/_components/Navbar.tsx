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
        path === "/"
          ? "absolute border-b-transparent bg-transparent"
          : "fixed z-10 border-b-gray-900 bg-zinc-950/50"
      }`}
    >
      <Image
        src="/icons/logo.svg"
        alt="logo icon"
        width="0"
        height="0"
        className="mr-6 h-auto w-8 hover:cursor-pointer"
        onClick={() => router.push("/")}
      />
      <div
        className={`ml-auto space-x-8 border-l ${
          path === "/" ? "border-l-gray-800" : "border-l-gray-900"
        }`}
      >
        <Link href="/streamers" aria-label="Streamers">
          <span className="hidden text-lg font-semibold uppercase hover:underline sm:inline">
            Streamers
          </span>
        </Link>
        <Link href="/leaderboards" aria-label="Leaderboards">
          <span className="hidden text-lg font-semibold uppercase hover:underline sm:inline">
            Leaderboards
          </span>
        </Link>
        <Link href="" aria-label="Daily Puzzle">
          <span className="hidden text-lg font-semibold uppercase hover:underline sm:inline">
            Daily Puzzle
          </span>
        </Link>
      </div>
    </nav>
  );
}
