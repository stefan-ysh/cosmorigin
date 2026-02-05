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
    'font-bold lg:text-[64px] md:text-[56px] sm:text-[44px] text-[32px] lg:leading-[78px] md:leading-[68px] sm:leading-[54px] leading-[40px] text-foreground',
  heroDText:
    'md:w-[212px] sm:w-[80px] w-[60px] md:h-[90px] sm:h-[48px] h-[38px] md:border-[18px] sm:border-[8px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]',
  floatingFab:
    'flex h-14 w-14 items-center justify-center rounded-full border border-border/60 bg-background text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/40',
} as const;

export default styles;
