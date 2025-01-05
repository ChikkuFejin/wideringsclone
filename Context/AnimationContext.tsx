"use client"

import React, { createContext, useContext } from 'react';
import { AnimationControls, useAnimation, useScroll } from 'framer-motion';

interface AnimationContextType {
  controls: AnimationControls;
  scrollYProgress?:any
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider: React.FC<{ children: React.ReactNode,ref:any }> = ({ children,ref }) => {
  const controls = useAnimation();


  const {scrollYProgress} =useScroll({
    target:ref?.current || null,
    offset:['start end','end start']
})

  return (
    <AnimationContext.Provider value={{ controls,scrollYProgress }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = (): AnimationContextType => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimationContext must be used within an AnimationProvider');
  }
  return context;
};
