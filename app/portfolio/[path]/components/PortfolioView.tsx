
"use client"

import Fotter from "@/components/Fotter";
import Header from "@/components/Header";
import { useEffect, useMemo, useRef} from "react";
import ScrollShowFade from "@/components/sub/ScrollShowFade";
import { useGlobelContext } from "@/Context/GlobelContext";
import Video from "./Video";
import VideoDetails from "./VideoDetails";
import SubHeader from "@/components/sub/SubHeader";
import NextStoryBanner from "./StoryBanner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
interface PortfolioViewProps{
    slug:string
}

gsap.registerPlugin(ScrollTrigger);

export default  function PortfolioView({
    slug
}:PortfolioViewProps){
    const containerRef = useRef(null);
    const portfolioImageConatinerRef = useRef(null);
    
    const {portfolio} =useGlobelContext();
    console.log(portfolio);
    const item=useMemo(()=>{
        return portfolio.find(item=>item.slug == slug);

    },[slug]);

    const nextItem=useMemo(()=>{
        let getItemIndex = portfolio.findIndex(i => i.slug === slug);
        if((portfolio.length ) <=(getItemIndex +1)){
            getItemIndex = -1;
        }
        return portfolio[getItemIndex +1];
    },[slug]);

        useEffect(()=>{              
                const img = portfolioImageConatinerRef.current;
              
                const tl = gsap.timeline({
                  scrollTrigger: {
                    trigger: containerRef.current,
                    scrub: true,
                    pin: false
                  }
                });
              
                tl.fromTo(img, {
                  yPercent: -76,
                  ease: 'none'
                }, {
                  yPercent: 400,
                  ease: 'none'
                });
 
        },[])


    return(
        <div ref={containerRef}>
        <Header theme={'dark'}/>
                <section className="h-[100vh] relative w-full mb-[150px] overflow-hidden">
                    <div className=" w-full h-full" ref={portfolioImageConatinerRef}>
                        <video
                            src={item?.videPath}
                            className="w-full h-full object-cover"
                            muted
                        />
                    </div>
         
                        <div className="absolute text-[60px] top-0 left-0 z-10 text-white flex justify-center items-center h-full w-full">
                        <ScrollShowFade>
                            {item?.title}
                        </ScrollShowFade>
                         </div>
   
                </section>
                <section className="mb-[150px]">
                    <div className="container">
                        <Video path={item?.videPath as string} />
                        <VideoDetails details={item?.details } className="mt-[100px] mb-[200px]"/>
                        {
                            nextItem&&(
                                <>
                        <SubHeader
                            title="next case study"
                            theme="light"
                        />
                        
                                <div>
                                <NextStoryBanner
                                    mediaPath={nextItem.videPath}
                                    title={nextItem.title}
                                    slug={nextItem.slug}
                                />
                            </div>
                            </>
                            )

                        }
                       
                    </div>
                    
                </section>
             
        <Fotter/>
        </div>
    )
}

