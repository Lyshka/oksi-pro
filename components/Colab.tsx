import { colabs } from "@/constants/colab";
import Title from "./Title";
import Image from "next/image";

const Colab = () => {
  return (
    <section
      id="colab"
      className="xl:px-[100px] px-2.5 xl:py-[100px] py-[60px] colabBgGradientBlue xl:space-y-[50px] space-y-[30px] rounded-3xl scroll-mt-24"
    >
      <Title text="Приглашаем вас к сотрудничеству" className="text-white" />

      <ul className="grid xl:grid-cols-2 grid-cols-1 xl:gap-6 gap-[30px]">
        {colabs.map(({ desc, id, img, title }) => (
          <li key={id} className="space-y-2.5 group">
            <div className="w-full xl:h-[290px] overflow-hidden rounded-xl">
              <Image
                src={img}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110"
                width={486}
                height={290}
              />
            </div>

            <div className="space-y-2 text-white">
              <h4 className="font-semibold xl:text-4xl text-2xl xl:leading-[46.8px] leading-[32.5px] group-hover:text-black">
                {title}
              </h4>

              <p className="xl:text-lg text-base xl:leading-[23.4px] leading-[20.8px]">{desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Colab;
