"use client";

import { useEffect, useMemo, useState } from "react";
import type { MouseEvent } from "react";

import {
  Theme,
  applyTheme,
  resolveInitialTheme,
  runThemeViewTransition,
  setTheme as setGlobalTheme,
  subscribeToThemeChanges,
} from "@/lib/theme";

const SunIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className="h-5 w-5"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
  >
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2v2.5M12 19.5V22M4.222 4.222l1.768 1.768M17.99 17.99l1.788 1.788M2 12h2.5M19.5 12H22M4.222 19.778l1.768-1.768M17.99 6.01l1.788-1.788" />
  </svg>
);

const MoonIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className="h-5 w-5"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
  >
    <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z" />
  </svg>
);

const ThemeToggle = () => {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme = resolveInitialTheme();
    applyTheme(initialTheme);
    setThemeState(initialTheme);
    setMounted(true);

    const unsubscribe = subscribeToThemeChanges((nextTheme) => {
      setThemeState(nextTheme);
    });

    return unsubscribe;
  }, []);

  const label = useMemo(
    () => (theme === "dark" ? "切换为浅色模式" : "切换为深色模式"),
    [theme]
  );

  const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    runThemeViewTransition({
      event,
      nextTheme,
      onApply: () => {
        setGlobalTheme(nextTheme);
        setThemeState(nextTheme);
      },
    });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-pressed={theme === "dark"}
      className="group relative inline-flex items-center justify-center rounded-full border-none px-3 py-2 text-sm font-semibold text-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:border-white/30  dark:text-white dark:hover:border-white/60 dark:focus-visible:outline-white"
    >
      <span className="sr-only">{label}</span>
      {mounted && (theme === "dark" ? <SunIcon /> : <MoonIcon />)}
      {!mounted && <SunIcon />}
    </button>
  );
};

export default ThemeToggle;
