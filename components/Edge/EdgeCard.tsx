import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

export type Card = {
    id: number,
    caption: string,
    icon: StaticImageData,
    arrow: StaticImageData,
}

interface IProps {
    card: Card
    className?: string
}

const EdgeCard: FC<IProps> = ({ card, className }) => {
    const { caption, icon, arrow, id } = card

    const isLeft = id === 1 || id === 2;
    const isRight = id === 3 || id === 4;
    const isUp = id === 5;

    return (
        <div className={cn("border border-blue-27 bg-blue/15 xl:h-[258px] h-[120px] xl:w-[282px] w-full relative rounded-3xl group transition-all duration-300 hover:shadow-2xl flex shadow-blue xl:flex-col flex-row justify-center items-center xl:gap-5 gap-3.5", className)}>
            <div className="xl:hidden flex justify-center items-center rounded-full w-[46px] h-[46px] border border-blue-27 bg-white absolute top-1 left-1">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 10.3396H10.7758V18H7.26457V10.3396H0V7.35849H7.26457V0H10.7758V7.35849H18V10.3396Z" fill="#015FA7" />
                </svg>
            </div>

            <div className="xl:w-[130px] w-[100px] xl:h-[130px] h-[100px] flex justify-center items-center">
                <Image src={icon} alt="Иконка" width={130} height={130} className="w-full h-full object-contain group-hover:scale-95" />
            </div>

            <p dangerouslySetInnerHTML={{ __html: caption }} className="xl:max-w-[241px] max-w-40 w-full font-semibold xl:text-xl text-lg xl:leading-[26px] leading-[23.4px] text-center" />

            <Image src={arrow} className={cn("w-auto h-auto absolute xl:flex hidden", isLeft && "top-1/2 -translate-y-1/2 right-0 translate-x-full", isRight && "top-1/2 -translate-y-1/2 left-0 group-hover:drop-shadow-2xl -translate-x-full", isUp && "left-1/2 -translate-x-1/2 top-0 -translate-y-full")} alt="Стрелка" />
        </div>
    )
}
export default EdgeCard