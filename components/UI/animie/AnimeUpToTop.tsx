
import './style.css';
import {ReactNode, useEffect, useRef} from "react";
import {cn} from "@/Utils/lib";


interface AnimeUpToTopProps{
        children:string | ReactNode,
        addDuration?:number
}

const AnimeUpToTop :React.FC<AnimeUpToTopProps>=({
                                                     children,
                                                     addDuration=0
                                                 })=>{

    const containerRef = useRef<HTMLDivElement>(null)

useEffect(() => {
    const timer = setTimeout(() => {
        const container = containerRef.current;
        if (container) {
            container.style.transitionDuration = `${1 + addDuration / 1000}s`;
            container.classList.add('move-up');
        }

    }, 1 + addDuration);

    return () => clearTimeout(timer);
}, [addDuration]);


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