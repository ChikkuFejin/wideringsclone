

import StoriesLine from "./sub/StoriesLine";
import StoryTittle from "./sub/StoryTittle";
import {cn} from "@/Utils/lib";
import {useState} from "react";
import ScrollShowFade from "@/components/sub/ScrollShowFade";

export default function StoriesSectionTwo({
    theme='light',
                                              classConatiner
                                          }:{theme?:'light'|'dark',classConatiner?:string}) {
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

    const classThemeConatiner = {
        'light':"bg-wight",
        'dark':"bg-black"
    }

    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const [videoPath,setVideoPath] =useState('');

    // Handle mouse move to track the mouse position
    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    const handleMouseHover=(isHover:boolean,videoPath:string)=>{
            setIsHovered(isHover)
        setVideoPath(videoPath)
    }


    const titleContainer = theme ==='dark' ?'light':'dark';

    return(
        <>
        <section className={cn("container static mt-[60px] pb-[200px]  ",classThemeConatiner[theme],classConatiner)}  onMouseMove={handleMouseMove}>
            <StoryTittle title='Our Expertise' mode={titleContainer}/>
            {
                slides.map((slide, index:number) => (
                    <div key={index}  >

                  <ScrollShowFade addDuration={index} key={index}>
                    <StoriesLine key={index} title={slide.title} handleMouseHover={handleMouseHover} count={slide.count} videoPath={slide.videPath} theme={theme}/>
                    </ScrollShowFade>

                    </div>
                ))
            }

            <div
                className={cn(
                    "hover-container translate-y-[-50%] translate-x-[-50%] absolute bg-black transition duration-700 ease-in-out w-[810px] h-[450px] pointer-events-none opacity-[0.7]",
                    isHovered?' left-0 top-0 opacity-[0.7]':'translate-y-[-100vh] opacity-[0] '
                )}
                style={{
                    left: `${mousePosition.x+450}px`,
                    top: `${mousePosition.y}px`,
                    transition: 'all 0.5s ease-in-out'
                    // transform: `translate(-50%, -50%)`, // Centers the container at the mouse position
                }}
            >
                <video
                    className="p-0 bg-transparent"
                    src={videoPath}
                    width='100%'
                    height='100%'
                    autoPlay
                    muted
                    loop

                />
            </div>
        </section>
        </>
    )
}