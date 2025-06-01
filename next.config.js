/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/winwithtech', // The name of your GitHub repository
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
    ],
  },
}

module.exports = nextConfig
