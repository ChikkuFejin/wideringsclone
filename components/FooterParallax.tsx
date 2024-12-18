import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const ParallaxScroll: React.FC = () => {
  // Capture the scroll progress
  const { scrollY } = useViewportScroll();
  console.log(scrollY);

  // Create transformations for different elements
  const y1 = useTransform(scrollY, [0, 300], [0, -100]); // Moves up
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);  // Moves down

  return (
    <div style={{ height: "200vh", position: "relative" }}>
      {/* Background layer */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/assets/images/image1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: y1,
        }}
      />

      {/* Foreground layer */}
      <motion.div
        style={{
          position: "absolute",
          top: "40vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: "300px",
          height: "300px",
          background: "lightblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          y: y2,
        }}
      >
        <h2>Parallax Item</h2>
      </motion.div>
    </div>
  );
};

export default ParallaxScroll;
