import type { Metadata } from 'next';

import Image from 'next/image';

import FAQSection, { buildFAQSchema } from '@/components/FAQSection';
import HomeBannerCarousel from '@/components/HomeBannerCarousel';
import JsonLd from '@/components/JsonLd';
import RadiationShieldingSection from '@/components/RadiationShieldingSection';
import { LogoClouds } from '@/sections';
import { buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';
import { company } from '@/lib/site';
import styles from '@/styles';

const pagePath = '/en';
const pageTitle = 'CosmoOrigin | Flexible Luminescent and Lightweight Radiation-Shielding Materials';
const pageDescription = 'CosmoOrigin develops flexible luminescent materials and lightweight radiation-shielding composites for mobility, agriculture, safety and medical protection applications.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['luminescent materials', 'glow paint', 'luminescent fiber', 'lightweight radiation shielding', 'lead apron alternative material', 'CosmoOrigin'],
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
  {
    title: 'Lightweight radiation-shielding composites',
    subtitle: 'Flexible multilayer materials are being developed for weight reduction and potential replacement of conventional medical lead-apron structures.',
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
    answer: 'CosmoOrigin develops flexible luminescent materials and lightweight radiation-shielding composites, including glow paint, luminescent fibers, films, electroluminescent wire, 3D-printing additives and materials for lead-apron weight-reduction programs.',
  },
  {
    question: 'Can CosmoOrigin radiation-shielding material directly replace a medical lead apron?',
    answer: 'The material is being developed toward weight reduction and potential replacement of conventional lead-apron structures. A specific medical use requires third-party testing and product validation for target lead equivalence, radiation energy, thickness, areal density, durability and all applicable regulatory requirements.',
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
            CosmoOrigin Advanced Functional Materials
            <small> / Advanced Functional Materials</small>
          </h2>
          <p>
            Based in Yangzhou, CosmoOrigin develops flexible luminescent materials and lightweight radiation-shielding
            composites, including materials for reducing the weight of conventional medical lead-apron structures.
          </p>
          <p>
            Our work connects formulation, multilayer structure, processing and application validation for mobility,
            agriculture, emergency safety, creative installations and medical protection programs.
          </p>
        </div>
      </div>
    </section>

    <LogoClouds
      title="Trusted by Our Partners"
      description="Working with industry customers, research institutions and supply-chain partners to advance luminescent materials."
    />

    <RadiationShieldingSection
      eyebrow="MEDICAL RADIATION PROTECTION · JOINT R&D"
      title="Radiation protection that feels lighter and moves better"
      description="CosmoOrigin is developing flexible, lightweight and multilayer radiation-shielding composites toward reducing the weight of conventional medical lead-apron structures."
      points={[
        'Sheets, rolls, composite layers and custom protective samples',
        'Joint design around target lead equivalence, areal density and thickness',
        'Bending durability, wearing comfort and garment integration validation',
      ]}
      disclaimer="Medical use requires product-specific third-party testing, design validation and all applicable regulatory approvals."
      ctaLabel="Discuss a validation program"
      ctaHref="/en/contact"
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
            >
              <Image
                src={item.imgUrl}
                alt=""
                fill
                className="home-customer-image object-cover"
                sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) calc(33vw - 32px), 380px"
                quality={72}
              />
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
          <Image
            src="/未命名.jpeg"
            alt=""
            fill
            className="home-contact-image object-cover"
            sizes="(max-width: 1280px) calc(100vw - 48px), 1200px"
            quality={72}
          />
          <div className="home-contact-content">
            <h1>Build the Next Generation of Functional Materials</h1>
            <h3>Request samples, technical discussions or joint development</h3>
            <a href="/en/contact" className="home-contact-button">
              <span className="contact-button-icon" aria-hidden="true">☎</span>
              Contact Us
            </a>
          </div>
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
