
"use client"

import Fotter from "@/components/Fotter";
import Header from "@/components/Header";
import ParallaxText from "@/components/sub/ParallaxText";
import { Button } from "@/components/UI/Button";
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
    const smFormContainer =useTransform(scrollYProgress,[0,1],[0,50]);

    return(
        <div ref={containerRef}>
        <Header/>
        <div className="absolute w-full top-[80px] md:top-0">
        <ParallaxText>
            <div className="text-[30vw] md:text-[15vw]"> 
                <span className="fm-reckless block">Let{`'`}s Talk <span className="fm-gtw">Contact</span> </span>
            </div>
        </ParallaxText>
        </div>
        
        <section className="container mt-[200px] md:mt-[100px] pb-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <motion.div className="md:hidden w-[60%] ml-auto relative z-10 flex-col" style={{y:formContainer}}>
                <Image src="https://widewings.eu/wp-content/uploads/2022/11/Screen-Shot-2022-10-12-at-18.33-1.jpg" width="439" height={516}  alt="image" />
                </motion.div>
                <div className="flex flex-col">
                    <motion.div style={{y:imageConatiner}} className="mt-[-150px] md:mt-[100px] w-[70%] md:w-full relative z-[-1]">
                        <Image src="https://widewings.eu/wp-content/uploads/2022/11/Screen-Shot-2022-10-11-at-12.32-1.jpg" width="666" height={785}  alt="image"/>
                    </motion.div>
                </div>
               

                <motion.div className="flex flex-col items-end mt-[100px] md:mt-0" style={{y:smFormContainer}}>
                    <div className="w-full md:w-[70%]">
                      
                        <Image src="https://widewings.eu/wp-content/uploads/2022/11/Screen-Shot-2022-10-12-at-18.33-1.jpg" width="439" height={516}  alt="image" className="hidden md:inline"/>
                        <div className="mt-[200px] mb-[100px]">
                            <p className="font-bold">hello@Scilens.com</p>
                            <p className="font-bold">+971 58 819 9586</p>
                        </div>

                        <form>
                            <CustomInput placeholder="Name Surname" className="mb-[50px]"/>
                            <CustomInput placeholder="Email" className="mb-[50px]" />
                            <CustomInput placeholder="Message" className="mb-[50px]" />
                           
                        </form>
                        <Button>Send</Button>
                    </div>
                </motion.div>

            </div>
        </section>
        <Fotter/>
        </div>
    )
}