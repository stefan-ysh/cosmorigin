import styles from '@/styles';

const About = (): JSX.Element => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <div className="section-title text-center">
        <h3>关于宇元新材</h3>
        <p>ABOUT US</p>
      </div>

      <p className="mt-[8px] font-normal sm:text-[20px] text-[16px] text-center text-muted-foreground leading-relaxed">
        <span className="font-extrabold">宇元新材 </span>
        始终秉持着创新、品质与服务的核心价值观，专注于新型柔性发光材料的研发与生产。我们提供
        <span className="font-extrabold">发光油漆、发光纤维丝、发光膜</span>
        等核心产品，致力于让柔性发光材料融入生活的关键场景。我们深耕
        <span className="font-extrabold">汽车、机器人、无人机及快消DIY</span>
        四大核心领域，通过技术创新与品质打磨，携手客户
        <span className="font-extrabold">重新定义发光材料的边界</span>
        。
      </p>


      <img
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </div>
  </section>
);

export default About;
