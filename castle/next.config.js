/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.chesscomfiles.com",
        pathname: "/uploads/v1/user/**",
      },
    ],
  },
};

module.exports = nextConfig;
