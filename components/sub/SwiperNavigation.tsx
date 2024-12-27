;
import { useSwiper } from 'swiper/react';
import { Button } from '../UI/Button';
import {  ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/16/solid';
import ScrollShowFade from './ScrollShowFade';

export default function SwiperNavigation() {
  const swiper = useSwiper();
    console.log(swiper.clickedIndex);
  return (
   <div className='mt-[100px] flex justify-between items-center'>
    <ScrollShowFade>
    <Button>All stories</Button>

    </ScrollShowFade>
        <div className='flex justify-center gap-3'>
          <ScrollShowFade>
            <Button onClick={() => swiper.slidePrev()}>
                <ArrowLongLeftIcon width="25"/>
            </Button>
            <Button onClick={() => swiper.slideNext()}>
                    <ArrowLongRightIcon width="25"/>
            </Button>
            </ScrollShowFade>
        </div>
   </div>
  );
}