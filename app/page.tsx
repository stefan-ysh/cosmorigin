import type { Metadata } from 'next';

import Image from 'next/image';

import FAQSection, { buildFAQSchema } from '@/components/FAQSection';
import HomeBannerCarousel from '@/components/HomeBannerCarousel';
import JsonLd from '@/components/JsonLd';
import RadiationShieldingSection from '@/components/RadiationShieldingSection';
import { SiteStructuredData } from '@/components/index';
import { LogoClouds } from '@/sections';
import { insights, newFeatures } from '@/constants';
import styles from '@/styles';
import { buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';

const pagePath = '/';
const pageTitle = '宇元新材 | 柔性发光与轻量化防辐射材料';
const pageDescription = '宇元新材研发柔性发光与轻量化防辐射复合材料，提供发光油漆、发光纤维丝、发光膜及面向传统铅衣减重替代的材料方案。';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['扬州宇元新材有限公司', '宇元新材', '柔性发光材料', '轻量化防辐射材料', '辐射屏蔽复合材料', '铅衣替代材料', '发光油漆', '发光纤维丝', '发光薄膜'],
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
    answer: '支持。可围绕光谱、亮度、载体材料、屏蔽性能、封装方式和应用流程做样品验证，也可与高校、科研机构、医疗防护产品团队和产业客户开展联合研发。',
  },
  {
    question: '轻量化防辐射材料可以直接替代医用铅衣吗？',
    answer: '该材料面向传统铅衣的减重与替代方向开发。具体能否用于某一医疗防护场景，需要结合射线类型与能量、目标铅当量、材料厚度和面密度、弯折耐久及适用法规完成第三方检测、产品设计验证和必要的注册认证。',
  },
  {
    question: '如何获取样品或技术资料？',
    answer: '可以通过 contact@cosmorigin.com、联系电话 +86 189 4350 3190 或联系页面提交需求。国内样品可参考淘宝店，海外咨询可通过 Shopify 国际站或邮件沟通。',
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
            宇元新材先进功能材料
            <small> / Advanced Functional Materials</small>
          </h2>
          <p>
            宇元新材植根扬州，研发柔性发光与轻量化防辐射复合材料，提供发光油漆、发光纤维丝、发光膜，以及面向传统医用铅衣减重替代的材料与结构方案。
          </p>
          <p>
            依托材料实验室、智能化生产基地与行业联合创新中心，我们构建从核心配方、材料结构、制程工艺到场景验证的一体化技术闭环，支撑交通、农业、应急、文旅与医疗防护方向的定制开发。
          </p>
        </div>
      </div>
    </section>

    <LogoClouds />

    <RadiationShieldingSection
      eyebrow="MEDICAL RADIATION PROTECTION · 研发合作"
      title={'让辐射防护更轻，\n也更灵活'}
      description="面向传统医用铅衣的减重与替代方向，宇元新材开发柔性、轻量、可复合的辐射屏蔽材料，降低长时间穿戴对肩颈与腰背造成的负担。"
      points={[
        '支持片材、卷材、复合层与定制防护样件',
        '围绕目标铅当量、面密度与厚度联合设计',
        '兼顾弯折耐久、穿着舒适性与结构集成',
      ]}
      disclaimer="医疗用途需结合具体产品完成第三方检测、设计验证及适用的注册认证。"
      ctaLabel="预约材料验证"
      ctaHref="/contact"
    />

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
          <Image
            src="/未命名.jpeg"
            alt=""
            fill
            className="home-contact-image object-cover"
            sizes="(max-width: 1280px) calc(100vw - 48px), 1200px"
            quality={72}
          />
          <div className="home-contact-content">
            <h1>携手点亮可持续未来</h1>
            <h3>欢迎预约材料样品、技术研讨或联合研发</h3>
            <a href="/contact" className="home-contact-button">
              <span className="contact-button-icon" aria-hidden="true">☎</span>
              联系我们
            </a>
          </div>
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
