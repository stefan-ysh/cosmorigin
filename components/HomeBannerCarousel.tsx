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
  intervalMs = 5000,
}: HomeBannerCarouselProps) => {
  const [{ activeIndex, previousIndex }, setSlideState] = useState({
    activeIndex: 0,
    previousIndex: null as number | null,
  });

  useEffect(() => {
    if (images.length <= 1) return () => undefined;
    const timer = setInterval(() => {
      setSlideState((current) => ({
        activeIndex: (current.activeIndex + 1) % images.length,
        previousIndex: current.activeIndex,
      }));
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  const nextIndex = images.length > 1 ? (activeIndex + 1) % images.length : null;
  const visibleIndexes = [previousIndex, activeIndex, nextIndex].filter(
    (index, position, indexes): index is number => (
      index !== null && indexes.indexOf(index) === position
    ),
  );

  return (
    <section id="swiper" className="home-banner">
      {visibleIndexes.map((index) => (
        <div
          key={images[index]}
          className={`home-banner-slide ${index === activeIndex ? 'is-active' : ''}`}
        >
          <Image
            src={images[index]}
            alt={index === activeIndex ? title : ''}
            fill
            className="object-cover"
            priority={index === 0}
            fetchPriority={index === 0 ? 'high' : 'low'}
            quality={72}
            sizes="100vw"
          />
        </div>
      ))}
      <div className="home-banner-overlay">
        <div className={`${styles.innerWidth} home-banner-text mx-auto text-center`}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default HomeBannerCarousel;
