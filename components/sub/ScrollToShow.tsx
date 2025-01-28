"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


interface Props {
  children: React.ReactNode;
  index?: number;
}

const ScrollToShow = ({children, index=0 }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { disable: 'none' },
    visible: { display: 'block' },
  };

  const animationDelay = 0.2;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollToShow;
