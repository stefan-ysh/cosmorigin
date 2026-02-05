import type { Metadata } from "next";

import Image from "next/image";
import styles from "@/styles";

import JsonLd from "@/components/JsonLd";
import PagePlaceholder from "@/components/PagePlaceholder";
import {
  absoluteUrl,
  buildOpenGraph,
  buildTwitter,
  defaultRobots,
} from "@/lib/seo";

const pagePath = "/about";
const pageTitle = "关于宇元新材 | 公司概览与技术底座";
const pageDescription =
  "了解宇元新材的使命、团队与研发体系。专注柔性发光材料的原创技术，持续投入中试产线与联合实验室建设。";
const canonicalUrl = absoluteUrl(pagePath);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "宇元新材",
    "发光材料团队",
    "柔性发光技术",
    "材料实验室",
    "扬州发光企业",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const milestones = [
  {
    year: "2025-10",
    content: "在扬州建立第一条柔性发光实验产线，攻克纳米级涂覆一致性。",
  },
  //   { year: '2020', content: '推出耐海水发光纤维丝，通过 3260 小时浸泡稳定性验证。' },
  {
    year: "2025-11",
    content: "建成米级连续自发光生产线，与主机厂、文旅集团开启联合验证。",
  },
  { year: "2025-12", content: "发布 3D 打印辅材并布局海外技术服务中心。" },
];

const leadership = [
  {
    title: "材料科学团队",
    detail:
      "来自发光材料与器件国家重点实验室的博士/硕士 12 名，覆盖无机、聚合物与光电转换领域。",
  },
  {
    title: "结构与工艺",
    detail: "具备车规级工艺、卷对卷涂布、纤维编织、3D 打印调试等跨学科能力。",
  },
  {
    title: "产业化与交付",
    detail: "自研 MES 与质量追溯系统，保证多批次一致性，并支持 OEM/ODM 模式。",
  },
];

const aboutSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: pageTitle,
    url: canonicalUrl,
    description: pageDescription,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "首页",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "关于我们",
          item: canonicalUrl,
        },
      ],
    },
    mainEntity: {
      "@type": "Organization",
      name: "扬州宇元新材有限公司",
      foundingDate: "2014",
      numberOfEmployees: "50+",
      address: {
        "@type": "PostalAddress",
        streetAddress: "江苏省扬州市邗江区开发西路 213 号 609 室",
        addressLocality: "扬州",
        addressRegion: "江苏省",
        postalCode: "225000",
        addressCountry: "CN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+86-185-7841-2005",
        email: "contact@cosmorigin.com",
        contactType: "sales",
        areaServed: "CN",
        availableLanguage: ["zh-CN", "en"],
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "发展里程碑",
    itemListElement: milestones.map((milestone, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: milestone.content,
      startDate: milestone.year,
    })),
  },
];

const AboutPage = (): JSX.Element => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={aboutSchemas} />

    <section className="px-6 py-16">
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="panel hover-card p-6 flex items-center justify-center">
            <Image
              src="/宇元新材发光材料制成的圣诞树.png"
              alt="宇元新材产线"
              width={520}
              height={520}
              className="h-[320px] w-auto object-contain"
            />
          </div>
          <div className="panel p-6">
            <h3 className="text-xl font-semibold text-foreground">扬州宇元新材有限公司</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              宇元新材，品牌名取意“Cosmos + Origin”，象征“宇宙的源头”，寓意探索光之本源，开启无限可能。
              我们植根于历史文化名城扬州，专注于柔性发光材料的研发与规模化制造，致力于以低能耗、高自由度的新一代光源形态，赋能智慧交通、现代农业、公共安全、文化旅游等多个关键领域。
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              依托自建的材料实验室、智能化生产基地和行业联合创新中心，我们构建起从核心配方、器件结构、制程工艺到系统集成的一体化技术闭环，具备全链条自主研发与产业化落地能力。
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 pb-12">
      <div className={`${styles.innerWidth} mx-auto grid gap-6 md:grid-cols-2`}>
        {[
          { label: "研发投入策略", value: "持续高占比投入（数据更新中）" },
          { label: "核心知识产权", value: "多项专利与软著（敬请期待）" },
          { label: "生态合作", value: "面向汽车/文旅/公共安全多行业" },
          { label: "交付版图", value: "服务国内外多个重点城市" },
        ].map((item) => (
          <div key={item.label} className="panel hover-card p-6">
            <p className="text-lg font-semibold text-foreground">{item.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="px-6 pb-16">
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="section-title">
          <h3>发展里程碑</h3>
          <p>Milestones</p>
        </div>
        <div className="panel p-6">
          <div className="grid gap-6 md:grid-cols-2">
            {milestones.map((item) => (
              <div key={item.year} className="panel-soft p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">{item.year}</p>
                <p className="mt-3 text-sm text-muted-foreground">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 pb-16">
      <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2">
        <div className="panel p-6">
          <h3 className="text-xl font-semibold">团队与治理</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            多学科团队覆盖材料、结构、电控与供应链管理，并由产业顾问委员会持续迭代技术路线与行业策略。
          </p>
          <div className="mt-6 space-y-4">
            {leadership.map((item) => (
              <div key={item.title}>
                <p className="text-base font-semibold">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="panel p-6">
          <h3 className="text-xl font-semibold">产研基地</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            扬州智能制造中心负责卷对卷涂布、纤维编织与模块封装，南京应用实验室聚焦材料验证与联合研发，海外服务中心负责小批量交付与培训。
          </p>
          <div className="mt-6 grid gap-4">
            {[
              "卷对卷连续产线（宽幅 1.2m）",
              "恒温恒湿配方实验室与可靠性实验室",
              "行业联合创新中心（交通、农业、公共安全）",
              "全链路质量追溯系统 + 数字化仓储",
            ].map((capability) => (
              <div key={capability} className="panel-soft p-4 text-sm text-muted-foreground">
                {capability}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2">
        <div className="panel p-6">
          <h3 className="text-xl font-semibold">社会责任与可持续</h3>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>• 低能耗光源：与传统照明相比更高效，助力户外装置延长寿命（详细数据上线中）。</li>
            <li>• 可循环材料体系：核心材料支持回收与环保认证，后续将发布完整检测报告。</li>
            <li>• 安全共建：持续与公共交通、景区合作优化夜间引导，为城市安全提供参考案例。</li>
          </ul>
        </div>
        <div className="panel hover-card flex items-center justify-center p-6">
          <Image
            src="/宇元新材发光材料制成的3D打印辅材.jpg"
            alt="宇元新材产品展示"
            width={520}
            height={520}
            className="h-[320px] w-auto object-contain"
          />
        </div>
      </div>
    </section>

    {/* <PagePlaceholder
      eyebrow="NEXT"
      title="开放更深入的参观与共创"
      description="欢迎预约来访我们的产线与实验室，也可以与技术、商务团队探讨联合研发项目。"
      cta={{ label: "预约参观", href: "/contact" }}
    /> */}
  </main>
);

export default AboutPage;
