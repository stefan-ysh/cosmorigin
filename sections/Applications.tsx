import Image from 'next/image';

import styles from '@/styles';

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

const Applications = () => (
  <section className={`${styles.paddings} relative`}>
    <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className="section-title text-center">
        <h3>全球应用</h3>
        <p>APPLICATIONS</p>
      </div>

      <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {applications.map((app) => (
          <div key={app.title} className="relative">
            <div className="panel hover-card relative h-full p-8 overflow-hidden">
              <div className="text-5xl mb-4">{app.icon}</div>

              <h3 className="text-2xl font-bold text-primary mb-2">{app.title}</h3>

              <p className="text-muted-foreground">{app.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-[100px] h-[500px] rounded-2xl overflow-hidden border border-border/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
        <Image
          src="/map.png"
          alt="全球应用地图"
          fill
          className="object-cover opacity-30"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />

        <div className="absolute inset-0 bg-background/70" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-foreground">100+</div>
              <div className="text-muted-foreground mt-2">应用案例</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground">20+</div>
              <div className="text-muted-foreground mt-2">行业领域</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Applications;
