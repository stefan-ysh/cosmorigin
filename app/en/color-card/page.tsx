import type { Metadata } from 'next';
import type { JSX } from 'react';

import JsonLd from '@/components/JsonLd';
import FilamentColorCards from '../../products/FilamentColorCards';
import { absoluteUrl, buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';

const pagePath = '/en/color-card';
const pageTitle = 'Glow & Thermochromic PLA Filament Color Card | CosmoOrigin';
const pageDescription = 'Electronic color card: 6 Glow PLA colors, 16 single-color and 49 dual-color thermochromic options with 22/30/42°C activation. Preview hot-state colors and download the full PDF.';
const canonicalUrl = absoluteUrl(pagePath);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['glow PLA filament colors', 'thermochromic filament color card', 'PLA 3D printing filament colors', 'color changing filament', 'CosmoOrigin color card'],
  alternates: buildAlternates(pagePath),
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const colorCardSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: pageTitle,
  url: canonicalUrl,
  description: pageDescription,
  hasPart: [
    {
      '@type': 'Product',
      name: 'Glow PLA filament',
      description: 'PLA glow-in-the-dark 3D printing filament in 6 basic colors; charges from daylight, UV or LED light and glows in the dark. 1.75 mm diameter.',
      brand: { '@type': 'Brand', name: 'CosmoOrigin' },
    },
    {
      '@type': 'Product',
      name: 'TC single-color thermochromic filament',
      description: '16 single-color thermochromic PLA filaments with 22/30/42°C activation; shows the target color when cold and fades toward the PLA base color when heated.',
      brand: { '@type': 'Brand', name: 'CosmoOrigin' },
    },
    {
      '@type': 'Product',
      name: 'TC dual-color thermochromic filament',
      description: '49 dual-color thermochromic PLA filaments grouped into yellow-orange, red, purple, blue and teal families with cold/hot reference colors.',
      brand: { '@type': 'Brand', name: 'CosmoOrigin' },
    },
  ],
};

const EnColorCardPage = (): JSX.Element => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={colorCardSchema} />

    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">PLA Glow / Thermochromic Filament Color Card</h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-muted-foreground">
          For product selection and color communication: 6 glow colors, 16 single-color and 49 dual-color thermochromic options, with 22 °C / 30 °C / 42 °C activation choices.
        </p>
      </div>
    </section>

    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <FilamentColorCards locale="en" />
      </div>
    </section>
  </main>
);

export default EnColorCardPage;
