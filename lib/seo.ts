import type { Metadata } from 'next';

export const SITE_URL = 'https://cosmorigin.com';
export const SITE_NAME = '宇元新材 CosmoOrigin';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const normalizePath = (path: string): string => (path.startsWith('/') ? path : `/${path}`);

export const absoluteUrl = (path = '/'): string => {
  if (path.startsWith('http')) {
    return path;
  }

  return `${SITE_URL}${normalizePath(path)}`;
};

export const buildOpenGraph = (
  title: string,
  description: string,
  path: string,
  image: string = DEFAULT_OG_IMAGE,
): NonNullable<Metadata['openGraph']> => ({
  type: 'website',
  url: absoluteUrl(path),
  title,
  description,
  siteName: SITE_NAME,
  locale: 'zh_CN',
  images: [
    {
      url: absoluteUrl(image),
      width: 1200,
      height: 630,
      alt: title,
    },
  ],
});

export const buildTwitter = (
  title: string,
  description: string,
  image: string = DEFAULT_OG_IMAGE,
): NonNullable<Metadata['twitter']> => ({
  card: 'summary_large_image',
  title,
  description,
  site: '@cosmorigin',
  creator: '@cosmorigin',
  images: [absoluteUrl(image)],
});

export const defaultRobots: Metadata['robots'] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};
