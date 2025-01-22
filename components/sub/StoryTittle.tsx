import { cn } from "@/Utils/lib";
import { PlayCircleIcon, PlayIcon } from "@heroicons/react/16/solid";
interface Tab {
    label: string;
    onClick?: () => void;
}


export default function StoryTittle({
   title,
   mode = "dark",
    isMulti =false,
}: { title: string | Tab[]; mode?: "light" | "dark",isMulti?:boolean }) {
    const textVariants: { [key in "light" | "dark"]: string } = {
        "light": "text-white",
        "dark": "text-black"
    }

    const textClass = textVariants[mode];

    const paraArray=()=>{

        return(
            <div className='flex justify-start items-center gap-3'>
                {
                    Array.isArray(title)&&title?.map((tab:Tab,idx)=>(
                        <span className='cursor-pointer' onClick={()=>{tab?.onClick?.()}} key={idx}>{tab.label}</span>
                    ))
                }
            </div>
        )
    }
    return(
        <div  className={cn('flex justify-between mb-[50px] md:mb-[100px]',textClass)}>
        <div className={cn('flex justify-start items-center gap-4',textClass)}>
            <PlayIcon width="12"/>
            <p className={cn('font-bold uppercase',textClass)}>
                {
                    !isMulti && typeof title == "string" ?title:paraArray()
                }

            </p>
        </div>
        <div>
            <PlayCircleIcon width="12"/>
        </div>

    </div>
    )
}