'use client';

import Link from "next/link"
import { usePathname } from 'next/navigation'


export const WordStart = () => {
    const pathname = usePathname();

    return (
        <div>
            {pathname === "/login" ? (
            <div className="flex flex-col">
                <h1 className="text-[18px] text-gray-900 font-[600] tracking-tight">Content de vous revoir !</h1>
                <p className="text-sm tracking-tight text-gray-700 font-[600]">Je suis ici pour m'inscrire ? <Link href={'/register'} className="text-[#067aff] font-[700]">S'inscrire</Link>
                </p>
            </div>
            ) : (
            <div className="flex flex-col">
                <h1 className="text-[18px] text-gray-900 font-[600] tracking-tight">Hey, vas-tu nous rejoindre ?</h1>
                <p className="text-sm tracking-tight text-gray-700 font-[600]">Je voudrais me connecter ? <Link href={'/login'} className="text-[#067aff] font-[700]">Se connecter</Link></p>
            </div>
            )}
        </div>
    )
}