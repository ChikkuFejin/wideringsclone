import { cn } from "@/Utils/lib";
import { PortfolioItemDetails } from "@/Utils/types";
import React from "react";
interface VideoDetailsProps{
    details?:PortfolioItemDetails;
    className?:string;
}
const VideoDetails:React.FC<VideoDetailsProps>=({
    details,
    className
})=>{
 return(
    <>
        <ul className={cn(className)}>
            <li className="text-white mb-4">
                <span className="opacity-[0.4]">Client</span>
                <p className="text-white">{details?.client}</p>
            </li>
            {/* <li className="text-white mb-4">
                <span className="opacity-[0.4]">Director</span>
                <p className="text-white">{details?.director}</p>
            </li> */}

        </ul>
    </>
 )
}

export default VideoDetails;