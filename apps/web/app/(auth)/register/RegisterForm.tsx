'use client';

import { useEmailStore } from "@/config/store/store-email";

export const RegisterForm = () => {
  const email = useEmailStore((state) => state.email);
  return (
    <div className="">
      <h1 className="text-black">{email}</h1>
    </div>
  )
}