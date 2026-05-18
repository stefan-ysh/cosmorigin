import { company } from '@/lib/site';

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

export interface SocialChannel {
  label: string;
  description: string;
  href?: string;
  qrImage?: string;
  qrAlt?: string;
}

export interface PartnerLogo {
  name: string;
  logo?: string;
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
  {
    id: 'world-4',
    imgUrl: '/宇元新材发光材料制成的3D打印辅材.jpg',
    title: '3D 打印辅材',
    alt: '3D 打印辅材效果图片',
  },
];

export const startingFeatures: string[] = [
  '提交应用场景与性能需求，明确功能目标',
  '联合制定产品规格与验证方案，确保技术可行性',
  '完成样品交付并建立稳定供应链，实现量产落地',
];

export const newFeatures: FeatureHighlight[] = [
  {
    imgUrl: 'first',
    title: '全球首个纳米级连续生产自发光材料',
    subtitle: '突破传统间歇生产模式，3260小时水下稳定性认证，荧光强度保持85%以上，铅泄漏远低于安全标准。',
  },
  {
    imgUrl: 'multiple',
    title: '任意图案化/多色发光技术',
    subtitle: '支持个性化图案定制与多色光谱调节，灵活匹配交通警示、艺术装饰、品牌LOGO等多元场景需求。',
  },
  {
    imgUrl: '3D',
    title: '3D 打印辅材发布',
    subtitle: '兼容 SLA/FDM 的自发光材料，可直接打印复杂光效件，缩短小批量验证与展示件制作周期。',
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

export const socialChannels: SocialChannel[] = [
  {
    label: '抖音',
    description: '打开抖音搜索“宇元新材”获取实验日常与路演直播。',
    href: company.douyinUrl,
    qrImage: company.douyinQr,
    qrAlt: '宇元新材抖音二维码',
  },
  {
    label: 'TikTok',
    description: '@cosmorigin，面向海外的材料动态与案例拆解。',
    href: company.tiktokUrl,
    qrImage: company.tiktokQr,
    qrAlt: 'CosmoOrigin TikTok 二维码',
  },
  {
    label: '微信公众号',
    description: '宇元新材材料研究院——每月推送技术白皮书与活动预约。',
    href: company.wechatUrl,
    qrImage: company.wechatQr,
    qrAlt: '宇元新材微信公众号二维码',
  },
  {
    label: '微信视频号',
    description: '宇元新材官方视频号，跟进新材料 Demo 直播。',
    qrImage: company.videoQr,
    qrAlt: '宇元新材微信视频号二维码',
  },
  {
    label: '微博',
    description: '@宇元新材，关注行业观点与展会快讯。',
    href: company.weiboUrl,
    qrImage: company.weiboQr,
    qrAlt: '宇元新材微博二维码',
  },
  {
    label: '小红书',
    description: '@宇元新材，记录材料灵感与落地案例。',
    href: company.xiaohongshuUrl,
    qrImage: company.xiaohongshuQr,
    qrAlt: '宇元新材小红书二维码',
  },
  {
    label: 'Shopify',
    description: '宇元新材国际站，服务全球客户。',
    href: company.shopifyUrl,
    qrImage: company.shopifyQr,
    qrAlt: '宇元新材 Shopify 国际站二维码',
  },
  {
    label: '淘宝店',
    description: '国内样品、耗材与标准品可通过淘宝店咨询。',
    href: company.taobaoUrl,
    qrImage: company.taobaoQr,
    qrAlt: '宇元新材淘宝店二维码',
  },
];

export const partnerLogos: PartnerLogo[] = [
  { name: '中国农业科学院', logo: '/partners/中国农业科学院.png' },
  { name: '中山大学', logo: '/partners/sys.png' },
  { name: '扬州大学', logo: '/partners/yzu.png' },
  { name: '江苏大学', logo: '/partners/jsu.png' },
  { name: '中国一汽', logo: '/partners/faw.png' },
];
