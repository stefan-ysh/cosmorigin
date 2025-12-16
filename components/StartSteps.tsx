import { Badge } from "@/components/ui/badge";
import styles from "@/styles";

interface StartStepsProps {
  number: number;
  text: string;
}

const StartSteps = ({ number, text }: StartStepsProps) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <Badge className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] text-[20px] font-bold`}>
      0{number}
    </Badge>
    <p className="flex-1 ml-[30px] font-normal text-[18px] leading-[32px]">{text}</p>
  </div>
);

export default StartSteps;
