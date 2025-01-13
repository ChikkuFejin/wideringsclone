"use client";

import Link from "next/link";

const AngerLink = ({ href, children,className,...props }: { href: string; children: React.ReactNode ,props?: React.AnchorHTMLAttributes<HTMLAnchorElement>,className?:string}) => {

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.location.replace(href)
    };

    return (
        <>
            <Link href={href} onClick={handleClick} {...props} className={className}>
                {children}
            </Link>
        </>
    );
};

export  default  AngerLink;

