import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function ChessImgBackground({ children }: Props) {
  return (
    <main
      className="relative"
      style={{
        background:
          "conic-gradient(from 90deg at 0.5px 0.5px,#18181b 90deg,#27272a 0) 0 0/50px 50px",
      }}
    >
      {children}
      <div className="flex h-72 items-end justify-center bg-gradient-to-t from-zinc-900 from-70% to-transparent pb-10">
        <a
          target="_blank"
          href="https://github.com/eric-k-chu"
          className="flex items-center"
        >
          <Image
            src="/icons/github.svg"
            alt="github link"
            width={0}
            height={0}
            className="h-auto w-8"
          />
          <span className="px-2 text-lg">GitHub</span>
        </a>
      </div>
    </main>
  );
}
