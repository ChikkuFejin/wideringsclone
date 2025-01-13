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
    const movingDevRef = useRef<HTMLDivElement>(null);
    const sectionTwo = useRef<HTMLDivElement>(null);
    const headerRef = useRef(null);


    useEffect(() => {
        const container = containerRef.current;
        const header = headerRef.current;
        const sections = gsap.utils.toArray<HTMLElement>(".section");
        const startImage = document.querySelector('.start-image');
        const endImage = document.querySelector('.end-image');

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
                onUpdate: (self) => {

                    const progress = self.progress * (sections.length - 1);
                    if(movingDevRef.current){
                        const movingDev =  movingDevRef.current;
                        gsap.set(movingDev, { x: -progress * movingDev?.offsetWidth || 0  });
                            
                    }

                    const imgSections = gsap.utils.toArray<HTMLElement>(".moving-dev-img");
                    // debugger
                    imgSections.forEach((element,index)=>{
                        gsap.set(element, { x: -progress * (index +200) });
                    })


                },
                onLeave:()=>{
                    gsap.to(endImage,{ease:"none",scale:0.9})
                },
                onEnterBack:()=>{
                    gsap.to(endImage,{ease:"none",scale:1})
                }

            },
        });


        ScrollTrigger.create({
            trigger:container,
            start:'+=200px center',
            end :"top center",
            onUpdate:()=>{
                gsap.to(startImage,{ease:"none",scale:1})
            },
            onLeaveBack:()=>{
                gsap.to(startImage,{scale:0.9,ease:"none"})
            }
        })
        // Sticky Header Trigger

        const triggerElement = sectionTwo.current;
        const triggerWidth = triggerElement?.offsetWidth || 0;
        const viewportWidth = window.innerWidth;

        ScrollTrigger.create({
            trigger: sectionTwo.current, // Second section
            start: `+=${(triggerWidth / 2) + 200}px`, // Adjust as needed
            end: `+=${viewportWidth * 2}px`, // Adjust as needed
            onUpdate:(self)=>{
                console.log("offsetWidth",self.progress * 100);
                gsap.set('.sticky-header',{
                    display:"flex"
                })
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
        <div className="overflow-hidden bg-black services-h-line">
            <div ref={headerRef} className="sticky-header bg-transparent">
                <div className={`bg-gray-500 h-[1px]  sticky-title sticky top-[20%] w-[100vw]  `}
                    >

                    <div className="bg-white w-0 h-[1px] sticky-header-line-in  "
                         ></div>
                </div>
            </div>
            <div ref={containerRef} className="horizontal-scroll-container">
                <div className="section relative ">

                    <div className="absolute z-10 left-0 w-[100vw] h-[100vh] scale-[90%] start-image">
                        <Image
                            fill
                            alt={""}
                            src="https://widewings.eu/wp-content/uploads/2022/12/Screenshot_5.jpg"
                            objectFit={"cover"}

                        />
                    </div>


                    <div className=" absolute left-[67%] z-20 " ref={movingDevRef}>
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
                           className="absolute left-[20%] w-[20%] bottom-[5%] z-[-1] moving-dev-img"

                    />
                    <Image width='584' height={329}
                           src="https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.39-1-1.jpg"
                           alt=""
                           className="absolute right-[20%] w-[20%] top-[8%] z-[-1] moving-dev-img"

                    />
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


                    </div>

                </div>
                <div className="section  bg-black " ref={sectionTwo}>
                    <Image width='584' height={329}
                           src="https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.40-1-1.jpg"
                           alt=""
                           className="absolute left-[20%] w-[20%] bottom-[5%] z-[-1] moving-dev-img"

                    />
                    <Image width='584' height={329}
                           src="https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.39-1-1.jpg"
                           alt=""
                           className="absolute right-[20%] w-[20%] top-[8%] z-[-1] moving-dev-img"

                    />
                    <div>
                        <FontHeadM className="fm-reckless-n px-[10%] text-white ">The story</FontHeadM>
                        <ul className="flex mt-[50px]">
                            <li className="w-[600px] pr-[10%]">
                                <p className="py-[50px] block text-white uppercase">O1 Scenario</p>
                                <span className="fm-reckless-n text-[1.2rem]">
                                    Our story telling technique – how do we transform client insights into stories that reach and engage audience. Methodology, that sets us apart from others.
                                </span>
                            </li>

                            <li className="w-[600px] pr-[10%]">
                                <p className="py-[50px] block text-white uppercase">02 Implementation </p>
                                <span className="fm-reckless-n text-[1.2rem]">
                                                    Attention. Live presentations.
Criteria. Showcase guided by criteria.
Process. Emphasis on finding out the truth, translating it into story.
Experience – light, sound, comfort.
                                                </span>
                            </li>

                            <li className="w-[600px] pr-[10%]">
                                <p className="py-[50px] block text-white uppercase">03 Discovery</p>
                                <span className="fm-reckless-n text-[1.2rem]">
                                                        <ul>
                                                            <li>To maximise value of a single video</li>
                                                    <li>-Channels-Different cuts</li>
                                                    <li>-Adaptations</li>
                                                    <li>2.Untold Stories</li>
                                                        </ul>
                                            </span>
                            </li>


                        </ul>


                    </div>

                </div>

                <div className="section end-section ">

                    <div className="absolute z-10 left-0 w-[100vw] h-[100vh] scale-[100%] end-image">
                        <Image
                            fill
                            alt={""}
                            src="https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.36.jpg"
                            objectFit={"cover"}

                        />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HorizontalScroll;
