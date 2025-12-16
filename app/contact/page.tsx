import type { Metadata } from 'next';
import Image from 'next/image';

import Link from 'next/link';

import JsonLd from '@/components/JsonLd';
import PagePlaceholder from '@/components/PagePlaceholder';
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
  <main className="bg-background text-foreground">
    <JsonLd data={contactSchema} />
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">CONTACT</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">与宇元团队建立联系</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          不论是商务合作、技术探讨还是媒体计划，我们都会在 24 小时内响应。您可选择以下渠道跟我们取得联系，我们会安排专属顾问跟进。
        </p>
      </div>
    </section>

    <section className="px-6 pb-12">
      <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
        {channels.map((channel) => (
          <div key={channel.title} className="rounded-3xl border border-border bg-card/50 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{channel.title}</p>
            <p className="mt-3 text-sm text-muted-foreground">{channel.description}</p>
            <a href={`mailto:${channel.contact}`} className="mt-6 block text-lg font-semibold text-foreground hover:text-foreground/80">
              {channel.contact}
            </a>
          </div>
        ))}
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

    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">地址</p>
          <p className="mt-3 text-lg font-semibold">江苏省扬州市邗江区开发西路 213 号 609 室</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">电话</p>
          <p className="mt-3 text-lg font-semibold">+86 185 7841 2005</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">社交渠道</p>
          <div className="mt-4 space-y-3">
            {socialChannels.map((channel) => {
              const cardBody = (
                <>
                  <p className="text-sm font-semibold text-foreground">{channel.label}</p>
                  <p className="text-xs text-muted-foreground">{channel.description}</p>
                  {channel.qrImage && (
                    <>
                      <Image
                        src={channel.qrImage}
                        alt={channel.qrAlt ?? `${channel.label} 二维码`}
                        width={200}
                        height={200}
                        className="mx-auto w-3/5 rounded-xl border border-border object-contain md:hidden"
                      />
                      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-popover p-2 opacity-0 transition duration-300 group-hover:opacity-100 md:block">
                        <Image
                          src={channel.qrImage}
                          alt={channel.qrAlt ?? `${channel.label} 二维码`}
                          width={192}
                          height={192}
                          className="h-48 w-48 rounded-lg object-contain"
                        />
                      </div>
                    </>
                  )}
                </>
              );

              if (channel.href) {
                return (
                  <Link
                    key={channel.label}
                    href={channel.href}
                    target="_blank"
                    className="group relative block rounded-2xl border border-border bg-card/50 px-4 py-3 transition hover:border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                  >
                    <div className="flex flex-col gap-2">{cardBody}</div>
                  </Link>
                );
              }

              return (
                <div key={channel.label} className="group relative flex flex-col gap-2 rounded-2xl border border-border bg-card/50 px-4 py-3">
                  {cardBody}
                </div>
              );
            })}
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
