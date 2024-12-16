import { PlayCircleIcon, PlayIcon } from "@heroicons/react/16/solid";

export default function StoryTittle({
   title
}:{title:string}) {
    return(
        <div  className='flex justify-between mb-[50px]'>
        <div className='flex justify-start items-center gap-4'>
            <PlayIcon width="12"/>
            <p className='font-bold uppercase'>{title}</p>
        </div>
        <div>
            <PlayCircleIcon width="12"/>
        </div>

    </div>
    )
}