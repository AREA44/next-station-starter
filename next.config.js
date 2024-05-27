/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
