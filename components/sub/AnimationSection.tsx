import { useEffect, useState } from "react";
import { UpToTopAnimeChild, UpToTopAnimeContainer } from "../UI/UpToTopAnime";

export default  function AnimateSection ({children,isActive=false}:{children:React.ReactNode,isActive?:boolean,duration?:number}){
    const [className,setClassName] =useState('');
    useEffect(()=>{
        if(isActive){
            setTimeout(()=>{
                setClassName('overflow-auto')
            },100)
        }
    },[isActive])
    return(
        <UpToTopAnimeContainer className={className}>
        <UpToTopAnimeChild isActive={isActive} addDuration={0}>
        {children}
        </UpToTopAnimeChild>
        </UpToTopAnimeContainer>
    )
}