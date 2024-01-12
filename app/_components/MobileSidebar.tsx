"use client";

import { Route, routes } from "@/_lib";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ExitIcon, Logo, MenuIcon } from "./icons";
import { ThemeSelector } from ".";

export function MobileSidebar() {
  const path = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function goToRoute(n: Route): void {
    router.push(n);
    setIsOpen(false);
  }

  return (
    <div className="block sm:hidden">
      <button className="block" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </button>

      <div
        className={`fixed bottom-0 left-0 flex h-screen w-72 flex-col rounded-r-lg bg-neutral-900 px-4 transition-transform duration-150 ease-in-out  ${
          isOpen ? "translate-x-0" : "-translate-x-[288px]"
        }`}
      >
        <div className="z-[999] flex items-center justify-between border-b border-b-neutral-700 py-6">
          <Logo />
          <button onClick={() => setIsOpen(false)}>
            <ExitIcon className="h-auto w-5 rotate-180" />
          </button>
        </div>
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
                    ? "text-neutral-200"
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
    </div>
  );
}
