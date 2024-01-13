"use client";

import { useRouter } from "next/navigation";
import { MobileSidebar } from "./MobileSidebar";
import { Logo } from "./icons";

export function Navbar() {
  const router = useRouter();

  return (
    <div className="fixed z-20 flex w-full items-center justify-center bg-neutral-200 px-6 py-4 dark:bg-neutral-900 sm:hidden sm:bg-transparent">
      <div className="mr-auto flex items-center gap-x-4 sm:hidden">
        <MobileSidebar />
        <button onClick={() => router.push("/")}>
          <Logo />
        </button>
      </div>
    </div>
  );
}
