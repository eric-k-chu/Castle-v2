import { ChessImgBackground } from "@/_components";

export default function PlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChessImgBackground radial>{children}</ChessImgBackground>;
}
