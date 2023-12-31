import { redirect } from "next/navigation";

export default function PlayerPage({
  params,
}: {
  params: { username: string };
}) {
  redirect(`/player/${params.username}`);
}
