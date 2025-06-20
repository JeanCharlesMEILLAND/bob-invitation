import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bob.strapi-pro.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
