
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

gsap.registerPlugin(ScrollTrigger);

export default function ServicePage(){    
    const containerRef = useRef(null);
    const horizontalScrollContainerRef = useRef<HTMLDivElement>(null);
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

  
    useEffect(()=>{

        const scrollContainer = horizontalScrollContainerRef.current;
        if(scrollContainer){
            ScrollTrigger.create({
                
                trigger:scrollContainer,
                start:"top top",
                end:"+=900vh",
                scrub:1,
                pin:true,
                onUpdate:(self)=>{
                    gsap.to(scrollContainer,{
                        x:`${-550 * self.progress}vw`,
                        duration:0.1,
                        ease:"power3.inOut" 
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
                    end:"+=1200vh",
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
        <section className="min-h-[100vh] w-full relative flex-col flex justify-center items-center bg-black text-white py-[200px]">

                <p className="text-[10rem] text-white">We prove how</p>
                <p className="text-[10rem] text-white fm-reckless-n relative z-20">you are</p>
                <p className="text-[10rem] mt-[-70px] text-white fm-reckless-n relative z-20">outstanding</p>

               <MotionContainer style={{y:imageConatiner}} className="absolute top-[90%] z-10">

                    <Image
                        
                        alt=""
                        src="https://widewings.eu/wp-content/uploads/2022/12/Screen-Shot-2022-10-11-at-12.32.jpg"
                        objectFit="contain"
                        width={680}
                        height={383}                    
                        
                    />
               
               </MotionContainer>
        </section>

        <section  className="bg-black  text-white  pb-[50px]">
            <div className="container">

            
            {
                stories?.map((story,key)=>(
                    <>
                    <SectionTitleTwo title={story.title}/>
                    <div className="mt-[50px] py-[100px]" key={key}>
                    <div className="w-[50%] ml-auto pr-[20%] ">
                        {story.content.map((content,index)=>(
                            <ParaReckless className="block mb-[30px] text-[1.3rem] text-white" key={index}>
                                {content}
                        </ParaReckless>
                        ))}

                    </div>
                </div>
                </>
                ))
            }



            </div>

           


        </section>
        <section className="overflow-hidden">
          <div
            className="min-h-[100vh] pb-[8vh] flex items-center relative right-[-100%] box-border whitespace-normal "
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
        <Fotter />
      </div>
    );
}