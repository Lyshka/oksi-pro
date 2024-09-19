import Link from "next/link";
import Form from "./Form";
import Title from "./Title";
import { siteInfo } from "@/constants/siteInfo";
import Tel from "./Tel";

const Contact = () => {
  return (
    <section id="contact" className="flex xl:justify-between xl:gap-0 gap-[60px] xl:flex-row flex-col scroll-mt-24">
      <div className="xl:max-w-[308px] w-full xl:space-y-[50px] space-y-[30px]">
        <Title text="Контакты" className="xl:text-left text-center" />

        <ul className="contactList xl:space-y-6 space-y-5">
          <li className="itemList">
            <span>Телефоны</span>

            <Tel state="contact" />
          </li>

          <li className="itemList">
            <span>Электронная почта</span>

            <Link href={`mailto:${siteInfo.email}`}>{siteInfo.email}</Link>
          </li>

          <li className="itemList">
            <span>Адрес офиса</span>

            <address>{siteInfo.address}</address>
          </li>

          <li className="itemList">
            <span>Время работы</span>

            <p>{siteInfo.timeWork}</p>
          </li>
        </ul>
      </div>

      <div className="xl:max-w-[505px] xl:space-y-[50px] space-y-[30px]">
        <Title text="Отправить сообщение" className="xl:text-left text-center"/>

        <Form />
      </div>
    </section>
  );
};
export default Contact;
