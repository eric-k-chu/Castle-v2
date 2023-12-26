"use client";

import { Archives, Clubs, Stats, Tab, Tournaments } from "@/lib/types";
import {
  getPlayerArchives,
  getPlayerClubs,
  getPlayerStats,
  getPlayerTournaments,
} from "@/utils/fetcher";
import { useEffect, useState } from "react";
import { LoadingCircle } from "../general";
import { StatsDisplay } from ".";

type Props = {
  tab: Tab;
  username: string | null;
};

export function DataDisplay({ tab, username }: Props) {
  const [data, setData] = useState<Stats | Clubs | Archives | Tournaments>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        let res: Stats | Clubs | Archives | Tournaments;
        switch (tab) {
          case "stats":
            res = await getPlayerStats(username);
            break;
          case "clubs":
            res = await getPlayerClubs(username);
            break;
          case "archives":
            res = await getPlayerArchives(username);
            break;
          case "tournaments":
            res = await getPlayerTournaments(username);
            break;
        }
        setData(res);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [tab, username, isLoading]);

  if (isLoading) {
    return (
      <div className="mt flex h-96 w-full justify-center pt-8">
        <LoadingCircle />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="mt flex h-96 w-full justify-center pt-8">
        <LoadingCircle />
      </div>
    );
  }

  if (tab === "stats") {
    return <StatsDisplay data={data as Stats} />;
  }
  if (tab === "clubs") {
    return <div className="mt w-full bg-black text-center">CLUBS</div>;
  }
  if (tab === "archives") {
    return <div className="mt w-full bg-black text-center">ARCHIVES</div>;
  }
  return <div className="mt w-full bg-black text-center">TOURNAMENTS</div>;
}
