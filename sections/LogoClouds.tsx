import styles from '@/styles';
import { partnerLogos } from '@/constants';

const LogoClouds = () => {
  const row = partnerLogos;

  return (
    <section className="logo-clouds">
      <div className={`${styles.innerWidth} mx-auto text-center`}>
        <h3>信赖我们的合作伙伴</h3>
        <p>与行业客户、科研机构及供应链伙伴共同推动发光材料落地。</p>
      </div>

      <div className={`${styles.innerWidth} mx-auto logo-clouds-rows`}>
        <div className="logo-clouds-row">
          <div className="logo-clouds-track">
            {Array.from({ length: 4 }).map((_, groupIndex) => (
              <div key={`group-${groupIndex}`} className="logo-clouds-group" aria-hidden={groupIndex > 0}>
                {row.map((logo) => (
                  <div key={`${logo.name}-${groupIndex}`} className="logo-cloud">
                    {logo.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={logo.logo} alt={logo.name} />
                    ) : (
                      <span>{logo.name}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoClouds;
