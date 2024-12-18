
import StoriesLine from "./sub/StoriesLine";
import StoryTittle from "./sub/StoryTittle";

export default function StoriesSectionTwo() {
    const slides = [
        // {
        //   videPath:'/assets/2Storieswetell.mp4',
        //   title:'Stories we tell',
        //   count: '06'
        // },
        {
          videPath:'/assets/3Creativeadvideo.mp4',
          title:'Creative ad video',
            count: '05'
        },
        {
          videPath:'/assets/4Branding.mp4',
          title:'Branding',
            count: '07'
        },
        {
          videPath:'/assets/5WebsiteDevelopment.mp4',
          title:'Website Development',
            count: '04'
        },
        {
          videPath:'/assets/6Socialmediamarketing.mp4',
          title:'Social media marketing',
            count: '05'
        },
        {
          videPath:'/assets/7Socialmediamanagement.mp4',
          title:'Social media management',
            count: '06'
        }
      ];

    return(
        <>
        <section className="container mt-[60px] pb-[200px]" >
            <StoryTittle title='Our Expertise'/>
            {
                slides.map((slide, index) => (
                    <StoriesLine key={index} title={slide.title} count={slide.count} videoPath={slide.videPath}/>
                ))
            }
            
        </section>
        </>
    )
}