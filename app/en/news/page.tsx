import type { Metadata } from 'next';

import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';
import styles from '@/styles';
import { enNews } from '../content';

const pagePath = '/en/news';
const pageTitle = 'CosmoOrigin News | Product Updates and Collaboration Notes';
const pageDescription = 'Follow CosmoOrigin product updates, collaboration notes, technical exchanges and public activities around flexible luminescent materials.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['CosmoOrigin news', 'luminescent materials updates', 'glow material product news'],
  alternates: buildAlternates(pagePath),
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: pageTitle,
  url: absoluteUrl(pagePath),
  hasPart: enNews.map((item) => ({
    '@type': 'NewsArticle',
    headline: item.title,
    datePublished: item.date,
    articleSection: item.category,
    description: item.summary,
  })),
};

const NewsEnPage = () => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={schema} />
    <section className="px-6 py-16">
      <div className={`${styles.innerWidth} mx-auto text-center`}>
        <h1 className="text-4xl font-bold tracking-tight">News</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
          Product updates, technical exchanges and collaboration moments from the CosmoOrigin team.
        </p>
      </div>
    </section>
    <section className="px-6 pb-20">
      <div className={`${styles.innerWidth} mx-auto grid gap-6`}>
        {enNews.map((item) => (
          <article key={`${item.title}-${item.date}`} className="bg-white rounded-xl border border-border/50 p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wide text-blue-700">{item.date}</span>
              <span className="text-xs text-muted-foreground">{item.category}</span>
            </div>
            <h2 className="mt-4 text-xl font-bold">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default NewsEnPage;
