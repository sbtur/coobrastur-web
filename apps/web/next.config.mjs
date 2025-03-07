/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@coobrastur/ui'],
  images: {
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
