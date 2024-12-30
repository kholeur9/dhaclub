'use client';

import clsx from "clsx";

import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"

import { useRef, useActionState } from "react";
import { LoginAction } from "./actions/LoginAction";

export const LoginForm = () => {

  const formRef = useRef<HTMLFormElement>(null);
  
  const [state, formAction, pending] = useActionState(LoginAction, {
    errors: undefined,
    fieldValues: {
      email: "",
      password: ""
    }
  })
  
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <form ref={formRef} action={formAction} className="flex flex-col w-full h-full space-y-4">
          <div className="flex flex-col space-y-0.5">
            <Input
              label="e-mail"
              type="email"
              name="email"
              className={clsx("w-full px-2.5 h-[45px] rounded-[5px] outline-none border border-gray-300 text-gray-800", { "border-red-500": state?.errors?.email })}
              required
              defaultValue={state?.fieldValues.email}
            />
            {state?.errors?.email && <p className="text-xs text-red-500">{state.errors.email}</p>}
          </div>
          <div className="flex flex-col space-y-0.5">
            <Input
              label="password"
              type="password"
              name="password"
              className={clsx("w-full px-2.5 h-[45px] rounded-[5px] outline-none border border-gray-300 text-gray-800", { "border-red-500": state?.errors?.password })}
              required
               defaultValue={state?.fieldValues.password}
            />
             {state?.errors?.password && <p className="text-xs text-red-500">{state.errors.password}</p>}
          </div>
          <div>
            <Button disabled={pending} size='lg' variant='default' className="w-full font-[700]">{pending ? "Vérification..." : "Connexion"}</Button>
          </div>
        </form>
      </div>
      <div>
        
      </div>
    </div>
  )
}