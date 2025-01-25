import { PlayIcon } from "@heroicons/react/16/solid";
import { useRef, useState } from "react";

 interface VideoProps{
    path:string;
    className?:string
 }
 
 const Video:React.FC<VideoProps> =({
    path
 })=>{
    const [startPlay,setStartPlay] =useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const handlePlay=()=>{
        if(videoRef.current){
            videoRef.current?.play();
            setStartPlay(true);
            videoRef.current.controls=true;
        }
    }
    return(
        <div className=" relative [h-100vh] w-full">
                        <video
                            src={path}
                            className="w-full h-full object-cover"
                            ref={videoRef}
                        />
                        {
                            !startPlay&&
                            <div className="absolute top-0 left-0 h-full w-full z-10 flex justify-center items-center">
                            <button onClick={handlePlay} className=" right-4 bg-[#000000b3] hover:bg-black transition-all duration-75   text-white py-5 px-12  rounded" type="button">
                                <PlayIcon width={'30px'}/>
                            </button>
                    </div>
                        }
                        
        </div>
    )
}

export default Video;