import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

import styles from '@/styles';

interface RadiationShieldingSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  disclaimer: string;
  ctaLabel: string;
  ctaHref: string;
}

const RadiationShieldingSection = ({
  eyebrow,
  title,
  description,
  points,
  disclaimer,
  ctaLabel,
  ctaHref,
}: RadiationShieldingSectionProps) => (
  <section className="radiation-shielding-section px-6">
    <div className={`${styles.innerWidth} radiation-shielding-card mx-auto`}>
      <Image
        src="/radiation-shielding-lightweight-apron.jpg"
        alt="轻量化辐射屏蔽复合材料医疗防护服应用示意"
        fill
        className="radiation-shielding-image object-cover"
        sizes="(max-width: 1280px) calc(100vw - 48px), 1200px"
        quality={72}
      />
      <div className="radiation-shielding-scrim" aria-hidden="true" />
      <div className="radiation-shielding-content">
        <p className="radiation-shielding-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="radiation-shielding-description">{description}</p>
        <ul>
          {points.map((point) => (
            <li key={point}>
              <ShieldCheck aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="radiation-shielding-disclaimer">{disclaimer}</p>
        <Link href={ctaHref} className="radiation-shielding-cta">
          {ctaLabel}
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);

export default RadiationShieldingSection;
