import { ChangeEvent } from "react";

import Link from "next/link"

interface InputProps {
    id?: string;
    label?: string;
    type: string;
    placeholder?: string;
    className?: string;
}

export const Input = ({ id, label, type, className, placeholder, ...rest } : InputProps) => {
    return (
        <div className="flex flex-col space-y-0.5">
            {label && <label htmlFor={id} className="text-xs text-gray-800 font-[700] uppercase">{label}</label>}
            <input 
                type={type}
                id={id}
                placeholder={placeholder}
                className={className}
                {...rest}
            />
        </div>
    )
}