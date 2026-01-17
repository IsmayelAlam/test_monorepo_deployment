import type { NextConfig } from 'next';
const API_URL =
  process.env.Backend_URL ||
  'http://test-server-gmj2pa-f148d3-129-154-47-181.traefik.me/';

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${API_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
