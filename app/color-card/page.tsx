import type { Metadata } from 'next';
import type { JSX } from 'react';

import JsonLd from '@/components/JsonLd';
import FilamentColorCards from '../products/FilamentColorCards';
import { absoluteUrl, buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';

const pagePath = '/color-card';
const pageTitle = '夜光/温变线材电子色卡 | 宇元新材';
const pageDescription = 'Glow PLA 夜光线材 6 款基础色，TC 温变线材 22/30/42℃ 感温可选：单色 16 款、双色 49 款（黄橙/红/紫/蓝/青绿系），支持悬停/点击预览热态参考色，附完整色卡 PDF 下载。';
const canonicalUrl = absoluteUrl(pagePath);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['夜光线材色卡', '温变线材色卡', 'PLA 3D打印线材颜色', 'Glow PLA 颜色', '热敏变色线材', '宇元新材色卡'],
  alternates: buildAlternates(pagePath),
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const colorCardSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: pageTitle,
  url: canonicalUrl,
  description: pageDescription,
  hasPart: [
    {
      '@type': 'Product',
      name: 'Glow PLA 夜光线材',
      description: '6 款基础色的 PLA 夜光 3D 打印线材，吸收自然光/紫外光/LED 光后暗处持续余辉，线径 1.75 mm。',
      brand: { '@type': 'Brand', name: '宇元新材' },
    },
    {
      '@type': 'Product',
      name: 'TC 单色温变线材',
      description: '16 款单色温变 PLA 线材，22/30/42℃ 感温可选，冷态显示目标颜色，受热后趋近 PLA 基材本色。',
      brand: { '@type': 'Brand', name: '宇元新材' },
    },
    {
      '@type': 'Product',
      name: 'TC 双色温变线材',
      description: '49 款双色温变 PLA 线材，按黄橙/红/紫/蓝/青绿五大色系划分，冷态/热态双参考色。',
      brand: { '@type': 'Brand', name: '宇元新材' },
    },
  ],
};

const ColorCardPage = (): JSX.Element => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={colorCardSchema} />

    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">PLA 夜光/温变线材电子色卡</h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-muted-foreground">
          用于产品选型与配色沟通：夜光 6 色、单色温变 16 色、双色温变 49 色，支持 22 ℃ / 30 ℃ / 42 ℃ 感温温度可选。
        </p>
      </div>
    </section>

    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <FilamentColorCards />
      </div>
    </section>
  </main>
);

export default ColorCardPage;
