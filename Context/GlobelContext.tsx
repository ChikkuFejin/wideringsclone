"use client"

import React, { createContext, useContext } from 'react';
import { PORTFOLIO_ITEMS } from './dataSource';
import { PortfolioItem } from '@/Utils/types';

interface GlobelContextType {
  portfolio: PortfolioItem[];
}

const GlobelContext = createContext<GlobelContextType | undefined>(undefined);

export const GlobelContextProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {


  return (
    <GlobelContext.Provider value={{ portfolio:PORTFOLIO_ITEMS }}>
      {children}
    </GlobelContext.Provider>
  );
};

export const useGlobelContext = (): GlobelContextType => {
  const context = useContext(GlobelContext);
  if (!context) {
    throw new Error('useGlobelContext must be used within an AnimationProvider');
  }
  return context;
};
