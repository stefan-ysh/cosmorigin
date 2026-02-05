"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import styles from "@/styles";

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
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    return () => undefined;
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.toggle("overflow-hidden", isMobileOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileOpen]);

  const mobileMenu = isMobileOpen ? (
    <div
      key="mobile-nav"
      id="mobile-nav"
      className="fixed inset-0 z-[90] bg-[#474747] lg:hidden"
    >
      <div className="relative flex h-full w-full flex-col gap-6 bg-[#474747] px-6 pb-5 pt-5 text-white">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setIsMobileOpen(false)}
            className="text-lg font-bold"
          >
              <Image
                src="/light-logo.png"
                alt="扬州宇元新材有限公司 cosmorigin Logo"
                width={150}
                height={100}
              />
            </Link>
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="rounded-md border border-white/20 p-2 text-white"
          >
            <span className="sr-only">关闭导航菜单</span>
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href && link.href !== "/";
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`text-base font-semibold text-white/90 ${isActive ? 'text-white' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex gap-4 border-t border-white/20 pt-6 justify-between">
          <Link
            href="/contact"
            onClick={() => setIsMobileOpen(false)}
            className="site-contact-button inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white"
          >
            <span className="contact-button-icon" aria-hidden="true">☎</span>
            联系我们
          </Link>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <header className="site-header  top-0 z-[80]">
        <nav className={`${styles.xPaddings} site-nav py-3`}>
          <div
            className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}
          >
            <Link
              href="/"
              className="font-extrabold text-[24px] leading-[30px] text-foreground"
            >
              <Image
                src="/light-logo.png"
                alt="扬州宇元新材有限公司 cosmorigin Logo"
                width={150}
                height={100}
              />
            </Link>

            <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
              {navLinks.map((link) => {
                const isActive = pathname === link.href && link.href !== "/";
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`site-nav-link text-[15px] ${isActive ? 'site-nav-link-active' : ''}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="site-contact-button hidden rounded-md border border-border bg-white px-5 py-2 text-sm font-semibold text-foreground md:inline-flex"
              >
                <span className="contact-button-icon" aria-hidden="true">☎</span>
                联系我们
              </Link>
              <button
                type="button"
                aria-controls="mobile-nav"
                aria-expanded={isMobileOpen}
                onClick={() => setIsMobileOpen(true)}
                className="inline-flex items-center justify-center rounded-md border border-border bg-white p-2 lg:hidden"
              >
                <span className="sr-only">打开导航菜单</span>
                <Menu className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </nav>
      </header>
      {isMounted && typeof document !== "undefined"
        ? createPortal(mobileMenu, document.body)
        : null}
    </>
  );
};

export default Navbar;
