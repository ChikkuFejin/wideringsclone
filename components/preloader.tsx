"use client";

// import Image from "next/image";
import {useEffect, useState} from "react";
import LoaderText from "@/components/UI/LoaderText/LoaderText";


interface PreloaderProps{
    onChange?:(status:boolean)=>void
}
export default function Preloader({
    onChange
}:PreloaderProps){
    const [closeLoaderClass, setCloseLoaderClass] = useState<string | undefined>();


    useEffect(() => {
        const timer = setTimeout(() => {
            setCloseLoaderClass(" transform translate-y-[-100%]");
            if(onChange){
                onChange(false)
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [onChange]);

    return (

        <div
            className={`fixed inset-0 w-full h-full bg-[#c76c61] z-[600] flex items-center justify-center pb-5 transition-transform duration-[800ms] ease-[cubic-bezier(0.5,1,0.89,1)] ${closeLoaderClass} !important`}>
            <LoaderText/>
            {/*<Image*/}
            {/*    className="dark:invert"*/}
            {/*    src="/assets/images/logo_light.png"*/}
            {/*    alt="Next.js logo"*/}
            {/*    width={180}*/}
            {/*    height={38}*/}
            {/*    priority*/}
            {/*/>*/}

        </div>


    )
}