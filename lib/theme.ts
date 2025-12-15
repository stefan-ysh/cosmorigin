import type { MouseEvent } from "react";

export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";
const THEME_EVENT_KEY = "cosmorigin:theme-change";

type ThemeViewTransition = {
  ready: Promise<void>;
  finished: Promise<void>;
  updateCallbackDone: Promise<void>;
};

const isThemeValue = (value: unknown): value is Theme =>
  value === "light" || value === "dark";

export const prefersDark = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export const readDocumentTheme = (): Theme | null => {
  if (typeof document === "undefined") return null;
  const current = document.documentElement.dataset.theme;
  return isThemeValue(current) ? current : null;
};

export const getStoredTheme = (): Theme | null => {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isThemeValue(stored) ? stored : null;
};

export const resolveInitialTheme = (): Theme => {
  return (
    getStoredTheme() ||
    readDocumentTheme() ||
    (prefersDark() ? "dark" : "light")
  );
};

export const applyTheme = (nextTheme: Theme): void => {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", nextTheme === "dark");
  document.documentElement.dataset.theme = nextTheme;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  }
};

export const setTheme = (nextTheme: Theme): void => {
  applyTheme(nextTheme);
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent<Theme>(THEME_EVENT_KEY, { detail: nextTheme })
    );
  }
};

export const subscribeToThemeChanges = (
  callback: (theme: Theme) => void
): (() => void) => {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const customHandler = (event: Event) => {
    const detail = (event as CustomEvent<Theme>).detail;
    if (isThemeValue(detail)) {
      callback(detail);
    }
  };

  const storageHandler = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY && isThemeValue(event.newValue)) {
      callback(event.newValue);
    }
  };

  window.addEventListener(THEME_EVENT_KEY, customHandler as EventListener);
  window.addEventListener("storage", storageHandler);

  return () => {
    window.removeEventListener(
      THEME_EVENT_KEY,
      customHandler as EventListener
    );
    window.removeEventListener("storage", storageHandler);
  };
};

interface ThemeTransitionOptions {
  event: MouseEvent<HTMLElement>;
  nextTheme: Theme;
  onApply: () => void;
}

export const runThemeViewTransition = ({
  event,
  nextTheme,
  onApply,
}: ThemeTransitionOptions): void => {
  if (typeof document === "undefined" || typeof window === "undefined") {
    onApply();
    return;
  }

  const root = document.documentElement;
  const startViewTransition = ((document as typeof document & {
    startViewTransition?: (callback: () => void) => ThemeViewTransition;
  }).startViewTransition)?.bind(document);
  const reduceMotion = window
    .matchMedia("(prefers-reduced-motion: reduce)")
    .matches;

  if (!startViewTransition || reduceMotion) {
    onApply();
    return;
  }

  const buttonRect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX || buttonRect.left + buttonRect.width / 2;
  const y = event.clientY || buttonRect.top + buttonRect.height / 2;

  const maxRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  const transitionClass = `theme-transitioning--${nextTheme}`;
  const transitionDuration = nextTheme === "light" ? "0.9s" : "1.05s";

  root.style.setProperty("--theme-clip-x", `${x}px`);
  root.style.setProperty("--theme-clip-y", `${y}px`);
  root.style.setProperty("--theme-clip-radius", `${maxRadius}px`);
  root.style.setProperty("--theme-transition-duration", transitionDuration);
  root.classList.remove("theme-transitioning--light", "theme-transitioning--dark");
  root.classList.add("theme-transitioning", transitionClass);

  startViewTransition(() => {
    onApply();
  }).finished.finally(() => {
    root.classList.remove("theme-transitioning", transitionClass);
    root.style.removeProperty("--theme-clip-x");
    root.style.removeProperty("--theme-clip-y");
    root.style.removeProperty("--theme-clip-radius");
    root.style.removeProperty("--theme-transition-duration");
  });
};
