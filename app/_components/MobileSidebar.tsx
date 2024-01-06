"use client";

import { useState } from "react";
import { Logo } from ".";
import { Icon } from "./Icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Route } from "@/_lib/types";
import { getRoutes, routes } from "@/_lib/routes";

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
        <svg
          className="h-4 w-4 fill-white"
          viewBox="0 -5 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30 18a2 2 0 0 1 0 4H2a2 2 0 0 1 0-4h28Zm0-9a2 2 0 0 1 0 4H2a2 2 0 0 1 0-4h28Zm0-9a2 2 0 0 1 0 4H2a2 2 0 0 1 0-4h28Z" />
        </svg>
      </button>

      <div
        className={`fixed bottom-0 left-0 z-30 h-screen w-72 rounded-r-lg bg-zinc-900 px-4 transition-transform duration-150 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-[288px]"
        }`}
      >
        <div className="flex items-center justify-between border-b border-b-zinc-800 py-6">
          <Logo className="h-auto w-5" />
          <button onClick={() => setIsOpen(false)}>
            <Image
              src="/icons/exit.svg"
              alt="exit icon"
              width={0}
              height={0}
              className="h-auto w-4 rotate-180"
            />
          </button>
        </div>
        <div className="mt-2">
          {getRoutes().map((n) => (
            <button
              key={n}
              className="flex items-center gap-x-6 py-4 hover:cursor-pointer"
              onClick={() => goToRoute(n)}
            >
              <Icon type={n} />
              <h1 className="text-zinc-500">{routes[n]}</h1>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
