import { cn } from "@/Utils/lib";
import { PlayCircleIcon, PlayIcon } from "@heroicons/react/16/solid";
interface Tab {
    label: string;
    key?:string;
    onClick?: () => void;
}


export default function StoryTittle({
   title,
   mode = "dark",
    isMulti =false,
    textClassName='',
    activeTab=''
}: { title: string | Tab[]; mode?: "light" | "dark",isMulti?:boolean ,textClassName?:string,activeTab?:string}) {
    const textVariants: { [key in "light" | "dark"]: string } = {
        "light": "text-white",
        "dark": "text-black"
    }

    const textClass = textVariants[mode];


    const paraArray=()=>{
        const getConditionalClass=(key:string)=>{
            return activeTab === key  ? 'opacity-100':'opacity-[0.4]';
        }
        return(
            <div className='flex justify-start items-center gap-[50px]'>
                {
                    Array.isArray(title)&&title?.map((tab:Tab,idx)=>(
                        <span className={cn('cursor-pointer opacity-[0.4] hover:opacity-100 text-white',getConditionalClass(tab.key as string))} onClick={()=>{tab?.onClick?.()}} key={idx}>{tab.label}</span>
                    ))
                }
            </div>
        )
    }
    return(
        <div  className={cn('flex justify-between mb-[50px] md:mb-[100px]',textClass)}>
        <div className={cn('flex justify-start items-center gap-4',textClass)}>
            <PlayIcon width="12"/>
            <p className={cn('font-bold uppercase',textClass,textClassName)}>
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