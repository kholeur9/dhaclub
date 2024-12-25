/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"

export default function Register() {
    return (
        <div className="flex flex-col bg-white pb-[25px] rounded-md border border-1 border-gray-300">
            <p className="text-sm text-gray-800 p-2.5 tracking-tight">J'ai déjà un compte !
                <Link href={'/login'}> <span className="font-bold text-gray-800 text-[#ED4C67]">Se connecter</span></Link></p>
            <div className="w-full px-[25px]">
                <h1 className="text-xl text-center text-gray-70 font-bold">Retrouve ton espace</h1>
            </div>
        </div>
    )
}