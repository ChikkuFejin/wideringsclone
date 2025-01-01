
"use client"

import Fotter from "@/components/Fotter";
import Header from "@/components/Header";
import ParallaxText from "@/components/sub/ParallaxText";
import CustomInput from "@/components/UI/forms/CustomInput";
import { useScroll, useTransform,motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ContactPage(){
    const containerRef = useRef(null);
    const {scrollYProgress} =useScroll({
        target:containerRef,
        offset:['start end','end start']
    })

    const formContainer = useTransform(scrollYProgress,[0,1],[0,-450]);
    const imageConatiner = useTransform(scrollYProgress,[0,1],[0,450]);

    return(
        <div ref={containerRef}>
        <Header/>
        <div className="absolute w-full top-0">
        <ParallaxText>
            <div className="text-[15vw]"> 
                <span className="fm-reckless block">Let{`'`}s Talk <span className="fm-gtw">Contact</span> </span>
            </div>
        </ParallaxText>
        </div>
        
        <section className="container mt-[300px]">
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    <motion.div style={{y:imageConatiner}} className="mt-[100px] w-full relative z-[-1]">
                        <Image src="https://widewings.eu/wp-content/uploads/2022/11/Screen-Shot-2022-10-11-at-12.32-1.jpg" width="666" height={785}  alt="image"/>
                    </motion.div>
                </div>

                <motion.div className="flex flex-col items-end" style={{y:formContainer}}>
                    <div className="w-[70%]">
                        <Image src="https://widewings.eu/wp-content/uploads/2022/11/Screen-Shot-2022-10-12-at-18.33-1.jpg" width="439" height={516}  alt="image"/>
                        <div className="mt-[200px] mb-[100px]">
                            <p className="font-bold">hello@widewings.eu</p>
                            <p className="font-bold">+370 652 22295</p>
                        </div>

                        <form>
                            <CustomInput placeholder="Name Surname" className="mb-[50px]"/>
                            <CustomInput placeholder="Email" className="mb-[50px]" />
                            <CustomInput placeholder="Message" className="mb-[50px]" />
                           
                        </form>
                    </div>
                </motion.div>

            </div>
        </section>
        <Fotter/>
        </div>
    )
}