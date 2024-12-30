/* eslint-disable react/no-unescaped-entities */
import { LoginForm } from "./LoginForm"

export default function Login() {
    return (
        <div className="w-full h-auto flex flex-col space-y-6 mt-[20px]">
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-[24px] text-center text-gray-800 font-bold tracking-tight">Retrouve ton espace</h1>
                <p className="text-gray-600 text-[12px] tracking-tight">Emploi, Cv, Club, News, Opportunités, ...</p>
            </div>
            <LoginForm />
        </div>
    )
}