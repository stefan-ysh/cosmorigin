import type { Metadata } from 'next';
import Image from 'next/image';

import JsonLd from '@/components/JsonLd';
import { socialChannels } from '@/constants';
import { absoluteUrl, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';

const pagePath = '/contact';
const pageTitle = '联系宇元新材 | 商务与技术支持';
const pageDescription = '通过电话、邮箱或表单与宇元新材取得联系，预约材料样品、技术研讨或联合研发。';
const canonicalUrl = absoluteUrl(pagePath);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['联系宇元新材', '发光材料咨询', '发光材料专家', '商务对接', '技术支持'],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const channels = [
  {
    title: '商务合作',
    description: '提交项目背景、时间节点与批量预估，1 个工作日内由商务顾问跟进。',
    contact: 'contact@cosmorigin.com',
  },
  {
    title: '联合研发',
    description: '高校、科研机构与设计工作室可申请材料样品与共创实验。',
    contact: 'lab@cosmorigin.com',
  },
  {
    title: '样品/测试',
    description: '说明应用场景、规格需求、验证指标，我们将提供样品或安排测试。',
    contact: 'prototype@cosmorigin.com',
  },
];

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: pageTitle,
  url: canonicalUrl,
  description: pageDescription,
  mainEntity: {
    '@type': 'Organization',
    name: '扬州宇元新材有限公司',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '江苏省扬州市邗江区开发西路 213 号 609 室',
      addressLocality: '扬州',
      addressRegion: '江苏省',
      postalCode: '225000',
      addressCountry: 'CN',
    },
    telephone: '+86-185-7841-2005',
    contactPoint: channels.map((channel) => ({
      '@type': 'ContactPoint',
      contactType: channel.title,
      description: channel.description,
      email: channel.contact,
      availableLanguage: ['zh-CN'],
    })),
  },
};

const ContactPage = (): JSX.Element => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={contactSchema} />
    <div className="page-banner page-banner--contact" />

    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="panel-soft p-6">
            <h3 className="text-lg font-semibold text-foreground border-b border-primary pb-3">联系渠道</h3>
            <div className="mt-6 space-y-4">
              {channels.map((channel) => (
                <div key={channel.title} className="panel hover-card p-4">
                  <p className="text-sm font-semibold text-foreground">{channel.title}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{channel.description}</p>
                  <a href={`mailto:${channel.contact}`} className="mt-3 block text-sm font-semibold text-foreground">
                    {channel.contact}
                  </a>
                </div>
              ))}
              <div className="panel hover-card p-4">
                <p className="text-sm font-semibold text-foreground">联系电话</p>
                <p className="mt-2 text-xs text-muted-foreground">+86 185 7841 2005</p>
              </div>
              <div className="panel hover-card p-4">
                <p className="text-sm font-semibold text-foreground">公司地址</p>
                <p className="mt-2 text-xs text-muted-foreground">江苏省扬州市邗江区开发西路 213 号 609 室</p>
              </div>
            </div>
          </div>

          <div className="panel-soft p-6">
            <h3 className="text-lg font-semibold text-foreground border-b border-primary pb-3">关注我们</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {socialChannels.map((channel) => (
                <div key={channel.label} className="text-center">
                  <div className="panel hover-card p-4">
                    <p className="text-sm font-semibold text-foreground">{channel.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{channel.description}</p>
                    {channel.qrImage && (
                      <Image
                        src={channel.qrImage}
                        alt={channel.qrAlt ?? `${channel.label} 二维码`}
                        width={160}
                        height={160}
                        className="mx-auto mt-4 h-32 w-32 object-contain"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl rounded-3xl border border-border bg-card/50 p-8">
        <h2 className="text-2xl font-semibold">预约沟通表单</h2>
        <p className="mt-3 text-muted-foreground">填写需求后我们会在 24 小时内邮件或电话回复。</p>
        <form className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-muted-foreground">姓名 / 公司</label>
            <input id="name" name="name" className="rounded-2xl border border-border bg-transparent px-4 py-3 text-foreground focus:border-ring focus:outline-none" placeholder="如：李先生 / XX 设计事务所" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-muted-foreground">邮箱 / 电话</label>
            <input id="email" name="email" className="rounded-2xl border border-border bg-transparent px-4 py-3 text-foreground focus:border-ring focus:outline-none" placeholder="contact@company.com" />
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-muted-foreground">需求描述</label>
            <textarea id="message" name="message" rows={4} className="rounded-2xl border border-border bg-transparent px-4 py-3 text-foreground focus:border-ring focus:outline-none" placeholder="请说明应用场景、时间节点与希望解决的问题" />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="w-full rounded-full border border-border/50 py-3 text-sm font-semibold text-foreground transition hover:border-foreground">
              提交需求
            </button>
          </div>
        </form>
      </div>
    </section> */}

    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl panel p-6">
        <div className="grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">地址</p>
            <p className="mt-2 text-sm">江苏省扬州市邗江区开发西路 213 号 609 室</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">电话</p>
            <p className="mt-2 text-sm">+86 185 7841 2005</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">邮箱</p>
            <p className="mt-2 text-sm">contact@cosmorigin.com</p>
          </div>
        </div>
      </div>
    </section>

    {/* <PagePlaceholder
      eyebrow="NEXT"
      title="还想更快对接？"
      description="添加企业微信或线下拜访，我们可以安排技术负责人直接参与讨论。"
      cta={{ label: '立即联系', href: 'mailto:contact@cosmorigin.com' }}
    /> */}
  </main>
);

export default ContactPage;
