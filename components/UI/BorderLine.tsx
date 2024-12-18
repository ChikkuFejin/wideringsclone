import { cn } from "@/Utils/lib";
import {motion} from "framer-motion";
import { useState } from "react";


export default function BorderLine({
      mode="dark"
}:{
     mode?: "light" | "dark"
}) {
    const [hasAnimated, setHasAnimated] = useState(false);
    const textVariants: { [key in "light" | "dark"]: string } = {
        "light": "bg-white",
        "dark": "bg-black"
    }
    const textClass = textVariants[mode];
    return (
        <>
           <div className="relative w-full h-[1px]  overflow-hidden">
           <motion.div
        className={cn("absolute top-0 left-0 h-[1px] ",textClass)}
        initial={{ width: "0%" }}
        animate={hasAnimated ? { width: "100%" } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
        onViewportEnter={() => {
          if (!hasAnimated) setHasAnimated(true);
        }}
      />
    </div>

        </>

    )
}