import { cn } from "@/Utils/lib";
import { PlayCircleIcon, PlayIcon } from "@heroicons/react/16/solid";

export default function StoryTittle({
   title,
   mode = "dark"
}: { title: string; mode?: "light" | "dark" }) {
    const textVariants: { [key in "light" | "dark"]: string } = {
        "light": "text-white",
        "dark": "text-black"
    }

    const textClass = textVariants[mode];
    return(
        <div  className={cn('flex justify-between mb-[50px] md:mb-[100px]',textClass)}>
        <div className={cn('flex justify-start items-center gap-4',textClass)}>
            <PlayIcon width="12"/>
            <p className={cn('font-bold uppercase',textClass)}>{title}</p>
        </div>
        <div>
            <PlayCircleIcon width="12"/>
        </div>

    </div>
    )
}