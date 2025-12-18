"use client";

import { useEffect, useState } from "react";
import { ArrowUpFromDot } from "lucide-react";
import styles from "@/styles";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`${styles.floatingFab} fixed bottom-10 right-6 z-50`}
      aria-label="返回顶部"
    >
      <ArrowUpFromDot className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;
