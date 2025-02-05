
"use client"

import Fotter from "@/components/Fotter";
import Header from "@/components/Header";
import AboutOurClients from "@/components/sub/AboutOurClients";
import { MotionContainer } from "@/components/sub/MotionContainer";
import SectionTitle from "@/components/sub/SectionTitle";
import FontHeadM from "@/components/UI/font/FontHeadM";
import FontHeadS from "@/components/UI/font/FontHeadS";
import { ParaReckless } from "@/components/UI/font/ParaReckless";
import { UpToTopAnimeChild } from "@/components/UI/UpToTopAnime";
import useResponsive from "@/Hook/useResponsive";
import { useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage(){
    const isMobile =useResponsive();
    
    const containerRef = useRef(null);
    const horizontalScrollContainerRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} =useScroll({
        target:containerRef,
        offset:['start end','end start']
    })


    const imageConatiner = useTransform(scrollYProgress,[0,1],[0,750]);
    const rightConatiner = useTransform(scrollYProgress,[0,1],[0,-650]);
    const leftConatiner = useTransform(scrollYProgress,[0,1],[0,-100]);

    const hCard1  = useRef(null);
    const hCard2  = useRef(null);
    const hCard3  = useRef(null);
    const hCard4  = useRef(null);

    
  
    useEffect(()=>{

        const scrollContainer = horizontalScrollContainerRef.current;
        if(scrollContainer){
            ScrollTrigger.create({
                
                trigger:scrollContainer,
                start:"top top",
                end:"+=8000vh",
                scrub:1,
                pin:true,
                onUpdate:(self)=>{
                    gsap.to(scrollContainer,{
                        x:`${-420 * self.progress}vw`,
                        duration:0.5,
                        ease:"none"
                        // ease:"power3.inOut" 
                    })
                }
            })

            const hCards=[
                {
                    id:hCard1.current,
                    endTranslateX:-1000,
                    rotate:0
                },
                {
                    id:hCard2.current,
                    endTranslateX:-1000,
                    rotate:0
                },
                {
                    id:hCard3.current,
                    endTranslateX:-1000,
                    rotate:0
                },
                {
                    id:hCard4.current,
                    endTranslateX:-1000,
                    rotate:0
                }
            ]
        

            hCards?.forEach(card=>{
                ScrollTrigger.create({
                    trigger:card.id,
                    start:"top top",
                    end:"+=8000vh",
                    scrub:1,
                    onUpdate:(self)=>{
                        gsap.to(card.id,{
                            x:`${card.endTranslateX * self.progress}px`,
                            duration:0.5,
                            ease:"power3.out"
                        })
                    }
                })
            })

        }
    },[])


    return (
      <div ref={containerRef}>
        <Header />
        <section className="h-[100vh] flex justify-center items-center overflow-hidden">
          <div className="relative w-full h-[120vh] overflow-hidden">
            <MotionContainer
              isAnimation
              className="absolute top-0 w-full z-10 h-[150vh] "
              style={{ y: imageConatiner }}
            >
              <div className="relative w-full bg-transparent h-full">
                <Image
                  src="https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.45.jpg"
                  alt="About"
                  fill
                  objectFit="cover"
                />
              </div>
            </MotionContainer>
            <div className="my-[10rem] relative  z-20  w-full  h-[70vh]">
              <div className=" w-full h-full container relative">
                <div className=" absolute left-0 top-0  ">
                  <UpToTopAnimeChild isActive addDuration={400}>
                    <p className="text-white text-[15vw] md:text-[8vw] overflow-hidden">
                      Creativity
                    </p>
                  </UpToTopAnimeChild>
                  <UpToTopAnimeChild isActive addDuration={600}>
                    <p className="text-white text-[15vw] md:text-[8vw] fm-reckless  mt-[-1rem]">
                      based
                    </p>
                  </UpToTopAnimeChild>
                </div>
                <div className=" absolute right-0 bottom-0 ">
                  <p className="text-white text-[15vw] md:text-[8vw] flex justify-end">
                    On
                  </p>
                  <p className="text-white text-[15vw] md:text-[8vw] fm-reckless mt-[-1rem]">
                    knowledge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex md:flex-row flex-col flex-wrap container">
          <div className="basis-full order-1 md:order-none">
            <section className=" pt-[100px]">
              <div className="md:w-60%  flex flex-col gap-2">
                <FontHeadM>An engaging storyline</FontHeadM>
                <FontHeadM>and a long-lasting</FontHeadM>
                <FontHeadM>
                  reputation boost <span className="fm-reckless-n">for</span>
                </FontHeadM>
                <FontHeadM className="fm-reckless-n">your business.</FontHeadM>
              </div>
            </section>
          </div>
          <div className="basis-1/2 order-2 md:order-none"></div>
          <div className="basis-1/2 order-3 md:order-none">
            <MotionContainer style={{ y: rightConatiner }} isAnimation={!isMobile} >
              <div className="max-w-[400px] mb-[100px] mt-[100px] md:mt-[100px] ">
                <ParaReckless className="mb-[50px] ">
                    SciLens is an audiovisual communication agency surrounded by comprehensive storytellers
                    with years of experience in creative and artistic activities, advertising, and film industry
                    sectors.
                </ParaReckless>
                  <div className="py-[50px]"></div>
                {/*<ParaReckless className="mb-[50px] ">*/}
                {/*  We create not just beautiful visuals – but stories about*/}
                {/*  companies that are both true and meaningful for their clients.*/}
                {/*</ParaReckless>*/}
              </div>
            </MotionContainer>
          </div>

          <div className="basis-1/2 order-4 md:order-none">
            <MotionContainer style={{ y: leftConatiner }} className="md:mt-[-250px]" isAnimation={!isMobile}>
              <Image
                alt="About image"
                src={
                  "https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-12-at-18.39.jpg"
                }
                width={424}
                height={499}
                className="w-full md:w-[70%] mb-[100px] md:mb-[300px]"
              />
            </MotionContainer>
          </div>

          <div className="basis-1/2 mb-[100px] order-6 md:order-none" >
            <MotionContainer style={{ y: rightConatiner }}  isAnimation={!isMobile}>
              <Image
                alt="About image"
                src={
                  "https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-09-30-at-11.02-4.jpg"
                }
                width={515}
                height={604}
                className="w-full "
              />
            </MotionContainer>
          </div>

          <div className="basis-1/2 mb-[100px] md:mb-0 md:mt-[-200px] order-5 md:order-none">
          
          
            <div>
              <FontHeadS>For</FontHeadS>
              <FontHeadS className="fm-reckless-n mt-[-20px]">
                business
              </FontHeadS>
            </div>

            <div className="mt-[50px] max-w-[400px]">
              <ParaReckless>
                {" "}
                Help them reach their goals by bringing their standing-out
                stories to life. We know how to build a story from an insight
                and how to create a narrative from a seemingly mundane business
                process or practice.{" "}
              </ParaReckless>
            </div>
          </div>
          <div className="basis-1/2 order-7 md:order-none">
          <MotionContainer style={{ y: rightConatiner }} isAnimation={!isMobile}>
            <div className="mb-[50px]">
              <FontHeadS>For</FontHeadS>
              <FontHeadS className="fm-reckless-n mt-[-20px]">
                their clients
              </FontHeadS>
            </div>

            <div className="max-w-[400px]">
              <ParaReckless>
                Get an opportunity to understand the business from the inside
                through a much more human approach, and understand that it’s not
                all numbers and cubicles - it’s people, quirks, good intentions,
                ambitions, decisiveness, and time and again it’s about
                understanding what people out there need and want.
              </ParaReckless>
            </div>
            </MotionContainer>
          </div>
        </section>

        <section className="overflow-hidden">
          <div
            className="min-h-[100vh] pb-[8vh] flex items-center relative right-[-100%] box-border whitespace-normal md:mt-[-500px]"
            ref={horizontalScrollContainerRef}
          >
            <div className="absolute top-[15%] bottom-[10%] h-[75%] left-[20%] right-[8%] w-[100rem] md:w-[200rem] whitespace-nowrap">
              <ul className="absolute top-0 left-0 right-0 bottom-0 flex justify-between translate-x-[30rem]  md:translate-x-[40rem] ml-[200px]">
                <li className="flex items-end relative" ref={hCard1}>
                  <div className="z-[-1]  pb-[56.4%] absolute  w-[70vw] md:w-[36vw] my-auto">
                    <Image
                      src="https://widewings.eu/wp-content/uploads/2023/01/003-scaled.jpg"
                      alt=""
                      width={405}
                      height={228}
                    />
                  </div>
                </li>
                <li className="items-end relative" ref={hCard2}>
                  <div className="z-[-1]  pb-[56.4%] absolute  w-[70vw] md:w-[36vw] my-auto">
                    <Image
                      src="https://widewings.eu/wp-content/uploads/2023/01/003-scaled.jpg"
                      alt=""
                      width={405}
                      height={228}
                    />
                  </div>
                </li>
                <li className="relative items-end" ref={hCard3}>
                  <div className="absolute z-[-1]  pb-[56.4%] bottom-0 w-[70vw] md:w-[36vw] my-auto">
                    <Image
                      src="https://widewings.eu/wp-content/uploads/2023/01/003-scaled.jpg"
                      alt=""
                      width={405}
                      height={228}
                    />
                  </div>
                </li>
                <li className="flex items-end relative" ref={hCard4}>
                  <div className="z-[-1] top-0 pb-[56.4%] absolute  w-[70vw] md:w-[36vw] ">
                    <Image
                      src="https://widewings.eu/wp-content/uploads/2023/01/003-scaled.jpg"
                      alt=""
                      width={405}
                      height={228}
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-[30vh] md:text-[66vh] whitespace-nowrap px-[128px] ">
              <span>
                We Are <em>Video artisans</em>
              </span>
            </div>
          </div>
        </section>

        <section className="mt-[-300px] md:mt-[-550px]">
          <div className="container">
            <SectionTitle />
            <AboutOurClients />
          </div>
        </section>
        <Fotter />
      </div>
    );
}