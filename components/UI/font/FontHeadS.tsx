import { cn } from "@/Utils/lib";
import React from "react";

interface FontMProps {
    className?: string;
    children : React.ReactNode
}
export default function FontHeadS({ className,children }: FontMProps) {
    return (
        <p className={cn(" text-[8vw] md:text-[4vw]", className)}>{children}</p>
    );
}