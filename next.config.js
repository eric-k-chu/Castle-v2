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
    ],
  },
};

module.exports = nextConfig;
