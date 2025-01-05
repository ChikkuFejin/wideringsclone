import { cn } from "@/Utils/lib";
import BorderLine from "../UI/BorderLine";
import ScrollToShow from "./ScrollToShow";


export default function SectionTitleTwo({
    title="Our clients",
    mode="light"
}:{
    title?:string
    mode?: "light" | "dark"
}){

    const classes ={
        light:"text-white",
        dark:"text-black"
    }
    return(
        <div >
            <p className={cn('fm-reckless-n text-[3rem]',classes[mode])}>{title}</p>
            <ScrollToShow index ={1}>
                    <BorderLine mode={mode}/>  
            </ScrollToShow>
            
        </div>
    )
}