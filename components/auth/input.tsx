import { ChangeEvent } from "react";


interface InputProps {
    label?: string;
    name: string;
    type: string;
    value: string;
    placeholder?: string;
    className?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ label, name, type, value, className, placeholder, onChange } : InputProps) => {
    return (
        <div>
            {label && <label htmlFor={name} className="text-sm text-gray-700 mb-1.5">{label}</label>}
            <input 
                type={type}
                name={name}
                id={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={className}
            />
        </div>
    )
}