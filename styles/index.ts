const styles = {
  innerWidth: '2xl:max-w-[1280px] w-full',
  innerWidth2: '2xl:max-w-[2200px] w-full',
  interWidth: 'lg:w-[80%] w-[100%]',

  paddings: 'sm:p-16 xs:p-8 px-6 py-12',
  yPaddings: 'sm:py-16 xs:py-8 py-12',
  xPaddings: 'sm:px-16 px-6',
  topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
  bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-start items-start',
  flexEnd: 'flex justify-end',
  navPadding: 'pt-[98px]',

  heroHeading:
    'font-bold lg:text-[114px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white',
  heroDText:
    'md:w-[212px] sm:w-[80px] w-[60px] md:h-[90px] sm:h-[48px] h-[38px] md:border-[18px] sm:border-[8px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]',
  floatingFab:
    'flex h-14 w-14 items-center justify-center rounded-full border border-border/60 bg-gradient-to-br from-background/85 via-background/60 to-primary/20 text-foreground shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_55px_rgba(0,0,0,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/40 dark:border-white/20 dark:from-white/10 dark:via-white/5 dark:to-primary/30',
} as const;

export default styles;
