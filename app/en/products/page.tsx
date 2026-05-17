import type { Metadata } from 'next';

import Image from 'next/image';

import FAQSection, { buildFAQSchema } from '@/components/FAQSection';
import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';
import { company } from '@/lib/site';
import styles from '@/styles';
import { enProducts } from '../content';

const pagePath = '/en/products';
const pageTitle = 'CosmoOrigin Products | Luminescent Paint, Fibers, Films and 3D Printing Materials';
const pageDescription = 'Explore CosmoOrigin luminescent paint, flexible fibers, films, electroluminescent wire and 3D-printing additives for custom light applications.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['luminescent paint', 'luminescent fiber', 'glow film', 'electroluminescent wire', '3D printing glow material'],
  alternates: buildAlternates(pagePath),
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: pageTitle,
  url: absoluteUrl(pagePath),
  description: pageDescription,
  hasPart: enProducts.map((product) => ({
    '@type': 'Product',
    name: product.name,
    description: product.summary,
    image: absoluteUrl(product.image),
    brand: { '@type': 'Brand', name: company.brandName },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Applications', value: product.applications },
      { '@type': 'PropertyValue', name: 'Brightness', value: product.brightness },
      { '@type': 'PropertyValue', name: 'Supply format', value: product.supply },
      { '@type': 'PropertyValue', name: 'Key parameters', value: product.keyParameters },
    ],
    offers: {
      '@type': 'Offer',
      availability: product.status === 'Available' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
      url: company.shopifyUrl,
    },
  })),
};

const productFaqs = [
  {
    question: 'Which product categories does CosmoOrigin publish?',
    answer: 'Public product categories include luminescent paint, luminescent fiber, electroluminescent wire, luminescent film and 3D-printing luminescent additives.',
  },
  {
    question: 'Can brightness, spectrum or carrier material be customized?',
    answer: 'Yes. CosmoOrigin can discuss spectrum, brightness, carrier material, encapsulation and application workflow for samples, validation programs and custom development.',
  },
  {
    question: 'Are the listed parameters final procurement specifications?',
    answer: 'The product page parameters are intended for early evaluation and selection. Final procurement, certification files, batch delivery and extreme-environment validation should be confirmed through technical communication.',
  },
  {
    question: 'How can international customers request samples?',
    answer: 'International customers can use the Shopify international store, the English contact page or contact@cosmorigin.com. Domestic sample inquiries can also use Taobao.',
  },
];

const productFaqSchema = buildFAQSchema(productFaqs);

const ProductsEnPage = () => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={[productSchema, productFaqSchema]} />
    <section className="px-6 py-16">
      <div className={`${styles.innerWidth} mx-auto text-center`}>
        <h1 className="text-4xl font-bold tracking-tight">Product Matrix</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
          Each material can be tuned by spectrum, brightness, carrier material and application workflow. Contact us for
          samples, validation data or custom development.
        </p>
      </div>
    </section>
    <section className="px-6 pb-20">
      <div className={`${styles.innerWidth} mx-auto grid gap-8`}>
        {enProducts.map((product) => (
          <article key={product.name} className="bg-white rounded-2xl border border-black/5 p-8 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-[300px,minmax(0,1fr)]">
              <div className="relative aspect-square overflow-hidden rounded-md bg-black">
                <Image src={product.image} alt={`${product.name} sample`} fill className="object-contain" sizes="(min-width: 1024px) 300px, 100vw" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{product.status}</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">{product.name}</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{product.summary}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="panel-soft p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Applications</p>
                    <p className="mt-2 text-sm text-muted-foreground">{product.applications}</p>
                  </div>
                  <div className="panel-soft p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Channels</p>
                    <div className="mt-2 flex flex-wrap gap-3 text-sm font-semibold">
                      <a href={company.shopifyUrl} target="_blank" rel="noreferrer">Shopify</a>
                      <a href={company.taobaoUrl} target="_blank" rel="noreferrer">Taobao</a>
                      <a href={`mailto:${company.email}`}>Email</a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { label: 'Brightness', value: product.brightness },
                    { label: 'Supply Format', value: product.supply },
                    { label: 'Validation', value: product.validation },
                    { label: 'Key Parameters', value: product.keyParameters },
                  ].map((item) => (
                    <div key={`${product.name}-${item.label}`} className="panel-soft p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 overflow-x-auto rounded-md border border-border bg-white">
                  <table className="min-w-full text-left text-sm text-muted-foreground">
                    <thead>
                      <tr className="text-foreground">
                        <th className="px-5 py-3">Model / Option</th>
                        <th className="px-5 py-3">Public Parameter</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.variants.map((variant) => (
                        <tr key={`${product.name}-${variant.model}`} className="border-t border-border">
                          <td className="whitespace-nowrap px-5 py-3 font-medium text-foreground">{variant.model}</td>
                          <td className="px-5 py-3">{variant.spec}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
    <FAQSection
      title="Product FAQ"
      description="Concise product answers for sample evaluation, custom development and AI search extraction."
      items={productFaqs}
    />
  </main>
);

export default ProductsEnPage;
