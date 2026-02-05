'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from '@/styles';

interface HomeBannerCarouselProps {
  title: string;
  description: string;
  images: string[];
  intervalMs?: number;
}

const HomeBannerCarousel = ({
  title,
  description,
  images,
  intervalMs = 2000,
}: HomeBannerCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return () => undefined;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <section id="swiper" className="home-banner">
      {images.map((src, index) => (
        <div
          key={src}
          className={`home-banner-slide ${index === activeIndex ? 'is-active' : ''}`}
        >
          <Image src={src} alt={title} fill className="object-cover" priority={index === 0} sizes="100vw" />
        </div>
      ))}
      <div className="home-banner-overlay">
        <div className={`${styles.innerWidth} mx-auto text-center`}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default HomeBannerCarousel;
