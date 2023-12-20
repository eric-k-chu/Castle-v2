import { ClientError } from "../lib/client-error";

type Props = {
  error: unknown;
};

export function Error({ error }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center gap-x-4 bg-black">
      <h1 className="text-2xl font-medium text-white">
        {error instanceof ClientError ? error.status : "-"}
      </h1>
      <div className="border-l-2 border-gray-400 pl-4">
        <h2 className="text-base font-light text-white">
          {error instanceof ClientError
            ? error.message
            : "An unknown error has occured"}
        </h2>
      </div>
    </div>
  );
}
