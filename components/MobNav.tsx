
import {cn} from "@/Utils/lib";
import { UpToTopAnimeChild } from "./UI/UpToTopAnime";
import AngerLink from "@/components/UI/AngerLink";

export interface closeLoaderClass{
    overlay?: string;
    mobNav?: string;
}
export interface MobNavProps {
    closeLoaderClass?: closeLoaderClass;
    isOpen?:boolean
}

export default function MobNav({
                                   isOpen = false
                               }:MobNavProps){


const overlayOpen= isOpen?"transform scale-y-1 transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] delay-50":"";
const mobNavOpen = isOpen ? "opacity-100 visibility-visible overflow-hidden" :"";
// const linkClass = "transform translate-y-full transition-transform duration-1000" ;
    return(
        <>
            <div
                className={cn(
                    "fixed top-0 left-0 right-0 bottom-0 w-full h-full z-[400] bg-black  transform scale-y-0 origin-left-bottom will-change-transform transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] delay-300 ",
                    overlayOpen
                )} ></div>


            <div className={cn(
                "fixed top-0 left-0 right-0 bottom-0 w-full h-full overflow-auto z-[401] p-[120px_0_50px] opacity-0  text-white transition-[.2s]",
                mobNavOpen
            )} style={{visibility:isOpen ? undefined : 'hidden'}}>
                <div className="container p-[2rem] overflow-hidden">

                
                <div className="mb-[72px]">
                    <ul>
                        <li className={cn("h1 mb-[16px] font-[400] overflow-hidden")}>
                            <UpToTopAnimeChild isActive={isOpen} >
                                <AngerLink href="/" >Home</AngerLink>
                            </UpToTopAnimeChild>
                        </li>
                        <li className={cn("h1 mb-[16px] font-[400] overflow-hidden")}>
                            <UpToTopAnimeChild isActive={isOpen} addDuration={200}>
                                <AngerLink href="/about" >About Us</AngerLink>
                            </UpToTopAnimeChild>
                        </li>



                        <li className={cn("h1 mb-[16px] font-[400] overflow-hidden")}>
                            <UpToTopAnimeChild isActive={isOpen} addDuration={400}>
                                <AngerLink href="/services" >Services</AngerLink>
                            </UpToTopAnimeChild>
                        </li>
                        <li className={cn("h1 mb-[16px] font-[400] overflow-hidden")}>
                            <UpToTopAnimeChild isActive={isOpen}  addDuration={600} className="block">
                                <AngerLink href="/portfolio" >Portfolio</AngerLink>
                            </UpToTopAnimeChild>

                        </li>
                    </ul>
                </div>
                {/*<UpToTopAnimeContainer className="mb-[40px]">*/}
                {/*<UpToTopAnimeChild isActive={isOpen} addDuration={610} className="grid grid-cols-2">*/}

                {/*        <div>LT</div>*/}
                {/*        <div>*/}
                {/*            <ul>*/}
                {/*                <li className="mb-[12px]">Instagram</li>*/}
                {/*                <li className="mb-[12px]">Linkedin</li>*/}
                {/*                <li className="mb-[12px]">Facebook</li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                
                {/*</UpToTopAnimeChild>*/}
                {/*</UpToTopAnimeContainer>*/}
                <div className="mb-[20px] overflow-hidden">

                <UpToTopAnimeChild isActive={isOpen} addDuration={620} className="grid grid-cols-2">
               
               
                    <p className="text-white opacity-[.5]">+971 58 819 9586</p>
                    <p className="text-white opacity-[.5]"> scilensmedia@gmail.com</p>
       
                </UpToTopAnimeChild>
                </div>
                </div>
            </div>
        </>
    )
}