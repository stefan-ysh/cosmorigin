import type { Metadata } from "next";

import Image from "next/image";
import { FlaskConical, ScrollText, Share2, MapPin, CheckCircle2, Users, Building2, Leaf } from "lucide-react";
import styles from "@/styles";

import JsonLd from "@/components/JsonLd";

import {
  absoluteUrl,
  buildAlternates,
  buildOpenGraph,
  buildTwitter,
  defaultRobots,
} from "@/lib/seo";
import { company } from '@/lib/site';

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
  alternates: buildAlternates(pagePath),
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
      name: company.zhName,
      foundingDate: "2014",
      numberOfEmployees: "50+",
      address: {
        "@type": "PostalAddress",
        streetAddress: company.addressZh,
        addressLocality: "扬州",
        addressRegion: "江苏省",
        postalCode: "225000",
        addressCountry: "CN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: company.phoneHref,
        email: company.email,
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

    <section className="px-6 py-16 lg:py-24">
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 border border-black/5 shadow-2xl shadow-blue-900/5">
            <Image
              src="/宇元新材公司.png"
              alt="宇元新材产线"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="flex flex-col justify-center h-full">
            <div className="space-y-2 mb-6">
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                扬州宇元新材有限公司
              </h3>
              <p className="text-lg font-medium text-blue-600/80">
                Cosmos + Origin — 探索光之本源，开启无限可能
              </p>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                我们植根于历史文化名城扬州，专注于柔性发光材料的研发与规模化制造，致力于以低能耗、高自由度的新一代光源形态，赋能智慧交通、现代农业、公共安全、文化旅游等多个关键领域。
              </p>
              <p>
                依托自建的材料实验室、智能化生产基地和行业联合创新中心，我们构建起从核心配方、器件结构、制程工艺到系统集成的一体化技术闭环，具备全链条自主研发与产业化落地能力。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 pb-12">
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "研发投入策略", value: "持续高占比投入", icon: FlaskConical },
            { label: "核心知识产权", value: "多项专利与软著", icon: ScrollText },
            { label: "生态合作", value: "全行业深度赋能", icon: Share2 },
            { label: "交付版图", value: "服务全球重点城市", icon: MapPin },
          ].map((item) => (
            <div key={item.label} className="panel-soft p-6 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="h-12 w-12 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center text-blue-600">
                <item.icon className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-bold text-foreground tracking-tight">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 pb-16">
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="section-title">
          <h3>发展里程碑</h3>
          <p>Milestones</p>
        </div>
        <div className="relative">
          <div className="absolute top-6 bottom-6 left-[19px] w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/50 to-blue-500/20 md:left-1/2 md:-ml-px hidden md:block"></div>
          <div className="space-y-8 relative">
            {milestones.map((item, index) => (
              <div key={item.year} className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12" />
                <div className="absolute left-[13px] md:left-1/2 md:-ml-1.5 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white shadow-sm z-10 hidden md:block" />
                
                <div className="md:w-5/12 bg-white rounded-xl border border-border/50 p-6 shadow-sm hover:shadow-md transition-shadow relative ml-8 md:ml-0">
                   {/* Mobile dot */}
                  <div className="absolute -left-[39px] top-6 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-[hsl(var(--surface-strong))] md:hidden" />
                  <div className="absolute -left-[33px] top-[34px] bottom-[-40px] w-0.5 bg-border/50 md:hidden last:hidden"></div>
                  
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide mb-3">
                    {item.year}
                  </span>
                  <p className="text-foreground/80 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 pb-16">
      <div className={`${styles.innerWidth} mx-auto grid gap-8 lg:grid-cols-2`}>
        <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-8 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">团队与治理</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            多学科团队覆盖材料、结构、电控与供应链管理，并由产业顾问委员会持续迭代技术路线与行业策略。
          </p>
          <div className="space-y-6">
            {leadership.map((item) => (
              <div key={item.title} className="group p-4 rounded-xl bg-gray-50/50 hover:bg-gray-50 border border-transparent hover:border-black/5 transition-all">
                <p className="text-base font-bold text-foreground mb-1 group-hover:text-blue-700 transition-colors">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-8 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <Building2 className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">产研基地</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            扬州智能制造中心负责卷对卷涂布、纤维编织与模块封装，南京应用实验室聚焦材料验证与联合研发，海外服务中心负责小批量交付与培训。
          </p>
          <div className="grid gap-4">
            {[
              "卷对卷连续产线（宽幅 1.2m）",
              "恒温恒湿配方实验室与可靠性实验室",
              "行业联合创新中心（交通、农业、公共安全）",
              "全链路质量追溯系统 + 数字化仓储",
            ].map((capability) => (
              <div key={capability} className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50/50 transition-colors">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/80 font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 pb-24">
      <div className={`${styles.innerWidth} mx-auto grid gap-12 lg:grid-cols-2 items-center`}>
        <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-8 hover:shadow-md transition-shadow duration-300 h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
              <Leaf className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">社会责任与可持续</h3>
          </div>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
              <div>
                <span className="font-bold text-foreground block mb-1">低能耗光源</span>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  与传统照明相比更高效，助力户外装置延长寿命（详细数据上线中）。
                </span>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
              <div>
                <span className="font-bold text-foreground block mb-1">可循环材料体系</span>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  核心材料支持回收与环保认证，后续将发布完整检测报告。
                </span>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
              <div>
                <span className="font-bold text-foreground block mb-1">安全共建</span>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  持续与公共交通、景区合作优化夜间引导，为城市安全提供参考案例。
                </span>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/5 hover:scale-[1.02] transition-transform duration-500">
          <Image
            src="/宇元新材发光材料制成的3D打印辅材.jpg"
            alt="宇元新材产品展示"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
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
