
"use client"

import Fotter from "@/components/Fotter";
import Header from "@/components/Header";
import { UpToTopAnimeChild } from "@/components/UI/UpToTopAnime";
import { useScroll, useTransform,motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ContactPage(){
    const containerRef = useRef(null);
    const {scrollYProgress} =useScroll({
        target:containerRef,
        offset:['start end','end start']
    })


    const imageConatiner = useTransform(scrollYProgress,[0,1],[0,450]);


    return(
        <div ref={containerRef}>
        <Header/>
        <section className="h-[100vh] flex justify-center items-center">
            <div className="relative w-full h-[100vh] overflow-hidden">
            <motion.div className="absolute top-0 w-full z-10 mt-[-130px]" style={{y:imageConatiner}}>
                <Image 
                src="https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.45.jpg" 
                alt="About"
                layout="intrinsic"
                width={1181}
                height={695}
                className="object-contain w-full"
                />
            </motion.div>
            <div className="py-[100px] absolute top-0 z-20  w-full h-full">
                <div className=" w-full h-full container relative">
                    <div className=" absolute left-0 top-0  ">
                    <UpToTopAnimeChild isActive addDuration={400}>
                        <p className="text-white text-[8vw] overflow-hidden">
                            Creativity
                        </p>
                        </UpToTopAnimeChild>
                        <UpToTopAnimeChild isActive addDuration={600}>
                        <p className="text-white text-[8vw] fm-reckless  mt-[-50px]">based</p>
                        </UpToTopAnimeChild>
                    </div>
                    <div className=" absolute right-0 bottom-0 ">
                        <p className="text-white text-[8vw] flex justify-end">On</p>
                        <p className="text-white text-[8vw] fm-reckless  mt-[-50px]">knowledge</p>
                    </div>
                </div>
                
                
            </div>  
            </div>
            
        </section>
        
        
        <Fotter/>
        </div>
    )
}