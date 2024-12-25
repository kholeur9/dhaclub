/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { LoginForm } from "@/components/auth/login-form"

export default function Login() {
    return (
        <div className="w-[450px] flex flex-col bg-white pb-[25px] rounded-md border border-1 border-gray-100 space-y-6">
            <p className="text-[13px] text-gray-800 p-2.5 tracking-tight">Je suis ici pour un compte ? <Link href={'/register'} className="text-[#ED4C67]"><span className="font-bold text-gray-800">S'inscrire</span></Link></p>
            <div className="w-full flex flex-col px-[25px] justify-center items-center mt-4">
                <h1 className="text-[24px] text-center text-gray-800 font-bold tracking-tight">Retrouve ton espace</h1>
                <p className="text-gray-600 text-[12px] tracking-tight">Emploi, Cv, Club, News, Opportunités, ...</p>
            </div>
            <LoginForm />
        </div>
    )
}