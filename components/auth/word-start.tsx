'use client';

import { usePathname } from 'next/navigation'

type MessagesProps = {
    '/login': string,
    '/register': string
}
const messages: MessagesProps = {
    '/login': "Hey, vas-tu nous rejoindre?",
    '/register': "Content de te revoir !"
}

export const WordStart = () => {
    const pathname = usePathname();
    const message: string = messages[pathname as keyof MessagesProps] || "Bienvenue sur DhaClub"

    return (
        <p className="text-[12px] font-[600] text-gray-700">{message}</p>
    )
}