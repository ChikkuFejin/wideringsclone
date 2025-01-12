import {cn} from "@/Utils/lib";
import React from "react";

interface FontMProps {
    className?: string;
    children: React.ReactNode
}

export default function FontHeadM({className, children}: FontMProps) {
    return (
        <p className={cn("text-[10vw] md:text-[5vw]", className)}>{children}</p>
    );
}