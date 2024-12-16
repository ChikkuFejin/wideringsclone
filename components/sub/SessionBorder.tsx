import BorderLine from "../UI/BorderLine";
import ScrollToShow from "./ScrollToShow";

export default function SessionBorderLine() {
    return(
        <div className="mt-[80px]">
        <ScrollToShow index ={1}>
         <BorderLine/>  
         </ScrollToShow> 
         </div>
    )
}