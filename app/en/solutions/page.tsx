import type { Metadata } from 'next';

import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';
import styles from '@/styles';
import { enSolutions } from '../content';

const pagePath = '/en/solutions';
const pageTitle = 'CosmoOrigin Solutions | Mobility, Agriculture, Radiation Protection and Safety';
const pageDescription = 'CosmoOrigin provides functional material solutions for automotive, agriculture, medical radiation protection, emergency safety and creative installations.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['functional material solutions', 'automotive lighting material', 'smart agriculture light material', 'lightweight radiation shielding', 'lead apron alternative material', 'safety glow material'],
  alternates: buildAlternates(pagePath),
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: pageTitle,
  url: absoluteUrl(pagePath),
  itemListElement: enSolutions.map((solution, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: solution.title,
    description: `${solution.pain} ${solution.plan}`,
  })),
};

const SolutionsEnPage = () => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={schema} />
    <section className="px-6 py-16">
      <div className={`${styles.innerWidth} mx-auto text-center`}>
        <h1 className="text-4xl font-bold tracking-tight">Application Solutions</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
          We package materials, structures and validation workflows into practical solution tracks for industry partners.
        </p>
      </div>
    </section>
    <section className="px-6 pb-20">
      <div className={`${styles.innerWidth} mx-auto grid gap-6`}>
        {enSolutions.map((solution) => (
          <article key={solution.title} className="bg-white rounded-2xl border border-black/5 p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight">{solution.title}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Challenge</p><p className="mt-2 text-sm leading-7 text-muted-foreground">{solution.pain}</p></div>
              <div><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Approach</p><p className="mt-2 text-sm leading-7 text-muted-foreground">{solution.plan}</p></div>
              <div><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Validation Focus</p><p className="mt-2 text-sm leading-7 text-muted-foreground">{solution.kpi}</p></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default SolutionsEnPage;
