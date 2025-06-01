/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  trailingSlash: true, // Add trailing slashes to all URLs
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
