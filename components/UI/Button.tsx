"use client";

import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

export function Button({ children,onClick }: ButtonProps) {
    function handleClick() {
      if (onClick) {
        onClick()
      }
    }
    return <button
    onClick={handleClick}
    type="submit"
    className="rounded-full bg-black px-3.5 py-2.5 text-center text-sm text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    {children}
  </button>;
}