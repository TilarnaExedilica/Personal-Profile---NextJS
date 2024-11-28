import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woffeot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;