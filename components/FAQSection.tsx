import type { JSX } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  description?: string;
  items: FAQItem[];
}

const FAQSection = ({ title, description, items }: FAQSectionProps): JSX.Element => (
  <section className="px-6 pb-20">
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
        {description && <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{description}</p>}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.question} className="panel p-5">
            <h3 className="text-base font-semibold text-foreground">{item.question}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.answer}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export const buildFAQSchema = (items: FAQItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export default FAQSection;
