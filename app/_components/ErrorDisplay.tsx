"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  error: unknown;
};

export function ErrorDisplay({ error }: Props) {
  return (
    <div className="mx-auto max-w-5xl py-[100px]">
      <div className="px-4 text-center">
        <div className="flex items-center justify-center">
          <Image
            src="/icons/file-missing.svg"
            alt="Missing Page"
            width={0}
            height={0}
            className="h-48 w-auto sm:h-60"
          />
        </div>
        <h1 className="text-semibold mt-8 text-2xl sm:text-4xl">
          Oops! Something went wrong!
        </h1>
        <div className="mb-8 mt-4">
          <span className="pr-2 text-lg text-red-400 sm:text-2xl">Error:</span>
          <span className="text-lg sm:text-2xl">
            {error instanceof Error ? error.message : "Unexpected Error."}
          </span>
        </div>
        <Link
          href="/home"
          className="mx-auto flex w-fit items-center gap-x-4 rounded-full bg-blue-500 px-4 py-2 text-lg hover:bg-blue-400"
        >
          Return to Home
          <Image
            src="/icons/exit.svg"
            className="h-4 w-auto"
            width={0}
            height={0}
            alt="exit"
          />
        </Link>
      </div>
    </div>
  );
}
