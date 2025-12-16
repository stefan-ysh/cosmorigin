"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";
import styles from "@/styles";
import { navVariants } from "@/utils/motion";

const navLinks = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "产品矩阵", href: "/products" },
  { label: "解决方案", href: "/solutions" },
  { label: "光效体验", href: "/playground" },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.toggle("overflow-hidden", isMobileOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileOpen]);

  const mobileMenu = (
    <AnimatePresence>
      {isMobileOpen && (
        <motion.div
          key="mobile-nav"
          id="mobile-nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[90] bg-background/85 backdrop-blur-xl lg:hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-400/15 via-transparent to-cyan-500/15" />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="relative flex h-full w-full flex-col gap-6 bg-background px-6 pb-5 pt-5 text-foreground shadow-2xl"
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
                className="rounded-full p-2 text-foreground"
              >
                <span className="sr-only">关闭导航菜单</span>
                <X className="w-5 h-5" />
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
            </nav>
            <div className="flex gap-4 border-t border-foreground/10 pt-6 dark:border-white/20 justify-between">
              <ThemeToggle />
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold tracking-[0.3em] text-foreground"
              >
                联系我们
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.xPaddings} py-5 sticky top-0 z-[80] backdrop-blur-xl bg-background/70 border-b border-border/40 dark:bg-background/60`}
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
              className="hidden rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition hover:border-foreground/60 md:inline-flex"
            >
              联系我们
            </Link>
            <button
              type="button"
              aria-controls="mobile-nav"
              aria-expanded={isMobileOpen}
              onClick={() => setIsMobileOpen(true)}
              className="inline-flex items-center justify-center rounded-full lg:hidden"
            >
              <span className="sr-only">打开导航菜单</span>
              <Menu className="w-5 h-5 text-foreground" />
              {/* <div className=" w-3 h-3 flex items-center justify-center">···</div> */}
            </button>
          </div>
        </div>
      </motion.nav>
      {isMounted && typeof document !== "undefined"
        ? createPortal(mobileMenu, document.body)
        : null}
    </>
  );
};

export default Navbar;
