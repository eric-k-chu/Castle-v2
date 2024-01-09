"use client";

import { Route, routes } from "@/_lib";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ExitIcon, Logo, MenuIcon } from "./icons";

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
        className={`fixed bottom-0 left-0 h-screen w-72 rounded-r-lg bg-zinc-900 px-4 transition-transform duration-150 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-[288px]"
        }`}
      >
        <div className="z-[999] flex items-center justify-between border-b border-b-zinc-800 py-6">
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
                  path.includes(n.path) ? n.selected : n.icon
                }`}
              >
                {n.name}
              </h1>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
