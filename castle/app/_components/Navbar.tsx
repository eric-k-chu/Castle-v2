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
          : "fixed border-b-gray-900 bg-black/80"
      }`}
    >
      <Image
        src="/icons/logo.svg"
        alt="logo icon"
        width={32}
        height={32}
        className="mr-6 h-8 w-8 hover:cursor-pointer"
        onClick={() => router.push("/")}
      />
      <div
        className={`hidden w-full items-center gap-x-8 border-l pl-6 sm:flex ${
          path === "/" ? "border-l-gray-800" : "border-l-gray-900"
        }`}
      >
        <Link
          href=""
          className="font-semibold uppercase tracking-wider hover:text-gray-300"
        >
          Countries
        </Link>
        <Link
          href=""
          className="font-semibold uppercase tracking-wider hover:text-gray-300"
        >
          Leaderboards
        </Link>
        <Link
          href=""
          className="font-semibold uppercase tracking-wider hover:text-gray-300"
        >
          Daily Puzzle
        </Link>
      </div>
      <div className="ml-auto">
        <Image
          src="/icons/bookmark.svg"
          alt="bookmark icon"
          width={24}
          height={24}
          className="hidden h-6 w-6 fill-black hover:cursor-pointer sm:block"
          onClick={() => alert("WIP Bookmark section")}
        />
      </div>
    </nav>
  );
}
