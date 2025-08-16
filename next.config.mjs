/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/prevoria',
  assetPrefix: '/prevoria/',
  trailingSlash: true,
};
export default nextConfig;

