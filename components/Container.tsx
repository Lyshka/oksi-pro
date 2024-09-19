import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<IProps> = ({ children, className }) => {
  return (
    <div
      className={cn("max-w-[1200px] w-full mx-auto xl:px-0 px-2.5", className)}
    >
      {children}
    </div>
  );
};
export default Container;
