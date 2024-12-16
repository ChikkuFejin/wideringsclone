;
import { useSwiper } from 'swiper/react';
import { Button } from '../UI/Button';
import { ArrowLeftIcon, ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/16/solid';

export default function SwiperNavigation() {
  const swiper = useSwiper();
    console.log(swiper.clickedIndex);
  return (
   <div className='mt-[100px] flex justify-between items-center'>
        <Button>All stories</Button>
        <div className='flex justify-center gap-3'>
            <Button onClick={() => swiper.slidePrev()}>
                <ArrowLongLeftIcon width="25"/>
            </Button>
            <Button onClick={() => swiper.slideNext()}>
                    <ArrowLongRightIcon width="25"/>
            </Button>
        </div>
   </div>
  );
}