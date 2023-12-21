"use client";

import Image from "next/image";
import { getPlayerProfile } from "@/_chess_api/_player_data";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const search = useSearchParams();
  // const { data, error } = await getPlayerProfile(search.get("q"));

  // if (error) throw error;

  // if (!data) {
  //   return (
  //     <div>
  //       <h1>Player does not exist.</h1>
  //     </div>
  //   );
  // }

  const num = 123456;

  return (
    <div className="flex min-h-screen w-full flex-col bg-hero bg-cover bg-top bg-no-repeat pt-24">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex items-center">
            <div className="relative flex items-center justify-center">
              <Image
                src="/images/hero.png"
                alt="avatar"
                width="0"
                height="0"
                className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-green-500 bg-black object-cover sm:h-24 sm:w-24"
              />
              <h3 className="absolute bottom-0 rounded-sm bg-green-400/90 px-1 text-sm font-medium uppercase text-black empty:hidden">
                {true && "Verified"}
              </h3>
            </div>
            <div className="ml-8 flex flex-col gap-y-4">
              <h1 className="flex items-center text-2xl font-semibold sm:text-4xl">
                {"Hikaru"}
                <span className="ml-4 rounded-md bg-[#7C2929] px-2 py-0.5 font-mono text-lg text-white empty:hidden">
                  GM
                </span>
              </h1>
              <div className="flex items-center gap-x-2 text-sm text-gray-300 empty:hidden sm:text-lg">
                <h2 className="empty:hidden">{"Hikaru Nakamura"}</h2>
                <h2 className="empty:hidden">{"Florida"}</h2>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-end gap-2 sm:flex-row md:ml-auto md:flex-col lg:flex-row">
            <a
              className="flex h-10 w-36 items-center rounded-sm border-2 border-gray-600 bg-black p-2 px-4 text-xl hover:border-blue-600 hover:bg-blue-600 md:h-12 md:w-48"
              target="_blank"
              href={"#"}
            >
              <Image
                src="/icons/chess-com.svg"
                alt="Chess.com Logo"
                width="0"
                height="0"
                className="h-auto w-2 sm:w-4"
              />
              <h2 className="px-2 text-xs uppercase md:text-base">Chess.com</h2>
              <Image
                src="/icons/exit.svg"
                alt="exit icon"
                width="0"
                height="0"
                className="ml-auto h-auto w-4 sm:w-6"
              />
            </a>
            <a
              className="flex h-10 w-36 items-center rounded-sm border-2 border-gray-600 bg-black p-2 px-4 text-xl hover:border-blue-600 hover:bg-blue-600 md:h-12 md:w-48"
              target="_blank"
              href={"#"}
            >
              <Image
                src="/icons/twitch.svg"
                alt="Twitch Logo"
                width="0"
                height="0"
                className="h-auto w-4 sm:w-6"
              />
              <h2 className="px-2 text-xs uppercase md:text-base">Twitch</h2>
              <Image
                src="/icons/exit.svg"
                alt="exit icon"
                width="0"
                height="0"
                className="ml-auto h-auto w-4 sm:w-6"
              />
            </a>
          </div>
        </div>
        <div className="mt-10 grid w-full grid-cols-3 gap-4 text-xs md:text-sm">
          <div className="flex items-center justify-center gap-x-2 rounded-md bg-gray-900 px-4 py-3">
            <Image
              src="/icons/followers.svg"
              alt="followers icon"
              width="0"
              height="0"
              className="w-4"
            />
            {num.toLocaleString()}
          </div>
          <div className="flex items-center justify-center gap-x-2 rounded-md bg-gray-900 px-4 py-3">
            {"Legend"}
          </div>
          <div className="flex items-center justify-center gap-x-2 rounded-md bg-gray-900 px-4 py-3">
            {"Basic"}
          </div>
        </div>
      </div>
    </div>
  );
}
