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


export default function Home() {
  return (

      <section className="content22" >
        <GrainEffect/>
        <Preloader/>

          {/*<MobNav/>*/}
          <div className="bg-white relative mb-[100vh] ">
          <Header/>
          
          <HomeSection/>
          <StoriesSession/>
          <StoriesSectionTwo/>
          <AboutUsTwo/>
          <OurClients/>
          </div>
          <Fotter/>
      </section>
);
}
