"use client";

import { siteInfo } from "@/constants/siteInfo";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { sendTelegram } from "@/hooks/sendTelegram";
import { useModalStore } from "@/store/modalStore";

interface IForm {
  name: string;
  tel: string;
  comment: string
  conf: boolean;
}

const Form = () => {
  const { setClose } = useModalStore();
  const { register, handleSubmit, reset } = useForm<IForm>();

  const handleSubmitForm = handleSubmit(
    async (data) => {
      const { name, tel, comment } = data;

      const message = `
<b>Имя: </b> ${name}
<b>Телефон: </b> ${tel}
<b>Сообщение: </b> ${comment}`;

      const isOk = await sendTelegram(message);

      if (isOk) {
        reset();
        toast.success("С вами скоро свяжутся!");
        setClose();
      }
    },
    (errors) => {
      if (errors.name) {
        toast.error(errors.name.message);
        return;
      }
      if (errors.tel) {
        toast.error(errors.tel.message);
        return;
      }
      if (errors.comment) {
        toast.error(errors.comment.message);
        return;
      }
      if (errors.conf) {
        toast.error(errors.conf.message);
        return;
      }
    }
  );

  return (
    <form onSubmit={handleSubmitForm} className="xl:space-y-6 space-y-5 xl:max-w-[486px] w-full">
      <div className="space-y-3">
        <input {...register("name", {
          required: "Имя не заполнено",
          min: 2,
        })} type="text" placeholder="Имя*" />
        <input {...register("tel", {
          required: "Телефон не заполнен",
          min: 10,
        })} type="tel" placeholder="Телефон*" />
        <textarea {...register("comment", {
          required: "Сообщение не заполнено",
          min: 3,
        })} placeholder="Сообщение*"></textarea>
      </div>

      <label className="flex items-center gap-2.5 cursor-pointer">
        <div className="container-conf xl:w-4 w-5 xl:h-4 h-5 flex justify-center items-center flex-shrink-0 border relative border-gray bg-white">
          <input
            {...register("conf", {
              required: "Вы должны согласить с Политикой обработки персональных данных",
            })}
            className="w-full h-full flex-shrink-0 opacity-0 absolute cursor-pointer"
            type="checkbox"
          />

          <svg
            className="icon-checked transition-all duration-300 opacity-0"
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.92085 10.1163L12.5434 3.5L13.8493 4.80591L5.92075 12.7344L2 8.81369L3.31377 7.50918L5.92085 10.1163Z"
              fill="#1DCFC5"
            ></path>
          </svg>
        </div>

        <p className="xl:text-base text-sm xl:leading-[20.8px] leading-[18.2px] text-gray">
          Соглашаюсь с{" "}
          <Link target="_blank" href={siteInfo.conf} className="hover:text-azure-hover">
            Политикой обработки персональных данных
          </Link>
        </p>
      </label>

      <button className="btnMain" type="submit">
        Отправить
      </button>
    </form>
  );
};
export default Form;
