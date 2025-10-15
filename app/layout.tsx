import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => (
  <html lang="zh-CN">
    <head>
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <link rel="icon" href="/metadroid-fav.png" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#000000" />
    </head>
    <body>
      {children}
      {/* <Analytics /> */}
    </body>
  </html>
);

export default RootLayout;
