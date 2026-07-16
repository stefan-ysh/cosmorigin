import type { Metadata, Viewport } from 'next';

import Script from 'next/script';
import { JSX, ReactNode } from 'react';

import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';
import { company } from '@/lib/site';

import '@/styles/globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const siteTitle = '宇元新材 - 柔性发光与轻量化防辐射材料';
const siteDescription = '扬州宇元新材研发柔性发光与轻量化防辐射复合材料，提供发光油漆、发光纤维丝、发光膜，以及面向传统医用铅衣减重替代的材料与结构方案。';

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
    '轻量化防辐射材料',
    '辐射屏蔽复合材料',
    '铅衣替代材料',
  ],
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/',
      en: '/en',
    },
  },
  openGraph: buildOpenGraph(siteTitle, siteDescription, '/'),
  twitter: buildTwitter(siteTitle, siteDescription),
  robots: defaultRobots,
  manifest: '/manifest.json',
  icons: {
    icon: '/cosmorigin-logo.png',
    apple: '/cosmorigin-logo.png',
  },
  applicationName: '宇元新材 - 发光材料专家',
  authors: [{ name: '宇元新材' }],
  creator: '宇元新材',
  publisher: '宇元新材',
  verification: {
    other: {
      'baidu-site-verification': 'codeva-da22ppmgjE',
    },
  },
  other: {
    'geo.region': 'CN-32',
    'geo.placename': '扬州,江苏',
    'geo.position': '32.3912;119.4249',
    ICBM: '32.3912, 119.4249',
    'business:contact_data:street_address': company.addressZh,
    'business:contact_data:locality': '扬州',
    'business:contact_data:region': '江苏',
    'business:contact_data:country_name': '中国',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => (
  <html lang="zh-CN">
    <head>
      {process.env.NODE_ENV === 'production' && (
        <Script
          src="https://umami.tiantian.group/script.js"
          data-website-id="173ffae6-87f9-48f1-a7c9-082da809eecc"
          strategy="lazyOnload"
        />
      )}
    </head>
    <body className="bg-background text-foreground antialiased">
      <Navbar />
      {children}
      <BackToTop />
      <Footer />
    </body>
  </html>
);

export default RootLayout;
