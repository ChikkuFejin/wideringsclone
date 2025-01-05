import { cn } from "@/Utils/lib";
import React from "react";

interface FontMProps {
    className?: string;
    children : React.ReactNode
}
export default function FontL({ className,children }: FontMProps) {
    return (
        <p className={cn("text-[28px]", className)}>{children}</p>
    );
}