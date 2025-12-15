import type { Metadata } from 'next';

import Link from 'next/link';

import JsonLd from '@/components/JsonLd';
import PagePlaceholder from '@/components/PagePlaceholder';
import { absoluteUrl, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';

const pagePath = '/news';
const pageTitle = '新闻动态 | 宇元新材最新进展';
const pageDescription = '关注宇元新材的产品发布、合作签约与实验室里程碑，第一时间掌握柔性发光材料的产业化动态。';
const canonicalUrl = absoluteUrl(pagePath);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['宇元新材新闻', '发光材料动态', 'Cosmorigin 新闻', '发光材料发布', '产业快讯'],
  alternates: { canonical: canonicalUrl },
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

interface NewsItem {
  title: string;
  date: string;
  category: string;
  summary: string;
  href?: string;
  location?: string;
  highlight?: string;
}

const newsItems: NewsItem[] = [
  {
    title: '发布3D 打印全新发光辅材，助力定制化光电解决方案的实现',
    date: '2025-12-08',
    category: '产品发布',
    summary:
      '扬州智能制造中心完成米级宽幅卷对卷生产线联调，可一次性完成涂覆、固化、封装与检测，支撑 2026 年多行业交付。',
    location: '扬州',
    highlight: '产线升级 2.0',
  },
  {
    title: '热烈祝贺！宇元新材CTO田甜教授携创新成果斩获“绿扬金凤”创业大奖',
    date: '2025-11-17',
    category: '技术洞察',
    summary:
      '田甜教授从技术突破性、产业化可行性、与扬州产业链契合度等多维度展示了项目优势，最终以扎实的研发积累与清晰的落地规划打动评委，成功获奖！',
    href: 'https://mp.weixin.qq.com/s/RInDU5Tcb1MZY4bVIXO7cQ',
    location: '扬州',
    // highlight: '数据摘要',
  },
  {
    title: '一汽集团领导莅临扬州宇元新材有限公司考察交流',
    date: '2025-11-09',
    category: '展会活动',
    highlight: '共创计划',
    summary:
      '双方以“创新材料”为纽带，以“场景需求”为核心，既展现了宇元新材在织物赋能、光电材料领域的技术积淀，也体现了一汽集团对国产供应链创新的支持与开放态度。',
    href: 'https://mp.weixin.qq.com/s/PkcB1lVUBFW-CojI3D6N4w',
    location: '扬州',
  },
  {
    title: '扬州宇元新材有限公司正式成立',
    date: '2025-10-29',
    category: '公司发展',
    location: '扬州',
    summary:
      '扬州宇元新材有限公司近日正式成立，注册地位于江苏省扬州市。公司以“材料生产 + 技术研发 + 产业链配套”为发展路径，面向新能源、电子信息与汽车等产业提供关键材料与制造能力支持。标志着扬州在新材料与高端制造领域又添一位重要新成员。',
    // highlight: '融资进展',
    href: 'https://mp.weixin.qq.com/s/VFN9Lmvoc7_K-lzKwdaApA',
  },
];

const newsroomSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: pageTitle,
  url: canonicalUrl,
  description: pageDescription,
  hasPart: newsItems.map((item) => ({
    '@type': 'NewsArticle',
    headline: item.title,
    datePublished: item.date,
    articleSection: item.category,
    description: item.summary,
    url: item.href?.startsWith('http') ? item.href : item.href ? absoluteUrl(item.href) : canonicalUrl,
    locationCreated: item.location,
    author: {
      '@type': 'Organization',
      name: '扬州宇元新材有限公司',
    },
    publisher: {
      '@type': 'Organization',
      name: '扬州宇元新材有限公司',
    },
  })),
};

const NewsPage = (): JSX.Element => (
  <main className="bg-primary-black text-white">
    <JsonLd data={newsroomSchema} />
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">NEWSROOM</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          记录发光技术走向产业的每一步
        </h1>
        <p className="mt-6 text-lg text-white/70">
          我们定期分享产线节点、客户共创、行业发布与技术洞察，也欢迎媒体与合作伙伴引用这些公开信息。
        </p>
      </div>
    </section>

    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">全部动态</p>
          <div className="h-[1px] w-full bg-white/10" />
        </div>
        <div className="grid gap-6">
          {newsItems.map((item) => {
            const isExternal = item.href?.startsWith('http');
            return (
              <article key={`${item.title}-${item.date}`} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-wrap items-center gap-3 text-white/70">
                    <span className="text-lg font-semibold text-white">{item.date}</span>
                    <span className="h-1 w-1 rounded-full bg-white/40" aria-hidden />
                    <span className="text-xs uppercase tracking-[0.4em] text-white/60">{item.category}</span>
                    {item.location && (
                      <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">{item.location}</span>
                    )}
                    {item.highlight && (
                      <span className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold text-white">
                        {item.highlight}
                      </span>
                    )}
                  </div>
                  {item.href ? (
                    isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white"
                      >
                        查看详情 ↗
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white"
                      >
                        查看详情 →
                      </Link>
                    )
                  ) : (
                    <span className="text-sm text-white/50">完整稿件整理中</span>
                  )}
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-base text-white/70">{item.summary}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    {/* <PagePlaceholder
      eyebrow="SUBSCRIBE"
      title="希望第一时间获知新材料发布？"
      description="订阅宇元新材的季度简报，获取实验数据、合作案例与行业洞察。"
      cta={{ label: '联系团队获取简报', href: '/contact' }}
    /> */}
  </main>
);

export default NewsPage;
