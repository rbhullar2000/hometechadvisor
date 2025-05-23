const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
};

module.exports = withMDX(nextConfig);