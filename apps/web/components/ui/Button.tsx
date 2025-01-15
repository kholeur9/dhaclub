'use client';

import clsx from "clsx";
import React from "react";

interface ButtonProps {
  type: "submit" | "reset";
  children: React.ReactNode;
  className: string;
}

export const Button = ({ type, children, className } : ButtonProps) => {
  return (
    <button type={type} className={clsx(`flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-[3px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`, className )}>
      {children}
    </button>
  )
}