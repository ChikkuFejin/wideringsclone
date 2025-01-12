import React from "react";
import {cn} from "@/Utils/lib";

interface HorizontalLineProps {
    className?: string;
    width?: number;
    ref?: React.RefObject<HTMLDivElement>
}

export default function HorizontalLine({ className,width=0,ref }: HorizontalLineProps) {

    const nWidth = `${width}%`;
    return (
        <div className={`bg-gray-500 h-[1px] w-full ${className || ""}`} ref={ref}>
            <div className={cn("bg-white h-[1px]  transition-all duration-500 ease-in-out")} style={{width:nWidth}}></div>
        </div>
    );
}