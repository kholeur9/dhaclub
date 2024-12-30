import Image from "next/image"
import { WordStart } from "./_word-start/WordStart";

import "./auth.style.css";

export default function AuthLayout( {
    children
} : {
    children: React.ReactNode;
  }) {
    return (
        <div className="flex flex-col h-full bg-gray-100 px-[20px] pt-[10px]">
            <div className="flex justify-between items-center">
                {/** header a ajouter dur Grand ecran */}
                <Image src="/DhaClub.png" width={100} height={100} alt="Logo de DhaClub" className="w-[100px] h-[100px]" />
            </div>
            <div className="flex flex-col space-y-[10px]">
                <div className="flex flex-col">
                    <WordStart />
                </div>
                <div className="flex flex-col justify-center items-center">
                    {children}
                </div>
            </div>
        </div>
    )
}