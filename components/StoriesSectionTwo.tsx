import StoriesLine from "./sub/StoriesLine";
import StoryTittle from "./sub/StoryTittle";

export default function StoriesSectionTwo() {
    return(
        <>
        <section className="container mt-[60px]" >
            <StoryTittle title='Stories we tell'/>
            <StoriesLine title="Corporate Stories" count="11"/>
            <StoriesLine title="Product Stories" count="14"/>
            <StoriesLine title="People Stories" count="14"/>
            <StoriesLine title="Local Stories" count="07"/>
            <StoriesLine title="Films" count="10"/>
        </section>
        </>
    )
}