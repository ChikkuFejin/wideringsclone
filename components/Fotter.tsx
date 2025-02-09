'use client';

import Link from "next/link";
import SessionBorderLine from "./sub/SessionBorder";
import StoryTittle from "./sub/StoryTittle";
import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {cn} from "@/Utils/lib";
import AngerLink from "@/components/UI/AngerLink";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);
export default function Fotter({
    className=''
                               }:{
    className?:string
}) {
    // gsap.registerPlugin(ScrollTrigger);
    const footerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {

        gsap.set(".footer", { yPercent: -50 });
        const uncover = gsap.timeline({ paused: true });
        uncover.to(".footer", { yPercent: 0, ease: "none" });

        ScrollTrigger.create({
            trigger: ".conclusion",
            start: "bottom bottom",
            end: "+=90%",
            animation: uncover,
            scrub: true,
            // markers: true, // Debug markers for ScrollTrigger
        });

        // Refresh ScrollTrigger when component is mounted
        ScrollTrigger.refresh();
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);



    return(
        <>
        <div className='conclusion'>

        </div>
        <div className='min-h-[100dvh]  lg:h-[135vh] w-[100vw] overflow-hidden relative z-20 bg-black'>


        <section className={cn("footer w-full z-[-100] pt-[20px]  min-h-[100dvh]  left-0 bottom-0 transition-all duration-3 ease-out bg-black",className)}  ref={footerRef}>
            <div className="container  pb-[100px]" >
            <SessionBorderLine mode="light"/>
            <div className="mt-[60px]">
            <StoryTittle title='Lets Talk' mode="light"/>

            <h2 className="text-[4.5rem] md:text-[7rem] text-white font-normal ">
                <span>How</span> <span className="fm-reckless">outstanding</span>
            </h2>
            <h2 className="text-[4.5rem] md:text-[7rem] text-white ">
                <span className="fm-reckless">are you?</span>
            </h2>
            </div>  

            <div className="my-[100px]">
                <AngerLink href={'/contact'} className={'btn '}

                           style={{'backgroundColor':'white','color':'black'}}
                >Contact Us
                </AngerLink>
            </div>


            <div className="text-white mb-4">
                <div className="grid md:grid-cols-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {/* <ul>
                    <li className="mb-2" ><Link href="#" >Instagram</Link></li>
                    <li className="mb-2" >  <Link href="#"  >Linkedin</Link></li>
                    <li className="mb-2" >  <Link href="#"  >Facebook</Link></li>
                </ul> */}

                <ul>
                    <li className="mb-2" ><AngerLink href="/portfolio" >Portfolio</AngerLink></li>
                    <li className="mb-2" >  <AngerLink href="/services"  >Services</AngerLink></li>
                    <li className="mb-2" >  <AngerLink href="/about"  >About</AngerLink></li>
                </ul>

                <ul>
                    <li className="mb-2" ><Link href="#" ></Link></li>
                    <li className="mb-2" >  <AngerLink href="#"  >CRM platform</AngerLink></li>
                    <li className="mb-2" >  <AngerLink href="#"  >EC projects</AngerLink></li>
                </ul>
                    </div>


                </div>
                
            </div>
            <div>
            <div className=" text-white  flex justify-between items-center ">
                <p className="text-sm text-white flex flex-nowrap gap-2">&copy; 2025   <Image width={60} height={50}     src="/assets/images/logo_light.png" alt="Scilens Logo" />
                . All rights reserved.</p>
                {/* <Image width={55} height={50}     src="/assets/images/logo_light.png" alt="Scilens Logo" /> */}

            </div>
            </div>
            
            </div>
           

        </section>

        </div>
            </>
            )
}