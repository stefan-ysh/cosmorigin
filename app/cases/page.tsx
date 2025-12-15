import type { Metadata } from 'next';

import JsonLd from '@/components/JsonLd';
import PagePlaceholder from '@/components/PagePlaceholder';
import { absoluteUrl, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';

const pagePath = '/cases';
const pageTitle = '案例展示与合作实绩';
const pageDescription =
  '沉淀汽车、农业、应急、文旅等真实案例，呈现目标、材料方案与阶段性数据，帮助合作伙伴评估发光材料落地可行性。';
const canonicalUrl = absoluteUrl(pagePath);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['发光材料案例', '汽车发光项目', '智慧农业案例', '应急照明案例', '文旅发光案例'],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const caseStudies = [
  {
    title: '整车氛围线与门板导光',
    client: '针对汽车相关主机厂',
    challenge: '需要在车内有限空间实现连续光效，同时满足车规耐久，如星空顶等。',
    result: '发光纤维丝 + 柔性导光膜方案仍在整车联合标定阶段，下一步将进行弯折与高低温冲击测试，持续收集数据。',
    outcome: '当前聚焦优化车内光效定制流程，目标把开发周期从 6 个月压缩到 8 周。',
  },
  {
    title: 'RMAF 智慧温室',
    client: '针对农业科研机构',
    challenge: '结合农业大棚使用环境，需要夜间补光并降低能耗，且不影响作物维护。',
    result: '正在部署发光膜 + 光纤带形成环绕式补光，并通过光合作用监控来验证分区调光策略对不同作物的影响。',
    outcome: '阶段性数据显示单位能耗下降 28%，团队将继续跟踪两季作物成熟周期，预计整体缩短 12%。',
  },
  {
    title: '3D 打印发光辅材验证',
    client: '针对创意装置工作室',
    challenge: '需要可直接在 FDM/FFF 设备上打印的发光材料，兼顾柔性与发光均匀度。',
    result: '与客户共建材料参数库，迭代发光填充丝的配方与工艺，目前在包括拓竹在内等多款打印机上做稳定性测试。',
    outcome: '已进入小批量试产，重点验证不同层高下的发光一致性，预计 2026 Q1 输出首批 300 套定制件。',
  },
];

const caseStudySchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: pageTitle,
  url: canonicalUrl,
  itemListElement: caseStudies.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CaseStudy',
      name: item.title,
      description: item.challenge,
      text: item.result,
      learningOutcome: item.outcome,
      audience: {
        '@type': 'Audience',
        audienceType: item.client,
      },
      provider: {
        '@type': 'Organization',
        name: '扬州宇元新材有限公司',
      },
    },
  })),
};

const CasesPage = (): JSX.Element => (
  <main className="bg-primary-black text-white">
    <JsonLd data={caseStudySchema} />
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">CASES</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">推进中的联合验证项目</h1>
        <p className="mt-6 text-lg text-white/70">
          我们以“材料 + 方案 + 交付”三位一体的方式服务客户，以下项目均处在验证/试装阶段，持续记录目标、执行路径与阶段性指标，方便及时复盘。
        </p>
      </div>
    </section>

    <section className="px-6 pb-16">
      <div className="mx-auto max-w-6xl grid gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">全部案例</p>
          <div className="h-[1px] w-full bg-white/10" />
        </div>
        {caseStudies.map((item) => (
          <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">{item.client}</p>
                <h2 className="text-2xl font-semibold">{item.title}</h2>
              </div>
              <button disabled className="hidden inline-flex items-center rounded-full border border-white/30 px-5 py-2 text-sm transition ">
                获取完整报告
              </button>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">场景需求</p>
                <p className="mt-2 text-white/80">{item.challenge}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">解决方案</p>
                <p className="mt-2 text-white/80">{item.result}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">阶段进展</p>
                <p className="mt-2 text-white/80">{item.outcome}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* <PagePlaceholder
      eyebrow="NEXT"
      title="需要更多行业案例？"
      description="我们正在整理更多交通、文化与公共安全项目的详细报告，可根据 NDA 提供。"
      cta={{ label: '预约案例讲解', href: '/contact' }}
    /> */}
  </main>
);

export default CasesPage;
