import {useState} from "react";


export default function SliderComp({
    videoPath,
    title
}:{
    videoPath:string,
    title:string
}) {
    const [isInteractionAllowed, setInteractionAllowed] = useState(true);

    const handleUserInteraction = () => setInteractionAllowed(true);

    const handleMouseOver = (event: React.MouseEvent<HTMLVideoElement>) => {
        if (isInteractionAllowed) {
            const video = event.currentTarget;
            video.play().catch((error) => {
                console.error("Failed to play the video:", error);
            });
        }
    };
    return(
        <>
         <div className='cursor-pointer'>
            <div onClick={handleUserInteraction}>
                <video src={videoPath}
                       onMouseOver={handleMouseOver}
                       onMouseOut={(event) => event.currentTarget.pause()}
                       muted
                />
                <p className="mt-[2rem] text-[1.5rem]" > {title}</p>
            </div>
        </div>
        </>
    )
}
