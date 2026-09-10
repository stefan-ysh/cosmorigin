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

const tabs: { id: TabId; label: string; hint: string }[] = [
  { id: 'glow', label: '夜光系列', hint: 'Glow PLA · 6 款基础颜色' },
  { id: 'single', label: '单色温变', hint: '16 款 · 受热后趋近基材本色' },
  { id: 'dual', label: '双色温变', hint: '49 款 · 冷态/热态双参考色' },
];

const dualFamilyIds = dualThermochromicFamilies.map((family) => family.id);

const SwatchCard = ({
  code,
  name,
  baseColor,
  hoverColor,
  hexLabel,
}: {
  code: string;
  name: string;
  baseColor: string;
  hoverColor: string;
  hexLabel: string;
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
          {heated ? '热态' : '冷态'}
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

const FilamentColorCards = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabId>('glow');
  const [activeFamily, setActiveFamily] = useState(dualFamilyIds[0]);
  const activeDualFamily = dualThermochromicFamilies.find((family) => family.id === activeFamily) ?? dualThermochromicFamilies[0];

  return (
    <section id="filament-color-card" className="rounded-2xl border border-black/5 bg-[hsl(var(--surface-strong))] p-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">线材电子色卡</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            单色温变与双色温变均提供 22 ℃ / 30 ℃ / 42 ℃ 感温温度可选；双色温变色块悬停可预览受热后的热态参考色。
          </p>
        </div>
        <a
          href={filamentColorCardPdf}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          下载完整色卡 PDF
        </a>
      </div>

      <div className="mt-6 flex justify-start">
        <div className="tab-nav">
          {tabs.map((tab) => (
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
              吸收自然光、紫外光或普通 LED 灯光后，可在暗光环境中持续释放柔和余辉 · 线径 1.75 mm
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {glowFilamentColors.map((color) => (
                <div key={color.name} className="overflow-hidden rounded-xl border border-border bg-black shadow-sm transition-shadow hover:shadow-md">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={color.image}
                      alt={`${color.code} ${color.name} 料盘实物图`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 180px, (min-width: 640px) 220px, 45vw"
                    />
                  </div>
                  <p className="py-2.5 text-center text-sm font-semibold text-white">{color.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'single' && (
          <div className="space-y-4">
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <Thermometer className="h-3.5 w-3.5" aria-hidden="true" />
              冷态显示目标颜色，受热后颜色趋近 PLA 基材本色（将鼠标悬停在色块上预览）
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {singleThermochromicColors.map((color) => (
                <SwatchCard
                  key={color.code}
                  code={color.code}
                  name={color.name}
                  baseColor={color.cold}
                  hoverColor={PLA_BASE_COLOR}
                  hexLabel={`${color.cold} → 基材本色`}
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
                  {family.name}
                  <span className="ml-1 text-xs opacity-70">{family.colors.length} 色</span>
                </button>
              ))}
            </div>
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <Thermometer className="h-3.5 w-3.5" aria-hidden="true" />
              左侧为冷态电子参考色，悬停预览受热后的热态参考色
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {activeDualFamily.colors.map((color) => (
                <SwatchCard
                  key={color.code}
                  code={color.code}
                  name={color.name}
                  baseColor={color.cold}
                  hoverColor={color.hot}
                  hexLabel={`${color.cold} → ${color.hot}`}
                />
              ))}
            </div>
          </div>
        )}

        <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-muted-foreground/80">
          <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          电子色卡仅用于产品选型与配色沟通，显示器、光源、添加量及打印工艺均可能造成色差，不替代实物色板及量产检验标准。
        </p>
      </div>
    </section>
  );
};

export default FilamentColorCards;
