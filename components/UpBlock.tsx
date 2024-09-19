"use client";

import Image from "next/image";
import Container from "./Container";
import { useModalStore } from "@/store/modalStore";

const UpBlock = () => {
  const { setIsOpen } = useModalStore();

  return (
    <section className="-mt-20 xl:h-[924px] h-[844px] relative flex items-center">
      <Image
        src={"/upBlock.webp"}
        alt="Задний фон"
        width={1920}
        height={924}
        className="absolute w-full h-full object-cover xl:block hidden"
      />

      <Image
        src={"/upBlockMobile.webp"}
        alt="Задний фон"
        width={360}
        height={844}
        className="absolute w-full h-full object-cover xl:hidden block"
      />

      <Container>
        <div className="relative z-[1] xl:max-w-[826px] w-full xl:space-y-[73px] space-y-[30px]">
          <h1 className="xl:text-[54px] text-[32px] uppercase xl:leading-[70.2px] leading-[41.6px] font-semibold">
            качественная
            <br />и экологически безопасная мойка посуды
            <br />
            при любых загрязнениях
          </h1>

          <button onClick={setIsOpen} className="btnMain">Оставить заявку</button>
        </div>
      </Container>
    </section>
  );
};
export default UpBlock;
