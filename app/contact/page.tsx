import type { Metadata } from 'next';
import type { ComponentType, JSX } from 'react';
import Image from 'next/image';
import { ExternalLink, FlaskConical, Globe2, Handshake, MapPin, PackageCheck, Phone, Store } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

import JsonLd from '@/components/JsonLd';
import ContactForm from './ContactForm';
import { socialChannels } from '@/constants';
import { absoluteUrl, buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';
import { company } from '@/lib/site';

const pagePath = '/contact';
const pageTitle = '联系宇元新材 | 商务与技术支持';
const pageDescription = '通过电话、邮箱或表单与宇元新材取得联系，预约材料样品、技术研讨或联合研发。';
const canonicalUrl = absoluteUrl(pagePath);
type ContactIcon = ComponentType<LucideProps>;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['联系宇元新材', '发光材料咨询', '发光材料专家', '商务对接', '技术支持'],
  alternates: buildAlternates(pagePath),
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const channels = [
  {
    title: '商务合作',
    description: '提交项目背景、时间节点与批量预估，1 个工作日内由商务顾问跟进。',
    contact: 'contact@cosmorigin.com',
    icon: Handshake,
  },
  {
    title: '联合研发',
    description: '高校、科研机构与设计工作室可申请材料样品与共创实验。',
    contact: 'lab@cosmorigin.com',
    icon: FlaskConical,
  },
  {
    title: '样品/测试',
    description: '说明应用场景、规格需求、验证指标，我们将提供样品或安排测试。',
    contact: 'prototype@cosmorigin.com',
    icon: PackageCheck,
  },
];

const contactItems = [
  {
    title: '联系电话',
    icon: Phone,
    content: (
      <a href={`tel:${company.phoneHref}`} className="text-sm font-semibold text-foreground">
        {company.phone}
      </a>
    ),
  },
  {
    title: '公司地址',
    icon: MapPin,
    content: <p className="text-sm text-muted-foreground">{company.addressZh}</p>,
  },
  {
    title: '在线购买 / 海外咨询',
    icon: Store,
    content: (
      <div className="flex flex-wrap gap-3">
        <a href={company.taobaoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
          <Store className="h-4 w-4 text-primary" aria-hidden="true" />
          淘宝店
        </a>
        <a href={company.shopifyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
          <Globe2 className="h-4 w-4 text-primary" aria-hidden="true" />
          Shopify 国际站
        </a>
      </div>
    ),
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
    name: company.zhName,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.addressZh,
      addressLocality: '扬州',
      addressRegion: '江苏省',
      postalCode: '225000',
      addressCountry: 'CN',
    },
    telephone: company.phoneHref,
    contactPoint: channels.map((channel) => ({
      '@type': 'ContactPoint',
      contactType: channel.title,
      description: channel.description,
      email: channel.contact,
      availableLanguage: ['zh-CN'],
    })),
  },
};

const IconTitle = ({ icon: Icon, title }: { icon: ContactIcon; title: string }): JSX.Element => (
  <div className="flex items-center gap-2">
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
      <Icon className="h-4 w-4" aria-hidden="true" />
    </span>
    <p className="text-sm font-semibold text-foreground">{title}</p>
  </div>
);

const ContactPage = (): JSX.Element => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={contactSchema} />

    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-6">
        <div className="panel-soft p-6">
          <h3 className="border-b border-primary pb-3 text-lg font-semibold text-foreground">联系渠道</h3>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {channels.map((channel) => (
              <div key={channel.title} className="panel hover-card flex h-full flex-col p-4">
                <IconTitle icon={channel.icon} title={channel.title} />
                <p className="mt-2 flex-1 text-xs leading-5 text-muted-foreground">{channel.description}</p>
                <a href={`mailto:${channel.contact}`} className="mt-4 block text-sm font-semibold text-foreground">
                  {channel.contact}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {contactItems.map((item) => (
              <div key={item.title} className="panel hover-card p-4">
                <IconTitle icon={item.icon} title={item.title} />
                <div className="mt-3">{item.content}</div>
              </div>
            ))}
          </div>
        </div>

        <ContactForm />

        <div className="panel-soft p-6">
          <h3 className="border-b border-primary pb-3 text-lg font-semibold text-foreground">关注我们</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {socialChannels.map((channel) => (
              <div key={channel.label} className="text-center">
                <div className="panel hover-card grid h-full min-h-[270px] grid-rows-[auto_56px_1fr] p-4">
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-sm font-semibold text-foreground">{channel.label}</p>
                    {channel.href && (
                      <a
                        href={channel.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`打开${channel.label}`}
                        className="inline-flex h-6 w-6 items-center justify-center rounded-full text-foreground transition hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                  <p className="mt-1 flex items-start justify-center text-xs leading-5 text-muted-foreground">{channel.description}</p>
                  {channel.qrImage && (
                    <div className="flex items-end justify-center">
                      <Image
                        src={channel.qrImage}
                        alt={channel.qrAlt ?? `${channel.label} 二维码`}
                        width={160}
                        height={160}
                        className="h-32 w-32 object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default ContactPage;
