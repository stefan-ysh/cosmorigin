'use client';

import { motion } from 'framer-motion';
import styles from '@/styles';
import { fadeIn, staggerContainer, zoomIn } from '@/utils/motion';

import Image from 'next/image';

const Feedback = (): JSX.Element => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-1 lg:max-w-[370px] flex justify-end lg:justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div className="relative z-10">
          <a
            href="https://www.tiantian.group"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative z-10"
          >
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white hover:text-cyan-400 transition-colors cursor-pointer">
              田甜
            </h4>
          </a>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">宇元新材首席科学家</p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
          "我们专注于发光材料的深度研发，通过精准的配方设计和严格的质量控制，为客户提供稳定可靠的发光解决方案。每一款产品都经过严格测试，确保在各种应用场景下都能展现出色的发光性能。"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.3, 1)}
        className="flex-1 flex items-center justify-center relative"
      >
        <div className="w-full lg:h-[610px] h-auto min-h-[210px] relative rounded-[40px] overflow-hidden">
          <Image
            src="/宇元新材发光材料制成的3D打印辅材.jpg"
            alt="发光材料样品"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <div className="md:w-[170px] w-[115px] md:h-[170px] h-[115px] relative">
            <Image
              src="/stamp.png"
              alt="stamp"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
