"use client";

import Link from "next/link";
import { Logo } from ".";
import { routes } from "@/_lib/routes";

export function Sidebar() {
  return (
    <div className="group fixed z-50 hidden h-full bg-zinc-900 sm:block">
      <div className="flex w-16 flex-col transition-all duration-150 ease-in-out group-hover:w-72">
        <Link className="mb-2 px-5" href="/">
          <div className="flex w-full items-center gap-x-6 border-b border-b-zinc-800 py-5 hover:cursor-pointer">
            <Logo className="h-auto w-6" />
            <h1 className="flex-1 select-none overflow-hidden whitespace-nowrap text-2xl font-semibold text-zinc-200 opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100">
              Castle
            </h1>
          </div>
        </Link>
        {routes.map((n) => (
          <div className="w-full px-4 py-3" key={n.name}>
            <Link
              className="flex w-full items-center gap-x-6 rounded-sm py-2 pl-1 hover:cursor-pointer hover:bg-zinc-800"
              href={n.path}
            >
              <div>{n.icon}</div>
              <h1 className="flex-1 select-none overflow-hidden whitespace-nowrap text-base capitalize text-zinc-500 opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100">
                {n.name}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
