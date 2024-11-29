/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4001",
      },
      {
        protocol: "https",
        hostname: "api.onlineparts.shop",
        port: "",
      },
    ],
  },
};

export default nextConfig;
