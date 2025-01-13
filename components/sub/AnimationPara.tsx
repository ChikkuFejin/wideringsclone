import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitStringUsingRegex } from "@/Utils/lib";

gsap.registerPlugin(ScrollTrigger);

type AnimationParaProps = {
    content: string;
};

export default function AnimationPara({ content }: AnimationParaProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            const chars = containerRef.current.querySelectorAll(".animated-char");

            gsap.fromTo(
                chars,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.02,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "bottom 60%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);

    const paraContent = splitStringUsingRegex(content);

    return (
        <div
            ref={containerRef}
            className="relative text-[1.9rem] md:text-[3rem] leading-[2.5rem] md:leading-[4rem] pr-[8%]"
        >
            <div className="flex">
                {/* Animated Content */}
                <div className="absolute top-0 left-0 w-full pr-[8%]">
                    {paraContent.map((char, index) => (
                        <span className="animated-char" key={index + char}>
              {char}
            </span>
                    ))}
                </div>

                {/* Static Content for SEO */}
                <div className="top-0 left-0 w-full text-gray-300">
                    {paraContent.map((char, index) => (
                        <span key={index + char}>{char}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
