import { cn } from "@/Utils/lib";
import React from "react";
interface ContainerProps {
    children: React.ReactNode;
    className ?: string
  }

interface ChildProps extends ContainerProps{
    isActive:boolean,
    addDuration?:number
}
const UpToTopAnimeContainer: React.FC<ContainerProps> =({
    className,
    children
})=>{
return(<div className={cn("overflow-hidden",className)}>{children}</div>)
};

const UpToTopAnimeChild:React.FC<ChildProps>=({
    className,
    children,
    isActive =false,
    addDuration=0
})=>{
    const defaultClassName = "transform translate-y-full transition-transform";
    const activeClass =isActive? 'translate-y-0':"";
    return (
        <div className={cn(defaultClassName,className,activeClass)}
            style={{transitionDuration: `${1000 + addDuration}ms`}}
        >{children}</div>
    )
}
export  {
    UpToTopAnimeChild,
    UpToTopAnimeContainer
}