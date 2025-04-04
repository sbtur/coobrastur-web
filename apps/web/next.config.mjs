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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
