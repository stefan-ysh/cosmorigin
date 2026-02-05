import styles from '@/styles';
import { insights } from '@/constants';
import { InsightCard } from '@/components/index';

const Insights = (): JSX.Element => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className="section-title text-center">
        <h3>行业洞察</h3>
        <p>INSIGHTS</p>
      </div>
      <p className="text-center text-sm text-muted-foreground">发光材料趋势洞察</p>

      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={`Insight-${index + 1}`}
            {...insight}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Insights;
