"use client";


import Preloader from "@/components/preloader";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import StoriesSession from "@/components/sub/StoriesSession";
import StoriesSectionTwo from "@/components/StoriesSectionTwo";
import AboutUsTwo from "@/components/AboutUsTwo";
import OurClients from "@/components/OurClients";



export default function Home() {
  return (

      <>
        <Preloader/>

          {/*<MobNav/>*/}
          <div className="bg-white relative z-10">
          <Header/>
          
          <HomeSection/>
          <StoriesSession/>
          <StoriesSectionTwo/>
          <AboutUsTwo/>
          <OurClients/>
          </div>
          {/* <Fotter/> */}
      </>
);
}
