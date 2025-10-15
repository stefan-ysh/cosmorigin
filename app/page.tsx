import { Footer, Navbar, TechShowcase, EnhancedWorld } from '@/components/index';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '@/sections';

const Page = (): JSX.Element => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <TechShowcase />
      <div className="gradient-03 z-0" />
      <EnhancedWorld />
    </div>

    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
