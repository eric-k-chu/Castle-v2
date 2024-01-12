"use client";

import { useState } from "react";

export function ThemeSelector() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function changeTheme(theme: "light" | "dark") {
    document.documentElement.classList.toggle("dark");
    setTheme(theme);
  }

  return (
    <>
      <div className="mt-auto hidden w-full px-4 py-3 sm:block">
        <button
          className="flex w-full items-center gap-x-6 rounded-sm py-2 pl-1 hover:cursor-pointer hover:bg-neutral-900 "
          onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
        >
          <div>{theme === "light" ? <Sun /> : <Moon />}</div>
          <h1 className="flex-1 select-none overflow-hidden whitespace-nowrap text-left text-base capitalize text-neutral-500 opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100">
            {theme}
          </h1>
        </button>
      </div>
      <button
        className="mt-auto flex items-center gap-x-6 py-4 hover:cursor-pointer sm:hidden"
        onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
      >
        <div>{theme === "light" ? <Sun /> : <Moon />}</div>
        <h1 className="capitalize text-neutral-500">{theme}</h1>
      </button>
    </>
  );
}

function Sun() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      className="h-6 w-6 stroke-neutral-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
}

function Moon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      className="h-6 w-6 stroke-neutral-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );
}
