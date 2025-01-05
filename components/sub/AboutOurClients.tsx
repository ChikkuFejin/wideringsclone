"use client";

import Image from "next/image";
import FontL from "../UI/font/FontL";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css';

import { useEffect, useState } from "react";

export default function AboutOurClients(){
    const slides = [
        {
          imagePath:'https://widewings.eu/wp-content/uploads/2023/01/logo-juodas-footer-300x290-1.png',
          title:'Black Florence',
          content:"For several years in a row, I cannot imagine the production of video advertising without the Wide Wings team. Despite the circumstances, crazy ideas or difficult-sounding production deadlines, we manage to achieve the desired result with them. For that, I can write a separate top ten to the project managers, who until now have managed everything in such a way that I avoided any headaches."
        },
        {
          imagePath:'https://widewings.eu/wp-content/uploads/2023/01/electrolux-logo-vector-1.svg',
          title:'Electrolux',
          content:" Great team work and a result that meets expectations."
        },
        {
          imagePath:'https://widewings.eu/wp-content/uploads/2023/01/logo-juodas-footer-300x290-1.png',
          title:'Black Florence',
          content:"For several years in a row, I cannot imagine the production of video advertising without the Wide Wings team. Despite the circumstances, crazy ideas or difficult-sounding production deadlines, we manage to achieve the desired result with them. For that, I can write a separate top ten to the project managers, who until now have managed everything in such a way that I avoided any headaches."
        },
        {
          imagePath:'https://widewings.eu/wp-content/uploads/2023/01/logo-juodas-footer-300x290-1.png',
          title:'Black Florence',
          content:"For several years in a row, I cannot imagine the production of video advertising without the Wide Wings team. Despite the circumstances, crazy ideas or difficult-sounding production deadlines, we manage to achieve the desired result with them. For that, I can write a separate top ten to the project managers, who until now have managed everything in such a way that I avoided any headaches."
        },
        {
            imagePath:'https://widewings.eu/wp-content/uploads/2023/01/logo-juodas-footer-300x290-1.png',
            title:'Black Florence',
            content:"For several years in a row, I cannot imagine the production of video advertising without the Wide Wings team. Despite the circumstances, crazy ideas or difficult-sounding production deadlines, we manage to achieve the desired result with them. For that, I can write a separate top ten to the project managers, who until now have managed everything in such a way that I avoided any headaches."
          },
          {
            imagePath:'https://widewings.eu/wp-content/uploads/2023/01/logo-juodas-footer-300x290-1.png',
            title:'Black Florence',
            content:"For several years in a row, I cannot imagine the production of video advertising without the Wide Wings team. Despite the circumstances, crazy ideas or difficult-sounding production deadlines, we manage to achieve the desired result with them. For that, I can write a separate top ten to the project managers, who until now have managed everything in such a way that I avoided any headaches."
          },
        
      ];
    return (

        <div>

<Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{delay: 3000}}
      loop
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
          slidesPerGroup:1
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          slidesPerGroup:2
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup:3
        },
      }}
    >
      {
        slides.map((slide, index) => (
          <SwiperSlide key={index}>
           
           <div className="md:mr-[50px] ">
                <div className="w-full h-[72px] mb-[64px] relative">
                     <Image src={slide.imagePath} alt="Logo" fill objectFit="contain" objectPosition="left" />

                </div>
                <FontL className="mb-[24px]"> {slide.title}</FontL>
                <p>
                    {slide.content}
                </p>
            </div>   
          </SwiperSlide>
        ))
      }
  

  <SwiperNavigation/>
    </Swiper>
             

        </div>
    )
}


export  function SwiperNavigation() {
    const swiper = useSwiper();
    console.log('swiper',swiper)
    const [totalSlides,setTotalSlides] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
   
        const updatePageCount=()=>{
            const { slidesPerView } = swiper.params;
            const totalSlides = swiper.slides.length;
        const currentSlidesPerView =
          typeof slidesPerView === 'number'
            ? slidesPerView
            : swiper.params.breakpoints
            ? swiper.params.breakpoints[swiper.currentBreakpoint]?.slidesPerView || slidesPerView
            : 1;
            const count = Math.ceil(totalSlides /  Number(currentSlidesPerView));
            setTotalSlides(count);
        }
        
        updatePageCount();

        const onSlideChange = () => {
            setCurrentIndex(swiper.snapIndex);
        };

        swiper.on('slideChange', onSlideChange);

        return () => {
            swiper.off('slideChange', onSlideChange);
            swiper.off('breakpoint', updatePageCount);
        };
    }, [swiper]);
     
    return (
     <div className='mt-[100px] flex justify-between items-center'>
        {Array.from({ length: totalSlides }).map((_, index) => (
            <div
                key={index}
                className={`w-full h-[1px] ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
            />
        ))}
     </div>
    );
  }