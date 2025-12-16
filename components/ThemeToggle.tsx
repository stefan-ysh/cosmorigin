"use client";

import { useEffect, useMemo, useState } from "react";
import type { MouseEvent } from "react";
import { Moon, Sun } from "lucide-react";

import {
  Theme,
  applyTheme,
  resolveInitialTheme,
  runThemeViewTransition,
  setTheme as setGlobalTheme,
  subscribeToThemeChanges,
} from "@/lib/theme";

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
      {mounted && (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
      {!mounted && <Sun className="h-5 w-5" />}
    </button>
  );
};

export default ThemeToggle;
