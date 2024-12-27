import { motion } from "framer-motion";
import React from "react";
export default function ScrollShowFade({
    children
}:{
    children:React.ReactNode
}) {
    return(
        <motion.div
            initial={{ opacity: 0, y:10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true,margin:"-100px"}}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="pb-[10px]"
        >
            {children}
        </motion.div>
    )
}