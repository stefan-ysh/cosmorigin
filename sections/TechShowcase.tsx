import { ReactNode } from 'react';
import {
  BeakerIcon,
  BoltIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import styles from '@/styles';

interface TechFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

const techFeatures: TechFeature[] = [
  {
    icon: <SparklesIcon className="w-8 h-8" />,
    title: '稀土激活体系',
    description: '采用高纯度稀土元素激活，发光效率提升150%',
  },
  {
    icon: <BoltIcon className="w-8 h-8" />,
    title: '长效余辉',
    description: '余辉持续8小时以上，在黑暗中持续发光',
  },
  {
    icon: <BeakerIcon className="w-8 h-8" />,
    title: '纳米晶粒技术',
    description: '精密控制晶粒尺寸，确保发光均匀性',
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    title: '环保认证',
    description: '符合RoHS标准，无有害重金属',
  },
];

const TechShowcase = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden sm:p-16 xs:p-8 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
          <div className="section-title text-center">
            <h3>核心技术</h3>
            <p>CORE TECHNOLOGY</p>
          </div>
          <p className="text-center text-sm text-muted-foreground mb-10">
            通过稀土激活和纳米晶粒调控技术，实现高效、持久、环保的发光性能
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techFeatures.map((feature) => (
            <div key={feature.title} className="relative">
              <div className="panel hover-card relative h-full p-6 overflow-hidden">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-muted rounded-xl">
                  <div className="text-foreground">{feature.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative p-8 bg-card border border-border rounded-2xl overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-foreground">8小时+</div>
              <div className="text-muted-foreground">余辉持续时间</div>
              <div className="mt-4 h-2 bg-muted rounded-full" />
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-foreground">150%</div>
              <div className="text-muted-foreground">发光效率提升</div>
              <div className="mt-4 h-2 bg-muted rounded-full" />
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-foreground">100%</div>
              <div className="text-muted-foreground">环保标准达标</div>
              <div className="mt-4 h-2 bg-muted rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
