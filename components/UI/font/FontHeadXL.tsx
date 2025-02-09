import { cn } from "@/Utils/lib";
import React from "react";

interface FontMProps {
    className?: string;
    children : React.ReactNode,
    theme?:'dark' | 'light'
}

const style={
    fontSize:"clamp(1.8rem,calc(12vw + 1rem),10rem)"
}

export default function FontHeadXL({ className,children,theme = 'light'}: FontMProps) {

    const fontTheme ={
        'dark' :'text-white',
        'light' :'text-black'
    }
    return (
        <span className={cn(" font-[400]", className,fontTheme[theme])} style={style}>{children}</span>
    );
}