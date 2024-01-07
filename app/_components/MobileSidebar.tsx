"use client";

import { useState } from "react";
import { Logo } from ".";
import { useRouter } from "next/navigation";
import { routes } from "@/_lib/routes";
import { ExitIcon, MenuIcon } from "./icons";
import { Route } from "@/_lib/constants";

export function MobileSidebar() {
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
          <Logo className="h-auto w-5" />
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
              <div>{n.icon}</div>
              <h1 className="capitalize text-zinc-500">{n.name}</h1>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
