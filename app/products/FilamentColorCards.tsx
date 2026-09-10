'use client';

import { useState } from 'react';

import Image from 'next/image';
import { Thermometer, Moon, Download, ArrowRight } from 'lucide-react';

import {
  dualThermochromicFamilies,
  filamentColorCardPdf,
  glowFilamentColors,
  singleThermochromicColors,
} from '@/constants/filamentColors';

// PLA 基材本色（单色温变受热后趋近的颜色）
const PLA_BASE_COLOR = '#EDE9E0';

type TabId = 'glow' | 'single' | 'dual';

const texts = {
  zh: {
    title: '线材电子色卡',
    intro: '单色温变与双色温变均提供 22 ℃ / 30 ℃ / 42 ℃ 感温温度可选；双色温变色块悬停可预览受热后的热态参考色。',
    download: '下载完整色卡 PDF',
    tabs: [
      { id: 'glow' as TabId, label: '夜光系列' },
      { id: 'single' as TabId, label: '单色温变' },
      { id: 'dual' as TabId, label: '双色温变' },
    ],
    hints: {
      glow: '吸收自然光、紫外光或普通 LED 灯光后，可在暗光环境中持续释放柔和余辉 · 线径 1.75 mm',
      single: '冷态显示目标颜色，受热后颜色趋近 PLA 基材本色（将鼠标悬停在色块上预览）',
      dual: '左侧为冷态电子参考色，悬停预览受热后的热态参考色',
    },
    glowNamePrefix: '',
    singleHexLabel: (cold: string) => `${cold} → 基材本色`,
    baseColorLabel: '基材本色',
    coldChip: '冷态',
    hotChip: '热态',
    colorCount: (n: number) => `${n} 色`,
    disclaimer: '电子色卡仅用于产品选型与配色沟通，显示器、光源、添加量及打印工艺均可能造成色差，不替代实物色板及量产检验标准。',
  },
  en: {
    title: 'Filament Electronic Color Card',
    intro: 'Single-color and dual-color thermochromic filaments are available with 22 °C / 30 °C / 42 °C activation. Hover a dual-color swatch to preview its hot-state reference color.',
    download: 'Download full color card (PDF)',
    tabs: [
      { id: 'glow' as TabId, label: 'Glow Series' },
      { id: 'single' as TabId, label: 'Single-Color TC' },
      { id: 'dual' as TabId, label: 'Dual-Color TC' },
    ],
    hints: {
      glow: 'Absorbs daylight, UV or ordinary LED light, then releases a soft afterglow in the dark · 1.75 mm diameter',
      single: 'Shows the target color when cold and fades toward the natural PLA base color when heated (hover to preview)',
      dual: 'Left is the cold-state reference color; hover to preview the hot-state color',
    },
    glowNamePrefix: 'Glow ',
    singleHexLabel: (cold: string) => `${cold} → PLA base`,
    baseColorLabel: 'PLA base',
    coldChip: 'Cold',
    hotChip: 'Hot',
    colorCount: (n: number) => `${n} colors`,
    disclaimer: 'The electronic color card is for product selection and color communication only. Displays, light sources, dosage and printing conditions may cause deviations; it does not replace physical swatches or mass-production inspection standards.',
  },
};

const SwatchCard = ({
  code,
  name,
  baseColor,
  hoverColor,
  hexLabel,
  coldChip,
  hotChip,
}: {
  code: string;
  name: string;
  baseColor: string;
  hoverColor: string;
  hexLabel: string;
  coldChip: string;
  hotChip: string;
}) => {
  const [heated, setHeated] = useState(false);

  return (
    <div
      className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
      onMouseEnter={() => setHeated(true)}
      onMouseLeave={() => setHeated(false)}
    >
      <div
        className="relative flex h-24 items-end justify-end p-2 transition-colors duration-700 ease-in-out"
        style={{ backgroundColor: heated ? hoverColor : baseColor }}
      >
        <span className="rounded bg-black/25 px-1.5 py-0.5 text-[10px] font-medium text-white/90 backdrop-blur-sm">
          {heated ? hotChip : coldChip}
        </span>
      </div>
      <div className="px-3 py-2.5">
        <p className="text-sm font-semibold text-foreground">
          {code} · {name}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">{hexLabel}</p>
      </div>
    </div>
  );
};

const FilamentColorCards = ({ locale = 'zh' }: { locale?: 'zh' | 'en' }): JSX.Element => {
  const t = texts[locale];
  const [activeTab, setActiveTab] = useState<TabId>('glow');
  const [activeFamily, setActiveFamily] = useState(dualThermochromicFamilies[0].id);
  const activeDualFamily = dualThermochromicFamilies.find((family) => family.id === activeFamily) ?? dualThermochromicFamilies[0];

  return (
    <section id="filament-color-card" className="rounded-2xl border border-black/5 bg-[hsl(var(--surface-strong))] p-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">{t.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{t.intro}</p>
        </div>
        <a
          href={filamentColorCardPdf}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          {t.download}
        </a>
      </div>

      <div className="mt-6 flex justify-start">
        <div className="tab-nav">
          {t.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`tab-link ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 animate-fadeIn" key={activeTab}>
        {activeTab === 'glow' && (
          <div className="space-y-4">
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <Moon className="h-3.5 w-3.5" aria-hidden="true" />
              {t.hints.glow}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {glowFilamentColors.map((color) => (
                <div key={color.name} className="overflow-hidden rounded-xl border border-border bg-black shadow-sm transition-shadow hover:shadow-md">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={color.image}
                      alt={`${color.code} ${locale === 'zh' ? color.name : color.nameEn}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 180px, (min-width: 640px) 220px, 45vw"
                    />
                  </div>
                  <p className="py-2.5 text-center text-sm font-semibold text-white">
                    {locale === 'zh' ? color.name : color.nameEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'single' && (
          <div className="space-y-4">
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <Thermometer className="h-3.5 w-3.5" aria-hidden="true" />
              {t.hints.single}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {singleThermochromicColors.map((color) => (
                <SwatchCard
                  key={color.code}
                  code={color.code}
                  name={locale === 'zh' ? color.name : color.nameEn}
                  baseColor={color.cold}
                  hoverColor={PLA_BASE_COLOR}
                  hexLabel={t.singleHexLabel(color.cold)}
                  coldChip={t.coldChip}
                  hotChip={t.hotChip}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'dual' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {dualThermochromicFamilies.map((family) => (
                <button
                  key={family.id}
                  type="button"
                  onClick={() => setActiveFamily(family.id)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                    activeFamily === family.id
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-foreground'
                  }`}
                >
                  {locale === 'zh' ? family.name : family.nameEn}
                  <span className="ml-1 text-xs opacity-70">{t.colorCount(family.colors.length)}</span>
                </button>
              ))}
            </div>
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <Thermometer className="h-3.5 w-3.5" aria-hidden="true" />
              {t.hints.dual}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {activeDualFamily.colors.map((color) => (
                <SwatchCard
                  key={color.code}
                  code={color.code}
                  name={locale === 'zh' ? color.name : color.nameEn}
                  baseColor={color.cold}
                  hoverColor={color.hot}
                  hexLabel={`${color.cold} → ${color.hot}`}
                  coldChip={t.coldChip}
                  hotChip={t.hotChip}
                />
              ))}
            </div>
          </div>
        )}

        <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-muted-foreground/80">
          <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {t.disclaimer}
        </p>
      </div>
    </section>
  );
};

export default FilamentColorCards;
