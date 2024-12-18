import Link from "next/link";
import SessionBorderLine from "./sub/SessionBorder";
import StoryTittle from "./sub/StoryTittle";
import { Button } from "./UI/Button";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Fotter() {

    const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (footer) {
      gsap.fromTo(
        footer,
        { y: "100%" }, // Start position (off-screen bottom)
        {
          y: "0%", // End position (fully visible)
          scrollTrigger: {
            trigger: footer,
            start: "top bottom", // When the top of the footer reaches the bottom of the viewport
            end: "bottom bottom", // When the bottom of the footer aligns with the bottom of the viewport
            scrub: 1, // Smooth transition
          },
        }
      );
    }
  }, []);

    return(
        <section className="footer w-full z-[-100] bg-[#bc695f]  fixed left-0 bottom-0 transition-all duration-3 ease-out"  ref={footerRef}>
            <div className="container  pb-[100px]" >
            <SessionBorderLine mode="light"/>
            <div className="mt-[60px]">
            <StoryTittle title='Lets Talk' mode="light"/>

            <h2 className="text-[10vw] text-white md:text-[5vw] ">
                <span>How</span> <span className="fm-reckless">outstanding</span>
            </h2>
            <h2 className="text-[10vw] text-white md:text-[5vw]">
                <span className="fm-reckless">are you?</span>
            </h2>
            </div>  

            <div className="my-[100px]">
                <Button>Contact Us</Button>
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
    )
}