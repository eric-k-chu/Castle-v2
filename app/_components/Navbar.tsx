"use client";

import { useRouter } from "next/navigation";
import { MobileSidebar } from "./MobileSidebar";
import { Logo, SearchIcon } from "./icons";
import { useState } from "react";
import { MobileSearch } from ".";

export function Navbar() {
  const router = useRouter();
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <div className="fixed z-20 flex w-full items-center justify-between bg-neutral-200/90 px-6 py-4 dark:bg-neutral-900/90 sm:hidden sm:bg-transparent">
        <div className="mr-auto flex items-center gap-x-4 sm:hidden">
          <MobileSidebar />
          <button onClick={() => router.push("/")}>
            <Logo />
          </button>
        </div>
        <button type="button" onClick={() => setIsSearching(true)}>
          <SearchIcon className="size-6 fill-neutral-900 dark:fill-neutral-200" />
        </button>
      </div>
      <MobileSearch
        isOpen={isSearching}
        cleanUp={() => setIsSearching(false)}
        suggestions={[]}
      />
    </>
  );
}
