import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Grid3x3, Zap, Blend } from "lucide-react";

interface NewFeaturesProps {
  imgUrl: string;
  title: string;
  subtitle: string;
}

const NewFeatures = ({ imgUrl, title, subtitle }: NewFeaturesProps) => (
  <Card className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px] border-none bg-transparent shadow-none">
    <CardContent className="flex justify-center items-center p-0">
      <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-card">
        {imgUrl === 'first' ? <Zap /> : imgUrl === 'multiple' ? <Blend /> : <Grid3x3 />}
      </div>
    </CardContent>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-foreground">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] leading-[32px] text-muted-foreground">
      {subtitle}
    </p>
  </Card>
);

export default NewFeatures;
