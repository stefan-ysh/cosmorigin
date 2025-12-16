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
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| 关于宇元新材" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold">宇元新材 </span>
        始终秉持着创新、品质与服务的核心价值观，专注于新型柔性发光材料的研发与生产。我们提供
        <span className="font-extrabold">发光油漆、发光纤维丝、发光膜</span>
        等核心产品，致力于让柔性发光材料融入生活的关键场景。我们深耕
        <span className="font-extrabold">汽车、机器人、无人机及快消DIY</span>
        四大核心领域，通过技术创新与品质打磨，携手客户
        <span className="font-extrabold">重新定义发光材料的边界</span>
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
