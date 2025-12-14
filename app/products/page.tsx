import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import PagePlaceholder from '@/components/PagePlaceholder';

export const metadata: Metadata = {
  title: '产品矩阵 | 发光油漆、纤维丝、薄膜与 3D 打印辅材',
  description:
    '浏览宇元新材的核心产品：发光油漆、发光纤维丝、发光膜以及全新 3D 打印辅材，支持定制光谱与多场景应用。',
  alternates: {
    canonical: 'https://cosmorigin.com/products',
  },
};

interface ProductVariant {
  model: string;
  spec: string;
  note?: string;
}

interface ProductDetail {
  name: string;
  status: string;
  overview: string;
  applications: string;
  brightness: string;
  supply: string;
  certification: string;
  keyParameters: string;
  variants: ProductVariant[];
  extraNote?: string;
  image: string;
  imageAlt: string;
}

const luminousFilmVariants: ProductVariant[] = [
  { model: '橙基 红 01-04', spec: '亮度 50-100 cd/m² · 持续 1h+' },
  { model: '白基 绿 01-03', spec: '亮度 50-100 cd/m² · 持续 1h+' },
  { model: '白基 蓝 01-05', spec: '亮度 50-100 cd/m² · 持续 1h+' },
  { model: '橙基 黄 01-05', spec: '亮度 50-100 cd/m² · 持续 1h+' },
  { model: '橙基 紫', spec: '亮度 50-100 cd/m² · 持续 1h+' },
];

const elWireVariants: ProductVariant[] = [
  { model: '白基 蓝色 0.3 mm', spec: '亮度 20-40 cd/m²' },
  { model: '白基 蓝色 0.5 mm', spec: '亮度 30-45 cd/m²' },
  { model: '白基 青色 0.3 mm', spec: '亮度 20-40 cd/m²' },
  { model: '白基 青色 0.5 mm', spec: '亮度 30-45 cd/m²' },
];

const fiberVariants: ProductVariant[] = [
  { model: '橙基 红 01-04', spec: '亮度 20-45 cd/m² · 持续发光 ≥3 h' },
  { model: '橙基 黄 01-05', spec: '亮度 20-45 cd/m² · 持续发光 ≥3 h' },
  { model: '橙基 紫', spec: '亮度 20-45 cd/m² · 持续发光 ≥3 h' },
  { model: '白基 绿 01-03', spec: '亮度 20-45 cd/m² · 持续发光 ≥3 h' },
  { model: '白基 蓝 01-05', spec: '亮度 20-45 cd/m² · 持续发光 ≥3 h' },
];

const paintVariants: ProductVariant[] = [
  { model: '清漆/面漆', spec: '亮度 24 cd/m² · 持续 1h+' },
  { model: '母漆', spec: '亮度 24 cd/m² · 持续 1h+' },
  { model: '底漆', spec: '亮度 24 cd/m² · 持续 1h+' },
];

const additiveVariants: ProductVariant[] = [
  { model: 'FDM 1.75 mm 线材', spec: '发光填充 15% · 喷嘴 230°C · 发光 4-6 h' },
  { model: 'FDM 2.85 mm 线材', spec: '耐温 120°C · 支持高速打印 · 透光外壳' },
  { model: 'SLA 405 nm 树脂', spec: '低粘度 · 固化能量 6-8 mJ/cm² · DIN 53455 抗拉 38 MPa' },
];

const productDetails: ProductDetail[] = [
  {
    name: '发光油漆系列',
    status: '可订购',
    overview: '亮度 10 - 24 cd/㎡ · 耐候/水下版本 · 支持多色调制',
    applications: '交通安全、文旅夜游、品牌装置',
    brightness: '10 - 24 cd/㎡',
    supply: '桶装/喷涂服务',
    certification: 'RoHS',
    keyParameters: '涂覆厚度 50-150 μm · 可叠加透明保护层',
    variants: paintVariants,
    extraNote: '橙色基材：红01-04、黄01-05、紫系列；白色基材：绿01-03、蓝01-05 系列',
    image: '/宇元新材发光油漆产品图无背景.png',
    imageAlt: '宇元新材发光油漆样品',
  },
  {
    name: '发光纤维丝',
    status: '可订购',
    overview: '直径 0.6-2.5mm · 无需驱动',
    applications: '汽车内饰、穿戴设备、建筑柔光带',
    brightness: '表面 20-45 cd/m²',
    supply: '裸线/包覆线',
    certification: '车规抗弯、UV 老化',
    keyParameters: '-',
    variants: fiberVariants,
    extraNote: '柔性疲劳测试，可多次弯折',
    image: '/宇元新材发光纤维丝无背景.png',
    imageAlt: '宇元新材发光纤维丝成品线束',
  },
  {
    name: '电致发光线缆',
    status: '可订购',
    overview: '均匀面光源 · 支持 5V 驱动 · 可裁剪',
    applications: '视觉标识、服饰装饰、建筑导光线',
    brightness: '20-45 cd/m²',
    supply: '0.3-0.5 mm 线缆、定制连接器',
    certification: '绝缘耐压、安全电压以下',
    keyParameters: '可同步订购驱动电源',
    variants: elWireVariants,
    extraNote: '亮度数据在 5V 驱动条件下测得',
    image: '/宇元新材电致发光线产品图无背景.png',
    imageAlt: '宇元新材电致发光线样品',
  },
  {
    name: '发光膜/薄膜',
    status: '小批量交付',
    overview: '厚度 0.25mm · 支持曲面覆贴 · 卷对卷定制',
    applications: '车标、建筑幕墙、文创产品',
    brightness: '50-100 cd/m²',
    supply: '卷材/片材/模切件',
    certification: '盐雾、湿热、火焰',
    keyParameters: 'TPU/PC/复合基材可选 · 可叠加 3M 背胶',
    variants: luminousFilmVariants,
    extraNote: '当前出货幅宽 250 mm，暂不提供宽幅定制；可提供透湿或高阻隔版本',
    image: '/宇元新材发光膜产品图无背景.png',
    imageAlt: '宇元新材发光薄膜贴合样张',
  },
//   {
//     name: '3D 打印辅材（NEW）',
//     status: '内测中',
//     overview: '兼容 SLA/FDM · 自发光填充粒子 · 耐温 120°C',
//     applications: '复杂光效件、小批量功能验证、教育展示',
//     brightness: '体发光 4-6 h',
//     supply: '线材/树脂',
//     certification: '正在申请 UL94/CSA',
//     keyParameters: '可与常规耗材混合打印 · 支持回收再造粒',
//     variants: additiveVariants,
//     extraNote: '报名内测可获得驱动设置与打印参数指导',
//     image: '/宇元新材发光材料制成的3D打印辅材.jpg',
//     imageAlt: '宇元新材发光 3D 打印辅材样件',
//   },
];

const ProductsPage = (): JSX.Element => (
  <main className="bg-primary-black text-white">
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">PRODUCTS</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          模块化产品矩阵，适配从探索到量产的全周期
        </h1>
        <p className="mt-6 text-lg text-white/70">
          每一款材料都可按光谱、亮度、封装方式定制。通过标准化验证包与快速打样体系，确保 6-8 周内完成项目首批交付。
        </p>
      </div>
    </section>

    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl space-y-10">
        {productDetails.map((product) => (
          <article key={product.name} className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">{product.status}</p>
                <h2 className="text-3xl font-semibold">{product.name}</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-white"
                >
                  联系顾问
                </Link>
                <a
                  href="https://m.tb.cn/h.7Xxt7HwwRy9u8k8"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary-black transition hover:bg-white/80"
                >
                  淘宝询价
                </a>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[320px,minmax(0,1fr)]">
              <div className="overflow-hidden rounded-3xl border border-white/5 bg-primary-black/30 flex items-center justify-center p-4">
                <div className="relative aspect-square w-full">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-scale-down"
                    sizes="(min-width: 1024px) 320px, 100vw"
                    priority={product.name === '发光油漆系列'}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">核心参数</p>
                    <p className="mt-2 text-white/80">{product.overview}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">典型应用</p>
                    <p className="mt-2 text-white/80">{product.applications}</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[{
                    label: '亮度区间',
                    value: product.brightness,
                  },
                  {
                    label: '供货形态',
                    value: product.supply,
                  },
                  {
                    label: '认证/验证',
                    value: product.certification,
                  },
                  {
                    label: '关键参数',
                    value: product.keyParameters,
                  }].map((item) => (
                    <div key={`${product.name}-${item.label}`} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/50">{item.label}</p>
                      <p className="mt-2 text-sm text-white/80">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-primary-black/30">
                  <table className="min-w-full text-left text-sm text-white/80">
                    <thead>
                      <tr className="text-white">
                        <th className="px-5 py-3">规格/型号</th>
                        <th className="px-5 py-3">关键参数</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.variants.map((variant) => (
                        <tr key={`${product.name}-${variant.model}`} className="border-t border-white/5">
                          <td className="px-5 py-3 whitespace-nowrap font-medium text-white">{variant.model}</td>
                          <td className="px-5 py-3">{variant.spec}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {product.extraNote && <p className="text-xs text-white/60">{product.extraNote}</p>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <PagePlaceholder
      eyebrow="NEXT"
      title="需要定制化？"
      description="若要评估特殊光谱、不同驱动模式或极端环境表现，请联系团队获取材料白皮书与测试计划。"
      cta={{ label: '预约技术讨论', href: '/contact' }}
    />
  </main>
);

export default ProductsPage;
