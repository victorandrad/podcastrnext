/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para build estático
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/podcastrnext' : '',
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
  // Garantir que arquivos estáticos sejam copiados
  experimental: {
    outputFileTracingRoot: undefined,
  },
}

module.exports = nextConfig