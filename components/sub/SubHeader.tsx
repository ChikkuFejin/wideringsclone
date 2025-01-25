import { cn } from "@/Utils/lib"
import BorderLine from "../UI/BorderLine"
import ScrollToShow from "./ScrollToShow"
import StoryTittle from "./StoryTittle"

interface SubHeaderProps{
    title:string,
    className?:string,
    theme?:'dark'|'light'
}
const SubHeader:React.FC<SubHeaderProps>=({
    className,
    title,
    theme='dark'
})=>{
    return(
        <ScrollToShow>
        <div className={cn(className)}>
            <div className="mb-[50px]">
            <BorderLine mode={theme}   />
            </div>
            
            <StoryTittle title={title}  mode={theme}/>
        </div>
        </ScrollToShow>
    )
}

export default SubHeader;