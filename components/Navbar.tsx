"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import ThemeToggle from "@/components/ThemeToggle";
import styles from "@/styles";
import { navVariants } from "@/utils/motion";

const navLinks = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "产品矩阵", href: "/products" },
  { label: "行业方案", href: "/solutions" },
  { label: "案例展示", href: "/cases" },
  { label: "新闻动态", href: "/news" },
  { label: "资料中心", href: "/resources" },
  { label: "效果查看", href: "/playground" },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.toggle("overflow-hidden", isMobileOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileOpen]);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.xPaddings} py-5 relative z-50 border-b border-x-cyan-300`}
    >
      {/* <div className="pointer-events-none absolute inset-0 w-[50%] gradient-01" /> */}
      <div
        className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}
      >
        <Link
          href="/"
          className="font-extrabold text-[24px] leading-[30px] text-foreground"
        >
          COSMORIGIN
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70 transition hover:text-foreground hover:border-b"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full border border-black/20 px-5 py-2 text-sm font-semibold text-black transition hover:border-black/50 dark:border-white/40 dark:text-white dark:hover:border-white md:inline-flex"
          >
            联系专家
          </Link>
          <button
            type="button"
            aria-controls="mobile-nav"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen(true)}
            className="inline-flex items-center justify-center rounded-full border border-black/10 p-2 dark:border-white/20 lg:hidden"
          >
            <span className="sr-only">打开导航菜单</span>
            <div className=" w-3 h-3 flex items-center justify-center">···</div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            key="mobile-nav"
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="footer-gradient z-30 -right-1/2 bottom-0"></div>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="relative flex h-full w-[100%] flex-col gap-6 bg-background px-6 pb-12 pt-10 text-foreground shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setIsMobileOpen(false)}
                  className="text-lg font-bold tracking-[0.3em]"
                >
                  COSMORIGIN
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  className="rounded-full border border-black/20 p-2 text-black dark:border-white/30 dark:text-white"
                >
                  <span className="sr-only">关闭导航菜单</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    aria-hidden
                  >
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-base font-semibold uppercase tracking-[0.25em] text-foreground/80 transition hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="text-base font-semibold uppercase tracking-[0.25em] text-foreground/80 transition hover:text-foreground"
                >
                  联系专家
                </Link>
              </nav>
              <div className="space-y-5 border-t border-black/10 pt-6 dark:border-white/20">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
                    主题模式
                  </p>
                  <ThemeToggle />
                </div>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
                    联系我们
                  </p>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileOpen(false)}
                    className="inline-flex items-center justify-center rounded-full border border-foreground/40 px-5 py-2 text-sm font-semibold text-foreground transition hover:border-foreground"
                  >
                    预约产品顾问
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
