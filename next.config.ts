import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["github.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;

const withMDX = require('@next/mdx')();
module.exports = withMDX({
  // 他のNext.js設定
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});