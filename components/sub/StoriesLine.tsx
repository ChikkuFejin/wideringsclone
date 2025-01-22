import Link from "next/link";
import {useId} from "react";
import {cn} from "@/Utils/lib";

export default function StoriesLine({
    title, count,videoPath,theme ='light',
                                        handleMouseHover
}:{title:string, count:string,videoPath:string,theme:'dark'|'light',handleMouseHover:(isHover:boolean,path:string)=>void}) {
    const uniqueId = useId();
    const tooltipId:string = `tooltip-${uniqueId}`;


    const fontTheme = {
        'dark':'text-white',
        'light':'text-black'
    }
    return(
        <div >
        <Link href="#" className="mb-1 block transition-all duration-[5s] ease-in"

        >
        <div className="inline relative" data-tooltip-id={tooltipId} data-tooltip-float={true}
             onMouseEnter={() => handleMouseHover(true,videoPath)}
             onMouseLeave={() => handleMouseHover(false,'')}
        >
            <span className={cn("text-[10vw] md:text-[5vw] fm-reckless",fontTheme[theme])}>{title}</span>
            <sup className="top-[-1.3rem] md:text-[2rem] ml-2 md:ml-3 md:top-[-2rem]">{count}</sup>
        </div>



        </Link>

        </div>
        
    )
}