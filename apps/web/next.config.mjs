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
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
