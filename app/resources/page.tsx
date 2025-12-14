import type { Metadata } from 'next';

import Link from 'next/link';

import PagePlaceholder from '@/components/PagePlaceholder';

export const metadata: Metadata = {
  title: '资料中心 | 白皮书与检测报告',
  description:
    '集中发布产品手册、性能测试、认证证书、媒体素材与 API/控制协议，方便合作伙伴一键下载。',
  alternates: {
    canonical: 'https://cosmorigin.com/resources',
  },
};

const downloads = [
  {
    title: '宇元新材产品手册（2025）',
    description: '涵盖油漆、纤维丝、发光膜与 3D 打印辅材的核心参数与应用指南。',
    type: 'PDF · 7.3 MB',
    href: '/扬州宇元新材产品手册202512_01.pdf',
  },
  {
    title: '水下稳定性与盐雾测试摘要',
    description: '3260 小时浸泡测试、48 小时盐雾实验以及热循环数据概览。',
    type: 'PDF · 即将上线',
  },
  {
    title: '品牌视觉与媒体素材包',
    description: 'LOGO、标准色、典型场景图与发光效果短视频。',
    type: 'ZIP · 近期更新',
  },
];

const ResourcesPage = (): JSX.Element => (
  <main className="bg-primary-black text-white">
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">RESOURCES</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          技术资料与品牌资产集中下载
        </h1>
        <p className="mt-6 text-lg text-white/70">
          这里提供产品手册、性能测试、品牌视觉与开发文档，帮助合作伙伴快速了解材料能力或开展二次设计。
        </p>
      </div>
    </section>

    <section className="px-6 pb-16">
      <div className="mx-auto max-w-6xl grid gap-6">
        {downloads.map((file) => (
          <article key={file.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">{file.type}</p>
                <h2 className="text-2xl font-semibold">{file.title}</h2>
                <p className="mt-2 text-white/70">{file.description}</p>
              </div>
              {file.href ? (
                <Link href={file.href} className="inline-flex items-center rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-white">
                  下载
                </Link>
              ) : (
                <span className="rounded-full border border-dashed border-white/30 px-5 py-2 text-sm text-white/50">即将上线</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>

    <PagePlaceholder
      eyebrow="NEXT"
      title="需要其他认证或数据？"
      description="若需 RoHS/REACH、阻燃、车规可靠性等完整报告，请向我们索取并签署 NDA。"
      cta={{ label: '邮件索取资料', href: 'mailto:contact@cosmorigin.com' }}
    />
  </main>
);

export default ResourcesPage;
