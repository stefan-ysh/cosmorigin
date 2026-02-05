interface InsightCardProps {
  imgUrl: string;
  title: string;
  subtitle: string;
}

import Image from 'next/image';

const InsightCard = ({ imgUrl, title, subtitle }: InsightCardProps) => (
  <div className="panel hover-card flex md:flex-row flex-col gap-4 p-4">
    <div className="md:w-[270px] w-full h-[250px] relative">
      <Image
        src={imgUrl}
        alt={title}
        fill
        className="rounded-[32px] object-contain"
        sizes="(max-width: 768px) 100vw, 270px"
      />
    </div>
    <div className="w-full flex justify-between items-center flex-1">
      <div className="flex-1 md:ml-[62px] flex flex-col ">
        <h4 className="font-normal lg:text-[36px] text-[24px] text-foreground">{title}</h4>
        <p className="mt-[12px] font-normal lg:text-[18px] text-[14px] text-muted-foreground">{subtitle}</p>
      </div>

      {/* <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <img src="arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain" />
      </div> */}
    </div>
  </div>
);

export default InsightCard;
