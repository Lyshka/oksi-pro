import { products } from "@/constants/products";
import Title from "./Title";
import Image from "next/image";

const Product = () => {
  return (
    <main id="product" className="flex flex-col xl:gap-[50px] gap-[30px] items-center scroll-mt-24">
      <div className="text-center flex flex-col gap-5 items-center xl:max-w-[764px] w-full">
        <Title text="Выберите свой формат" />

        <p className="xl:text-lg text-base xl:leading-[23.4px] leading-[20.8px]">
          Высокоэффективное средство для мытья посуды в посудомоечных машинах.
          Эффективно удаляет жир и остатки пищи с поверхности посуды, как в
          горячей, так и в холодной воде. Гипоаллергенная формула безопасна для
          мытья овощей, фруктов и детской посуды
        </p>
      </div>

      <ul className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-6 md:gap-y-12 gap-y-[30px]">
        {products.map(({ desc, id, img, subDesc, title }) => (
          <li key={id} className="space-y-2.5 group">
            <div className="flex justify-center items-center xl:w-[282px] xl:h-[290px] border border-blue-27 hover:border-blue transition-all duration-300 rounded-xl p-4">
              <Image
                src={img}
                alt={title}
                width={282}
                height={290}
                className="object-contain h-full w-full group-hover:scale-95"
              />
            </div>

            <div className="space-y-2">
              <h2 className="group-hover:text-blue-27 xl:text-4xl text-2xl xl:leading-[46.8px] leading-[33.8px] font-semibold">
                {title}
              </h2>

              <p className="xl:text-xl text-lg xl:leading-[26px] leading-[23.4px] font-semibold">{desc}</p>

              {subDesc && <p className="xl:text-lg text-base xl:leading-[23.4px] leading-[20.8px]">{subDesc}</p>}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Product;
