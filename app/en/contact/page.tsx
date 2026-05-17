import type { Metadata } from 'next';
import type { ComponentType, JSX } from 'react';
import Image from 'next/image';
import { ExternalLink, FlaskConical, Globe2, Handshake, MapPin, PackageCheck, Phone, Store } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';
import { company } from '@/lib/site';

const pagePath = '/en/contact';
const pageTitle = 'Contact CosmoOrigin | Sales and Technical Support';
const pageDescription = 'Contact CosmoOrigin by email, phone, WeChat, Taobao or Shopify for luminescent material samples, technical discussions and international inquiries.';
const canonicalUrl = absoluteUrl(pagePath);
type ContactIcon = ComponentType<LucideProps>;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['contact CosmoOrigin', 'luminescent material samples', 'glow material supplier China', 'technical support'],
  alternates: buildAlternates(pagePath),
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const channels = [
  {
    title: 'Business Cooperation',
    description: 'Share your project background, timeline and estimated volume. Our sales team will follow up within one business day.',
    contact: company.email,
    icon: Handshake,
  },
  {
    title: 'Joint R&D',
    description: 'Universities, research institutes and design studios can request material samples and co-development discussions.',
    contact: company.labEmail,
    icon: FlaskConical,
  },
  {
    title: 'Samples / Testing',
    description: 'Tell us your application scenario, specification needs and validation metrics so we can arrange samples or testing.',
    contact: company.prototypeEmail,
    icon: PackageCheck,
  },
];

const contactItems = [
  {
    title: 'Phone',
    icon: Phone,
    content: (
      <a href={`tel:${company.phoneHref}`} className="text-sm font-semibold text-foreground">
        {company.phone}
      </a>
    ),
  },
  {
    title: 'Company Address',
    icon: MapPin,
    content: <p className="text-sm text-muted-foreground">{company.addressEn}</p>,
  },
  {
    title: 'Online Purchase / International Inquiries',
    icon: Store,
    content: (
      <div className="flex flex-wrap gap-3">
        <a href={company.taobaoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
          <Store className="h-4 w-4 text-primary" aria-hidden="true" />
          Taobao Store
        </a>
        <a href={company.shopifyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
          <Globe2 className="h-4 w-4 text-primary" aria-hidden="true" />
          Shopify International Store
        </a>
      </div>
    ),
  },
];

const socialChannels = [
  {
    label: 'Douyin',
    description: 'Search for “宇元新材” on Douyin for lab updates and live demos.',
    href: company.douyinUrl,
    qrImage: company.douyinQr,
    qrAlt: 'CosmoOrigin Douyin QR code',
  },
  {
    label: 'TikTok',
    description: '@cosmorigin shares material updates and application stories for global audiences.',
    href: company.tiktokUrl,
    qrImage: company.tiktokQr,
    qrAlt: 'CosmoOrigin TikTok QR code',
  },
  {
    label: 'WeChat Official Account',
    description: 'Follow the official account for technical notes, documents and event updates.',
    href: company.wechatUrl,
    qrImage: company.wechatQr,
    qrAlt: 'CosmoOrigin WeChat official account QR code',
  },
  {
    label: 'WeChat Video Account',
    description: 'Watch short demos and live material showcases through the video account.',
    qrImage: company.videoQr,
    qrAlt: 'CosmoOrigin WeChat video account QR code',
  },
  {
    label: 'Weibo',
    description: '@宇元新材 shares industry notes and exhibition updates.',
    href: company.weiboUrl,
    qrImage: company.weiboQr,
    qrAlt: 'CosmoOrigin Weibo QR code',
  },
  {
    label: 'Xiaohongshu',
    description: '@宇元新材 records material inspiration and application cases.',
    href: company.xiaohongshuUrl,
    qrImage: company.xiaohongshuQr,
    qrAlt: 'CosmoOrigin Xiaohongshu QR code',
  },
  {
    label: 'Shopify',
    description: 'CosmoOrigin international store for global inquiries.',
    href: company.shopifyUrl,
    qrImage: company.shopifyQr,
    qrAlt: 'CosmoOrigin Shopify store QR code',
  },
  {
    label: 'Taobao Store',
    description: 'Domestic samples, consumables and standard products are available through Taobao.',
    href: company.taobaoUrl,
    qrImage: company.taobaoQr,
    qrAlt: 'CosmoOrigin Taobao store QR code',
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
    name: company.enName,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.addressEn,
      addressLocality: 'Yangzhou',
      addressRegion: 'Jiangsu',
      postalCode: '225000',
      addressCountry: 'CN',
    },
    telephone: company.phoneHref,
    contactPoint: channels.map((channel) => ({
      '@type': 'ContactPoint',
      contactType: channel.title,
      description: channel.description,
      email: channel.contact,
      availableLanguage: ['en', 'zh-CN'],
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

const ContactEnPage = (): JSX.Element => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={contactSchema} />

    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-6">
        <div className="panel-soft p-6">
          <h3 className="border-b border-primary pb-3 text-lg font-semibold text-foreground">Contact Channels</h3>
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

        <div className="panel-soft p-6">
          <h3 className="border-b border-primary pb-3 text-lg font-semibold text-foreground">Follow Us</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {socialChannels.map((channel) => (
              <div key={channel.label} className="text-center">
                <div className="panel hover-card grid h-full min-h-[270px] grid-rows-[auto_72px_1fr] p-4">
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-sm font-semibold text-foreground">{channel.label}</p>
                    {channel.href && (
                      <a
                        href={channel.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${channel.label}`}
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
                        alt={channel.qrAlt}
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

export default ContactEnPage;
