import type { Metadata } from 'next';

import { SiteStructuredData } from '@/components/index';
import { About, Applications, Explore, Feedback, GetStarted, GlobalNetwork, Hero, Insights, TechShowcase, WhatsNew } from '@/sections';
import { absoluteUrl, buildOpenGraph, buildTwitter, defaultRobots } from '@/lib/seo';

const pagePath = '/';
const pageTitle = '宇元新材 | 柔性发光材料与原创解决方案';
const pageDescription =
  '宇元新材专注柔性发光材料研发，提供发光油漆、发光纤维丝、发光膜及行业解决方案，覆盖交通、农业、应急与文旅场景。';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['扬州宇元新材有限公司', '宇元新材', '发光材料与器件国家重点实验室', '柔性发光材料', '发光油漆', '发光纤维丝', '发光薄膜', '自发光解决方案'],
  alternates: {
    canonical: absoluteUrl(pagePath),
  },
  openGraph: buildOpenGraph(pageTitle, pageDescription, pagePath),
  twitter: buildTwitter(pageTitle, pageDescription),
  robots: defaultRobots,
};

const Page = () => (
  <section className="bg-primary-black overflow-hidden">
    <SiteStructuredData />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <TechShowcase />
      <div className="gradient-03 z-0" />
      <Applications />
    </div>

    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <GlobalNetwork />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
  </section>
);

export default Page;
