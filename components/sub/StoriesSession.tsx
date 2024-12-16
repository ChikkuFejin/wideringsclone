// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import SliderComp from './SliderComp';
import ScrollToShow from './ScrollToShow';
import SwiperNavigation from './SwiperNavigation';
import StoryTittle from './StoryTittle';
import BorderLine from '../UI/BorderLine';

export default function StoriesSession() {
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
      <SwiperSlide><ScrollToShow index={1}><SliderComp/></ScrollToShow></SwiperSlide>
      <SwiperSlide><ScrollToShow index={2}><SliderComp/></ScrollToShow></SwiperSlide>
      <SwiperSlide><ScrollToShow index={3}><SliderComp/></ScrollToShow></SwiperSlide>
      <SwiperSlide><ScrollToShow index={4}><SliderComp/></ScrollToShow></SwiperSlide>
      <SwiperSlide><ScrollToShow index={5}><SliderComp/></ScrollToShow></SwiperSlide>
      <SwiperSlide><ScrollToShow index={6}><SliderComp/></ScrollToShow></SwiperSlide>
      <SwiperSlide><ScrollToShow index={7}><SliderComp/></ScrollToShow></SwiperSlide>
      <SwiperSlide><ScrollToShow index={8}><SliderComp/></ScrollToShow></SwiperSlide>
  

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