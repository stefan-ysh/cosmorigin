'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = (): JSX.Element => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| 全球交付网络" textStyles="text-center" />
      <TitleText
        title={(
          <>
            我们的发光材料解决方案服务全球创新伙伴
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[69px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute top-[32%] left-[62%] w-[88px] p-[6px] rounded-full bg-[#5d6680] flex flex-col items-center">
          <img src="/people-02.png" alt="深圳工厂" className="w-[70px] h-[70px]" />
          <p className="mt-[2px] text-[10px] text-white">深圳工厂</p>
        </div>
        <div className="absolute sm:top-10 bottom-40 left-20 w-[88px] p-[6px] rounded-full bg-[#5d6680] flex flex-col items-center">
          <img src="/people-03.png" alt="上海材料实验室" className="w-[70px] h-[70px]" />
          <p className="mt-[2px] text-[10px] text-white">上海材料实验室</p>
        </div>
        <div className="hidden lg:flex absolute bottom-20 right-20 w-[88px] p-[6px] rounded-full bg-[#5d6680] flex-col items-center">
          <img src="/people-04.png" alt="慕尼黑客户中心" className="w-[70px] h-[70px]" />
          <p className="mt-[2px] text-[10px] text-white">慕尼黑客户中心</p>
        </div>

        <div className="hidden lg:flex absolute bottom-[20%] left-[15%] w-[88px] p-[6px] rounded-full bg-[#5d6680] flex-col items-center">
          <img src="/people-05.png" alt="硅谷应用团队" className="w-[70px] h-[70px]" />
          <p className="mt-[2px] text-[10px] text-white">硅谷应用团队</p>
        </div>
        <div className="absolute top-0 right-[22%] w-[88px] p-[6px] rounded-full bg-[#5d6680] flex flex-col items-center">
          <img src="/people-06.png" alt="东京技术支持" className="w-[70px] h-[70px]" />
          <p className="mt-[2px] text-[10px] text-white">东京技术支持</p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
