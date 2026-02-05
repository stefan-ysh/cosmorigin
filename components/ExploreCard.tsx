import Image from 'next/image';

interface ExploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  alt: string;
}

const ExploreCard = ({ id, imgUrl, title, alt }: ExploreCardProps) => (
  <div className="panel hover-card relative flex-1 min-w-[170px] h-[520px] flex items-center justify-center">
    <Image
      src={imgUrl}
      alt={alt}
      title={title}
      fill
      className="absolute w-full h-full object-cover rounded-[24px]"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />

    <div className="absolute bottom-0 left-0 right-0 bg-[#1f2a37]/80 text-white px-4 py-3">
      <h3 className="font-semibold sm:text-[20px] text-[16px]">{title}</h3>
    </div>
  </div>
);

export default ExploreCard;
