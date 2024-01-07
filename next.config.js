/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.chesscomfiles.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.chess.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
