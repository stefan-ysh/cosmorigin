import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/seo';

// 每次构建自动生成，lastmod 记录构建日期，部署后即更新
const routes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/color-card', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/solutions', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/cases', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/resources', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/news', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/playground', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' as const },
  { path: '/en', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/en/about', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/en/products', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/en/color-card', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/en/solutions', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/en/cases', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/en/resources', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/en/news', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/en/playground', priority: 0.5, changeFrequency: 'monthly' as const },
  { path: '/en/contact', priority: 0.7, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
