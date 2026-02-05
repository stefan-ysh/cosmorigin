import Image from 'next/image';

import styles from '@/styles';

const GlobalNetwork = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className="section-title text-center">
        <h3>全球交付网络</h3>
        <p>GLOBAL NETWORK</p>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        我们的发光材料解决方案服务全球创新伙伴
      </p>

      <div className="panel hover-card relative mt-[69px] flex w-full h-[550px] overflow-hidden">
        <Image src="/map.png" alt="map" fill className="object-cover" sizes="(max-width: 1280px) 100vw, 1280px" />

        <div className="absolute top-[32%] left-[62%] w-[88px] p-[6px] rounded-full bg-[#5d6680] flex flex-col items-center">
          <div className="w-[70px] h-[70px] relative">
            <Image src="/people-02.png" alt="扬州研发中心" fill className="object-cover" />
          </div>
          <p className="mt-[2px] text-[10px] text-white">扬州研发中心</p>
        </div>

        <div className="absolute sm:top-10 bottom-40 left-20 w-[88px] p-[6px] rounded-full bg-[#5d6680] flex flex-col items-center">
          <div className="w-[70px] h-[70px] relative">
            <Image src="/people-03.png" alt="上海销售团队" fill className="object-cover" />
          </div>
          <p className="mt-[2px] text-[10px] text-white">上海销售团队</p>
        </div>
      </div>
    </div>
  </section>
);

export default GlobalNetwork;
