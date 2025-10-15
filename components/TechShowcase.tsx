'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import {
  BeakerIcon,
  BoltIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import styles from '@/styles';
import { staggerContainer } from '@/utils/motion';
import { TypingText } from './CustomTexts';

interface TechFeature {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

const techFeatures: TechFeature[] = [
  {
    icon: <SparklesIcon className="w-8 h-8" />,
    title: '稀土激活体系',
    description: '采用高纯度稀土元素激活，发光效率提升150%',
    color: 'emerald',
  },
  {
    icon: <BoltIcon className="w-8 h-8" />,
    title: '长效余辉',
    description: '余辉持续8小时以上，在黑暗中持续发光',
    color: 'cyan',
  },
  {
    icon: <BeakerIcon className="w-8 h-8" />,
    title: '纳米晶粒技术',
    description: '精密控制晶粒尺寸，确保发光均匀性',
    color: 'blue',
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    title: '环保认证',
    description: '符合RoHS标准，无有害重金属',
    color: 'purple',
  },
];

const colorMap: {
  [key: string]: { from: string; to: string; shadow: string };
} = {
  emerald: {
    from: 'from-emerald-500',
    to: 'to-emerald-600',
    shadow: 'shadow-emerald-500/50',
  },
  cyan: {
    from: 'from-cyan-500',
    to: 'to-cyan-600',
    shadow: 'shadow-cyan-500/50',
  },
  blue: {
    from: 'from-blue-500',
    to: 'to-blue-600',
    shadow: 'shadow-blue-500/50',
  },
  purple: {
    from: 'from-purple-500',
    to: 'to-purple-600',
    shadow: 'shadow-purple-500/50',
  },
};

const TechShowcase = () => (
  <section className="relative w-full py-20 overflow-hidden sm:p-16 xs:p-8 px-6">
    {/* 背景装饰 */}
    <div className="absolute inset-0 " />
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

    <div className="relative z-10 max-w-7xl mx-auto">
      {/* 标题区域 */}
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| 核心技术" textStyles="text-center" />

        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-center mt-[8px]">
          领先的
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            {' '}
            发光技术
          </span>
        </h2>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          通过稀土激活和纳米晶粒调控技术，实现高效、持久、环保的发光性能
        </p>
      </motion.div>

      {/* 技术特性网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {techFeatures.map((feature, index) => {
          const colors = colorMap[feature.color];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-emerald-500/50">
                {/* 图标 */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br ${colors.from} ${colors.to} rounded-xl ${colors.shadow} shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-white">{feature.icon}</div>
                </motion.div>

                {/* 标题 */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                {/* 描述 */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* 悬停光效 */}
                <motion.div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${colors.from} ${colors.to} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 技术数据可视化 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-emerald-500/20 rounded-3xl overflow-hidden"
      >
        {/* 背景网格动画 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,255,136,0.3)_50%,transparent_100%)] animate-[shimmer_3s_ease-in-out_infinite]" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 性能参数 */}
          <div className="text-center">
            <motion.div
              className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              8小时+
            </motion.div>
            <div className="text-gray-400">余辉持续时间</div>
            <motion.div
              className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                initial={{ x: '-100%' }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 1 }}
              />
            </motion.div>
          </div>

          <div className="text-center">
            <motion.div
              className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring' }}
            >
              150%
            </motion.div>
            <div className="text-gray-400">发光效率提升</div>
            <motion.div
              className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                initial={{ x: '-100%' }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </motion.div>
          </div>

          <div className="text-center">
            <motion.div
              className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
            >
              100%
            </motion.div>
            <div className="text-gray-400">环保标准达标</div>
            <motion.div
              className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ x: '-100%' }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* 装饰性发光球 */}
    <motion.div
      className="absolute top-20 right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px]"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    <motion.div
      className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </section>
);

export default TechShowcase;
