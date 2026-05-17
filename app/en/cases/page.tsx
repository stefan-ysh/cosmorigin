import type { Metadata } from 'next';

import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';
import styles from '@/styles';
import { enCases } from '../content';

const pagePath = '/en/cases';
const pageTitle = 'CosmoOrigin Cases | Validation Programs and Collaboration Progress';
const pageDescription = 'Review CosmoOrigin validation programs across automotive interiors, smart agriculture and luminescent 3D-printing applications.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['luminescent material cases', 'glow material validation', 'automotive luminescent fiber case'],
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
  itemListElement: enCases.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.title,
    description: item.challenge,
  })),
};

const CasesEnPage = () => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={schema} />
    <section className="px-6 py-16">
      <div className={`${styles.innerWidth} mx-auto text-center`}>
        <h1 className="text-4xl font-bold tracking-tight">Cases and Collaboration Progress</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
          These programs are presented as validation-stage examples, with goals, material paths and next-step testing focus.
        </p>
      </div>
    </section>
    <section className="px-6 pb-20">
      <div className={`${styles.innerWidth} mx-auto grid gap-6`}>
        {enCases.map((item) => (
          <article key={item.title} className="panel p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.client}</p>
            <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Challenge</p><p className="mt-2 text-sm leading-7 text-muted-foreground">{item.challenge}</p></div>
              <div><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Progress</p><p className="mt-2 text-sm leading-7 text-muted-foreground">{item.result}</p></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default CasesEnPage;
