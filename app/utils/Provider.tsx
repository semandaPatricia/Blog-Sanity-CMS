"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export const Provider = ({ children }: Props) => {
  return <ThemeProvider attribute="class">
    <div className='text-gray-800 dark:text-gray-200  min-h-screen select-none transition-colors duration-300'>
    {children}
    </div>
   
    </ThemeProvider>;
};