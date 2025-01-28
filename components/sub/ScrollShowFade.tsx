import { motion } from "framer-motion";
import React from "react";
import {useInView} from "react-intersection-observer";
export default function ScrollShowFade({
    children,
    addDuration=1
}:{
    children:React.ReactNode,
    addDuration?:number
}) {
    const { ref, inView } = useInView({
        triggerOnce: false,
    });
    const animationDelay = 0.2;
    return(
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            animate={inView ? "visible" : "hidden"}
            custom={addDuration}
            transition={{ delay: addDuration * animationDelay, duration: 0.5 }}
            className="pb-[10px]"
        >
            {children}
        </motion.div>
    )
}