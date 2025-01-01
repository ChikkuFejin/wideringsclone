import { cn } from "@/Utils/lib";
import React from "react";
import AboutUs from "./sub/AboutUs";
import SessionBorderLine from "./sub/SessionBorder";
import { useTransform, useViewportScroll,motion } from "framer-motion";

export default function HomeSection() {
    const { scrollY } = useViewportScroll();
  // const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
    // const scrollRef = React.useRef(0);
    const sessionPlayer = 0;
    // const [sessionPlayer, setSessionPlayer] = React.useState(0);
    let videPercentage = 90 + (sessionPlayer/1000)*100;
    if(sessionPlayer > 50){
        videPercentage = 100;
    }else{
      videPercentage = 90;
    }


    
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if(scrollRef.current < window.scrollY){
    //             setSessionPlayer(window.scrollY);
    //         }else{
    //             setSessionPlayer(window.scrollY);
    //         }
    //         scrollRef.current = window.scrollY;
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

  return (
    <>

    <div className="mt-[100px] position-relative z-10">
      <div className="text-[4.5rem] md:text-[8rem] z-[101] relative  leading-[120%] font-auto container">
        <span className="block"> We Reflect Your 
        </span>
        {/* <strong className="fm-reckless">How</strong> */}
        <div className="text-right">
          <span> Remarkable </span>
          <strong className="fm-reckless block"> Potential</strong>
        </div>
      </div>
      <div>
    
        <motion.div
        className={cn(' z-[100] mt-[-116px] mx-auto transition-all ease-in-out duration-[1s] bg-black',)}
        style={{ y: y2,width:`${videPercentage}%`}}
      >

        <video
         
          src='/assets/1BackgroundHeroPortionVideo.mp4'
          width='100%'
          height='100%'
          autoPlay
          muted
          loop	
          
        />

      </motion.div>
      </div>
    </div>


    <section className="mt-[80px] container">
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
   

    </>
  );
}
