import type { NextConfig } from "next";
import remarkGfm from 'remark-gfm'

const withMDX = require('@next/mdx')(
  {
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
  }
);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

module.exports = withMDX(nextConfig);