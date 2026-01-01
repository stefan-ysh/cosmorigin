import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';
import { ReactNode } from 'react';

import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';

import '@/styles/globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const siteTitle = '宇元新材 - 发光材料专家 | 发光材料研发与生产';
const siteDescription =
  '扬州宇元新材专注新型柔性发光材料研发与生产，提供发光油漆、发光纤维丝、发光膜等产品。全球首个纳米级连续生产自发光材料，3260小时水下稳定性认证。产品广泛应用于汽车内外饰、智慧农业、应急救援、公共交通等领域。支持任意图案定制与多色光谱调节。';

export const metadata: Metadata = {
  metadataBase: new URL('https://cosmorigin.com'),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    '发光油漆',
    '发光纤维丝',
    '发光膜',
    '柔性发光材料',
    '自发光材料',
    '夜光材料',
    '汽车发光',
    'cosmorigin',
    '发光雨布',
    'RMAF温室',
    '电致发光线',
    '3D打印发光',
    '宇元新材',
    '扬州发光材料',
    '水下发光',
    '防水发光织物',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: buildOpenGraph(siteTitle, siteDescription, '/'),
  twitter: buildTwitter(siteTitle, siteDescription),
  robots: defaultRobots,
  manifest: '/manifest.json',
  icons: {
    icon: '/cosmorigin-logo.png',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#000000',
  applicationName: '宇元新材 - 发光材料专家',
  authors: [{ name: '宇元新材' }],
  creator: '宇元新材',
  publisher: '宇元新材',
  verification: {
    other: {
      'baidu-site-verification': 'codeva-da22ppmgjE',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  other: {
    'geo.region': 'CN-32',
    'geo.placename': '扬州,江苏',
    'geo.position': '32.3912;119.4249',
    ICBM: '32.3912, 119.4249',
  },
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => (
  <html lang="zh-CN">
    <head>
      {process.env.NODE_ENV === 'production' && (
        <Script
          src="https://umami.tiantian.group/script.js"
          data-website-id="173ffae6-87f9-48f1-a7c9-082da809eecc"
          strategy="afterInteractive"
        />
      )}
    </head>
    <body className="bg-background text-foreground antialiased">
      <Navbar />
      {children}
      <BackToTop />
      <Analytics />
      <Footer />
    </body>
  </html>
);

export default RootLayout;
