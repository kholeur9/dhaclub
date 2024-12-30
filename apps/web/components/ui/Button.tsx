'use client';

import { ButtonHTMLAttributes, forwardRef } from "react";

import clsx from "clsx";
import { VariantProps, cva } from "class-variance-authority"


const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-[5px] text-sm font-medium disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-[#067aff] text-white hover:bg-[#067aff] dark:bg-[#067aff] dark:text-white ',
        outlline:'bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100'
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-[5px]",
        lg: "h-[45px] text-[14px] py-3 px-12 rounded-[2px]"
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    },
  }
)

interface ButtonProps 
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = ({ className, size, variant, ...props } : ButtonProps) => {
  return(
    <button className={clsx(buttonVariants({variant, size, className }))} {...props} />
  )
}

export { Button, buttonVariants }