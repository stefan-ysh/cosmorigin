"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { motion } from "framer-motion";

import { Sun, Moon } from "lucide-react";

import {
  Theme,
  resolveInitialTheme,
  runThemeViewTransition,
  setTheme as setGlobalTheme,
  subscribeToThemeChanges,
} from "@/lib/theme";
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
] as const;

const FLOATING_SWITCH_THRESHOLD = 320;

const ModeSwitch = ({
  checked,
  onToggle,
}: {
  checked: boolean;
  onToggle: (event: MouseEvent<HTMLButtonElement>) => void;
}) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    onClick={onToggle}
    className={`relative h-11 w-24 rounded-full border border-foreground/20 bg-foreground/10 px-0 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground dark:bg-white/5 ${checked ? "bg-foreground hover:bg-foreground" : "hover:bg-foreground/20"
      }`}
  >
    <span
      className={`absolute top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-background shadow-lg transition-all ${checked ? "right-2" : "left-2"
        }`}
    />
    <span
      className={`absolute inset-y-0 flex items-center text-xs font-semibold uppercase tracking-[0.3em] transition ${checked ? "left-3 text-teal-400" : "right-3 text-foreground/70"
        }`}
    >
      {checked ? "OFF" : "ON"}
    </span>
  </button>
);

const PlaygroundSurface = () => {
  const [mode, setMode] = useState<Theme>("light");
  const [floatingVisible, setFloatingVisible] = useState(false);

  useEffect(() => {
    setMode(resolveInitialTheme());
    const unsubscribe = subscribeToThemeChanges(setMode);
    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setFloatingVisible(window.scrollY >= FLOATING_SWITCH_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleModeChange = (
    nextMode: Theme,
    event: MouseEvent<HTMLButtonElement>
  ) => {
    if (nextMode === mode) return;
    runThemeViewTransition({
      event,
      nextTheme: nextMode,
      onApply: () => {
        setMode(nextMode);
        setGlobalTheme(nextMode);
      },
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">
          实时预览
        </p>
        <p className="mx-auto max-w-4xl text-lg text-foreground/80">
          点击下方 开灯 / 关灯
          按钮，查看材料在不同光环境下的状态。所有图像均为宇元新材的发光材料制品实拍。
        </p>
      </div>

      <div className="mx-auto flex items-center justify-center gap-4  text-sm font-semibold backdrop-blur">
        <span
          className={`text-xs uppercase tracking-[0.4em] ${mode === "light" ? "text-foreground" : "text-foreground/50"}`}
        >
          开灯
        </span>
        <ModeSwitch
          checked={mode === "dark"}
          onToggle={(event) =>
            handleModeChange(mode === "dark" ? "light" : "dark", event)
          }
        />
        <span
          className={`text-xs uppercase tracking-[0.4em] ${mode === "dark" ? "text-foreground" : "text-foreground/50"}`}
        >
          关灯
        </span>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {showcasePairs.map((pair) => {
          const isHeroCard = pair.id === "agriculture";
          return (
            <article
              key={pair.id}
              className="group flex flex-col gap-6 rounded-3xl border border-foreground/10 bg-card/70 p-6 shadow-xl shadow-black/5 transition"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">
                  {mode === "light" ? "开灯" : "关灯"}
                </p>
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
                    className={`object-cover transition-opacity duration-500 ${mode === "light" ? "opacity-100" : "opacity-0"
                      }`}
                    priority={isHeroCard}
                  />
                  <Image
                    src={pair.dark}
                    alt={`${pair.label} 关灯效果`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className={`object-cover transition-opacity duration-500 ${mode === "dark" ? "opacity-100" : "opacity-0"
                      }`}
                    priority={isHeroCard}
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition">
                  <div className="h-full w-full bg-gradient-to-br from-transparent via-black/20 to-black/60" />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {floatingVisible && (
        <motion.button
          key="switch-mode"
          type="button"
          aria-label="切换模式"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          onClick={(event) =>
            handleModeChange(mode === "dark" ? "light" : "dark", event)
          }
          className={`${styles.floatingFab} fixed bottom-28 right-6 z-[65]`}
        >
          {mode === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          <span className="sr-only">切换明暗模式</span>
        </motion.button>
      )}
    </div>
  );
};

export default PlaygroundSurface;
