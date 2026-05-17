import type { Metadata } from 'next';

import Image from 'next/image';

import FAQSection, { buildFAQSchema } from '@/components/FAQSection';
import HomeBannerCarousel from '@/components/HomeBannerCarousel';
import JsonLd from '@/components/JsonLd';
import { LogoClouds } from '@/sections';
import { buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';
import { company } from '@/lib/site';
import styles from '@/styles';

const pagePath = '/en';
const pageTitle = 'CosmoOrigin | Flexible Luminescent Materials and Custom Light Solutions';
const pageDescription = 'CosmoOrigin develops flexible luminescent paint, fibers, films and 3D-printing additives for mobility, agriculture, safety and creative installations.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['luminescent materials', 'glow paint', 'luminescent fiber', 'luminescent film', 'CosmoOrigin'],
  alternates: buildAlternates(pagePath),
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const insights = [
  {
    imgUrl: '/发光材料在汽车内外饰中的应用.png',
    title: 'Automotive interiors and exteriors: light as safety and emotion',
    subtitle: 'Flexible glow materials support active recognition, lightweight design and quiet ambient expression.',
  },
  {
    imgUrl: '/发光材料在农业中的应用.png',
    title: 'Smart agriculture: 24-hour light compensation for greenhouses',
    subtitle: 'Luminescent materials help explore light conversion, storage and release for distributed crop-light management.',
  },
  {
    imgUrl: '/发光材料在应急救援中的应用.png',
    title: 'Emergency safety: visibility from water to low-light environments',
    subtitle: 'Water-resistant fabrics, markers and passive glow surfaces create active safety support for rescue scenarios.',
  },
];

const features = [
  {
    title: 'Continuous luminescent material processing',
    subtitle: 'Moving beyond batch-only workflows, CosmoOrigin focuses on scalable flexible materials and validation-ready samples.',
  },
  {
    title: 'Patterned and multi-color light effects',
    subtitle: 'Custom graphics and spectrum tuning can support traffic warnings, art installations, brand marks and product details.',
  },
  {
    title: '3D-printing luminescent additives',
    subtitle: 'SLA/FDM-compatible materials shorten small-batch validation and complex light-effect sample production.',
  },
];

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.enName,
  alternateName: company.brandName,
  url: 'https://cosmorigin.com/en',
  logo: 'https://cosmorigin.com/cosmorigin-logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.addressEn,
    addressCountry: 'CN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: company.phoneHref,
    email: company.email,
    contactType: 'sales and technical consultation',
    availableLanguage: ['en', 'zh-CN'],
  },
};

const homeFaqs = [
  {
    question: 'What does CosmoOrigin do?',
    answer: 'CosmoOrigin develops flexible luminescent materials and custom light-material solutions, including glow paint, luminescent fibers, films, electroluminescent wire and 3D-printing luminescent additives.',
  },
  {
    question: 'Which applications are CosmoOrigin materials designed for?',
    answer: 'Typical applications include mobility and automotive parts, smart agriculture, emergency safety, public visibility, cultural tourism, creative installations and material validation projects.',
  },
  {
    question: 'Can CosmoOrigin support custom light effects or joint development?',
    answer: 'Yes. The team can discuss spectrum, brightness, carrier material, encapsulation and application workflow for samples, validation programs and joint R&D.',
  },
  {
    question: 'How can international customers request samples or technical information?',
    answer: 'International inquiries can use contact@cosmorigin.com, the English contact page, or the Shopify international store. Domestic sample inquiries can also use Taobao.',
  },
];

const homeFaqSchema = buildFAQSchema(homeFaqs);

const EnglishHomePage = () => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={[homeSchema, homeFaqSchema]} />

    <HomeBannerCarousel
      title="CosmoOrigin Lights the Future"
      description={pageDescription}
      images={[
        '/images/banner/1.jpg',
        '/images/banner/2.jpg',
        '/images/banner/3.jpg',
        '/images/banner/4.jpg',
        '/images/banner/5.jpg',
        '/images/banner/6.jpg',
      ]}
    />

    <section id="bigData" className="home-section bg-white">
      <div className={`${styles.innerWidth} mx-auto grid gap-8 lg:grid-cols-2 items-center`}>
        <div className="home-section-image">
          <Image
            src="/宇元新材发光材料制成的3D打印辅材.jpg"
            alt="Flexible luminescent material sample"
            width={620}
            height={520}
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
        <div>
          <h2 className="home-section-title">
            CosmoOrigin Flexible Luminescent Materials
            <small> / Flexible Luminescent Materials</small>
          </h2>
          <p>
            Based in Yangzhou, CosmoOrigin focuses on the R&D and scalable production of flexible luminescent materials,
            including glow paint, luminescent fibers, films and custom solution packages.
          </p>
          <p>
            Our work connects formulation, device structure, processing and system integration, supporting low-power,
            customizable and validation-ready light material applications.
          </p>
        </div>
      </div>
    </section>

    <LogoClouds
      title="Trusted by Our Partners"
      description="Working with industry customers, research institutions and supply-chain partners to advance luminescent materials."
    />

    <section id="customer" className="home-section home-section-muted">
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="section-title text-center">
          <h3>Industry Insights</h3>
          <p>INDUSTRY INSIGHTS</p>
        </div>
        <div className="home-customer-grid">
          {insights.map((item) => (
            <div
              key={item.title}
              className="home-customer-card"
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            >
              <div className="home-customer-content">
                <p className="home-customer-title">{item.title}</p>
                <small>{item.subtitle}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="whyChooseUs" className="home-section bg-white">
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="section-title text-center">
          <h3>Why Choose Us</h3>
          <p>WHY CHOOSE US</p>
        </div>
        <div className="home-feature-grid">
          {features.map((feature) => (
            <div key={feature.title} className="home-feature-card">
              <h4>{feature.title}</h4>
              <div className="home-feature-content">{feature.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="contactUs" className="home-contact">
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="home-contact-card text-center">
          <h1>Build a Sustainable Future With Light</h1>
          <h3>Request samples, technical discussions or joint development</h3>
          <a href="/en/contact" className="home-contact-button">
            <span className="contact-button-icon" aria-hidden="true">☎</span>
            Contact Us
          </a>
        </div>
      </div>
    </section>

    <FAQSection
      title="Frequently Asked Questions"
      description="Concise answers for buyers, partners and AI search systems evaluating CosmoOrigin materials."
      items={homeFaqs}
    />
  </main>
);

export default EnglishHomePage;
