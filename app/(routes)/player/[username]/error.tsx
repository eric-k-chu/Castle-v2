"use client";

import { ErrorMessage } from "@/_components";

type Props = {
  error: Error;
};

export default function Error({ error }: Props) {
  return (
    <ErrorMessage
      message={error instanceof Error ? error.message : "Unexpected Error."}
    />
  );
}
