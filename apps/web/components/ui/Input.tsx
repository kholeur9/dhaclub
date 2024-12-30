import { ChangeEvent } from "react";

import Link from "next/link"

interface InputProps {
    label?: string;
    name: string;
    type: string;
    value?: string;
    placeholder?: string;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: string;
    required?: boolean;
    forgotPassword?: boolean;
}

export const Input = ({ label, name, type, value, className, placeholder, onChange, defaultValue, required } : InputProps) => {
    return (
        <div className="flex flex-col space-y-0.5">
            {label && <label htmlFor={name} className="text-xs text-gray-800 font-[700] uppercase">{label}</label>}
            <input 
                type={type}
                name={name}
                id={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={className}
                defaultValue={defaultValue}
                required={required}
            />
        </div>
    )
}