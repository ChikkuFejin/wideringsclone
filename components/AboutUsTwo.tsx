import { useTransform, motion, useMotionValue, useScroll } from "framer-motion";
import AboutUs from "./sub/AboutUs";
import SessionBorderLine from "./sub/SessionBorder";
import { useRef } from "react";

export default function AboutUsTwo() {
    const { scrollY } = useScroll()
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
      });
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
console.log(scrollYProgress);
  return (
    <div ref={ref}>
      <section className="mt-[100px] md:w-[90%] md:m-auto" >
        <div className="flex gap-3 ">
          <div className="col-span-12 md:col-span-6">
            <img src="/assets/images/img-1.jpg" alt="img1" className="w-full" />
          </div>
          <div className="hidden md:block col-span-6  ">
            <motion.div
              className="flex justify-end items-end h-full"
              style={{ y: y1 }}
            >
              <img
                src="/assets/images/img-1.jpg"
                alt="img1"
                className="w-[80%] "
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="mt-[200px] container">
        <AboutUs content="We create beautiful stories about companies that are both true and meaningful for their clients." />
        <SessionBorderLine />
      </section>
    </div>
  );
}
