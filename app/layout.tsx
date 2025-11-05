import { Analytics } from "@vercel/analytics/next"
import { ReactNode } from 'react';

import '@/styles/globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => (
  <html lang="zh-CN">
    <head>
      {/* Title */}
      <title>宇元新材 - 发光材料专家 | 发光材料研发与生产</title>
      
      {/* Basic Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta
        name="description"
        content="扬州宇元新材专注新型柔性发光材料研发与生产，提供发光油漆、发光纤维丝、发光膜等产品。全球首个纳米级连续生产自发光材料，3260小时水下稳定性认证。产品广泛应用于汽车内外饰、智慧农业、应急救援、公共交通等领域。支持任意图案定制与多色光谱调节。"
      />
      <meta
        name="keywords"
        content="发光材料,发光油漆,发光纤维丝,发光膜,柔性发光材料,自发光材料,夜光材料,汽车发光,智慧农业,应急救援,发光雨布,RMAF温室,电致发光线,3D打印发光,发光手办,宇元新材,扬州发光材料,水下发光,防水发光织物"
      />
      
      {/* Icons and Manifest */}
      <link rel="icon" href="/metadroid-fav.png" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="canonical" href="https://cosmorigin.com" />
      <meta name="theme-color" content="#000000" />
      
      {/* Fonts */}
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      
      {/* Author and Copyright */}
      <meta name="author" content="宇元新材" />
      <meta name="copyright" content="宇元新材" />
      <meta name="language" content="zh-CN" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Baidu Verification */}
      <meta name="baidu-site-verification" content="codeva-da22ppmgjE" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://cosmorigin.com/" />
      <meta property="og:title" content="宇元新材 - 发光材料专家 | 发光材料研发与生产" />
      <meta
        property="og:description"
        content="全球首个米级连续生产自发光材料，提供发光油漆、发光纤维丝、发光膜。3260小时水下稳定性认证，支持多色定制。"
      />
      <meta property="og:image" content="https://cosmorigin.com/og-image.jpg" />
      <meta property="og:locale" content="zh_CN" />
      <meta property="og:site_name" content="扬州宇元新材有限公司-发光材料专家" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://cosmorigin.com/" />
      <meta name="twitter:title" content="宇元新材 - 发光材料专家 | 发光材料研发与生产" />
      <meta
        name="twitter:description"
        content="专注发光材料研发与生产，提供全系列发光产品。高亮度、环保无毒，支持定制化解决方案。"
      />
      <meta name="twitter:image" content="https://cosmorigin.com/og-image.jpg" />
      
      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="CN-32" />
      <meta name="geo.placename" content="扬州,江苏" />
      <meta name="geo.position" content="32.3912;119.4249" />
      <meta name="ICBM" content="32.3912, 119.4249" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
    </head>
    <body>
      {children}
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
