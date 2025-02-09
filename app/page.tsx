"use client";


import Preloader from "@/components/preloader";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import StoriesSession from "@/components/sub/StoriesSession";
import StoriesSectionTwo from "@/components/StoriesSectionTwo";
import AboutUsTwo from "@/components/AboutUsTwo";
import OurClients from "@/components/OurClients";
import Fotter from "@/components/Fotter";
import { useState } from "react";






export default function Home() {
  const [isLoading,setIsLoading] =useState(true);
  const handleLoderUpdate=(status:boolean)=>{
    setIsLoading(status);
  }
  return (
    <>
 
    <div className='grain w-[100dvw]'>
     
     <Preloader onChange={handleLoderUpdate}/>
               <Header/>

            <HomeSection
                isLoading={isLoading}
            />
          <StoriesSession/>
          <StoriesSectionTwo/>
          <AboutUsTwo/>
          <OurClients/>

          
          <Fotter/>

      </div>
      </>
);
}
