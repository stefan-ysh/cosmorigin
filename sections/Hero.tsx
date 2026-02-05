import styles from '@/styles';

import Image from 'next/image';

const Hero = (): JSX.Element => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <div className={`${styles.innerWidth2} mx-auto flex flex-col`}>
        <div className="relative w-full">
          <div className="w-full sm:h-[520px] h-[360px] rounded-[8px] z-10 relative overflow-hidden border border-border/60">
            <Image
              src="/cover.jpg"
              alt="高性能发光材料"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <p className="text-[12px] uppercase tracking-[0.3em] text-white/80">Cosmorigin</p>
              <h1 className="mt-4 font-bold lg:text-[56px] md:text-[48px] sm:text-[36px] text-[28px] leading-tight">
                宇元新材 点亮未来
              </h1>
              <p className="mt-4 max-w-2xl text-[16px] text-white/90">
                专注柔性发光材料研发与制造，提供稳定可靠的发光解决方案
              </p>
            </div>
          </div>

          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[60px] -mt-[40px] pr-[40px] relative z-10">
              <div className="sm:w-[120px] w-[90px] sm:h-[120px] h-[90px] relative">
                <Image
                  src="/stamp.png"
                  alt="stamp"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
