import { cn } from "@/Utils/lib";
import React from "react";

interface FontMProps {
    className?: string;
    children : React.ReactNode
}
export default function FontHeadXL({ className,children }: FontMProps) {
    return (
        <span className={cn("text-[8rem] md:text-[10rem]", className)}>{children}</span>
    );
}