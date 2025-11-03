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
      <title>宇元新材 - 发光材料专家 | 长余辉发光粉研发与生产</title>
      
      {/* Basic Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta
        name="description"
        content="扬州宇元新材专注发光材料研发与生产，提供长余辉发光粉、夜光粉、荧光材料、稀土发光材料的配方设计、晶体结构调控及量产工艺开发。定制发光涂料、发光油墨、发光薄膜，广泛应用于安全标识、应急照明、装饰材料、纺织印花等领域。十年研发经验，ISO认证，一站式解决方案。"
      />
      <meta
        name="keywords"
        content="发光材料,发光粉,长余辉发光粉,夜光粉,荧光粉,稀土发光材料,蓄光型发光材料,发光涂料,发光油墨,发光薄膜,夜光材料,荧光材料,光致发光材料,长余辉材料,安全标识材料,应急照明材料,发光纺织,发光印花,发光装饰材料,环保发光材料,高亮度发光粉,长效发光材料,发光材料厂家,发光粉生产厂家,宇元新材,扬州发光材料,江苏发光材料,中国发光材料"
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
      <meta property="og:title" content="宇元新材 - 发光材料专家 | 长余辉发光粉研发与生产" />
      <meta
        property="og:description"
        content="专注发光材料研发与生产，提供长余辉发光粉、夜光粉、荧光材料的配方设计、晶体结构调控及量产工艺开发。十年研发经验，ISO认证，一站式解决方案。"
      />
      <meta property="og:image" content="https://cosmorigin.com/og-image.jpg" />
      <meta property="og:locale" content="zh_CN" />
      <meta property="og:site_name" content="扬州宇元新材有限公司-发光材料专家" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://cosmorigin.com/" />
      <meta name="twitter:title" content="宇元新材 - 发光材料专家 | 长余辉发光粉研发与生产" />
      <meta
        name="twitter:description"
        content="专注发光材料研发与生产，提供配方设计、晶体结构调控及量产工艺开发。十年研发经验，ISO认证，一站式解决方案。"
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
