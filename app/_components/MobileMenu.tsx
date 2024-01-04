"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuIcon onOpen={() => setIsOpen(true)} />
      <MenuLayout isOpen={isOpen}>
        <Menu>
          <div className="p-4">
            <ExitIcon onClose={() => setIsOpen(false)} />
          </div>
          <Link
            className="block p-4 text-lg hover:cursor-pointer hover:bg-zinc-900"
            href="/"
          >
            Home
          </Link>
        </Menu>
      </MenuLayout>
    </>
  );
}

function MenuIcon({ onOpen }: { onOpen: () => void }) {
  return (
    <button className="block sm:hidden" onClick={onOpen}>
      <svg
        className="h-6 w-6 fill-white"
        viewBox="0 -5 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M30 18a2 2 0 0 1 0 4H2a2 2 0 0 1 0-4h28Zm0-9a2 2 0 0 1 0 4H2a2 2 0 0 1 0-4h28Zm0-9a2 2 0 0 1 0 4H2a2 2 0 0 1 0-4h28Z" />
      </svg>
    </button>
  );
}

function ExitIcon({ onClose }: { onClose: () => void }) {
  return (
    <button onClick={onClose}>
      <svg
        className="h-6 w-6 fill-white"
        viewBox="-3.5 0 19 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
      </svg>
    </button>
  );
}

type MenuProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

function MenuLayout({ children, isOpen }: MenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 h-screen transition duration-300 ease-in-out ${
        isOpen
          ? "bg-zinc-900/20 backdrop-blur-sm"
          : "pointer-events-none bg-transparent backdrop-blur-none"
      }`}
    >
      <div
        className={`fixed inset-0 z-50 flex h-screen transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Menu({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full w-full rounded-l-2xl bg-zinc-800">
      {children}
    </div>
  );
}
