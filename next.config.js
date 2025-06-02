/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '/',
  distDir: 'out',
  cleanDistDir: true,
}

module.exports = nextConfig
