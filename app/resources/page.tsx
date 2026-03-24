import type { Metadata } from 'next';

import Link from 'next/link';

import JsonLd from '@/components/JsonLd';
import styles from '@/styles';
import { absoluteUrl, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';
import ResourcesClient from './ResourcesClient';

const pagePath = '/resources';
const pageTitle = '宇元新材资料中心 | 白皮书与检测报告';
const pageDescription = '集中发布产品手册、性能测试、认证证书、品牌素材与协议文档，方便合作伙伴快速下载并评估发光材料能力。';
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
    title: '宇元新材物性表（2026）',
    description: '详细列出 PE、PLA、TPU 等系列发光材料的 ASTM 标准测试数据。',
    type: 'DOC · 124 KB',
    href: '/宇元新材物性表-260202.doc',
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

const ResourcesPage = () => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={resourcesSchema} />

    <section className="px-6 py-16">
      <div className={`${styles.innerWidth} mx-auto`}>
        <p className="text-center text-lg text-muted-foreground">
          这里提供产品手册、性能测试与开发文档，帮助合作伙伴快速了解材料能力或开展二次设计。
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">产品物性参数</h2>
          <ResourcesClient />
        </div>
      </div>
    </section>

    <section className="px-6 pb-16 pt-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-center mb-8">文档下载</h2>
        <div className="grid gap-6">
          {downloads.map((file) => (
            <article key={file.title} className="panel hover-card p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{file.type}</p>
                  <h2 className="text-xl font-semibold mt-1">{file.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{file.description}</p>
                </div>
                {file.href ? (
                  <Link href={file.href} className="inline-flex items-center justify-center rounded-md border border-border bg-white px-5 py-2 text-sm font-semibold text-foreground shrink-0 hover:bg-gray-50 transition-colors">
                    下载
                  </Link>
                ) : (
                  <span className="inline-flex items-center justify-center rounded-md border border-dashed border-border px-5 py-2 text-sm text-muted-foreground/50 shrink-0 cursor-not-allowed">即将上线</span>
                )}
              </div>
            </article>
          ))}
        </div>
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
