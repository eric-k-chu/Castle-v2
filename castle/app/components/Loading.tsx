import { LoadingCircle } from "./general";

export function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-hero bg-cover bg-top bg-no-repeat">
      <LoadingCircle />
    </div>
  );
}
