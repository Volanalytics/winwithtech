/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/winwithtech', // The name of your GitHub repository
  trailingSlash: true, // Add trailing slashes to all URLs
  assetPrefix: '/winwithtech/', // Prefix for all assets
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
}

module.exports = nextConfig
