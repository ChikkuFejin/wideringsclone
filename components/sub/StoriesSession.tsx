// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import SliderComp from './SliderComp';
import ScrollToShow from './ScrollToShow';
import SwiperNavigation from './SwiperNavigation';
import StoryTittle from './StoryTittle';
import BorderLine from '../UI/BorderLine';
import ScrollShowFade from "@/components/sub/ScrollShowFade";

export default function StoriesSession() {

  const slides = [
    {
      videPath:'/assets/2Storieswetell.mp4',
      title:'Stories we tell'
    },
    {
      videPath:'/assets/3Creativeadvideo.mp4',
      title:'Creative ad video'
    },
    {
      videPath:'/assets/4Branding.mp4',
      title:'Branding'
    },
    {
      videPath:'/assets/5WebsiteDevelopment.mp4',
      title:'Website Development'
    },
    {
      videPath:'/assets/6Socialmediamarketing.mp4',
      title:'Social media marketing'
    },
    {
      videPath:'/assets/7Socialmediamanagement.mp4',
      title:'Social media management'
    }
  ];
  return (
    <div className='container mt-[60px]'>
    <StoryTittle title='Stories we tell'/>
    
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{delay: 3000}}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {
        slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <ScrollShowFade addDuration={index+2}>
              <SliderComp videoPath={slide.videPath} title={slide.title}/>
            </ScrollShowFade>
          </SwiperSlide>
        ))
      }
  
      <SwiperNavigation/>
    </Swiper>
 
    <div className="mt-[80px]">
        <ScrollToShow index ={1}>
         <BorderLine/>  
         </ScrollToShow> 
        </div>
    </div>
  );
};