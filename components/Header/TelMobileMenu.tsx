import { cn } from "@/lib/utils";
import { FC } from "react";
import Tel from "../Tel";
import { useModalStore } from "@/store/modalStore";

interface IProps {
    isOpen: boolean;
}

const TelMobileMenu: FC<IProps> = ({ isOpen }) => {
    const { setIsOpen } = useModalStore();

    return (
        <div className={cn("mobileMenu", isOpen && "open")}>
            <div className="h-full flex items-end justify-center">
                <div className="h-[calc(100%-120px)] flex flex-col gap-[30px] items-center">
                    <Tel state="telMenu" />

                    <button onClick={setIsOpen} className="h-10 max-w-[170px] rounded-md w-full flex justify-center items-center border border-blue-03 text-blue-03 text-center bg-white text-lg leading-[23.4px] font-semibold hover:bg-blue-03 hover:text-white">
                        Заказать звонок
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TelMobileMenu