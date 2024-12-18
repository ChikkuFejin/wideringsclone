

export default function SliderComp({
    videoPath,
    title
}:{
    videoPath:string,
    title:string
}) {
    return(
        <>
         <div>
            <div>
                <video src={videoPath} />
                <p className="mt-[2rem] text-[1.5rem]" > {title}</p>
            </div>
        </div>
        </>
    )
}
