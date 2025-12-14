import type { Metadata } from 'next';

import Image from 'next/image';

import JsonLd from '@/components/JsonLd';
import PagePlaceholder from '@/components/PagePlaceholder';
import { absoluteUrl, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';

const pagePath = '/about';
const pageTitle = '关于宇元新材 | 公司概览与技术底座';
const pageDescription =
  '了解宇元新材的使命、团队与研发体系。我们专注柔性发光材料的原创技术，持续投入中试产线与联合实验室建设。';
const canonicalUrl = absoluteUrl(pagePath);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['宇元新材', '发光材料团队', '柔性发光技术', '材料实验室', '扬州发光企业'],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const milestones = [
  { year: '2025-10', content: '在扬州建立第一条柔性发光实验产线，攻克纳米级涂覆一致性。' },
//   { year: '2020', content: '推出耐海水发光纤维丝，通过 3260 小时浸泡稳定性验证。' },
  { year: '2025-11', content: '建成米级连续自发光生产线，与主机厂、文旅集团开启联合验证。' },
  { year: '2025-12', content: '发布 3D 打印辅材并布局海外技术服务中心。' },
];

const leadership = [
  {
    title: '材料科学团队',
    detail: '来自发光材料与器件国家重点实验室的博士/硕士 12 名，覆盖无机、聚合物与光电转换领域。',
  },
  {
    title: '结构与工艺',
    detail: '具备车规级工艺、卷对卷涂布、纤维编织、3D 打印调试等跨学科能力。',
  },
  {
    title: '产业化与交付',
    detail: '自研 MES 与质量追溯系统，保证多批次一致性，并支持 OEM/ODM 模式。',
  },
];

const aboutSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: pageTitle,
    url: canonicalUrl,
    description: pageDescription,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: '关于我们', item: canonicalUrl },
      ],
    },
    mainEntity: {
      '@type': 'Organization',
      name: '扬州宇元新材有限公司',
      foundingDate: '2014',
      numberOfEmployees: '50+',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '江苏省扬州市邗江区开发西路 213 号 609 室',
        addressLocality: '扬州',
        addressRegion: '江苏省',
        postalCode: '225000',
        addressCountry: 'CN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+86-185-7841-2005',
        email: 'contact@cosmorigin.com',
        contactType: 'sales',
        areaServed: 'CN',
        availableLanguage: ['zh-CN', 'en'],
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '发展里程碑',
    itemListElement: milestones.map((milestone, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: milestone.content,
      startDate: milestone.year,
    })),
  },
];

const AboutPage = (): JSX.Element => (
  <main className="bg-primary-black text-white">
    <JsonLd data={aboutSchemas} />
    <section className="px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row">
        <div className="flex-1">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">ABOUT</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            以原创材料技术点亮更高效的光环境
          </h1>
          <p className="mt-6 text-lg text-white/70">
            宇元新材成立于扬州，专注柔性发光材料研发与规模化生产，以低能耗、高自由度的光源形态服务交通、农业、公共安全与文旅场景。
            我们自建材料实验室、智能工厂与行业联合创新中心，构建从配方、结构、工艺到系统集成的完整能力闭环。
          </p>
        </div>
        <div className="flex w-full flex-1 items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="grid w-full grid-cols-2 gap-6">
            {[
              { label: '研发投入策略', value: '持续高占比投入（数据更新中）' },
              { label: '核心知识产权', value: '多项专利与软著（敬请期待）' },
              { label: '生态合作', value: '面向汽车/文旅/公共安全多行业' },
              { label: '交付版图', value: '服务国内外多个重点城市' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-semibold text-white/80">{item.value}</p>
                <p className="mt-1 text-sm text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-10">
        <h2 className="text-2xl font-semibold">发展里程碑</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {milestones.map((item) => (
            <div key={item.year} className="rounded-2xl border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">{item.year}</p>
              <p className="mt-3 text-lg text-white/80">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">团队与治理</h3>
          <p className="mt-4 text-white/70">
            多学科团队覆盖材料、结构、电控与供应链管理，并由产业顾问委员会持续迭代技术路线与行业策略。
          </p>
          <div className="mt-8 space-y-6">
            {leadership.map((item) => (
              <div key={item.title}>
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-sm text-white/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">产研基地</h3>
          <p className="mt-4 text-white/70">
            扬州智能制造中心负责卷对卷涂布、纤维编织与模块封装，南京应用实验室聚焦材料验证与联合研发，海外服务中心负责小批量交付与培训。
          </p>
          <div className="mt-8 grid gap-4">
            {[
              '卷对卷连续产线（宽幅 1.2m）',
              '恒温恒湿配方实验室与可靠性实验室',
              '行业联合创新中心（交通、农业、公共安全）',
              '全链路质量追溯系统 + 数字化仓储',
            ].map((capability) => (
              <div key={capability} className="rounded-2xl border border-dashed border-white/20 p-4 text-sm text-white/70">
                {capability}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 pb-32">
      <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">社会责任与可持续</h3>
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            <li>• 低能耗光源：与传统照明相比更高效，助力户外装置延长寿命（详细数据上线中）。</li>
            <li>• 可循环材料体系：核心材料支持回收与环保认证，后续将发布完整检测报告。</li>
            <li>• 安全共建：持续与公共交通、景区合作优化夜间引导，为城市安全提供参考案例。</li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 flex items-center justify-center">
          <Image
            src="/宇元新材发光材料制成的圣诞树.png"
            alt="宇元新材产线"
            width={700}
            height={700}
            className="h-4/5 w-4/5 object-contain"
          />
        </div>
      </div>
    </section>

    <PagePlaceholder
      eyebrow="NEXT"
      title="开放更深入的参观与共创"
      description="欢迎预约来访我们的产线与实验室，也可以与技术、商务团队探讨联合研发项目。"
      cta={{ label: '预约参观', href: '/contact' }}
    />
  </main>
);

export default AboutPage;
