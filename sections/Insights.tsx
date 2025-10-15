'use client';

import { motion } from 'framer-motion';

import styles from '@/styles';
import { insights } from '@/constants';
import { InsightCard, TitleText, TypingText } from '@/components/index';
import { staggerContainer } from '@/utils/motion';

const Insights = (): JSX.Element => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| 行业洞察" textStyles="text-center" />
      <TitleText title="发光材料趋势洞察" textStyles="text-center" />

      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={`Insight-${index + 1}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
