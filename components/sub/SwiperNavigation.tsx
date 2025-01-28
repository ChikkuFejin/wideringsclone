import AngerLink from "@/components/UI/AngerLink";


import { useSwiper } from 'swiper/react';
import { Button } from '../UI/Button';
import {  ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/16/solid';
import ScrollShowFade from './ScrollShowFade';
import {useEffect, useState} from "react";

export default function SwiperNavigation() {
    const swiper = useSwiper();
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
    <ScrollShowFade>
    <AngerLink href={'/portfolio'} className='btn'>All stories</AngerLink>

    </ScrollShowFade>
        <div className='flex justify-center gap-3'>
          <ScrollShowFade>
            <Button isAnimate className={'lg:mr-4 mr-2' }  disabled={currentIndex == 0}  onClick={() => swiper.slidePrev()}>
                <ArrowLongLeftIcon width="25"/>
            </Button>
            <Button disabled={currentIndex==totalSlides} isAnimate onClick={() => swiper.slideNext()}>
                    <ArrowLongRightIcon width="25"/>
            </Button>
            </ScrollShowFade>
        </div>
   </div>
  );
}