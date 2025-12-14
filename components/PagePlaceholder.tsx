import Link from 'next/link';

interface PlaceholderItem {
  title: string;
  description: string;
  status?: string;
}

interface PagePlaceholderProps {
  eyebrow?: string;
  title: string;
  description: string;
  items?: PlaceholderItem[];
  cta?: {
    label: string;
    href: string;
  };
}

const badgeClassName = (status?: string): string => {
  if (!status) {
    return 'bg-white/5 text-white/70';
  }

  if (status.includes('上线') || status.includes('Ready')) {
    return 'bg-emerald-500/10 text-emerald-200';
  }

  if (status.includes('规划') || status.includes('Roadmap')) {
    return 'bg-amber-500/10 text-amber-200';
  }

  return 'bg-white/5 text-white/70';
};

const PagePlaceholder = ({ eyebrow, title, description, items, cta }: PagePlaceholderProps): JSX.Element => (
  <section className="bg-primary-black text-white px-6 py-20 sm:py-28">
    <div className="mx-auto max-w-5xl">
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">{eyebrow}</p>
      )}
      <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 text-lg text-white/70">
        {description}
      </p>

      {items && items.length > 0 && (
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${badgeClassName(item.status)}`}>
                {item.status ?? '开发中'}
              </span>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-white/70">{item.description}</p>
            </article>
          ))}
        </div>
      )}

      {cta && (
        <div className="mt-12">
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
          >
            {cta.label}
          </Link>
        </div>
      )}
    </div>
  </section>
);

export default PagePlaceholder;
