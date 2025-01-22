import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function splitStringUsingRegex(inputString: string): string[] {
    const characters: string[] = [];
    const regex = /[\s\S]/gu;
  
    let match;
    while ((match = regex.exec(inputString)) !== null) {
      characters.push(match[0]);
    }
  
    return characters;
  }

  export default function getPageCountFromBreakPoint  (swiper:any)  {
    if (typeof window == 'undefined') return 0;
    if (!swiper) return 0;
  
    const { slidesPerView } = swiper.params;
    const totalSlides = swiper.slides.length;
    const currentSlidesPerView =
      typeof slidesPerView === 'number'
        ? slidesPerView
        : swiper.params.breakpoints
        ? swiper.params.breakpoints[swiper.currentBreakpoint]?.slidesPerView || slidesPerView
        : 1;
  
    return Math.ceil(totalSlides / currentSlidesPerView);
  };

export function groupArrayElements(array:any[], groupSize:number) {
    const grouped = [];

    if(Array.isArray(array)){
        for (let i = 0; i < array.length; i += groupSize) {
            grouped.push(array.slice(i, i + groupSize));
        }
    }

    return grouped;


}
