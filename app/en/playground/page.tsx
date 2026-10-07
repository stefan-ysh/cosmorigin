import type { Metadata } from 'next';

import PlaygroundSurface from '@/components/PlaygroundSurface';
import { buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';
import styles from '@/styles';

const pagePath = '/en/playground';
const pageTitle = 'Cosmorigin Showcase | Luminescent Material Light Effects';
const pageDescription = 'Preview Cosmorigin luminescent material samples under lights-on and lights-off conditions.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['luminescent material showcase', 'glow material demo', 'Cosmorigin light effect'],
  alternates: buildAlternates(pagePath),
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const PlaygroundPage = () => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <section className={`${styles.xPaddings} py-16`}>
      <div className={`${styles.innerWidth} mx-auto`}>
        <PlaygroundSurface locale="en" />
      </div>
    </section>
  </main>
);

export default PlaygroundPage;
