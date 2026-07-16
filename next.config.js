/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const publicImageCacheHeaders = ['avif', 'gif', 'ico', 'jpeg', 'jpg', 'png', 'svg', 'webp']
  .map((extension) => ({
    source: `/:path*.${extension}`,
    headers: [
      {
        key: 'Cache-Control',
        value: 'public, max-age=604800, stale-while-revalidate=2592000',
      },
    ],
  }));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO优化：启用压缩
  compress: true,
  // Turbopack 配置（Next.js 16+ 默认使用 Turbopack）
  turbopack: {
    root: path.resolve(__dirname),
  },
  // 生成 robots.txt 和 sitemap
  async headers() {
    return [
      ...publicImageCacheHeaders,
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  // 图片优化
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [72, 75],
    minimumCacheTTL: 2592000,
  },
};

module.exports = nextConfig;
