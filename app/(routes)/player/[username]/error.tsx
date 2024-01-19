"use client";

import { ErrorMessage } from "@/_components";
import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
};

export default function Error({ error }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorMessage
      message={error instanceof Error ? error.message : "Unexpected Error."}
    />
  );
}
