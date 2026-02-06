"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Sun, Moon } from "lucide-react";

import styles from "@/styles";

const showcasePairs = [
  {
    id: "agriculture",
    label: "3D 打印辅材",
    light: "/playground/1.jpg",
    dark: "/playground/2.jpg",
    description: "适用于3D打印机，DIY爱好者及教育场景。",
  },
  {
    id: "architecture",
    label: "3D 打印辅材",
    light: "/playground/3.jpg",
    dark: "/playground/4.jpg",
    description: "适用于快消品等快速验证与小批量定制场景。",
  },
  {
    id: "6",
    label: "发光装饰",
    light: "/playground/11.jpg",
    dark: "/playground/12.jpg",
    description: "节日氛围营造，提升空间趣味性与互动性。",
  },
  {
    id: "7",
    label: "发光漆",
    light: "/playground/13.jpg",
    dark: "/playground/14.jpg",
    description: "驾驶者可自定义光色，营造沉浸式情绪灯光。",
  },
  {
    id: "mobility",
    label: "3D 打印辅材",
    light: "/playground/5.jpg",
    dark: "/playground/6.jpg",
    description: "低功耗流光饰面，兼顾艺术感与导视功能。",
  },
  {
    id: "5",
    label: "发光彩带",
    light: "/playground/9.jpg",
    dark: "/playground/10.jpg",
    description: "柔性材质，适用于曲面及复杂造型表面。",
  },
  {
    id: "4",
    label: "发光膜",
    light: "/playground/7.jpg",
    dark: "/playground/8.jpg",
    description: "柔性材质，适用于曲面及复杂造型表面。",
  },
  {
    id: "8",
    label: "发光膜",
    light: "/playground/15.jpg",
    dark: "/playground/16.jpg",
    description: " 发光膜制成的花束，营造温馨浪漫氛围。",
  },
  {
    id: "9",
    label: "发光圣诞装饰",
    light: "/playground/17.jpg",
    dark: "/playground/18.jpg",
    description: "宇元新材发光材料打印出的节日装饰。",
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

const PlaygroundSurface = () => {
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

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-6 text-center">
        <p className="mx-auto max-w-4xl text-lg text-foreground/80">
          点击下方按钮{mode === "light" ? "关灯" : "开灯"} ，查看材料在不同光环境下的状态。所有图像均为宇元新材的发光材料制品实拍。
        </p>
      </div>

      <div className="mx-auto flex items-center justify-center gap-4 text-sm font-semibold">
        <ModeSwitch
          checked={mode === "dark"}
          onToggle={() => handleModeChange(mode === "dark" ? "light" : "dark")}
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {showcasePairs.map((pair) => {
          const isHeroCard = pair.id === "agriculture";
          return (
            <article
              key={pair.id}
              className="panel hover-card flex flex-col gap-6 p-6"
            >
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  {pair.label}
                </h2>
                <p className="text-sm text-foreground/70">{pair.description}</p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-black/5">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={pair.light}
                    alt={`${pair.label} 开灯效果`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className={`object-cover ${mode === "light" ? "opacity-100" : "opacity-0"
                      }`}
                    priority={isHeroCard}
                  />
                  <Image
                    src={pair.dark}
                    alt={`${pair.label} 关灯效果`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className={`object-cover ${mode === "dark" ? "opacity-100" : "opacity-0"
                      }`}
                    priority={isHeroCard}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex flex-col gap-6 text-center pt-8">
        <div className="mx-auto max-w-4xl space-y-4 text-lg text-foreground/80">
          <p>
            我们将材料、结构、电控与算法打包成行业方案，既能快速验证，也能直连后续量产。
          </p>
          <p>
            每一款材料都可按光谱、亮度、封装方式定制。通过标准化验证包与快速打样体系，确保 6-8 周内完成项目首批交付。
          </p>
        </div>
      </div>

      {floatingVisible && (
        <button
          key="switch-mode"
          type="button"
          aria-label="切换模式"
          onClick={() => handleModeChange(mode === "dark" ? "light" : "dark")}
          className={`${styles.floatingFab} fixed bottom-28 right-6 z-[65]`}
        >
          {mode === "light" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          <span className="sr-only">切换明暗模式</span>
        </button>
      )}
    </div>
  );
};

export default PlaygroundSurface;
