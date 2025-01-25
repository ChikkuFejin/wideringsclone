import ScrollShowFade from "@/components/sub/ScrollShowFade"
import AngerLink from "@/components/UI/AngerLink";
interface StoryBannerProps{
    mediaPath?:string;
    slug?:string;
    title?:string
}

const NextStoryBanner:React.FC<StoryBannerProps>=({
    mediaPath,
    slug,
    title
})=>{
    return(
        <>
            <div className="h-[100vh] relative w-full mb-[150px]">
                                <div className=" w-full h-full">
                                    {
                                        mediaPath&&
                                        <video
                                        src={mediaPath}
                                        className="w-full h-full object-cover"
                                        muted
                                    />
                                    }
                                   
                                </div>
                     
                                    <div className="absolute text-[60px] top-0 left-0 z-10 text-white flex justify-center items-center h-full w-full flex-col ">
                                    <ScrollShowFade>
                                        {title}
                                    </ScrollShowFade>
                                    {
                                        slug&&
                                    <div>
                                        <ScrollShowFade>
                                                <AngerLink href={`/portfolio/${slug}`} className="btn"
                                                style={{'backgroundColor':'white','color':'black'}}
                                                >
                                                    View next story 
                                                </AngerLink>
                                        </ScrollShowFade>
                                        
                                    </div>
                                    }
                                     </div>
               
            </div>
        </>
    )
}

export default NextStoryBanner;