/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

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
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
