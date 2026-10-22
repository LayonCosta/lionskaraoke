import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "lionskaraoke.vercel.app",
          },
        ],
        destination: "https://lionskaraoke.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
