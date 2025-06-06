import createMDX from '@next/mdx';

const nextConfig = {
  images: {
    domains: ["github.com"],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

module.exports = withMDX(nextConfig);