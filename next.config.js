/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/winwithtech', // The name of your GitHub repository
  trailingSlash: true, // Add trailing slashes to all URLs
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
