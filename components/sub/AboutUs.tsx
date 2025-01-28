
import AnimationPara from "./AnimationPara";
import AngerLink from "@/components/UI/AngerLink";
import ScrollShowFade from "@/components/sub/ScrollShowFade";

export default function AboutUs({
    content
}:{content:string}) {
    return(
        <>
            <AnimationPara content={content}/>
            <div className="mt-[70px]">
                <ScrollShowFade >
                      <AngerLink href='/about' className='btn'>About us</AngerLink>
                </ScrollShowFade>
       
        </div>

        </>
    )
}
