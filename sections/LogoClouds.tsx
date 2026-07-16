import Image from 'next/image';

import styles from '@/styles';
import { partnerLogos } from '@/constants';

interface LogoCloudsProps {
  title?: string;
  description?: string;
}

const LogoClouds = ({
  title = '信赖我们的合作伙伴',
  description = '与行业客户、科研机构及供应链伙伴共同推动发光材料落地。',
}: LogoCloudsProps) => {
  const row = partnerLogos;

  return (
    <section className="logo-clouds">
      <div className={`${styles.innerWidth} mx-auto text-center`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className={`${styles.innerWidth} mx-auto logo-clouds-rows`}>
        <div className="logo-clouds-row">
          <div className="logo-clouds-track">
            {Array.from({ length: 4 }).map((_, groupIndex) => (
              <div key={`group-${groupIndex}`} className="logo-clouds-group" aria-hidden={groupIndex > 0}>
                {row.map((logo) => (
                  <div key={`${logo.name}-${groupIndex}`} className="logo-cloud">
                    {logo.logo ? (
                      <Image
                        src={logo.logo}
                        alt={groupIndex === 0 ? logo.name : ''}
                        width={120}
                        height={32}
                        loading="lazy"
                        quality={75}
                        sizes="120px"
                      />
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
