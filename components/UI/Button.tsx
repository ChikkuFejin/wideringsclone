"use client";

import {ReactNode, useCallback} from 'react';
import {cn} from "@/Utils/lib";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?:string;
    isAnimate?:boolean;
    disabled?:boolean;
}

export function Button({ children,onClick,className,isAnimate=false,disabled=false }: ButtonProps) {
    function handleClick() {
      if (onClick) {
        onClick()
      }
    }
    const animationSpan =useCallback(()=>{
            return (
                <>
                    <span className=' inline-block absolute group-hover:translate-y-[-100px] translate-y-[0]  transition duration-300 ease-in-out'>{children}</span>
                    <span className=' inline-block  translate-y-[200%] group-hover:translate-y-[0] transition duration-300 ease-in-out'>{children}</span>
                </>
            )
    },[])


    return <button
    onClick={handleClick}
    type="submit"
    className={cn('btn',className||'',isAnimate&&' overflow-hidden group relative',disabled&&'disabled:bg-[#d9d9d9]')}
    style={isAnimate && !disabled ?{paddingBottom:'4px'}:{}}
    disabled={disabled}
  >

        {
            isAnimate && !disabled ?
                animationSpan():
                children
        }
  </button>;
}