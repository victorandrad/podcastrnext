/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' só é usado durante o build para produção
  // Em desenvolvimento, o Next.js roda normalmente
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
    basePath: '/podcastrnext'
  }),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig