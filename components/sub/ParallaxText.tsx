import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react"

export default function ParallaxText({
    children
}:{
    children: React.ReactNode
}){
    const firstText = useRef(null);
    const secondText = useRef(null);
    const [isActive,setIsActive] = useState(false);

    let xPercent = 0;

    useEffect(() => {
        if (secondText.current) {
            gsap.set(secondText.current as HTMLElement, { left: (secondText.current as HTMLElement).getBoundingClientRect().width });
            requestAnimationFrame(animate);
            setIsActive(true)
        }
    }, []);

    const animate = () => {
        if (xPercent < -100) {
            xPercent = -1;
        }

        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });

        requestAnimationFrame(animate);
        xPercent -= 0.1;
    };



    return (
        <div className="relative flex overflow-hidden w-full">
            <div style={{visibility:isActive?'visible':"hidden"}}>
                <div className="relative whitespace-nowrap">
                    <p className="relative pr-[50px] m-0 whitespace-nowrap " ref={firstText}>{children}</p>
                    <p className="absolute pr-[50px] top-0 left-[100%]  whitespace-nowrap" ref={secondText}>{children}</p>
                </div>
            </div>
        </div>
    );
}

