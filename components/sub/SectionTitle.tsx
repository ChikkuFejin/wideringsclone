import SessionBorderLine from "./SessionBorder";
import StoryTittle from "./StoryTittle";

export default function SectionTitle(){
    return(
        <div className="mt-[150px]">
            <div className="mb-[50px]">
                <SessionBorderLine/>
            </div>
            <StoryTittle title="Our clients"/>
        </div>
    )
}