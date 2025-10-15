export interface ExploreWorld {
  id: string;
  imgUrl: string;
  title: string;
}

export interface FeatureHighlight {
  imgUrl: string;
  title: string;
  subtitle: string;
}

export interface InsightItem {
  imgUrl: string;
  title: string;
  subtitle: string;
}

export interface SocialLink {
  name: string;
  url: string;
  link: string;
}

export const exploreWorlds: ExploreWorld[] = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.png',
    title: '高亮长余辉粉体',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.png',
    title: '可打印发光油墨',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.png',
    title: '抗紫外户外涂层',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.png',
    title: '柔性光电薄膜',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-05.png',
    title: '定制光谱解决方案',
  },
];

export const startingFeatures: string[] = [
  '提交应用场景与光学性能需求',
  '联合制定样品配方与验证计划',
  '完成中试放大并建立稳定交付',
];

export const newFeatures: FeatureHighlight[] = [
  {
    imgUrl: '/vrpano.svg',
    title: '无稀土长余辉矩阵',
    subtitle: '全新释光体系，余辉持续8小时以上，同时满足RoHS与REACH环保标准。',
  },
  {
    imgUrl: '/headset.svg',
    title: '智能工艺监控平台',
    subtitle: '通过数字化看板实时采集关键参数，确保批次一致性与可追溯交付。',
  },
];

export const insights: InsightItem[] = [
  {
    imgUrl: '/planet-06.png',
    title: '发光材料赋能夜间安全指示新场景',
    subtitle: '从市政道路到能源设施，长余辉材料让被动发光指示更加可靠，降低运维成本。',
  },
  {
    imgUrl: '/planet-07.png',
    title: '评估长余辉性能的三大关键指标',
    subtitle: '亮度、余辉时长与耐候性共同决定材料表现，实验室到现场需要完整验证链路。',
  },
  {
    imgUrl: '/planet-08.png',
    title: '低碳制造让光电供应链更可持续',
    subtitle: '通过能源回收、溶剂循环与绿色配方设计，我们正在构建零废液的材料生产线。',
  },
];

export const socials: SocialLink[] = [];
