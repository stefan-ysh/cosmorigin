import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/next'
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => (
  <html lang="zh-CN">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>
      {children}
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
