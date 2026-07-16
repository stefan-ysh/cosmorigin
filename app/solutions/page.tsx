import type { Metadata } from 'next';
import type { JSX } from 'react';

import { Car, Sprout, Shield, Sparkles, Radiation } from 'lucide-react';

import JsonLd from '@/components/JsonLd';
import styles from '@/styles';
import { absoluteUrl, buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';

const pagePath = '/solutions';
const pageTitle = '行业解决方案 | 交通、农业、医疗防护、应急与文旅';
const pageDescription = '宇元新材面向交通、农业、医疗辐射防护、应急救援与文旅艺术提供功能材料方案，包括面向传统铅衣减重替代的轻量化防辐射复合材料。';
const canonicalUrl = absoluteUrl(pagePath);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['行业功能材料方案', '交通发光解决方案', '智慧农业补光', '轻量化防辐射材料', '医用铅衣替代材料', '应急照明材料', '文旅夜游发光'],
  alternates: buildAlternates(pagePath),
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const solutionTracks = [
  {
    title: '智能交通与汽车',
    icon: Car,
    pain: '夜间行车识别效率低、车内外饰设计周期长。',
    plan: '发光缝线 + 动态提示模组 + 柔性车标系统，结合车规级耐久验证。',
    kpi: '夜间可见距离 +48%，装车验证周期缩短 30%。',
  },
  {
    title: '智慧农业光补偿',
    icon: Sprout,
    pain: '大棚光照不均，补光成本高，频繁更换灯具。',
    plan: '发光膜与光纤带实现 24 小时循环补光，并结合 RMAF 模型调节谱线。',
    kpi: '叶绿素含量提升 39.4%，单位能耗降低 28%。',
  },
  {
    title: '应急救援与公共安全',
    icon: Shield,
    pain: '极端环境下传统灯具易受损，视觉警示滞后。',
    plan: '耐水压发光布 + 方向引导标识 + 可穿戴照明模块，形成主动安全网。',
    kpi: '水下亮度保持 85%（3260h），救援布署时间缩短 40%。',
  },
  {
    title: '医疗影像与辐射防护',
    icon: Radiation,
    pain: '传统医用铅衣厚重，长时间穿戴容易增加医护人员的肩颈、腰背负担，也限制动作灵活性。',
    plan: '以柔性轻量辐射屏蔽复合材料开发防护围裙、围领和局部防护件，围绕传统铅衣减重与替代目标联合设计材料层和穿戴结构。',
    kpi: '围绕目标铅当量、面密度、厚度、弯折耐久与穿着舒适性开展第三方检测和应用验证。',
  },
  {
    title: '文旅夜游与艺术装置',
    icon: Sparkles,
    pain: '创意装置维护成本高、能耗大、造型受限。',
    plan: '大幅面发光膜 + 3D 打印辅材打造轻量化结构，支持任意图案定制。',
    kpi: '整体能耗下降 68%，装置维护周期翻倍。',
  },
];

const workflow = [
  '共创工作坊：梳理业务痛点与关键指标，输出目标灯效地图。',
  '联合实验：提供材料包 + 控制策略，完成场景化验证与建模。',
  '模块化交付：根据行业标准封装为“方案包”，同步培训运营团队。',
  '规模部署：结合质量追溯与远程维护，确保长期稳定运行。',
];

const solutionSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '行业解决方案',
    url: canonicalUrl,
    itemListElement: solutionTracks.map((track, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: track.title,
      item: {
        '@type': 'Service',
        serviceType: track.title,
        description: `${track.pain} ${track.plan}`,
        provider: {
          '@type': 'Organization',
          name: '扬州宇元新材有限公司',
        },
        areaServed: 'CN',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: track.title,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: track.plan,
            },
          ],
        },
      },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '联合交付流程',
    description: '宇元新材与合作伙伴共创、验证、交付与部署发光方案的 workflow。',
    step: workflow.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: `Step ${index + 1}`,
      text: step,
    })),
  },
];

const SolutionsPage = (): JSX.Element => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={solutionSchemas} />

    <section className="px-6 py-16">
      <div className={`${styles.innerWidth} mx-auto`}>
        <p className="text-center text-lg text-muted-foreground">
          我们将材料配方、复合结构、器件设计与验证流程组合成行业方案，支持从样件评估、第三方测试到后续量产导入。
        </p>
      </div>
    </section>

    <section className="px-6 pb-16">
      <div className={`${styles.innerWidth} mx-auto grid gap-6`}>
        {solutionTracks.map((track) => (
          <article key={track.title} className="bg-white rounded-2xl border border-black/5 shadow-sm p-8 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <track.icon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">{track.title}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70 font-semibold">痛点</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{track.pain}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70 font-semibold">解决路径</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{track.plan}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70 font-semibold">关键指标</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{track.kpi}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="px-6 pb-24">
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="section-title text-center">
          <h3>联合交付流程</h3>
          <p>Workflow</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {workflow.map((step, index) => (
            <div key={step} className="bg-white rounded-xl border border-black/5 shadow-sm p-6 hover:shadow-md transition-shadow">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide mb-3">
                Step {index + 1}
              </span>
              <p className="text-sm text-foreground/80 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* <PagePlaceholder
      eyebrow="NEXT"
      title="需要对应行业的案例与测试数据？"
      description="我们可以根据具体场景提供对标案例、材料清单与 KPI 追踪表。"
      cta={{ label: '预约方案共创', href: '/contact' }}
    /> */}
  </main>
);

export default SolutionsPage;
