import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './horizontalScroll.css';
import Image from "next/image";
import FontHeadXL from "@/components/UI/font/FontHeadXL";
import HsServiceSectionTwo from "./HsServiceSectionTwo";


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
        console.log("sections",sections);
        const startImage = document.querySelector('.start-image');
        const endImage = document.querySelector('.end-image');

          const viewportWidth = window.innerWidth; // Get dynamic viewport width


        // Horizontal Scroll
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            duration:0.9,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=30000`,
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
                        gsap.set(element, { x: -progress * (index +50) });
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
    

        ScrollTrigger.create({
            // markers:true,
            trigger: sectionTwo.current, // Second section
            start: `+=${(triggerWidth / 2) + 2000}px`, // Adjust as needed
            end: `+=${26000 - (viewportWidth * 3)}px`, // Adjust as needed
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


                    <div className=" absolute left-[37%] md:left-[67%] z-20 text-white" ref={movingDevRef}>
                        <p className="text-white flex flex-col flex-wrap h-[100vh] justify-center items-start   ">
                            <FontHeadXL theme='dark'>Our</FontHeadXL>
                            <FontHeadXL theme='dark' className="fm-reckless-n mt-[-7rem] pl-[10rem] "> Services</FontHeadXL>
                        </p>
                    </div>
                </div>
                <HsServiceSectionTwo
                    innerRef={sectionTwo}
                    bgImages={[
                        "https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.40-1-1.jpg",
                        "https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.39-1-1.jpg"
                    ]}
                    heading="Branding"
                    contents={[
                        {
                            title:'O1 Logo  Design',
                            content:"Finding out what our clients want or need to prove. What makes them outstanding?"
                        },
                        {
                            title:'02 Brand Identity ',
                            content:"Shadowing, interviewing, secret shopper, trying products – what do we do to find the real truth that makes those businesses outstand."
                        },
                        {
                            title:'03 Brand Guideline',
                            content:<ul>
                            <li>Creative brief:</li>
                            <li>1.Understand</li>
                            <li>2.Remember</li>
                            <li>3.Feel</li>
                            <li>4.Believe</li>
                        </ul>
                        }

                    ]}
                />

<HsServiceSectionTwo
                    innerRef={sectionTwo}
                    bgImages={[
                        "https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.40-1-1.jpg",
                        "https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.39-1-1.jpg"
                    ]}
                    heading="Social Media"
                    contents={[
                        {
                            title:'O1 Marketing',
                            content:"Finding out what our clients want or need to prove. What makes them outstanding?"
                        },
                        {
                            title:'02 Management',
                            content:"Shadowing, interviewing, secret shopper, trying products – what do we do to find the real truth that makes those businesses outstand."
                        },
                        {
                            title:'03 Content creation',
                            content:"Shadowing, interviewing, secret shopper, trying products – what do we do to find the real truth that makes those businesses outstand."
                        }

                    ]}
                />

<HsServiceSectionTwo
                    innerRef={sectionTwo}
                    bgImages={[
                        "https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.40-1-1.jpg",
                        "https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.39-1-1.jpg"
                    ]}
                    heading="Social Media"
                    contents={[
                        {
                            title:'O4 Google Ads',
                            content:"Finding out what our clients want or need to prove. What makes them outstanding?"
                        },
                        {
                            title:'05 Meta Ads',
                            content:"Shadowing, interviewing, secret shopper, trying products – what do we do to find the real truth that makes those businesses outstand."
                        },
                        {
                            title:'06 YouTube ads',
                            content:"Shadowing, interviewing, secret shopper, trying products – what do we do to find the real truth that makes those businesses outstand."
                        }

                    ]}

                    isHideHeading
                />

<HsServiceSectionTwo
                    innerRef={sectionTwo}
                    bgImages={[
                        "https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.40-1-1.jpg",
                        "https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.39-1-1.jpg"
                    ]}
                    heading="Search Engine Optimization"
                    contents={[
                        {
                            title:'O1 Google Ads',
                            content:"Finding out what our clients want or need to prove. What makes them outstanding?"
                        },
                        {
                            title:'02 Meta Ads',
                            content:"Shadowing, interviewing, secret shopper, trying products – what do we do to find the real truth that makes those businesses outstand."
                        },
                        {
                            title:'03 YouTube ads',
                            content:"Shadowing, interviewing, secret shopper, trying products – what do we do to find the real truth that makes those businesses outstand."
                        }

                    ]}

                />

<HsServiceSectionTwo
                    innerRef={sectionTwo}
                    bgImages={[
                        "https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.40-1-1.jpg",
                        "https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.39-1-1.jpg"
                    ]}
                    heading="Web Development"
                    contents={[
                        {
                            title:'O1 Business/Corporate Websites',
                            content:"Finding out what our clients want or need to prove. What makes them outstanding?"
                        },
                        {
                            title:'02 E-commerce Websites',
                            content:"Shadowing, interviewing, secret shopper, trying products – what do we do to find the real truth that makes those businesses outstand."
                        },
                        {
                            title:'03 Portfolio Websites',
                            content:"Shadowing, interviewing, secret shopper, trying products – what do we do to find the real truth that makes those businesses outstand."
                        },
                        {
                            title:' 04 Blog Websites',
                            content:"Shadowing, interviewing, secret shopper, trying products – what do we do to find the real truth that makes those businesses outstand."
                        }
                       

                    ]}

                />

<HsServiceSectionTwo
                    innerRef={sectionTwo}
                    bgImages={[
                        "https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.40-1-1.jpg",
                        "https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.39-1-1.jpg"
                    ]}
                    heading="Media Production"
                    contents={[
                        {
                            title:'O1 Product Photography & Shoots',
                            content:"Finding out what our clients want or need to prove. What makes them outstanding?"
                        },
                        {
                            title:'02 Promotional videos for brands ',
                            content:"Shadowing, interviewing, secret shopper, trying products – what do we do to find the real truth that makes those businesses outstand."
                        },
                        {
                            title:'03 Podcasts',
                            content:"Shadowing, interviewing, secret shopper, trying products – what do we do to find the real truth that makes those businesses outstand."
                        },
                        {
                            title:'04 YouTube Video Production',
                            content:"Shadowing, interviewing, secret shopper, trying products – what do we do to find the real truth that makes those businesses outstand."
                        }
                       

                    ]}

                />


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
