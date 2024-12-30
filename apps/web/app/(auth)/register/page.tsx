/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { RegisterForm } from "./RegisterForm"

export default function Login() {
    return (
        <div className="w-full h-auto flex flex-col space-y-6 mt-[20px]">
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-[24px] text-center text-gray-800 font-bold tracking-tight">Créer votre espace</h1>
                <p className="text-gray-600 text-[12px] tracking-tight">Rejoins nous sur DhaClub et développe ton univers</p>
            </div>
            <RegisterForm />
        </div>
    )
}