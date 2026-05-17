"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Sun, Moon } from "lucide-react";

import styles from "@/styles";

const showcasePairs = [
  {
    id: "agriculture",
    label: { zh: "3D 打印辅材", en: "3D Printing Additive" },
    light: "/playground/1.jpg",
    dark: "/playground/2.jpg",
    description: { zh: "适用于3D打印机，DIY爱好者及教育场景。", en: "For 3D printers, DIY users and education scenarios." },
  },
  {
    id: "architecture",
    label: { zh: "3D 打印辅材", en: "3D Printing Additive" },
    light: "/playground/3.jpg",
    dark: "/playground/4.jpg",
    description: { zh: "适用于快消品等快速验证与小批量定制场景。", en: "For rapid validation and small-batch custom product scenarios." },
  },
  {
    id: "6",
    label: { zh: "发光装饰", en: "Luminescent Decoration" },
    light: "/playground/11.jpg",
    dark: "/playground/12.jpg",
    description: { zh: "节日氛围营造，提升空间趣味性与互动性。", en: "Creates festive atmosphere and adds playful interaction to spaces." },
  },
  {
    id: "7",
    label: { zh: "发光漆", en: "Luminescent Paint" },
    light: "/playground/13.jpg",
    dark: "/playground/14.jpg",
    description: { zh: "驾驶者可自定义光色，营造沉浸式情绪灯光。", en: "Supports custom light colors for immersive ambient surfaces." },
  },
  {
    id: "mobility",
    label: { zh: "3D 打印辅材", en: "3D Printing Additive" },
    light: "/playground/5.jpg",
    dark: "/playground/6.jpg",
    description: { zh: "低功耗流光饰面，兼顾艺术感与导视功能。", en: "Low-power glowing surfaces with both visual and wayfinding value." },
  },
  {
    id: "5",
    label: { zh: "发光彩带", en: "Luminescent Ribbon" },
    light: "/playground/9.jpg",
    dark: "/playground/10.jpg",
    description: { zh: "柔性材质，适用于曲面及复杂造型表面。", en: "Flexible material for curved and complex surface applications." },
  },
  {
    id: "4",
    label: { zh: "发光膜", en: "Luminescent Film" },
    light: "/playground/7.jpg",
    dark: "/playground/8.jpg",
    description: { zh: "柔性材质，适用于曲面及复杂造型表面。", en: "Flexible film for curved and complex surface applications." },
  },
  {
    id: "8",
    label: { zh: "发光膜", en: "Luminescent Film" },
    light: "/playground/15.jpg",
    dark: "/playground/16.jpg",
    description: { zh: "发光膜制成的花束，营造温馨浪漫氛围。", en: "A luminescent-film bouquet for warm and romantic ambience." },
  },
  {
    id: "9",
    label: { zh: "发光圣诞装饰", en: "Luminescent Holiday Decoration" },
    light: "/playground/17.jpg",
    dark: "/playground/18.jpg",
    description: { zh: "宇元新材发光材料打印出的节日装饰。", en: "Holiday decoration printed with CosmoOrigin luminescent material." },
  },
] as const;

const FLOATING_SWITCH_THRESHOLD = 320;

const ModeSwitch = ({
  checked,
  onToggle,
}: {
  checked: boolean;
  onToggle: () => void;
}) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    onClick={onToggle}
    className={`relative h-11 w-24 rounded-full border border-foreground/20 bg-foreground/10 px-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground dark:bg-white/5 ${checked ? "bg-foreground" : ""
      }`}
  >
    <span
      className={`absolute top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-background ${checked ? "right-2" : "left-2"
        }`}
    />
    <span
      className={`absolute inset-y-0 flex items-center text-xs font-semibold ${checked ? "left-3 text-teal-400" : "right-3 text-foreground/70"
        }`}
    >
      {!checked ? <Sun /> : <Moon />}
    </span>
  </button>
);

type PlaygroundMode = "light" | "dark";
type PlaygroundLocale = "zh" | "en";

interface PlaygroundSurfaceProps {
  locale?: PlaygroundLocale;
}

const PlaygroundSurface = ({ locale = "zh" }: PlaygroundSurfaceProps) => {
  const [mode, setMode] = useState<PlaygroundMode>("light");
  const [floatingVisible, setFloatingVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFloatingVisible(window.scrollY >= FLOATING_SWITCH_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleModeChange = (nextMode: PlaygroundMode) => {
    if (nextMode === mode) return;
    setMode(nextMode);
  };

  const copy = {
    zh: {
      intro: `点击下方按钮${mode === "light" ? "关灯" : "开灯"} ，查看材料在不同光环境下的状态。所有图像均为宇元新材的发光材料制品实拍。`,
      lightAlt: "开灯效果",
      darkAlt: "关灯效果",
      switchLabel: "切换模式",
      switchSr: "切换明暗模式",
    },
    en: {
      intro: `Use the switch below to turn the lights ${mode === "light" ? "off" : "on"} and compare each material under different lighting conditions. All images show real CosmoOrigin material samples.`,
      lightAlt: "lights-on view",
      darkAlt: "lights-off view",
      switchLabel: "Switch mode",
      switchSr: "Switch light and dark mode",
    },
  }[locale];

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-6 text-center">
        <p className="mx-auto max-w-4xl text-lg text-muted-foreground">
          {copy.intro}
        </p>
      </div>

      <div className="mx-auto flex items-center justify-center gap-4 text-sm font-semibold">
        <ModeSwitch
          checked={mode === "dark"}
          onToggle={() => handleModeChange(mode === "dark" ? "light" : "dark")}
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {showcasePairs.map((pair) => {
          const isHeroCard = pair.id === "agriculture";
          return (
            <article
              key={pair.id}
              className="bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden bg-black/5">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={pair.light}
                    alt={`${pair.label[locale]} ${copy.lightAlt}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className={`object-cover transition-opacity duration-500 ${mode === "light" ? "opacity-100" : "opacity-0"
                      }`}
                    priority={isHeroCard}
                  />
                  <Image
                    src={pair.dark}
                    alt={`${pair.label[locale]} ${copy.darkAlt}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className={`object-cover transition-opacity duration-500 ${mode === "dark" ? "opacity-100" : "opacity-0"
                      }`}
                    priority={isHeroCard}
                  />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                  {pair.label[locale]}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{pair.description[locale]}</p>
              </div>
            </article>
          );
        })}
      </div>

      {floatingVisible && (
        <button
          key="switch-mode"
          type="button"
          aria-label={copy.switchLabel}
          onClick={() => handleModeChange(mode === "dark" ? "light" : "dark")}
          className={`${styles.floatingFab} fixed bottom-28 right-6 z-[65]`}
        >
          {mode === "light" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          <span className="sr-only">{copy.switchSr}</span>
        </button>
      )}
    </div>
  );
};

export default PlaygroundSurface;
