import SessionBorderLine from "@/components/sub/SessionBorder";
import React from "react";
import FontHeadXL from "@/components/UI/font/FontHeadXL";

export  default function Title({
    title,
    theme='light'
                               }:{title:string,theme?:'dark'|'light'}) {


    return(
        <div>
            <FontHeadXL theme={theme} className={'fm-reckless-n '}>{title}</FontHeadXL>
            <SessionBorderLine className={'md:mt-0'} mode={'light'}/>
        </div>
    )
}