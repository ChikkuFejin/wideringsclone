"use client";

import Image from "next/image";
import {useEffect, useState} from "react";

export default function Preloader(){
    const [closeLoaderClass, setCloseLoaderClass] = useState<string | undefined>();

    useEffect(() => {
        const timer = setTimeout(() => {
            setCloseLoaderClass(" transform translate-y-[-100%]");
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    return (

        <div
            className={`fixed inset-0 w-full h-full bg-[#c76c61] z-[600] flex items-center justify-center pb-5 transition-transform duration-[800ms] ease-[cubic-bezier(0.5,1,0.89,1)] ${closeLoaderClass} !important`}>

            <Image
                className="dark:invert"
                src="/assets/images/preloader.gif"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />

        </div>


    )
}