/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.extensions = ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.cjs', '.json'];
    return config;
  },
};

module.exports = nextConfig;
