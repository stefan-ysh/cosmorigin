'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

interface InsightCardProps {
  index: number;
  imgUrl: string;
  title: string;
  subtitle: string;
}

import Image from 'next/image';

const InsightCard = ({ index, imgUrl, title, subtitle }: InsightCardProps) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <div className="md:w-[270px] w-full h-[250px] relative">
      <Image
        src={imgUrl}
        alt={title}
        fill
        className="rounded-[32px] object-contain"
        sizes="(max-width: 768px) 100vw, 270px"
      />
    </div>
    <div className="w-full flex justify-between items-center flex-1">
      <div className="flex-1 md:ml-[62px] flex flex-col ">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-foreground">{title}</h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">{subtitle}</p>
      </div>

      {/* <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <img src="arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain" />
      </div> */}
    </div>
  </motion.div>
);

export default InsightCard;
