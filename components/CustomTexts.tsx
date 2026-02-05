import { ReactNode } from 'react';

interface TypingTextProps {
  title: string;
  textStyles?: string;
}

interface TitleTextProps {
  title: ReactNode;
  textStyles?: string;
}

export const TypingText = ({ title, textStyles }: TypingTextProps) => (
  <p className={`font-normal text-[12px] tracking-[0.3em] uppercase text-muted-foreground ${textStyles ?? ''}`.trim()}>
    {title}
  </p>
);

export const TitleText = ({ title, textStyles }: TitleTextProps) => (
  <h2 className={`mt-[8px] font-bold md:text-[48px] text-[32px] text-foreground ${textStyles ?? ''}`.trim()}>
    {title}
  </h2>
);
