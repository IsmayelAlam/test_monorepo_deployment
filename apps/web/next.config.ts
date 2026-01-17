import type { NextConfig } from 'next';
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

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
