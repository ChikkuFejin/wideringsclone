
"use client"

import Fotter from "@/components/Fotter";
import Header from "@/components/Header";
import { MotionContainer } from "@/components/sub/MotionContainer";
import SectionTitleTwo from "@/components/sub/SectionTitleTwo";
import { ParaReckless } from "@/components/UI/font/ParaReckless";
import { useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {useEffect, useRef} from "react";
import React from "react";
import HorizontalScroll from "@/components/pages/services/HorizontalScroll";
import StoriesSectionTwo from "@/components/StoriesSectionTwo";

gsap.registerPlugin(ScrollTrigger);

export default function ServicePage(){    
    const containerRef = useRef(null);
    const {scrollYProgress} =useScroll({
        target:containerRef,
        offset:['start end','end start']
    })


    const imageConatiner = useTransform(scrollYProgress,[0,1],[0,-2550]);

    const stories =[
        {
            title:"By finding the truth",
            content:[
                "We step into shoes of our clients, product users, current and potential employees, or other people relevant to the real story of a company.",
                "By doing this we find truths that make a company more unique, more human, and that are relevant for customers."
            ]
        },
        {
            title:"Telling it like a story",
            content:[
                "We have the in-house skills and knowledge to transform our true stories into compelling narratives – with the right storytelling, visual language, audio, and style."
            ]

        }
    ]

    useEffect(() => {
        const body = document.querySelector('body');
        if (body) {
            body.style.backgroundColor = '#000000';
        }
    }, []);


    return (
        <div ref={containerRef}>
            <Header theme='dark'/>
            <section
                className="min-h-[100vh] w-full relative  bg-black text-white py-[200px] ">
                <div className="flex-col flex justify-center items-center container">


                <p className="text-[5rem] md:text-[10rem] text-center text-white z-20 lg:z-auto">We prove how</p>
                <p className="text-[5rem] md:text-[10rem] text-white fm-reckless-n relative z-20">you are</p>
                <p className="text-[5rem] md:text-[10rem] mt-[-30px] md:mt-[-70px] text-white fm-reckless-n relative z-20">outstanding</p>

                <MotionContainer style={{y: imageConatiner}} className="absolute top-[85%] md:top-[70%] z-10">

                    <Image

                        alt=""
                        src="https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-11-at-12.32.jpg"
                        objectFit="contain"
                        width={680}
                        height={383}

                    />

                </MotionContainer>
                </div>
            </section>

            <section className="bg-black  text-white  pb-[50px]">
                <div className="container">


                    {
                        stories?.map((story, key) => (
                            <React.Fragment key={key}>
                                <SectionTitleTwo title={story.title}/>
                                <div className="mt-[50px] py-[100px]" key={key}>
                                    <div className="w-full  md:w-[50%] ml-auto pr-[20%] ">
                                        {story.content.map((content, index) => (
                                            <ParaReckless className="block mb-[30px] text-[1.3rem] text-white"
                                                          key={index}>
                                                {content}
                                            </ParaReckless>
                                        ))}

                                    </div>
                                </div>
                            </React.Fragment>
                        ))
                    }


                </div>


            </section>
            <section>
                <HorizontalScroll/>
            </section>
            <section className='bg-black pt-[200px] mb-[100px] '>
                <StoriesSectionTwo theme='dark' classConatiner="mt-0 pb-0"/>
            </section>

            <Fotter/>
        </div>
    );
}