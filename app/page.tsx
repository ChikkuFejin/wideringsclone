"use client";


import Preloader from "@/components/preloader";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import StoriesSession from "@/components/sub/StoriesSession";
import StoriesSectionTwo from "@/components/StoriesSectionTwo";
import AboutUsTwo from "@/components/AboutUsTwo";
import OurClients from "@/components/OurClients";
import Fotter from "@/components/Fotter";
import GrainEffect from "@/components/sub/GrainEffect";
import { useRef } from "react";



export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  return (
    <>
     
     <Preloader/>
    <GrainEffect/>
          {/*<MobNav/>*/}
          <div className="bg-white relative mb-[100vh] " ref={mainRef}>
          <Header/>
          <HomeSection/>
          <StoriesSession/>
          <StoriesSectionTwo/>
          <AboutUsTwo/>
          <OurClients/>
          </div>
          
          <Fotter/>

      </>
      
);
}
