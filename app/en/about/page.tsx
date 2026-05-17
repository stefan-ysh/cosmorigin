import type { Metadata } from 'next';

import Image from 'next/image';

import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';
import { company } from '@/lib/site';
import styles from '@/styles';

const pagePath = '/en/about';
const pageTitle = 'About CosmoOrigin | Company and Technology Platform';
const pageDescription = 'Learn about CosmoOrigin, a Yangzhou-based advanced materials company focused on flexible luminescent materials, pilot production and joint application development.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['CosmoOrigin', 'luminescent materials company', 'flexible glow materials', 'Yangzhou advanced materials'],
  alternates: buildAlternates(pagePath),
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: pageTitle,
  url: absoluteUrl(pagePath),
  description: pageDescription,
  mainEntity: {
    '@type': 'Organization',
    name: company.enName,
    address: company.addressEn,
    email: company.email,
    telephone: company.phoneHref,
  },
};

const AboutEnPage = () => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={aboutSchema} />
    <section className="px-6 py-16 lg:py-24">
      <div className={`${styles.innerWidth} mx-auto grid gap-12 lg:grid-cols-2 items-center`}>
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-black/5 bg-gray-50 shadow-2xl shadow-blue-900/5">
          <Image src="/宇元新材公司.png" alt="CosmoOrigin facility and team environment" fill className="object-cover" priority />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Company</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">{company.enName}</h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground">
            Based in Yangzhou, CosmoOrigin develops flexible luminescent materials that support low-power,
            customizable light effects across mobility, agriculture, public safety and cultural installations.
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            The team works across formulation, device structure, processing and application integration, helping partners
            move from material samples to validated solution packages.
          </p>
        </div>
      </div>
    </section>
    <section className="px-6 pb-20">
      <div className={`${styles.innerWidth} mx-auto grid gap-6 md:grid-cols-3`}>
        {[
          ['Material R&D', 'Formulation, spectral tuning and durability-oriented material design.'],
          ['Pilot Production', 'Flexible film, fiber, coating and 3D-printing material process validation.'],
          ['Application Engineering', 'Scenario definition, sample testing and co-development with industry partners.'],
        ].map(([title, text]) => (
          <article key={title} className="panel p-6">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default AboutEnPage;
