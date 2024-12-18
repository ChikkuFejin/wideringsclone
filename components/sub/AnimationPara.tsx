import { splitStringUsingRegex } from "@/Utils/lib"
import { charVariant } from "@/Utils/motion";
import { motion } from "framer-motion"

export default function AnimationPara({content}:{content:string}){
    

    const paraContent = splitStringUsingRegex(content);
    return (
        <div className="relative text-[1.9rem] md:text-[3rem] leading-[2.5rem] md:leading-[4rem] pr-[8%]">
            <div className="flex">
            
             

             <motion.div initial="hidden" whileInView="reveal" className="absolute top-0 left-0 w-full pr-[8%]"  transition={{staggerChildren:0.02}} >
            {
                paraContent.map((char,index) => {
                    return (
                        <motion.span transition={{duration:0.5}} key={index+char} variants={charVariant}>{char}</motion.span>
                    )
                })
            }
        </motion.div>

        <div className=" top-0 left-0 w-full text-gray-300">
            {
                paraContent.map((char,index) => {
                    return (
                        <span key={index+char}>{char}</span>
                    )
                })
            }
            </div>
            </div>
        </div>
       
    )
}