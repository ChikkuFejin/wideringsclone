import { cn } from "@/Utils/lib"

export default function CustomInput(
    {
        type='text',
        placeholder,
        className

    }:{
        type?:string,
        placeholder:string,
        className?:string
    }
){
    return(
        <input type={type} placeholder={placeholder} className={cn("pl-0 py-[15px] pr-[10px] bg-transparent border-t-0 border-r-0 border-0 border-b-[1px] placeholder:text-black w-full placeholder:font-bold border-black",className)} />
    )
}