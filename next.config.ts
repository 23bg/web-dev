import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',// name of page
        port: '',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
