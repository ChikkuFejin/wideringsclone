import { motion } from "framer-motion";
import React from "react";
export default function ScrollShowFade({
    children,
    addDuration=0
}:{
    children:React.ReactNode,
    addDuration?:number
}) {
    return(
        <motion.div
            initial={{ opacity: 0, y:30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true,margin:"-100px"}}
            transition={{ ease: "easeInOut", duration: 0.75 + addDuration }}
            className="pb-[10px]"
        >
            {children}
        </motion.div>
    )
}