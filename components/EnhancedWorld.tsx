'use client';

import { motion } from 'framer-motion';
import styles from '@/styles';
import { TitleText, TypingText } from '@/components/index';
import { staggerContainer, fadeIn } from '@/utils/motion';

const applications = [
  {
    title: '应急照明',
    description: '安全标识、疏散指引',
    icon: '🚨',
    color: 'from-red-500 to-orange-500',
  },
  {
    title: '智能显示',
    description: '仪表盘、户外广告',
    icon: '📱',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: '装饰照明',
    description: '建筑装饰、艺术品',
    icon: '🎨',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: '安防监控',
    description: '夜视标识、路径引导',
    icon: '🛡️',
    color: 'from-green-500 to-emerald-500',
  },
];

const EnhancedWorld = () => (
  <section className={`${styles.paddings} relative`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| 全球应用" textStyles="text-center" />
      <TitleText
        title={
          <>
            赋能
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {' '}
              多场景应用
            </span>
          </>
        }
        textStyles="text-center"
      />

      {/* 应用场景网格 */}
      <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {applications.map((app, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 'spring', index * 0.2, 1)}
            className="group relative"
          >
            <div className="relative h-full p-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl overflow-hidden transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]">
              {/* 图标 */}
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {app.icon}
              </div>

              {/* 标题 */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {app.title}
              </h3>

              {/* 描述 */}
              <p className="text-gray-400">{app.description}</p>

              {/* 装饰性渐变 */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${app.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* 底部装饰线 */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${app.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* 全球地图背景 */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.8, 1)}
        className="relative mt-[100px] h-[500px] rounded-3xl overflow-hidden"
      >
        <img
          src="/map.png"
          alt="全球应用地图"
          className="w-full h-full object-cover opacity-30"
        />
        
        {/* 覆盖层 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* 统计数据 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                50+
              </div>
              <div className="text-gray-400 mt-2">合作客户</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                100+
              </div>
              <div className="text-gray-400 mt-2">应用案例</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                20+
              </div>
              <div className="text-gray-400 mt-2">行业领域</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>

    {/* 背景装饰 */}
    <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px] -z-10" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] -z-10" />
  </section>
);

export default EnhancedWorld;
