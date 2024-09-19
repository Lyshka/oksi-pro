"use client";

import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import { siteInfo } from "@/constants/siteInfo";
import { menu } from "@/constants/menu";
import Tel from "../Tel";
import { useState } from "react";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import TelMobileMenu from "./TelMobileMenu";
import { useModalStore } from "@/store/modalStore";

const Header = () => {
  const { setIsOpen } = useModalStore();

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isOpenTelMobileMenu, setIsOpenTelMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    if (isOpenMobileMenu) {
      setIsOpenMobileMenu(false);
    } else {
      setIsOpenTelMobileMenu(false);
      setIsOpenMobileMenu(true);
    }
  };

  const handleTelMobileMenu = () => {
    if (isOpenTelMobileMenu) {
      setIsOpenTelMobileMenu(false);
    } else {
      setIsOpenMobileMenu(false);
      setIsOpenTelMobileMenu(true);
    }
  };

  return (
    <>
      <header className="bg-white/80 h-20 z-[3] sticky top-0 backdrop-blur-md flex justify-center items-center">
        <Container className="flex justify-between items-center">
          <Link href={"/"} className="hover-opacity w-[109px] h-[65px]">
            <Image src={siteInfo.logos.up} alt="Логотип" width={109} height={65} className="w-full h-full object-contain" />
          </Link>

          <nav className="xl:block hidden">
            <ul className="flex items-center gap-[60px]">
              {menu.map(({ id, name, url }) => (
                <li key={id}>
                  <Link className="text-lg leading-[23.4px] hover:text-azure-hover" href={url}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="items-center gap-[30px] flex-shrink-0 xl:flex hidden">
            <Tel state="header" />

            <button onClick={setIsOpen} className="bg-white rounded-md border border-blue-03 w-[170px] h-10 flex justify-center items-center text-center font-semibold text-lg leading-[23.4px] hover:text-white hover:bg-blue-03">
              Заказать звонок
            </button>
          </div>

          <div className="xl:hidden flex gap-4 items-center">
            <button onClick={handleTelMobileMenu} id="handleMobileTelMenu" className={isOpenTelMobileMenu ? "active" : ""}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5397 9.59474C14.226 8.5484 14.0103 7.47515 13.8954 6.38887C13.7806 5.30586 12.8351 4.5 11.7462 4.5H6.69463C5.39517 4.5 4.39479 5.6225 4.50887 6.91611C5.66062 19.9539 16.0461 30.3386 29.0839 31.4911C30.3782 31.6052 31.5 30.6085 31.5 29.309V24.8044C31.5 23.1605 30.6941 22.2186 29.6111 22.1038C28.5249 21.9891 27.4516 21.7737 26.4053 21.4603C25.7849 21.2763 25.1263 21.2637 24.4993 21.4237C23.8723 21.5838 23.3003 21.9105 22.844 22.3693L20.6816 24.5316C16.782 22.419 13.581 19.2179 11.4684 15.3184L13.6307 13.156C14.0896 12.6998 14.4165 12.1278 14.5766 11.5008C14.7368 10.8738 14.7235 10.2152 14.5397 9.59474Z" fill="#0380C3" />
              </svg>
            </button>

            <button
              onClick={handleMobileMenu}
              id="handleMobileMenu"
              className={cn(
                "h-[30px] relative w-[30px] xl:hidden flex justify-center items-center",
                isOpenMobileMenu && "active"
              )}
            >
              <svg className="burgerIcon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9H33M3 18H33M3 27H33" stroke="#0380C3" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" />
              </svg>

              <svg className="closeIcon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 18L31 31M18 18L5 5M18 18L5 31M18 18L31 5" stroke="#0380C3" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={isOpenMobileMenu} handle={handleMobileMenu} />
      <TelMobileMenu isOpen={isOpenTelMobileMenu} />
    </>
  );
};
export default Header;
