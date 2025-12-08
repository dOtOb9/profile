import type { NextConfig } from "next";

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [
            require.resolve('remark-math'),
            require.resolve('remark-gfm'),
        ],
        rehypePlugins: [
            require.resolve('rehype-katex'),
            require.resolve('rehype-prism-plus'),
        ],
    },
});

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
    turbopack: {},
    
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

module.exports = withMDX(nextConfig);