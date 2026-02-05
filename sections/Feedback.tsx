import styles from '@/styles';

import Image from 'next/image';

const Feedback = (): JSX.Element => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="section-title text-center">
        <h3>客户评价</h3>
        <p>TESTIMONIALS</p>
      </div>

      <div className="flex lg:flex-row flex-col gap-6">
      <div className="panel hover-card flex-1 lg:max-w-[370px] flex justify-end lg:justify-center flex-col sm:p-8 p-4">
        <div className="relative z-10">
          <a
            href="https://www.tiantian.group"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative z-10"
          >
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-foreground cursor-pointer">
              田甜
            </h4>
          </a>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-muted-foreground">宇元新材首席科学家</p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-foreground">
          "我们专注于发光材料的深度研发，通过精准的配方设计和严格的质量控制，为客户提供稳定可靠的发光解决方案。每一款产品都经过严格测试，确保在各种应用场景下都能展现出色的发光性能。"
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center relative">
        <div className="panel hover-card w-full lg:h-[610px] h-auto min-h-[210px] relative overflow-hidden">
          <Image
            src="/宇元新材发光材料制成的3D打印辅材.jpg"
            alt="发光材料样品"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      </div>
    </div>
  </section>
);

export default Feedback;
