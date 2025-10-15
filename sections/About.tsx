'use client';

import { motion } from 'framer-motion';
import { TypingText } from '@/components/index';
import styles from '@/styles';
import { fadeIn, staggerContainer } from '@/utils/motion';

const About = (): JSX.Element => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| 关于宇元新材" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold">宇元新材</span>
        扎根于发光材料与光电功能涂层领域，从前沿配方设计、晶体结构调控到量产工艺开发提供一站式解决方案。我们通过
        <span className="font-extrabold">高稳定性稀土长余辉体系</span>
        、环保配方及智能化质量追溯平台，帮助照明、显示、安防及新消费品牌快速落地下一代发光应用。携手我们，让材料科学真正
        <span className="font-extrabold">照亮未来产业</span>
        。
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
