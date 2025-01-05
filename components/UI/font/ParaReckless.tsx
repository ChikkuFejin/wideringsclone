import { cn } from "@/Utils/lib";



interface props {
    className?: string;
    children : React.ReactNode
}

export function ParaReckless({className,children}:props){
    return(
        <p className={cn('fm-reckless-n text-[1.5rem]',className)}>{children}</p>
    )
}