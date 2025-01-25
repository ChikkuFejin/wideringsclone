"use client";

import Link from "next/link";
import {cn} from "@/Utils/lib";

const AngerLink = ({ href, children,className,style,...props }: { href: string;style?: { [key:string]:string|number }, children: React.ReactNode ,props?: React.AnchorHTMLAttributes<HTMLAnchorElement>,className?:string}) => {

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.location.href = href
    };

    const replaceData = typeof children === 'string'?children:''
    return (
        <>
            <Link href={href}  data-replace={replaceData} style={style||{}} onClick={handleClick} {...props} className={cn(replaceData&&'anger-link',className)}>
                <span>{children}</span>
            </Link>
        </>
    );
};

export  default  AngerLink;
;
