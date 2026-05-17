import type { Metadata } from 'next';

import Image from 'next/image';

import FAQSection, { buildFAQSchema } from '@/components/FAQSection';
import HomeBannerCarousel from '@/components/HomeBannerCarousel';
import JsonLd from '@/components/JsonLd';
import { SiteStructuredData } from '@/components/index';
import { LogoClouds } from '@/sections';
import { insights, newFeatures } from '@/constants';
import styles from '@/styles';
import { buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';

const pagePath = '/';
const pageTitle = '宇元新材 | 柔性发光材料与原创解决方案';
const pageDescription = '宇元新材专注柔性发光材料研发，提供发光油漆、发光纤维丝、发光膜及行业解决方案，覆盖交通、农业、应急与文旅场景。';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['扬州宇元新材有限公司', '宇元新材', '发光材料与器件国家重点实验室', '柔性发光材料', '发光油漆', '发光纤维丝', '发光薄膜', '自发光解决方案'],
  alternates: buildAlternates(pagePath),
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const homeFaqs = [
  {
    question: '宇元新材主要做什么？',
    answer: '宇元新材专注柔性发光材料研发与应用方案，覆盖发光油漆、发光纤维丝、发光膜、电致发光线缆和 3D 打印发光辅材。',
  },
  {
    question: '这些发光材料适合哪些场景？',
    answer: '典型场景包括交通出行、汽车内外饰、智慧农业补光、应急救援、公共安全、文旅夜游、品牌装置和创意展示。',
  },
  {
    question: '是否支持定制光效或联合研发？',
    answer: '支持。可围绕光谱、亮度、载体材料、封装方式和应用流程做样品验证，也可与高校、科研机构、设计工作室和产业客户开展联合研发。',
  },
  {
    question: '如何获取样品或技术资料？',
    answer: '可以通过 contact@cosmorigin.com、联系电话 +86 185 7841 2005 或联系页面提交需求。国内样品可参考淘宝店，海外咨询可通过 Shopify 国际站或邮件沟通。',
  },
];

const homeFaqSchema = buildFAQSchema(homeFaqs);

const Page = () => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <SiteStructuredData />
    <JsonLd data={homeFaqSchema} />

    <HomeBannerCarousel
      title="宇元新材 点亮未来"
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
        </div>
      </div>
    </section>

    <LogoClouds />

    <section id="customer" className="home-section home-section-muted">
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="section-title text-center">
          <h3>行业洞察</h3>
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

    <section id="contactUs" className="home-contact">
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="home-contact-card text-center">
          <h1>携手点亮可持续未来</h1>
          <h3>欢迎预约材料样品、技术研讨或联合研发</h3>
          <a href="/contact" className="home-contact-button">
            <span className="contact-button-icon" aria-hidden="true">☎</span>
            联系我们
          </a>
        </div>
      </div>
    </section>

    <FAQSection
      title="常见问题"
      description="以下信息用于帮助合作伙伴和搜索引擎快速理解宇元新材的材料方向、应用边界与联系路径。"
      items={homeFaqs}
    />
  </main>
);

export default Page;
