'use client';

import Link from 'next/link';

import clsx from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useEmailStore } from "@/config/store/store-email";

import { loginSchema } from "./schema/LoginSchema";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { LOGIN_ACTION_USER } from "./actions/LoginAction";
import { useMutation } from "@apollo/client";

export const LoginForm = () => {
  const [Login, { data, loading, error }] = useMutation(LOGIN_ACTION_USER);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer <typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  //const { email, setEmail } = useEmailStore();

  const onSubmit = async (data: any) => {
    console.log(data)
    try {
      await Login({
        variables: data
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col h-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full h-full space-y-1.5">
        <div className="flex flex-col w-full h-full space-y-4">
          <div className="flex flex-col space-y-0.5">
            <Input
              label="Adresse e-mail"
              type="email"
              {...register("email", { required: true})}
              className={clsx("w-full px-2.5 h-[45px] rounded-[3px] outline-none border border-[1.2px] border-gray-300 text-gray-800", {
                "border-red-600": errors.email || error
              })}
            />
            {error ? <p className="text-xs text-red-600">{error.message}</p> : errors.email ? <p className="text-xs text-red-600">{errors.email.message}</p> : null}
          </div>

          <div className="flex flex-col space-y-0.5">
            <Input
              label="Mot de passe"
              type="password"
              {...register("password", { required: true})}
              className={clsx("w-full px-2.5 h-[45px] rounded-[3px] outline-none border border-[1.2px] border-gray-300 text-gray-800", {"border-red-600": errors.password || error })}
            />
            {errors.password ? <p className="text-xs text-red-600 font-[500]">{errors.password.message}</p> : ( error ? <p className="text-xs text-red-600 font-[500]">{error.message}</p> : null)}
          </div>
        </div>

        <Link href={'#'} className="text-[12px] text-gray-600">Vous avez oubliez votre mot de passe ?</Link>
        
        <div className="flex flex-col space-y-0.5">
          <Button type="submit" className="w-full h-[45px] mt-4">
            {loading ? <div className="loader"></div> : "Connexion"}
          </Button>
        </div>
      </form>
    </div>
  );
};