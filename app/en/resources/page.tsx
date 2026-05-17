import type { Metadata } from 'next';

import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';
import styles from '@/styles';
import { enResources } from '../content';

const pagePath = '/en/resources';
const pageTitle = 'CosmoOrigin Resources | Brochures and Material Property Sheets';
const pageDescription = 'Download CosmoOrigin product brochures and material property sheets for luminescent paint, fibers, films and 3D-printing materials.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['CosmoOrigin brochure', 'luminescent material data sheet', 'glow material property sheet'],
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
  hasPart: enResources.map((item) => ({
    '@type': 'DigitalDocument',
    name: item.title,
    description: item.description,
    encodingFormat: item.type,
    url: absoluteUrl(item.href),
  })),
};

const ResourcesEnPage = () => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={schema} />
    <section className="px-6 py-16">
      <div className={`${styles.innerWidth} mx-auto text-center`}>
        <h1 className="text-4xl font-bold tracking-tight">Resources</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
          Product references and technical documents for partner evaluation and early-stage design.
        </p>
      </div>
    </section>
    <section className="px-6 pb-20">
      <div className={`${styles.innerWidth} mx-auto grid gap-6`}>
        {enResources.map((item) => (
          <article key={item.title} className="panel p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.type}</p>
                <h2 className="mt-1 text-xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
              <a href={item.href} className="inline-flex shrink-0 items-center justify-center rounded-md border border-border bg-white px-5 py-2 text-sm font-semibold text-foreground">
                Download
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default ResourcesEnPage;
