'use client';

import Link from "next/link";
import SessionBorderLine from "./sub/SessionBorder";
import StoryTittle from "./sub/StoryTittle";
import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {cn} from "@/Utils/lib";
import AngerLink from "@/components/UI/AngerLink";


gsap.registerPlugin(ScrollTrigger);
export default function Fotter({
    className='bg-[#c76c61]'
                               }:{
    className?:string
}) {
    // gsap.registerPlugin(ScrollTrigger);
    const footerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const footer = footerRef.current;

  //   if (footer) {
  //     gsap.fromTo(
  //       footer,
  //       { y: "100%" }, // Start position (off-screen bottom)
  //       {
  //         y: "0%", // End position (fully visible)
  //         scrollTrigger: {
  //           trigger: footer,
  //           start: "top bottom", // When the top of the footer reaches the bottom of the viewport
  //           end: "bottom bottom", // When the bottom of the footer aligns with the bottom of the viewport
  //           scrub: 1, // Smooth transition
  //         },
  //       }
  //     );
  //   }
  // }, [footerRef]);


    useEffect(() => {


        // Set initial footer container position
        gsap.set(".footer", { yPercent: -50 });

        // Create timeline for uncover animation
        const uncover = gsap.timeline({ paused: true });
        uncover.to(".footer", { yPercent: 0, ease: "none" });

        // Create ScrollTrigger for the animation
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
        <div className='h-[130vh] w-[100vw] overflow-hidden'>


        <section className={cn("footer w-full z-[-100] pt-[20px]  h-[130vh]  left-0 bottom-0 transition-all duration-3 ease-out",className)}  ref={footerRef}>
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

                           style={{'backgroundColor':'white','color':'red'}}
                >Contact Us
                </AngerLink>
            </div>


            <div className="text-white mb-4">
                <div className="grid grid-cols-2">
                    <div className="grid grid-cols-3 gap-3">
                    <ul>
                    <li className="mb-2" ><Link href="#" >Instagram</Link></li>
                    <li className="mb-2" >  <Link href="#"  >Linkedin</Link></li>
                    <li className="mb-2" >  <Link href="#"  >Facebook</Link></li>
                </ul>

                <ul>
                    <li className="mb-2" ><Link href="#" >Portfolio</Link></li>
                    <li className="mb-2" >  <Link href="#"  >Services</Link></li>
                    <li className="mb-2" >  <Link href="#"  >About</Link></li>
                </ul>

                <ul>
                    <li className="mb-2" ><Link href="#" ></Link></li>
                    <li className="mb-2" >  <Link href="#"  >CRM platform</Link></li>
                    <li className="mb-2" >  <Link href="#"  >EC projects</Link></li>
                </ul>
                    </div>


                </div>
                
            </div>
            
            </div>
           

        </section>

        </div>
            </>
            )
}