import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProps {
  text: string;
  className?: string;
}

const Title: FC<IProps> = ({ text, className }) => {
  return (
    <h3
      className={cn(
        "xl:text-[40px] text-[26px] xl:leading-[52px] leading-[33.8px] font-bold text-blue uppercase",
        className
      )}
    >
      {text}
    </h3>
  );
};
export default Title;
