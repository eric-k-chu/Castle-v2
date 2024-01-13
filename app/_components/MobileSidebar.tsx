"use client";

import { Route, routes } from "@/_lib";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { MobileSearch, ThemeSelector } from ".";
import { ExitIcon, Logo, MenuIcon, SearchIcon } from "./icons";

export function MobileSidebar() {
  const path = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  function goToRoute(n: Route): void {
    router.push(n);
    setIsOpen(false);
  }

  function closeAll() {
    setIsOpen(false);
    setIsSearching(false);
  }

  return (
    <div className="block sm:hidden">
      <button className="block" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </button>

      <div
        className={`fixed bottom-0 left-0 z-[80] flex h-screen w-screen items-center transition-all duration-150 ease-in-out ${
          isOpen
            ? "bg-neutral-900/50 backdrop-blur-sm"
            : "pointer-events-none bg-transparent"
        }`}
      >
        <div
          className={`flex h-full min-w-72 flex-col bg-neutral-200 px-4 transition-transform duration-150 ease-in-out dark:bg-neutral-900 ${
            isOpen ? "translate-x-0" : "-translate-x-[288px]"
          }`}
        >
          <div className="flex items-center justify-between border-b border-b-neutral-700 py-6">
            <Logo />
            <button onClick={() => setIsOpen(false)}>
              <ExitIcon className="size-6 fill-neutral-900 dark:fill-neutral-200" />
            </button>
          </div>
          <button
            className="flex items-center gap-x-6 border-b border-b-neutral-700 py-6"
            type="button"
            onClick={() => setIsSearching(true)}
          >
            <SearchIcon className="size-6 fill-primary-1" />
            <h1 className="text-neutral-500">Search</h1>
          </button>
          <div className="mt-2">
            {routes.map((n) => (
              <button
                key={n.name}
                className="flex items-center gap-x-6 py-4 hover:cursor-pointer"
                onClick={() => goToRoute(n.path)}
              >
                <div>{path.includes(n.path) ? n.selected : n.icon}</div>
                <h1
                  className={`capitalize ${
                    path.includes(n.path)
                      ? "text-neutral-900 dark:text-neutral-200"
                      : "text-neutral-500"
                  }`}
                >
                  {n.name}
                </h1>
              </button>
            ))}
          </div>
          <ThemeSelector />
        </div>
        <div className="h-full w-full" onClick={() => setIsOpen(false)} />
      </div>
      <MobileSearch isOpen={isSearching} cleanUp={closeAll} />
    </div>
  );
}
