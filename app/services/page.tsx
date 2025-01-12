
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
    const stickyTitleRef = useRef(null);
    

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
        const stickyTitle = document.querySelector('.sticky-title');
        gsap.to(sections, {
            xPercent: -300, // Scroll through all 4 sections (300% shift for 4 sections)
            ease: 'none',
            scrollTrigger: {
                trigger: '.hscrol-container',
                pin: true,
                scrub: 1,
                markers: true,
                end: () => `+=${sections.length * window.innerWidth}`, // End after scrolling through all sections
            },
        });

        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".section-sticky", // Start pinning when .section-sticky enters the viewport
        //         start: "top top", // When the top of .section-sticky hits the top of the viewport
        //         end: () => "+=" +( document.querySelector(".section-3").offsetHeight || 0), // Stop pinning after Section 3
        //         pin: ".sticky-title", // Pin the sticky title
        //         scrub: true, // Smooth pinning behaviors
        //         markers: true, // Enable markers for debugging
        //         onEnter: () => console.log("Pinned title activated"),
        //         onLeave: () => console.log("Pinned title deactivated"),
        //     },
        // });

        // gsap.to(stickyTitleRef.current, {
        //     rotation: 360, // Rotate 360 degrees
        //     duration: 1, // Rotation duration
        //     scrollTrigger: {
        //         trigger: '.section-sticky',
        //         start: 'top top',
        //         end: '+=4000vh',
        //         // pin : '.sticky-title',
        //         scrub: true, // Smooth animation while scrolling
        //         markers: true, // Enable markers to see ScrollTrigger boundaries
        //         onEnter: () => console.log('Sticky section entered'),
        //         onLeave: () => console.log('Sticky section left'),
        //     },
        // });

        // ScrollTrigger.create({
        //     trigger: '.section-sticky',
        //     start: 'top top',
        //     endTrigger: '.hscrolsection:nth-child(3)',
        //     end: 'bottom top',
        //     toggleClass: { targets: '.sticky-title', className: 'active' },
        //     pin: '.sticky-title',
        //     scrub: true,
        //     onUpdate: (self) => {
        //         console.log('Scroll progress:', self.progress); // Logs the scroll progress
        //         console.log('Direction:', self.direction);     // Logs the scroll direction
        //     },
        //     onEnter: () => console.log('Entered Section 2'),
        //     onLeave: () => console.log('Left Section 2'),
        //     onEnterBack: () => console.log('Re-entered Section 2'),
        //     onLeaveBack: () => console.log('Left Section 2 backward'),
        // });

        // ScrollTrigger.create({
        //     trigger: '.section-sticky',
        //     start: "top left", // When the second section reaches the top of the viewport
        //     // endTrigger: '.hscrolsection:nth-child(3)', // End when the third section ends
        //     end: '+=4000vh',
        //     // toggleClass: { targets: stickyTitle, className: 'active' }, // Add a class for custom styles if needed
        //     pin: '.sticky-title', // Pin the title
        //     scrub: true,
        //     markers: true,
        // });

        // gsap.to(mask, {
        //     width: "100%",
        //     scrollTrigger: {
        //         trigger: ".wrapper",
        //         start: "top left",
        //         scrub: 1
        //     }
        // });




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

                <div
                    className="min-h-[100vh] w-[400vw] pb-[8vh] flex flex-nowrap items-center relative  box-border whitespace-normal hscrol-container bg-black"
                    ref={horizontalScrollContainerRef}
                >

                    <section className="relative w-[100vw] bg-black hscrolsection">
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

                            <section className="hscrolsection section-sticky relative bg-black flex flex-nowrap shrink-0 h-[100vh] ">

                                <div className="px-[5%] flex justify-start items-center   ">
                                    <div className="w-full">
                                        <FontHeadM className="fm-reckless-n px-[10%] text-white ">The Truth</FontHeadM>
                                        <div className={`bg-gray-500 h-[1px]  sticky-title sticky top-[20%] w-[100vw] bg-red-400 h-[100px] `} ref={stickyTitleRef}>

                                            <div className="bg-white w-0 h-[1px]  transition-all duration-500 ease-in-out"
                                                 ref={horizontalScrollLineContainerRef}></div>
                                        </div>
                                        <div className="px-[10%] text-white">
                                            <ul className='flex gap-[100px] '>
                                                <li className="w-[600px]">
                                                    <strong className="py-[50px] block ">O1 NEED</strong>
                                                    <span className="fm-reckless-n text-[1.2rem]">
                                                Finding out what our clients want or need to prove. What makes them
                                                outstanding?
                                            </span>
                                                </li>
                                                <li className="w-[600px]">
                                                    <strong className="py-[50px] block ">02 Discovery</strong>
                                                    <span className="fm-reckless-n text-[1.2rem]">
                                                Shadowing, interviewing, secret shopper, trying products – what do we do
                                                to find
                                                the real truth that makes those businesses outstand.
                                            </span>
                                                </li>

                                                <li className="w-[600px]">
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
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </section>
                    <section className=" relative hscrolsection bg-black flex flex-nowrap shrink-0 h-[100vh] section-3">

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


                    <section className="relative hscrolsection w-[100vw] bg-black">
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