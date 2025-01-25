
"use client"

import Fotter from "@/components/Fotter";
import Header from "@/components/Header";
import { useRef} from "react";
import Title from "@/components/pages/portfolio/Title";
import SectionTab from "@/components/pages/portfolio/SectionTab";
import ScrollShowFade from "@/components/sub/ScrollShowFade";

export default function Portfolio(){
    const containerRef = useRef(null);
    return(
        <div ref={containerRef}>
        <Header theme={'dark'}/>

                    <ScrollShowFade>
                        <section className={'mt-[100px] container'}>
                
                             <Title title={'Portfolio'} theme={'dark'}/>

                    
                        </section>
                     </ScrollShowFade>
            
            <section className={'mt-[50px] container pb-[200px] min-h-[100vh]'}>
                <SectionTab theme={'dark'}/>
            </section>

        <Fotter/>
        </div>
    )
}

