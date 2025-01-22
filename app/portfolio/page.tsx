
"use client"

import Fotter from "@/components/Fotter";
import Header from "@/components/Header";
import {useEffect, useRef} from "react";
import Title from "@/components/pages/portfolio/Title";
import SectionTab from "@/components/pages/portfolio/SectionTab";

export default function Portfolio(){
    const containerRef = useRef(null);


    useEffect(() => {
        const body = document.querySelector('body');
        if (body) {
            body.style.backgroundColor = '#000000';
        }
    }, []);

    return(
        <div ref={containerRef}>
        <Header theme={'dark'}/>
            <section className={'mt-[100px] container'}>
                <Title title={'Portfolio'} theme={'dark'}/>
            </section>
            <section className={'mt-[50px] container'}>
                <SectionTab theme={'dark'}/>
            </section>



        <Fotter/>
        </div>
    )
}