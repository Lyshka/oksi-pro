"use client";

import { cn } from "@/lib/utils"
import Form from "./Form"
import Title from "./Title"
import { useModalStore } from "@/store/modalStore";

const Modal = () => {
    const { isOpen, setIsOpen } = useModalStore();

    return (
        <section className={cn("modal", isOpen && "open")}>
            <div className="bg-white max-w-[800px] w-full py-[60px] relative rounded-3xl xl:px-0 px-2.5">
                <button onClick={setIsOpen} className="xl:p-[30px] p-2.5 xl:-m-[30px] -m-2.5 flex-shrink-0 xl:top-[30px] top-2.5 xl:right-[30px] right-2.5 absolute flex justify-center items-center group">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover:stroke-red" d="M18 18L31 31M18 18L5 5M18 18L5 31M18 18L31 5" stroke="#0380C3" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </button>

                <div className="flex flex-col gap-[50px] items-center">
                    <Title text="Заказать звонок" className="text-center" />

                    <Form />
                </div>
            </div>
        </section>
    )
}
export default Modal