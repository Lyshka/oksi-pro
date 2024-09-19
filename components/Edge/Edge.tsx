import { edges } from "@/constants/edges";
import Title from "../Title";
import EdgeCard from "./EdgeCard";
import Image from "next/image";

const Edge = () => {
  return (
    <section className="flex flex-col xl:gap-[50px] gap-5 items-center">
      <Title text="Оксипро - Одна из первых белорусских компаний, выпускающая  сертифицированные таблетки для посудомоечных машин" className="text-center xl:max-w-[1070px]" />

      <div className="flex flex-col items-center xl:gap-0 gap-5 w-full relative">
        <div className="xl:absolute xl:w-[524px] xl:h-[380px] left-1/2 xl:-translate-x-1/2 top-24">
          <Image className="w-full h-full object-contain" src={"/edge.webp"} alt="таблетки для посудомоечных машин" width={524} height={380} />
        </div>

        <div className="flex xl:justify-between xl:flex-row flex-col xl:gap-0 gap-5 w-full">
          <div className="flex flex-col xl:gap-[104px] gap-5">
            <EdgeCard card={edges[0]} />
            <EdgeCard card={edges[1]} />
          </div>

          <div className="flex flex-col xl:gap-[104px] gap-5">
            <EdgeCard card={edges[2]} />
            <EdgeCard card={edges[3]} />
          </div>
        </div>

        <EdgeCard className="xl:-top-14" card={edges[4]} />
      </div>
    </section>
  );
};
export default Edge;
