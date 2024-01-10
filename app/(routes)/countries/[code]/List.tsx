"use client";

import { GreaterThanIcon, LessThanIcon } from "@/_components";
import { usePagination } from "@/_hooks";
import { useRouter } from "next/navigation";

type Props = {
  list: string[];
  link: string;
};

export function List({ list, link }: Props) {
  const [items, page, _, switchPage] = usePagination(list, 20);
  const router = useRouter();

  return (
    <>
      <div className="flex items-center gap-x-4">
        <h5 className="text-xs text-neutral-500 sm:text-sm">
          {page + 1} of {items.length}
        </h5>
        <div className="ml-auto space-x-2">
          <button onClick={() => switchPage("prev")}>
            <GreaterThanIcon className="h-3 w-3" />
          </button>
          <button onClick={() => switchPage("next")}>
            <LessThanIcon className="h-3 w-3" />
          </button>
        </div>
      </div>
      <ul className="mt-4 rounded-md bg-neutral-900 p-4">
        {items[page].map((n) => (
          <li
            key={n}
            onClick={() => router.push(`${link}/${n}`)}
            className="truncate p-2 capitalize odd:bg-neutral-800 even:bg-transparent hover:cursor-pointer hover:bg-neutral-700"
          >
            {n}
          </li>
        ))}
      </ul>
    </>
  );
}
