
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
import { useEffect, useRef } from "react";
import FontHeadXL from "@/components/UI/font/FontHeadXL";
import FontHeadM from "@/components/UI/font/FontHeadM";
import HorizontalLine from "@/components/sub/HarizontalLine";
import React from "react";
import {cn} from "@/Utils/lib";

gsap.registerPlugin(ScrollTrigger);

export default function ServicePage(){    
    const containerRef = useRef(null);
    const horizontalScrollContainerRef = useRef<HTMLDivElement>(null);
    const horizontalScrollLineContainerRef = useRef(null);
    const {scrollYProgress} =useScroll({
        target:containerRef,
        offset:['start end','end start']
    })


    const imageConatiner = useTransform(scrollYProgress,[0,1],[0,-2550]);
    

    const hCard1  = useRef(null);
    const hCard2  = useRef(null);
    const hCard3  = useRef(null);
    const hCard4  = useRef(null);

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

    const [lineHight,setLineHeight] = React.useState(0);
  
    useEffect(()=>{


        const sections = gsap.utils.toArray(".hscrol-container section");
        const mask = document.querySelector(".mask");

        // Scroll animation for sections
        // let scrollTween = gsap.to(sections, {
        //     xPercent: -100 * (sections.length - 1),
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: ".hscrol-container",
        //         pin: true,
        //         scrub: 1,
        //         end: "+=3000",
        //         markers: true,
        //     },
        // });

        const scrollContainer = horizontalScrollContainerRef.current;
        const scrollLineContainer = horizontalScrollLineContainerRef.current;
        if(scrollContainer){

            // const scrollTween = gsap.to(scrollContainer,{
            //     xPercent:-100 *
            // })
            //
            // gsap.to(scrollLineContainer, {
            //     marker:true,
            //     width: "100%",
            //     pin:true,
            //     start: "top top",
            //     scrollTrigger: {
            //         trigger: ".storysection",
            //         start: "top left",
            //         scrub: 1
            //     }
            // });

            ScrollTrigger.create({
                markers:true,
                trigger:'.storysection',
                start:"top top",
                end:"+=2500vh",
                scrub:1,
                // pin:true,
                onUpdate:(self)=>{
                    setLineHeight(self.progress * 100);

                    gsap.to(scrollLineContainer,{

                        width:`${100 * self.progress}%`,
                        // duration:0.5,
                        // ease:"none"

                        // ease:"power3.inOut"
                    })
                }
            })

            ScrollTrigger.create({
                markers:true,
                trigger:scrollContainer,
                start:"top top",
                end:"+=3000",
                scrub:1,
                pin:true,
                onUpdate:(self)=>{
                    gsap.to(scrollContainer,{
                        x:`${-387 * self.progress}vw`,
                        duration:0.5,
                        ease:"none"
                        // ease:"power3.inOut"
                    })

                    // gsap.to(scrollLineContainer,{
                    //     width:`${100 * self.progress}%`,
                    //     duration:0.5,
                    //     ease:"none"
                    //
                    //     // ease:"power3.inOut"
                    // })
                }
            })
        //
        //     const hCards=[
        //         {
        //             id:hCard1.current,
        //             endTranslateX:-1000,
        //             rotate:0
        //         },
        //         {
        //             id:hCard2.current,
        //             endTranslateX:-1000,
        //             rotate:0
        //         },
        //         {
        //             id:hCard3.current,
        //             endTranslateX:-1000,
        //             rotate:0
        //         },
        //         {
        //             id:hCard4.current,
        //             endTranslateX:-1000,
        //             rotate:0
        //         }
        //     ]
        //
        //
        //     hCards?.forEach(card=>{
        //         ScrollTrigger.create({
        //             trigger:card.id,
        //             start:"top top",
        //             end:"+=1200vh",
        //             scrub:1,
        //             onUpdate:(self)=>{
        //                 gsap.to(card.id,{
        //                     x:`${card.endTranslateX * self.progress}px`,
        //                     duration:0.5,
        //                     ease:"power3.out"
        //                 })
        //             }
        //         })
        //     })
        //
        }
    },[])


    return (
        <div ref={containerRef}>
            <Header/>
            <section
                className="min-h-[100vh] w-full relative flex-col flex justify-center items-center bg-black text-white py-[200px]">

                <p className="text-[10rem] text-white">We prove how</p>
                <p className="text-[10rem] text-white fm-reckless-n relative z-20">you are</p>
                <p className="text-[10rem] mt-[-70px] text-white fm-reckless-n relative z-20">outstanding</p>

                <MotionContainer style={{y: imageConatiner}} className="absolute top-[90%] z-10">

                    <Image

                        alt=""
                        src="https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-11-at-12.32.jpg"
                        objectFit="contain"
                        width={680}
                        height={383}

                    />

                </MotionContainer>
            </section>

            <section className="bg-black  text-white  pb-[50px]">
                <div className="container">


                    {
                        stories?.map((story, key) => (
                            <React.Fragment key={key}>
                                <SectionTitleTwo title={story.title}/>
                                <div className="mt-[50px] py-[100px]" key={key}>
                                    <div className="w-[50%] ml-auto pr-[20%] ">
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


            <section className="overflow-hidden bg-black relative">
                <div className={`bg-gray-500 h-[1px] w-full fixed top-[50%]`}>
                    <div className="bg-white h-[1px]  transition-all duration-500 ease-in-out"
                         ref={horizontalScrollLineContainerRef}></div>
                </div>
                <div
                    className="min-h-[100vh] pb-[8vh] flex items-center relative  box-border whitespace-normal hscrol-container bg-black"
                    ref={horizontalScrollContainerRef}
                >

                    <section className="relative w-[100vw] bg-black">
                        <div className="relative z-10 w-[100vw] h-[100vh] ">
                            <Image
                                fill
                                alt={""}
                                src="https://widewings.eu/wp-content/uploads/2022/12/Screenshot_5.jpg"
                                objectFit={"cover"}
                            />
                        </div>
                        <div className=" absolute left-[80%] z-20 ">
                            <p className="text-white flex flex-col flex-wrap h-[100vh] justify-center items-start   ">
                                <FontHeadXL>Our</FontHeadXL>
                                <FontHeadXL className="fm-reckless-n mt-[-7rem] pl-[10rem] "> process</FontHeadXL>
                            </p>
                        </div>
                    </section>
                    <section className=" storysection relative">

                        <div className="flex">
                            <section className=" relative ">

                                <div className="px-[5%] flex justify-start items-center   ">
                                    <div className="w-full">
                                        <FontHeadM className="fm-reckless-n px-[10%] text-white ">The Truth</FontHeadM>

                                        <div className="px-[10%] text-white">
                                            <div className='flex gap-[100px] '>
                                                <div className="w-[600px]">
                                                    <strong className="py-[50px] block ">O1 NEED</strong>
                                                    <span className="fm-reckless-n text-[1.2rem]">
                                                Finding out what our clients want or need to prove. What makes them
                                                outstanding?
                                            </span>
                                                </div>
                                                <div className="w-[600px]">
                                                    <strong className="py-[50px] block ">02 Discovery</strong>
                                                    <span className="fm-reckless-n text-[1.2rem]">
                                                Shadowing, interviewing, secret shopper, trying products – what do we do
                                                to find
                                                the real truth that makes those businesses outstand.
                                            </span>
                                                </div>

                                                <div className="w-[600px]">
                                                    <strong className="py-[50px] block ">03 Effect</strong>
                                                    <span className="fm-reckless-n text-[1.2rem]">
                                                <ul>
                                                    <li>Creative brief:</li>
                                                    <li>1.Understand</li>
                                                    <li>2.Remember</li>
                                                    <li>3.Feel</li>
                                                    <li>4.Believe</li>

                                                </ul>
                                            </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </section>
                            <section className=" relative bg-black">

                                <div className="px-[5%] flex justify-start items-center   ">
                                    <div className="w-full">
                                        <FontHeadM className="fm-reckless-n px-[10%] text-white">The story</FontHeadM>


                                        <div className="px-[10%] text-white">
                                            <div className='flex gap-[100px] '>
                                                <div className="w-[600px]">
                                                    <strong className="py-[50px] block ">01 Scenario</strong>
                                                    <span className="fm-reckless-n text-[1.2rem]">
                                                Our story telling technique – how do we transform client insights into stories that reach and engage audience. Methodology, that sets us apart from others.
                                            </span>
                                                </div>
                                                <div className="w-[600px]">
                                                    <strong className="py-[50px] block ">02 Implementation</strong>
                                                    <span className="fm-reckless-n text-[1.2rem]">
                                                Attention. Live presentations.
Criteria. Showcase guided by criteria.
Process. Emphasis on finding out the truth, translating it into story.
Experience – light, sound, comfort.
                                            </span>
                                                </div>

                                                <div className="w-[600px]">
                                                    <strong className="py-[50px] block ">03 Discovery</strong>
                                                    <span className="fm-reckless-n text-[1.2rem]">
                                                <ul>
                                                    <li>To maximise value of a single video</li>
                                                    <li>-Channels-Different cuts</li>
                                                    <li>-Adaptations</li>
                                                    <li>2.Untold Stories</li>

                                                </ul>
                                            </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </section>
                        </div>

                    </section>

                    <section className="relative w-[100vw] bg-black">
                        <div className="relative z-10 w-[100vw] h-[100vh] ">
                            <Image
                                fill
                                alt={""}
                                src="	https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.36.jpg"
                                objectFit={"cover"}
                            />
                        </div>
                    </section>

                </div>
            </section>

            <Fotter/>
        </div>
    );
}