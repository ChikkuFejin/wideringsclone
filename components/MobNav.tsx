
import {cn} from "@/Utils/lib";
import Link from "next/link";
import { UpToTopAnimeChild, UpToTopAnimeContainer } from "./UI/UpToTopAnime";

export interface closeLoaderClass{
    overlay?: string;
    mobNav?: string;
}
export interface MobNavProps {
    closeLoaderClass?: closeLoaderClass;
    isOpen?:boolean
}

export default function MobNav({
                                   closeLoaderClass,
                                   isOpen = false
                               }:MobNavProps){

console.log(closeLoaderClass)
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
                            <UpToTopAnimeChild isActive={isOpen}  className="block">
                                    <Link href="/" >Portfolio</Link>
                            </UpToTopAnimeChild>
                            
                        </li>
                        <li className={cn("h1 mb-[16px] font-[400] overflow-hidden")}>
                        <UpToTopAnimeChild isActive={isOpen} addDuration={200}>
                            <Link href="/" >Services</Link>
                            </UpToTopAnimeChild>
                        </li>
                        <li className={cn("h1 mb-[16px] font-[400] overflow-hidden")}>
                        <UpToTopAnimeChild isActive={isOpen} addDuration={400}>
                            <Link href="/" >About</Link>
                            </UpToTopAnimeChild>
                        </li>
                        <li className={cn("h1 mb-[16px] font-[400] overflow-hidden")}>
                        <UpToTopAnimeChild isActive={isOpen} addDuration={600}>
                            <Link href="/" >Contact</Link>
                            </UpToTopAnimeChild>
                        </li>
                    </ul>
                </div>
                <UpToTopAnimeContainer className="mb-[40px]">
                <UpToTopAnimeChild isActive={isOpen} addDuration={610} className="grid grid-cols-2">

                        <div>LT</div>
                        <div>
                            <ul>
                                <li className="mb-[12px]">Instagram</li>
                                <li className="mb-[12px]">Linkedin</li>
                                <li className="mb-[12px]">Facebook</li>
                            </ul>
                        </div>
                
                </UpToTopAnimeChild>
                </UpToTopAnimeContainer>
                <div className="mb-[20px] overflow-hidden">

                <UpToTopAnimeChild isActive={isOpen} addDuration={620} className="grid grid-cols-2">
               
               
                    <p className="text-white opacity-[.5]">+91 876 786 676 73</p>
                    <p className="text-white opacity-[.5]"> hello@gmail.com</p>
       
                </UpToTopAnimeChild>
                </div>
                </div>
            </div>
        </>
    )
}