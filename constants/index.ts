export interface ExploreWorld {
  id: string;
  imgUrl: string;
  title: string;
  alt: string;
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
    imgUrl: '/发光油漆.jpg',
    title: '发光油漆',
    alt: '发光油漆效果图片',
  },
  {
    id: 'world-2',
    imgUrl: '/发光纤维丝.jpg',
    title: '发光纤维丝',
    alt: '发光纤维丝效果图片',
  },
  {
    id: 'world-3',
    imgUrl: '/发光膜.jpg',
    title: '发光膜',
    alt: '发光膜效果图片',
  },
];

export const startingFeatures: string[] = [
  '提交应用场景与性能需求，明确功能目标',
  '联合制定产品规格与验证方案，确保技术可行性',
  '完成样品交付并建立稳定供应链，实现量产落地',
];

export const newFeatures: FeatureHighlight[] = [
  {
    imgUrl: '/vrpano.svg',
    title: '全球首个纳米级连续生产自发光材料',
    subtitle: '突破传统间歇生产模式，3260小时水下稳定性认证，荧光强度保持85%以上，铅泄漏远低于安全标准。',
  },
  {
    imgUrl: '/headset.svg',
    title: '任意图案化/多色发光技术',
    subtitle: '支持个性化图案定制与多色光谱调节，灵活匹配交通警示、艺术装饰、品牌LOGO等多元场景需求。',
  },
];

export const insights: InsightItem[] = [
  {
    imgUrl: '/发光材料在汽车内外饰中的应用.png',
    title: '汽车内外饰：从功能到情感的光影革命',
    subtitle: '主动安全增强、轻量化设计、无声发光美学，让危险提前"被看见"，从北极圈到沙漠，光始终在线。',
  },
  {
    imgUrl: '/发光材料在农业中的应用.png',
    title: '智慧农业：RMAF温室的24小时光补偿',
    subtitle: '621nm红光补偿使小麦叶绿素含量提升39.4%，实现光转换-光存储-光释放的完整循环，精准农业光照管理的突破。',
  },
  {
    imgUrl: '/发光材料在应急救援中的应用.png',
    title: '应急救援：深海到高空的全场景守护',
    subtitle: '3260小时水下浸泡后荧光强度保持85%，热致发光防护服、防水织物，为救援场景提供主动安全保障。',
  },
];

export const socials: SocialLink[] = [
  // {
  //   name: 'tiktok',
  //   url: '/tiktok.svg',
  //   link: 'https://www.tiktok.com/@cosmorigin',
  // },
  // {
  //   name: 'wechat',
  //   url: '/wechat.svg',
  //   link: '#', // Placeholder link for WeChat
  // },
  // {
  //   name: 'linkedin',
  //   url: '/linkedin.svg',
  //   link: 'https://www.linkedin.com/company/cosmorigin',
  // },
  // {
  //   name: 'instagram',
  //   url: '/instagram.svg',
  //   link: 'https://www.instagram.com/cosmorigin',
  // },
  // {
  //   name: 'facebook',
  //   url: '/facebook.svg',
  //   link: 'https://www.facebook.com/cosmorigin',
  // },
];
