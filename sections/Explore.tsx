'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import styles from '@/styles';
import { TypingText, ExploreCard, TitleText } from '@/components/index';
import { staggerContainer } from '@/utils/motion';

import { exploreWorlds } from '@/constants';

const Explore = (): JSX.Element => {
  const [active, setActive] = useState<string>('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| 核心产品平台" textStyles="text-center" />
        <TitleText title={<>探索适配您场景的<br className="md:block hidden " />发光材料方案</>} textStyles="text-center" />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
