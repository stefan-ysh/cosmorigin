import type { Metadata } from 'next';

import Link from 'next/link';

import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';

const pagePath = '/resources';
const pageTitle = '宇元新材资料中心 | 白皮书与检测报告';
const pageDescription =
  '集中发布产品手册、性能测试、认证证书、品牌素材与协议文档，方便合作伙伴快速下载并评估发光材料能力。';
const canonicalUrl = absoluteUrl(pagePath);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['发光材料白皮书', '检测报告下载', '宇元新材资料中心', '产品手册', '品牌素材'],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const downloads = [
  {
    title: '宇元新材产品手册（2026）',
    description: '涵盖油漆、纤维丝、发光膜与 3D 打印辅材的核心参数与应用指南。',
    type: 'PDF · 7.3 MB',
    href: '/扬州宇元新材产品手册.pdf',
  },
  {
    title: '水下稳定性与盐雾测试摘要',
    description: '3260 小时浸泡测试、48 小时盐雾实验以及热循环数据概览。',
    type: 'PDF · 即将上线',
  },
  {
    title: '品牌视觉与媒体素材包',
    description: 'LOGO、标准色、典型场景图与发光效果短视频。',
    type: 'ZIP · 近期更新',
  },
];

const resourcesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: pageTitle,
  url: canonicalUrl,
  description: pageDescription,
  hasPart: downloads.map((download) => ({
    '@type': 'DigitalDocument',
    name: download.title,
    description: download.description,
    encodingFormat: download.type,
    url: download.href ? absoluteUrl(download.href) : undefined,
  })),
};

const ResourcesPage = (): JSX.Element => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={resourcesSchema} />
    <div className="page-banner page-banner--resources" />

    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm text-muted-foreground">
          这里提供产品手册、性能测试、品牌视觉与开发文档，帮助合作伙伴快速了解材料能力或开展二次设计。
        </p>
      </div>
    </section>

    <section className="px-6 pb-16">
      <div className="mx-auto max-w-6xl grid gap-6">
        {downloads.map((file) => (
          <article key={file.title} className="panel hover-card p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{file.type}</p>
                <h2 className="text-xl font-semibold">{file.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{file.description}</p>
              </div>
              {file.href ? (
                <Link href={file.href} className="inline-flex items-center rounded-md border border-border bg-white px-5 py-2 text-sm font-semibold text-foreground">
                  下载
                </Link>
              ) : (
                <span className="rounded-md border border-dashed border-border px-5 py-2 text-sm text-muted-foreground/50">即将上线</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* <PagePlaceholder
      eyebrow="NEXT"
      title="需要其他认证或数据？"
      description="若需 RoHS/REACH、阻燃、车规可靠性等完整报告，请向我们索取并签署 NDA。"
      cta={{ label: '邮件索取资料', href: 'mailto:contact@cosmorigin.com' }}
    /> */}
  </main>
);

export default ResourcesPage;
