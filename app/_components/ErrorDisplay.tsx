"use client";

import Link from "next/link";
import { ExitIcon, MissingFileIcon } from "./icons";

type Props = {
  error: unknown;
};

export function ErrorDisplay({ error }: Props) {
  return (
    <div className="mx-auto max-w-5xl py-[100px]">
      <div className="px-4 text-center">
        <div className="flex items-center justify-center">
          <MissingFileIcon className="h-48 w-auto fill-neutral-200 sm:h-60" />
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
          href="/"
          className="mx-auto flex w-fit items-center gap-x-4 rounded-full bg-blue-500 px-4 py-2 text-lg hover:bg-blue-400"
        >
          Return to Home
          <ExitIcon />
        </Link>
      </div>
    </div>
  );
}
