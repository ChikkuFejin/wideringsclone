"use client";
import React, { useEffect, useRef } from "react";

export default function GrainEffect(){
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && typeof window !== 'undefined') {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const width = canvas.width = window.innerWidth;
        const height = canvas.height = window.innerHeight;

        const renderGrain = () => {
          const imageData = ctx.createImageData(width, height);
          const buffer = imageData.data;

          for (let i = 0; i < buffer.length; i += 4) {
            const gray = Math.random() * 255;
            buffer[i] = buffer[i + 1] = buffer[i + 2] = gray;
            buffer[i + 3] = 10; // Adjust transparency
          }

          ctx.putImageData(imageData, 0, 0);
        };

        const loop = () => {
          renderGrain();
          requestAnimationFrame(loop);
        };

        loop();
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        zIndex:102,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    ></canvas>
  );
};

