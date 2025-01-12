import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './horizontalScroll.css';
import Image from "next/image";
import FontHeadXL from "@/components/UI/font/FontHeadXL";
import FontHeadM from "@/components/UI/font/FontHeadM";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionTwo = useRef<HTMLDivElement>(null);
    const headerRef = useRef(null);


    useEffect(() => {
        const container = containerRef.current;
        const header = headerRef.current;
        const sections = gsap.utils.toArray<HTMLElement>(".section");

        // Horizontal Scroll
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=${container?.offsetWidth || 0}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                markers:true,
                onUpdate: (self) => {
                    const movingDev = document.querySelector('.moving-dev');
                    const progress = self.progress * (sections.length - 1);
                    gsap.set(movingDev, { x: -progress * Number(movingDev?.offsetWidth || 0) });
                }
            },
        });

        // Sticky Header Trigger
        ScrollTrigger.create({
            markers:true,
            trigger: sectionTwo.current, // Second section
            start: "+=1600vw", // Adjust as needed
            end: "+=3300vw", // Adjust as needed
            onUpdate:(self)=>{
                gsap.to('.sticky-header-line-in',{width:`${self.progress * 100}%`,ease:"none"})
            },
            onEnter: () => gsap.to(header, {  opacity: 1, duration: 0.5 }),
            onLeave: () => gsap.to(header, { opacity: 0, duration: 0.5 }),
            onLeaveBack: () => {

                gsap.to(header, {  opacity: 0, duration: 0.5 })
            },
            onEnterBack:()=>{
                gsap.to(header, {  opacity: 1, duration: 0.5 })
            }
        });
    }, []);

    return (
        <div className="overflow-hidden">
            <div ref={headerRef} className="sticky-header bg-transparent">
                <div className={`bg-gray-500 h-[1px]  sticky-title sticky top-[20%] w-[100vw]  `}
                    >

                    <div className="bg-white w-0 h-[1px] sticky-header-line-in  transition-all duration-500 ease-in-out"
                         ></div>
                </div>
            </div>
            <div ref={containerRef} className="horizontal-scroll-container">
                <div className="section relative " >
                    <div className="absolute z-10 left-0 w-[100vw] h-[100vh] ">
                        <Image
                            fill
                            alt={""}
                            src="https://widewings.eu/wp-content/uploads/2022/12/Screenshot_5.jpg"
                            objectFit={"cover"}
                        />
                    </div>
                    <div className=" moving-dev absolute left-[50%] z-20 ">
                        <p className="text-white flex flex-col flex-wrap h-[100vh] justify-center items-start   ">
                            <FontHeadXL>Our</FontHeadXL>
                            <FontHeadXL className="fm-reckless-n mt-[-7rem] pl-[10rem] "> process</FontHeadXL>
                        </p>
                    </div>
                </div>
                <div className="section section-2 bg-black " ref={sectionTwo}>
                    <Image width='584' height={329}
                           src="https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.40-1-1.jpg"
                           alt=""
                            className="absolute right-[30%] z-[1]"

                    />
                    <div className="right-[30%] ">
                        <ul className='flex justify-between items-end w-[100vw]'>

                            <li >
                                <div className="services-h-block-image object-fit">
                                    <Image width='584' height={329}
                                    src="https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.39-1-1.jpg"
                                    alt=""/></div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <FontHeadM className="fm-reckless-n px-[10%] text-white ">The Truth</FontHeadM>
                        <ul className="flex mt-[50px]">
                            <li className="w-[600px] pr-[10%]">
                                <p className="py-[50px] block text-white ">O1 NEED</p>
                                <span className="fm-reckless-n text-[1.2rem]">
                                    Finding out what our clients want or need to prove. What makes them
                                    outstanding?
                                </span>
                            </li>

                                <li className="w-[600px] pr-[10%]">
                                    <p className="py-[50px] block text-white">02 DISCOVERY </p>
                                    <span className="fm-reckless-n text-[1.2rem]">
                                                    Shadowing, interviewing, secret shopper, trying products – what do we do
                                                    to find
                                                    the real truth that makes those businesses outstand.
                                                </span>
                                </li>

                            <li className="w-[600px] pr-[10%]">
                                        <p className="py-[50px] block text-white">03 EFFECT</p>
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

                        {/*<ul className='flex gap-[100px] '>*/}
                        {/*    <li className="w-[600px]">*/}
                        {/*        <strong className="py-[50px] block ">O1 NEED</strong>*/}
                        {/*        <span className="fm-reckless-n text-[1.2rem]">*/}
                        {/*                        Finding out what our clients want or need to prove. What makes them*/}
                        {/*                        outstanding?*/}
                        {/*                    </span>*/}
                        {/*    </li>*/}
                        {/*    <li className="w-[600px]">*/}
                        {/*        <strong className="py-[50px] block ">02 Discovery</strong>*/}
                        {/*        <span className="fm-reckless-n text-[1.2rem]">*/}
                        {/*                        Shadowing, interviewing, secret shopper, trying products – what do we do*/}
                        {/*                        to find*/}
                        {/*                        the real truth that makes those businesses outstand.*/}
                        {/*                    </span>*/}
                        {/*    </li>*/}

                        {/*    <li className="w-[600px]">*/}
                        {/*        <strong className="py-[50px] block ">03 Effect</strong>*/}
                        {/*        <span className="fm-reckless-n text-[1.2rem]">*/}
                        {/*                        <ul>*/}
                        {/*                            <li>Creative brief:</li>*/}
                        {/*                            <li>1.Understand</li>*/}
                        {/*                            <li>2.Remember</li>*/}
                        {/*                            <li>3.Feel</li>*/}
                        {/*                            <li>4.Believe</li>*/}

                        {/*                        </ul>*/}
                        {/*                    </span>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                    </div>

                </div>
                <div className="section" style={{backgroundColor: "#e9c46a"}}>
                    Section 3
                </div>
                <div className="section" style={{backgroundColor: "#e9c66a"}}>
                    Section 4
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
