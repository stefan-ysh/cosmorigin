import type { Metadata } from 'next';

import Image from 'next/image';

import HomeBannerCarousel from '@/components/HomeBannerCarousel';
import { SiteStructuredData } from '@/components/index';
import { insights, newFeatures } from '@/constants';
import styles from '@/styles';
import { absoluteUrl, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';

const pagePath = '/';
const pageTitle = '宇元新材 | 柔性发光材料与原创解决方案';
const pageDescription =
  '宇元新材专注柔性发光材料研发，提供发光油漆、发光纤维丝、发光膜及行业解决方案，覆盖交通、农业、应急与文旅场景。';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['扬州宇元新材有限公司', '宇元新材', '发光材料与器件国家重点实验室', '柔性发光材料', '发光油漆', '发光纤维丝', '发光薄膜', '自发光解决方案'],
  alternates: {
    canonical: absoluteUrl(pagePath),
  },
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const Page = () => (
  <main className="bg-[hsl(var(--surface-strong))] text-foreground">
    <SiteStructuredData />

    <HomeBannerCarousel
      title="宇元新材 点亮未来"
      description={pageDescription}
      images={[
        '/images/banner/1.png',
        '/images/banner/2.png',
        '/images/banner/3.png',
        '/images/banner/4.png',
      ]}
    />

    <section id="bigData" className="home-section bg-white">
      <div className={`${styles.innerWidth} mx-auto grid gap-8 lg:grid-cols-2 items-center`}>
        <div className="home-section-image">
          <Image
            src="/宇元新材发光材料母粒.png"
            alt="柔性发光材料"
            width={620}
            height={520}
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
        <div>
          <h2 className="home-section-title">
            宇元新材柔性发光材料
            <small> / Flexible Luminescent Materials</small>
          </h2>
          <p>
            宇元新材植根扬州，专注于柔性发光材料的研发与规模化制造，提供发光油漆、发光纤维丝、发光膜及原创解决方案，覆盖交通、农业、应急与文旅场景。
          </p>
          <p>
            依托材料实验室、智能化生产基地与行业联合创新中心，我们构建起从核心配方、器件结构、制程工艺到系统集成的一体化技术闭环，支撑高效、低碳、可定制化的光电交付。
          </p>
          <h3 className="home-section-highlight">柔性发光一体化解决方案提供商</h3>
        </div>
      </div>
    </section>

    <section id="contactUs" className="home-contact">
      <div className={`${styles.innerWidth} mx-auto text-center`}>
        <h1>携手点亮可持续未来</h1>
        <h3>欢迎预约材料样品、技术研讨或联合研发</h3>
        <a href="/contact" className="home-contact-button">
          联系我们
        </a>
      </div>
    </section>

    <section id="customer" className="home-section home-section-muted">
      <div className={`${styles.innerWidth} mx-auto`}>
        <p className="home-section-label text-center">行业洞察</p>
        <div className="home-customer-grid">
          {insights.map((item) => (
            <div key={item.title} className="home-customer-card">
              <div className="home-customer-image">
                <Image src={item.imgUrl} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
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
          <h3>为什么选择我们</h3>
          <p>WHY CHOOSE US</p>
        </div>
        <div className="home-feature-grid">
          {newFeatures.map((feature) => (
            <div key={feature.title} className="home-feature-card">
              <h4>{feature.title}</h4>
              <div className="home-feature-content">{feature.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Page;
