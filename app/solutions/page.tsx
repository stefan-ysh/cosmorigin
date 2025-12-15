import type { Metadata } from 'next';

import JsonLd from '@/components/JsonLd';
import PagePlaceholder from '@/components/PagePlaceholder';
import { absoluteUrl, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';

const pagePath = '/solutions';
const pageTitle = '行业解决方案 | 交通、农业、应急与文旅应用';
const pageDescription =
  '宇元新材面向交通出行、智慧农业、应急救援与文旅艺术等行业提供发光材料解决方案，整合材料、结构、电控与交付流程。';
const canonicalUrl = absoluteUrl(pagePath);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['行业发光方案', '交通发光解决方案', '智慧农业补光', '应急照明材料', '文旅夜游发光'],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const solutionTracks = [
  {
    title: '智能交通与汽车',
    pain: '夜间行车识别效率低、车内外饰设计周期长。',
    plan: '发光缝线 + 动态提示模组 + 柔性车标系统，结合车规级耐久验证。',
    kpi: '夜间可见距离 +48%，装车验证周期缩短 30%。',
  },
  {
    title: '智慧农业光补偿',
    pain: '大棚光照不均，补光成本高，频繁更换灯具。',
    plan: '发光膜与光纤带实现 24 小时循环补光，并结合 RMAF 模型调节谱线。',
    kpi: '叶绿素含量提升 39.4%，单位能耗降低 28%。',
  },
  {
    title: '应急救援与公共安全',
    pain: '极端环境下传统灯具易受损，视觉警示滞后。',
    plan: '耐水压发光布 + 方向引导标识 + 可穿戴照明模块，形成主动安全网。',
    kpi: '水下亮度保持 85%（3260h），救援布署时间缩短 40%。',
  },
  {
    title: '文旅夜游与艺术装置',
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
  <main className="bg-primary-black text-white">
    <JsonLd data={solutionSchemas} />
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">SOLUTIONS</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          针对行业痛点的发光一体化方案
        </h1>
        <p className="mt-6 text-lg text-white/70">
          我们将材料、结构、电控与算法打包成行业方案，既能快速验证，也能直连后续量产。
        </p>
      </div>
    </section>

    <section className="px-6 pb-16">
      <div className="mx-auto max-w-6xl grid gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">全部方案</p>
          <div className="h-[1px] w-full bg-white/10" />
        </div>
        {solutionTracks.map((track) => (
          <article key={track.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">{track.title}</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">痛点</p>
                <p className="mt-2 text-white/80">{track.pain}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">解决路径</p>
                <p className="mt-2 text-white/80">{track.plan}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">关键指标</p>
                <p className="mt-2 text-white/80">{track.kpi}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-2xl font-semibold">联合交付流程</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {workflow.map((step, index) => (
            <div key={step} className="rounded-2xl border border-dashed border-white/20 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Step {index + 1}</p>
              <p className="mt-3 text-white/80">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <PagePlaceholder
      eyebrow="NEXT"
      title="需要对应行业的案例与测试数据？"
      description="我们可以根据具体场景提供对标案例、材料清单与 KPI 追踪表。"
      cta={{ label: '预约方案共创', href: '/contact' }}
    />
  </main>
);

export default SolutionsPage;
