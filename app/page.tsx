"use client";


import Preloader from "@/components/preloader";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import StoriesSession from "@/components/sub/StoriesSession";
import StoriesSectionTwo from "@/components/StoriesSectionTwo";
import AboutUsTwo from "@/components/AboutUsTwo";
import OurClients from "@/components/OurClients";
import Fotter from "@/components/Fotter";






export default function Home() {

  return (
    <div className='grain'>
     
     <Preloader/>

          <Header/>

          <HomeSection/>
          <StoriesSession/>
          <StoriesSectionTwo/>
          <AboutUsTwo/>
          <OurClients/>

          
          <Fotter className='bg-[#ab1301] '/>

      </div>
      
);
}
