
import './style.css';
import {ReactNode, useEffect, useRef} from "react";
import {cn} from "@/Utils/lib";


interface AnimeUpToTopProps{
        children:string | ReactNode;
        addDuration?:number;
        start?:boolean|undefined;
}

const AnimeUpToTop :React.FC<AnimeUpToTopProps>=({
                                                     children,
                                                     addDuration=0,
                                                     start=true
                                                 })=>{

    const containerRef = useRef<HTMLDivElement>(null)

useEffect(() => {
    if(start){
        const timer = setTimeout(() => {
            const container = containerRef.current;
            if (container) {
                container.style.transitionDuration = `${1 + addDuration / 1000}s`;
                container.classList.add('move-up');
            }

        }, 1 + addDuration);

        return () => clearTimeout(timer);
    }

}, [addDuration,start]);


   return(
       <>
                <div className={cn('anime-uptotop',)} ref={containerRef}>
                    <span>
                        <span>{children}</span>
                    </span>
                </div>
       </>
   )
}

export default AnimeUpToTop;