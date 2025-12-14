'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

import styles from '@/styles';
import { navVariants } from '@/utils/motion';

const navLinks = [
  { label: '首页', href: '/' },
  { label: '关于我们', href: '/about' },
  { label: '产品矩阵', href: '/products' },
  { label: '行业方案', href: '/solutions' },
  { label: '案例展示', href: '/cases' },
  { label: '资料中心', href: '/resources' },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.classList.toggle('overflow-hidden', isMobileOpen);
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobileOpen]);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.xPaddings} py-8 relative z-50`}
    >
      <div className="pointer-events-none absolute inset-0 w-[50%] gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}>
        <Link href="/" className="font-extrabold text-[24px] leading-[30px] text-white">
          COSMORIGIN
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-white md:inline-flex"
          >
            联系专家
          </Link>
          <button
            type="button"
            aria-controls="mobile-nav"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen(true)}
            className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 lg:hidden"
          >
            <span className="sr-only">打开导航菜单</span>
            <img src="/menu.svg" alt="导航菜单" className="h-[24px] w-[24px] object-contain" />
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
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="relative flex h-full w-3/5 flex-col gap-6 bg-[#0E0E10] px-6 pb-12 pt-10 shadow-2xl"
            >
            

              <nav className="flex flex-1 flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-base font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
