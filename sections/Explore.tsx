'use client';

import styles from '@/styles';
import { ExploreCard } from '@/components/index';

import { exploreWorlds } from '@/constants';

const Explore = (): JSX.Element => {
  return (
    <section className={`${styles.paddings}`} id="explore">
      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="section-title text-center">
          <h3>核心产品平台</h3>
          <p>PRODUCT PLATFORM</p>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          探索适配您场景的发光材料方案
        </p>

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world) => (
            <ExploreCard
              key={world.id}
              {...world}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
