import { cn } from "@/Utils/lib";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { Button } from "./UI/Button";
import BorderLine from "./UI/BorderLine";
import ScrollToShow from "./sub/ScrollToShow";
import AnimationPara from "./sub/AnimationPara";
import AboutUs from "./sub/AboutUs";
import SessionBorderLine from "./sub/SessionBorder";
import { useTransform, useViewportScroll,motion } from "framer-motion";

export default function HomeSection() {
    const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
    const scrollRef = React.useRef(0);
    const [sessionPlayer, setSessionPlayer] = React.useState(0);
    let videPercentage = 90 + (sessionPlayer/1000)*100;
    if(videPercentage > 100){
        videPercentage = 100;
    }

    useEffect(() => {
        const handleScroll = () => {
            if(scrollRef.current < window.scrollY){
                setSessionPlayer(window.scrollY);
            }else{
                setSessionPlayer(window.scrollY);
            }
            scrollRef.current = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <>
    <div className="mt-[100px] position-relative z-10">
      <div className="text-[4.5rem] md:text-[8rem]  leading-[120%] font-auto container">
        <span className="block"> We Prove </span>
        <strong className="fm-reckless">How</strong>
        <div className="text-right">
          <span> Outstanding </span>
          <strong className="fm-reckless block">You Are</strong>
        </div>
      </div>
      <div>
        <motion.div
        className={cn('player-wrapper z-[-1] mt-[-116px] mx-auto',)}
        style={{ y: y2,width:`${videPercentage}%`}}
      >
    
        <ReactPlayer
          className='react-player'
          url='https://vimeo.com/1031646239'
          width='100%'
          height='100%'
          playing
          muted
          loop	
          
        />

      </motion.div>
      </div>
    </div>


    <section className="mt-[80px] container">
        <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-9">
            <AboutUs content="Wide Wings is an audiovisual communication agency surrounded by comprehensive storytellers with years of experience in creative and artistic activities, advertising, and film industry sectors."/>
            </div>
            <div className="col-span-12 md:col-span-3 hidden md:block ">
                <div className="relative h-full">
                <img src="/assets/images/about-icon.png" alt="section1" className="w-[60%] absolute bottom-0" />

                </div>
            </div>
        </div>

        
        <SessionBorderLine/>

        
    </section>
   

    </>
  );
}
