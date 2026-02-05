import styles from '@/styles';
import { StartSteps } from '@/components/index';

import { startingFeatures } from '@/constants';

import Image from 'next/image';

const GetStarted = (): JSX.Element => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
      <div className={`${styles.flexCenter} flex-1`}>
        <div className="w-[90%] h-[90%] relative aspect-square">
          <Image
            src="/宇元新材发光材料母粒.png"
            alt="联合研发流程示意"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="flex-[0.75] flex justify-center flex-col">
        <div className="section-title text-left">
          <h3>合作流程</h3>
          <p>PROCESS</p>
        </div>
        <p className="text-sm text-muted-foreground mb-6">三步启动联合研发</p>
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={index + 1}
              text={feature}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default GetStarted;
