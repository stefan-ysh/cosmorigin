import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Grid3x3, Zap, Blend } from "lucide-react";

interface NewFeaturesProps {
  imgUrl: string;
  title: string;
  subtitle: string;
}

const NewFeatures = ({ imgUrl, title, subtitle }: NewFeaturesProps) => (
  <Card className="flex-1 flex flex-col sm:max-w-[260px] min-w-[210px] border border-border bg-card shadow-sm rounded-lg p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
    <CardContent className="flex justify-center items-center p-0">
      <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[hsl(var(--surface-soft))] border border-border/60">
        {imgUrl === 'first' ? <Zap /> : imgUrl === 'multiple' ? <Blend /> : <Grid3x3 />}
      </div>
    </CardContent>
    <h1 className="mt-[18px] font-bold text-[20px] leading-[28px] text-foreground">
      {title}
    </h1>
    <p className="flex-1 mt-[12px] font-normal text-[16px] leading-[28px] text-muted-foreground">
      {subtitle}
    </p>
  </Card>
);

export default NewFeatures;
