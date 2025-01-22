
import AnimationPara from "./AnimationPara";
import AngerLink from "@/components/UI/AngerLink";

export default function AboutUs({
    content
}:{content:string}) {
    return(
        <>
            <AnimationPara content={content}/>
            <div className="mt-[70px]"> 

        <AngerLink href='/about' className='btn'>About us</AngerLink>
       
        </div>

        </>
    )
}
