/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  productionBrowserSourceMaps: true,

  async rewrites() {
    return [
      {
        source: '/health-check',
        destination: '/api/health-check',
      },
    ];
  },
};

module.exports = nextConfig;
