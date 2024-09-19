import { menu } from "@/constants/menu"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { FC } from "react"

interface IProps {
    isOpen: boolean;
    handle: VoidFunction;
}

const MobileMenu: FC<IProps> = ({ isOpen, handle }) => {
    return (
        <nav className={cn("mobileMenu", isOpen && "open")}>
            <div className="h-full flex items-end justify-center">
                <div className="h-[calc(100%-120px)]">
                    <ul className="flex flex-col items-center gap-[30px]">
                        {menu.map(({ id, name, url }) => (
                            <li key={id}>
                                <Link className="text-lg leading-[23.4px] hover:text-azure-hover" onClick={handle} href={url}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav >
    )
}
export default MobileMenu