'use client';

import { useState } from "react"

import { Form } from "@/components/auth/form"
import { Input } from "@/components/auth/input"


export const LoginForm = () => {
    const [ formData, setFormData ] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev, [name] : value}))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className="px-[25px]">
            <Form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <Input
                    label="E-mail"
                    name="email"
                    type="email"
                    placeholder=""
                    value={formData.email}
                    className="w-full border border-1 border-gray-500 outline-none px-2.5 py-1.5 rounded-[5px]"
                    onChange={handleChange}
                />
            
                <Input
                    label="Mot de passe"
                    name="password"
                    type="password"
                    placeholder=""
                    value={formData.password}
                    className="w-full border border-1 border-gray-500 outline-none px-2.5 py-1.5 rounded-[5px]"
                    onChange={handleChange}
                />

                <button type="submit" className="bg-[#2f3640] h-[40px] rounded-[5px] text-white text-sm mt-8">Continuer</button>
        </Form>
        </div>
    )
}