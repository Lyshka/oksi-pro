import Link from "next/link";
import Container from "./Container";
import { siteInfo } from "@/constants/siteInfo";
import Image from "next/image";
import { menu } from "@/constants/menu";
import Tel from "./Tel";

const Footer = () => {
  return (
    <footer className="py-[30px] bg-footer text-white">
      <Container className="flex flex-col xl:gap-1 gap-10 items-center">
        <div className="flex xl:justify-between xl:items-start xl:flex-row flex-col items-center xl:gap-0 gap-[30px] w-full">
          <div className="flex xl:flex-col flex-row xl:gap-2 gap-[52px] xl:items-start items-center">
            <Link
              href={"/"}
              className="flex justify-center items-center w-[109px] h-[65px] hover-opacity"
            >
              <Image
                src={siteInfo.logos.down}
                width={109}
                height={65}
                className="w-full h-full object-contain"
                alt="Логотип"
              />
            </Link>

            <span className="xl:text-base text-sm xl:leading-[20.8px] leading-[18.2px]">
              {siteInfo.name}<br className="xl:hidden block" /> © 2020 - {new Date().getFullYear()}
            </span>
          </div>

          <div className="xl:contents flex flex-col-reverse items-center gap-10">
            <nav>
              <ul className="flex items-center xl:gap-[60px] gap-6 xl:justify-start justify-center">
                {menu.map(({ id, name, url }) => (
                  <li key={id}>
                    <Link
                      className="xl:text-lg text-base xl:leading-[23.4px] leading-[20.8px] hover:text-azure-hover"
                      href={url}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Tel state="footer" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2.5 xl:text-base text-sm xl:leading-[20.8px] leading-[18.2px]">
          <Link
            className="hover:text-azure-hover"
            target="_blank"
            href={siteInfo.conf}
          >
            Политика обработки персональных данных
          </Link>

          <Link
            className="hover:text-azure-hover"
            target="_blank"
            href={"https://artcly.by/"}
          >
            Создание сайта: ArtCly.by
          </Link>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
