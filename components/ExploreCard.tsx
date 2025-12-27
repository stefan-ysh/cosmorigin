'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

interface ExploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  alt: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
}

const ExploreCard = ({ id, imgUrl, title, alt, index, active, handleClick }: ExploreCardProps) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-700 ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={alt}
      title={title}
      fill
      className="absolute w-full h-full object-cover rounded-[24px]"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />

    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-5 p-8 pb-0 justify-start w-full flex flex-row items-baseline gap-10">
        <h2 className="mt-[24px] font-semibold sm:text-[30px] text-[22px] text-slate-400">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
