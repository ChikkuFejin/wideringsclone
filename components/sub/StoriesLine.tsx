import Link from "next/link";
import { useId } from "react";
import { Tooltip } from "react-tooltip";

export default function StoriesLine({
    title, count,videoPath
}:{title:string, count:string,videoPath:string}) {
    const uniqueId = useId();
    const tooltipId:string = `tooltip-${uniqueId}`;
    return(
        <>
        <Link href="#" className="mb-1 block transition-all duration-[5s] ease-in" >
        <div className="inline" data-tooltip-id={tooltipId} data-tooltip-float={true}>
            <span className="text-[10vw] md:text-[5vw] fm-reckless">{title}</span>
            <sup className="top-[-1.3rem] md:text-[2rem] ml-2 md:ml-3 md:top-[-2rem]">{count}</sup>
        </div>
        </Link>
        <Tooltip id={tooltipId} style={{backgroundColor: 'rgba(0,0,0,0.8)', color: 'white', fontSize: '1.5rem', padding: 0, borderRadius: '0.5rem'}}>
           <div className="w-[810px] h-[450px] bg-transparent">
                  <video
                        className="p-0 bg-transparent"
                      src={videoPath}
                      width='100%'
                      height='100%'
                      autoPlay
                      muted
                      loop	
                      
                    />
           </div>
        </Tooltip>
        </>
        
    )
}