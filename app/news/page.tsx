import type { Metadata } from 'next';
import Link from 'next/link';

import JsonLd from '@/components/JsonLd';
import styles from '@/styles';
import { absoluteUrl, buildAlternates, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';

const pagePath = '/news';
const pageTitle = '新闻动态 | 宇元新材最新进展';
const pageDescription = '关注宇元新材的产品发布、合作签约与实验室里程碑，第一时间掌握柔性发光材料的产业化动态。';
const canonicalUrl = absoluteUrl(pagePath);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['宇元新材新闻', '发光材料动态', 'Cosmorigin 新闻', '发光材料发布', '产业快讯'],
  alternates: buildAlternates(pagePath),
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

interface NewsItem {
  title: string;
  date: string;
  category: string;
  summary: string;
  href?: string;
  location?: string;
  highlight?: string;
}

const newsItems: NewsItem[] = [
  {
    title: '扬州宇元新材亮相2026（第三届）亚洲先进膜材料发展大会',
    date: '2026-06-27',
    category: '展会活动',
    summary:
      '宇元新材受邀参加在上海举办的2026（第三届）亚洲先进膜材料发展大会。公司首席技术官、扬州大学特聘教授田甜作了题为《新能源蓄光薄膜》的专题报告，展示了宇元新材在低空经济（主动发光安全标识）、智慧农业（零能耗自发光转光薄膜）及医疗核安全防护等领域的最新研究与产业化应用成果。',
    href: 'https://mp.weixin.qq.com/s/uC-P4ajaRP94_XjgNLjgPw',
    location: '上海',
    highlight: '专题报告',
  },
  {
    title: '山东省日照市五莲县县长孙丽一行到访宇元新材，共探新材料产业发展新机遇',
    date: '2026-06-03',
    category: '技术交流',
    summary:
      '山东省日照市五莲县县长孙丽一行莅临扬州宇元新材有限公司考察交流。CTO田甜教授重点介绍了公司自主研发的“自发光农业调光膜”项目，并就新能源汽车、交通安全标识、应急救援等多个方向的成果转化与产业链协同创新与来访领导展开深入探讨，共同探索科研成果转化的落地新机遇。',
    href: 'https://mp.weixin.qq.com/s/CdgIg60bJH_qKNInVdoZQQ',
    location: '扬州',
    highlight: '政府考察',
  },
  {
    title: '山东日照市五莲县长三角招商主任许克明一行莅临扬州宇元新材考察交流',
    date: '2026-04-09',
    category: '技术交流',
    summary:
      '山东省日照市五莲县长三角招商专班主任许克明一行参观宇元新材，公司CTO田甜教授详细介绍了公司新型发光材料的生产工艺以及从“实验室到产业化”的推进现状。双方就代工模式的知识产权保护、自建产能保障产品质量、以及五莲县当地的招商引资政策与产业配套等内容进行了深入研讨。',
    href: 'https://mp.weixin.qq.com/s/2JZlCCkb7wxIG49Yq5CaTA',
    location: '扬州',
    highlight: '产业化探讨',
  },
  {
    title: '关于“荧光示踪与调控技术”在农业科研中应用的对接研讨会',
    date: '2026-03-24',
    category: '技术交流',
    summary:
      '宇元新材技术团队前往扬州大学花卉教育实习基地，与园林园艺学院苏宏华主任、孙静副教授团队展开交叉课题对接。双方围绕芍药花期调控的补光膜设计、昆虫重金属转运的活体实时荧光示踪可视化追踪，以及荧光抗菌花卉保鲜包装材料的开发进行了深度探讨，明确了“三步走”的校企合作实施规划。',
    href: 'https://mp.weixin.qq.com/s/pn5-NewME5ZmGqHQYBW6Ww',
    location: '扬州',
    highlight: '学科交叉',
  },
  {
    title: '宇元新材与扬州大学专家交流会：关于“发光膜”在农业领域应用',
    date: '2026-03-20',
    category: '技术交流',
    summary:
      '宇元新材研发团队与扬州大学园艺园林学院冯立国院长及多位农学专家开展交流。会议聚焦于CTO田甜教授团队研发的“自发光转换膜”技术，探讨了其夜间主动补光、零能耗、光谱定制的特点，并展望了在草莓、精品番茄、花卉设施栽培等高价值作物补光以及非农领域氛围照明中的应用前景。',
    href: 'https://mp.weixin.qq.com/s/9UOQ7Mqff05OKsgsfvJxWg',
    location: '扬州',
    highlight: '智慧农业',
  },
  {
    title: '聚焦新材料融合创新｜新杨村书记李慧及状元工坊负责人杜文弢到访宇元新材交流合作',
    date: '2026-03-14',
    category: '技术交流',
    summary:
      '扬州杨庙镇新杨村书记李慧及小状元3D文创研学工坊负责人杜文弢到访宇元新材，与公司CTO田甜教授深入探讨功能材料在3D打印及文创产品开发中的应用。双方围绕高韧性与定制配色的3D打印材料、以及如何通过3D打印发光文创产品赋能“状元文化”的融合路径展开交流，推动科技成果转化为文创产品。',
    href: 'https://mp.weixin.qq.com/s/PH4rq4BbVrjltvBBgIbAvQ',
    location: '扬州',
    highlight: '文化文创',
  },
  {
    title: '扬州大学化学学院党委书记娄金海一行莅临宇元新材参观指导',
    date: '2026-03-14',
    category: '技术交流',
    summary:
      '扬州大学化学化工学院党委书记娄金海率队莅临宇元新材考察交流，CTO田甜教授详细介绍了公司在3D/4D打印材料、功能膜材、发光涂层等领域的最新研发与产业化进展。双方围绕新材料技术研发、科研成果落地转化、协同创新及学生培养等方面展开讨论，旨在以新质生产力为契机加强校企深度对接。',
    href: 'https://mp.weixin.qq.com/s/_DlKHm3NINgowJf9yKclgw',
    location: '扬州',
    highlight: '校企合作',
  },
  {
    title: '宇元新材赴扬州杨庙镇3D打印工坊考察交流',
    date: '2026-02-05',
    category: '技术交流',
    summary:
      '我司团队前往扬州市邗江区杨庙镇"小状元3D文创研学工坊"进行技术交流，探索新型发光材料与3D打印技术的融合应用。双方围绕秸秆制PLA原料、发光打印材料、4D智能材料等方向展开深度讨论，共同挖掘在文创产品、科普教具及乡村产业升级中的创新潜力。',
    href: 'https://mp.weixin.qq.com/s/y6ctVJ6_SCpCVZs76HkMFg',
    location: '扬州',
    highlight: '乡村振兴',
  },
  {
    title: '宇元新材参与迎春送福活动，为传统文化增添科技魅力',
    date: '2026-01-31',
    category: '公益活动',
    summary:
      '扬州金鹰文昌店"迎春纳福"书法家写春联活动温情上演，宇元新材携自主研发的发光材料文创产品惊喜亮相，为传统年俗盛宴注入科技感的现代光影。活动结合书法家马荣幸老师的「马」字建模制作发光挂件，受到市民热烈欢迎。',
    href: 'https://mp.weixin.qq.com/s/MtlpjdZMIatHedajQbHyAw',
    location: '扬州',
    highlight: '文化融合',
  },
  {
    title: '【宇元新材×红苹果塑胶】跨领域技术融合探索',
    date: '2026-01-25',
    category: '技术交流',
    summary:
      '双方围绕TPU薄膜与发光材料的协同创新、智能发光技术场景化应用等议题展开探讨，探索产业链上下游协同创新的新模式。从材料特性到场景应用的深度契合，共同开启关于"材质生命力"的深度实验。',
    href: 'https://mp.weixin.qq.com/s/WR79T5SFLtKVPxCK6oxn-A',
    location: '昆山',
    highlight: '跨界合作',
  },
  {
    title: '发布3D 打印全新发光辅材，助力定制化光电解决方案的实现',
    date: '2025-12-08',
    category: '产品发布',
    summary:
      '扬州智能制造中心完成米级宽幅卷对卷生产线联调，可一次性完成涂覆、固化、封装与检测，支撑 2026 年多行业交付。',
    location: '扬州',
    highlight: '产线升级 2.0',
  },
  {
    title: '热烈祝贺！宇元新材CTO田甜教授携创新成果斩获“绿扬金凤”创业大奖',
    date: '2025-11-17',
    category: '技术洞察',
    summary:
      '田甜教授从技术突破性、产业化可行性、与扬州产业链契合度等多维度展示了项目优势，最终以扎实的研发积累与清晰的落地规划打动评委，成功获奖！',
    href: 'https://mp.weixin.qq.com/s/RInDU5Tcb1MZY4bVIXO7cQ',
    location: '扬州',
    // highlight: '数据摘要',
  },
  {
    title: '一汽集团领导莅临扬州宇元新材有限公司考察交流',
    date: '2025-11-09',
    category: '展会活动',
    highlight: '共创计划',
    summary:
      '双方以“创新材料”为纽带，以“场景需求”为核心，既展现了宇元新材在织物赋能、光电材料领域的技术积淀，也体现了一汽集团对国产供应链创新的支持与开放态度。',
    href: 'https://mp.weixin.qq.com/s/PkcB1lVUBFW-CojI3D6N4w',
    location: '扬州',
  },
  {
    title: '扬州宇元新材有限公司正式成立',
    date: '2025-10-29',
    category: '公司发展',
    location: '扬州',
    summary:
      '扬州宇元新材有限公司近日正式成立，注册地位于江苏省扬州市。公司以“材料生产 + 技术研发 + 产业链配套”为发展路径，面向新能源、电子信息与汽车等产业提供关键材料与制造能力支持。标志着扬州在新材料与高端制造领域又添一位重要新成员。',
    // highlight: '融资进展',
    href: 'https://mp.weixin.qq.com/s/VFN9Lmvoc7_K-lzKwdaApA',
  },
];

const newsroomSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: pageTitle,
  url: canonicalUrl,
  description: pageDescription,
  hasPart: newsItems.map((item) => ({
    '@type': 'NewsArticle',
    headline: item.title,
    datePublished: item.date,
    articleSection: item.category,
    description: item.summary,
    url: item.href?.startsWith('http') ? item.href : item.href ? absoluteUrl(item.href) : canonicalUrl,
    locationCreated: item.location,
    author: {
      '@type': 'Organization',
      name: '扬州宇元新材有限公司',
    },
    publisher: {
      '@type': 'Organization',
      name: '扬州宇元新材有限公司',
    },
  })),
};

const NewsPage = () => (
  <main className="site-main bg-[hsl(var(--surface-strong))] text-foreground">
    <JsonLd data={newsroomSchema} />
    <section className="px-6 py-16">
      <div className={`${styles.innerWidth} mx-auto`}>
        <h1 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">新闻动态</h1>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          我们定期分享产线节点、客户共创、行业发布与技术洞察，也欢迎媒体与合作伙伴引用这些公开信息。
        </p>
      </div>
    </section>

    <section className="px-6 pb-20">
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="relative">
          <div className="absolute top-6 bottom-6 left-[19px] w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/50 to-blue-500/20 md:left-1/2 md:-ml-px hidden md:block" />
          <div className="space-y-8 relative">
            {newsItems.map((item, index) => {
              const [year, month, day] = item.date.split('-');
              const isExternal = item.href?.startsWith('http');

              return (
                <div key={`${item.title}-${item.date}`} className={`md:flex items-start justify-between gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-5/12" />
                  <div className="absolute left-[13px] md:left-1/2 md:-ml-1.5 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white shadow-sm z-10 hidden md:block" />

                  <div className="md:w-5/12 bg-white rounded-xl border border-border/50 p-6 shadow-sm hover:shadow-md transition-shadow relative ml-8 md:ml-0">
                    {/* Mobile dot */}
                    <div className="absolute -left-[39px] top-6 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-[hsl(var(--surface-strong))] md:hidden" />
                    <div className="absolute -left-[33px] top-[34px] bottom-[-40px] w-0.5 bg-border/50 md:hidden last:hidden" />

                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide">
                        {year}-{month}-{day}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.category}</span>
                      {item.location && <span className="text-xs text-muted-foreground">· {item.location}</span>}
                      {item.highlight && (
                      <span className="inline-block px-2 py-0.5 rounded bg-green-50 text-green-700 text-xs font-semibold">
                        {item.highlight}
                      </span>
                      )}
                    </div>

                    {item.href ? (
                      isExternal ? (
                        <a href={item.href} target="_blank" rel="noreferrer" className="block group">
                          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.summary}
                          </p>
                        </a>
                      ) : (
                        <Link href={item.href} className="block group">
                          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.summary}
                          </p>
                        </Link>
                      )
                    ) : (
                      <>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.summary}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default NewsPage;
