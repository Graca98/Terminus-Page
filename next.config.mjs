/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mc-heads.net',
        port: '',
        pathname: '/body/**',
      },
    ],
  },
};

export default nextConfig;
