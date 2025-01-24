import { cn } from "@/Utils/lib";
import React from "react";

interface FontMProps {
    className?: string;
    children : React.ReactNode,
    theme?:'dark' | 'light'
}
export default function FontHeadXL({ className,children,theme = 'light'}: FontMProps) {

    const fontTheme ={
        'dark' :'text-white',
        'light' :'text-black'
    }
    return (
        <span className={cn("text-[8rem] md:text-[10rem] font-[400]", className,fontTheme[theme])}>{children}</span>
    );
}