import styles from '@/styles';
import { newFeatures } from '@/constants';
import { NewFeatures } from '@/components/index';

import Image from 'next/image';

const WhatsNew = (): JSX.Element => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
      <div className="flex-[0.95] flex justify-center flex-col">
        <div className="section-title text-left">
          <h3>最新动态</h3>
          <p>WHAT'S NEW</p>
        </div>
        <p className="text-sm text-muted-foreground mb-6">宇元新材的最新进展</p>
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </div>

      <div className={`flex-1 ${styles.flexCenter}`}>
        <div className="w-[90%] h-[90%] relative aspect-square">
          <Image
            src="/宇元新材发光材料制成的圣诞树.png"
            alt="最新动态图示"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  </section>
);

export default WhatsNew;
