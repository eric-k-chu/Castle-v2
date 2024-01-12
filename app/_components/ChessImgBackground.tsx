import Image from "next/image";
import { ReactNode } from "react";
import { GitHubIcon } from ".";

type Props = {
  children: ReactNode;
};

export function ChessImgBackground({ children }: Props) {
  return (
    <main
      className="bg-gradient-conic-light dark:bg-gradient-conic-dark relative"
      style={{ backgroundPosition: "0 0", backgroundSize: "50px 50px" }}
    >
      {children}
      <div className="flex h-72 items-end justify-center bg-gradient-to-t from-neutral-300 from-70% to-transparent pb-10 dark:from-neutral-950">
        <a
          target="_blank"
          href="https://github.com/eric-k-chu"
          className="flex items-center"
        >
          <GitHubIcon />
          <span className="px-2 text-lg text-neutral-900 dark:text-neutral-200">
            GitHub
          </span>
        </a>
      </div>
    </main>
  );
}
