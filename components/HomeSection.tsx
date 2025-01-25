import { cn } from "@/Utils/lib";
import React, {useEffect} from "react";
import AboutUs from "./sub/AboutUs";
import SessionBorderLine from "./sub/SessionBorder";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import ScrollShowFade from "./sub/ScrollShowFade";

gsap.registerPlugin(ScrollTrigger);
export default function HomeSection() {

    useEffect(() => {
        const heroContainer   = document.querySelector('.hero-container');
        const heroVideo =document.querySelector('.hero-video');

        gsap.to(heroVideo,{
            scale:1,
            ease:'none',
            scrollTrigger:{
                trigger:heroContainer,
                start:'top top',
                end :"top bottom",
                onEnter:()=>{
                    gsap.to(heroVideo, {scale: 1, ease: 'none'})
                },
                onEnterBack:()=>{
                    gsap.to(heroVideo, {scale: 0.9, ease: 'none'})
                }
            }
        })

        gsap.to(heroVideo, {
            y: '-40%', // Adjust this value for the intensity of the effect
            ease: 'none',
            scrollTrigger: {
                trigger: heroContainer,
                start: 'top bottom', // Start when the container enters the viewport
                end: 'bottom top',  // End when the container exits the viewport
                scrub: true,        // Smoothly scrubs the animation
            }
        });

    }, []);

  return (
    <>
<ScrollShowFade>
    <div className="mt-[120px] relative z-10 hero-container">
       
      <div className="text-[4.5rem] md:text-[8rem] z-[101] relative  leading-[120%] font-auto container">
        <span className="block"> We Reflect
        </span>
         <strong className="fm-reckless">Your</strong>
        <div className="text-right">
          <span> Remarkable </span>
          <strong className="fm-reckless block"> Potential</strong>
        </div>
      </div>

      <div>

        <div
        className={cn(' z-[100]  mx-auto scale-[90%] bg-black hero-video',)}

      >

        <video
         
          src='/assets/1BackgroundHeroPortionVideo.mp4'
          width='100%'
          height='100%'
          autoPlay
          muted
          loop	
          
        />

      </div>
     
      </div>
    </div>


    <section className="  container ">
        <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-9">
            <AboutUs content="SCILENS brings ideas to life with creativity and strategy. From crafting stunning visuals to building unforgettable brands, we specialize in shaping digital experiences that captivate and connect. Whether it’s eye-catching ad videos, seamless websites, or impactful social media campaigns, we create stories that leave a lasting impression.
"/>
            </div>
            <div className="col-span-12 md:col-span-3 hidden md:block ">
                <div className="relative h-full">
                <img src="/assets/Logo.png" alt="section1" className="w-[100%] absolute bottom-0" />

                </div>
            </div>
        </div>

        
        <SessionBorderLine/>

        
    </section>
   
    </ScrollShowFade>
    </>
  );
}
