import React, { FormEvent } from "react"

interface AuthFormProps {
    children: React.ReactNode;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    className?: string;
}

export const Form = ({ children, onSubmit, className } : AuthFormProps) => {
    return (
        <form onSubmit={onSubmit} className={className}>
            {children}
        </form>
    )
}