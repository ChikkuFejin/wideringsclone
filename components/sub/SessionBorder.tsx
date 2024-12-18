import { cn } from "@/Utils/lib";
import BorderLine from "../UI/BorderLine";
import ScrollToShow from "./ScrollToShow";

export default function SessionBorderLine({
    mode="dark"
}:{
    mode?: "light" | "dark"
}) {

   
    return(
        <div className={cn("mt-[80px] md:mt-[200px]")}>
        <ScrollToShow index ={1}>
         <BorderLine mode={mode}/>  
         </ScrollToShow> 
         </div>
    )
}