/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: isProd ? '/winwithtech' : '', // Only use basePath in production
  trailingSlash: true, // Add trailing slashes to all URLs
  assetPrefix: isProd ? '/winwithtech/' : '', // Prefix for static assets in production
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
