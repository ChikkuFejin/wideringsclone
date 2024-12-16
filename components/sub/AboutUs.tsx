import { Button } from "../UI/Button";
import AnimationPara from "./AnimationPara";

export default function AboutUs({
    content
}:{content:string}) {
    return(
        <>
            <AnimationPara content={content}/>
            <div className="mt-[70px]"> 

        <Button>About us</Button>
       
        </div>

        </>
    )
}
