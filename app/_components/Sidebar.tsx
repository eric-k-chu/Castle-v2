"use client";

import { routes } from "@/_lib";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./icons";

export function Sidebar() {
  const path = usePathname();

  return (
    <div className="group fixed z-50 hidden h-full bg-neutral-900 shadow-md hover:rounded-r-lg sm:block">
      <div className="flex w-16 flex-col transition-all duration-150 ease-in-out group-hover:w-72">
        <Link className="mb-2 px-3" href="/">
          <div className="flex w-full items-center gap-x-6 border-b border-b-neutral-700 py-5 hover:cursor-pointer">
            <Logo />
            <h1 className="flex-1 select-none overflow-hidden whitespace-nowrap text-2xl font-semibold text-neutral-200 opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100">
              Castle
            </h1>
          </div>
        </Link>
        {routes.map((n) => (
          <div
            className={`box-border w-full border-l-4 py-3 pl-3 pr-4 ${
              path.includes(n.path)
                ? "border-l-neutral-200"
                : "border-l-transparent"
            }`}
            key={n.name}
          >
            <Link
              className="flex w-full items-center gap-x-6 rounded-sm py-2 pl-1 hover:cursor-pointer hover:bg-neutral-800"
              href={n.path}
            >
              <div>{path.includes(n.path) ? n.selected : n.icon}</div>
              <h1
                className={`flex-1 select-none overflow-hidden whitespace-nowrap text-base capitalize opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100 ${
                  path.includes(n.path)
                    ? "text-neutral-200"
                    : "text-neutral-500"
                }`}
              >
                {n.name}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
