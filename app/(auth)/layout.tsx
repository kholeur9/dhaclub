import { WordStart } from "@/components/auth/word-start";


export default function AuthLayout( {
    children
} : {
    children: React.ReactNode;
  }) {
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="flex px-[40px] py-[20px] border border-1 border-b-gray-200 justify-between items-center">
                <h1 className="text-[#ED4C67] font-extrabold text-xl tracking-tight">DhaClub</h1>
                <div className="flex gap-2.5 items-center">
                   <WordStart /> 
                </div>
            </div>
            <div className="flex h-screen items-center justify-center">
                {children}
            </div>
        </div>
    )
}