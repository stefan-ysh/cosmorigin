'use client';

import { motion } from 'framer-motion';
import styles from '@/styles';
import { TitleText, TypingText } from '@/components/index';
import { staggerContainer, fadeIn } from '@/utils/motion';

import Image from 'next/image';

const World = (): JSX.Element => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| 全球交付网络" textStyles="text-center" />
      {/* <TitleText
        title={(
          <>
            我们的发光材料解决方案服务全球创新伙伴
          </>
        )}
        textStyles="text-center"
      /> */}
      <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-center mt-[8px]">
        我们的发光材料解决方案
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          {" "}
          服务全球创新伙伴
        </span>
      </h2>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[69px] flex w-full h-[550px]"
      >
        <Image src="/map.png" alt="map" fill className="object-cover" sizes="(max-width: 1280px) 100vw, 1280px" />

        <div className="absolute top-[32%] left-[62%] w-[88px] p-[6px] rounded-full bg-[#5d6680] flex flex-col items-center">
          <div className="w-[70px] h-[70px] relative">
            <Image src="/people-02.png" alt="扬州研发中心" fill className="object-cover" />
          </div>
          <p className="mt-[2px] text-[10px] text-white">扬州研发中心</p>
        </div>
        <div className="absolute sm:top-10 bottom-40 left-20 w-[88px] p-[6px] rounded-full bg-[#5d6680] flex flex-col items-center">
          <div className="w-[70px] h-[70px] relative">
            <Image src="/people-03.png" alt="上海销售团队" fill className="object-cover" />
          </div>
          <p className="mt-[2px] text-[10px] text-white">上海销售团队</p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
