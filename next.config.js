/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // For Docker deployments
  images: {
    unoptimized: true, // For static exports
  },
  // Add other deployment configurations as needed
}

module.exports = nextConfig
