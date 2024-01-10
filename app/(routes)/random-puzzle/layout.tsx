import { ChessImgBackground } from "@/_components";

export default function RandomDailyPuzzleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChessImgBackground>{children}</ChessImgBackground>;
}
