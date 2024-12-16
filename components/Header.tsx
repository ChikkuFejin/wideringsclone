import {useEffect, useRef, useState} from "react";
import Hamburger from "@/components/Hamburger";
import MobNav, { closeLoaderClass } from "./MobNav";
import { BlobOptions } from "buffer";
import { cn } from "@/Utils/lib";

export default function Header() {
    const [closeLoaderClass, setCloseLoaderClass] = useState<boolean>(false);
    function handleClick(isActive:boolean){
        setCloseLoaderClass(isActive);
        if(isActive){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    }

    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const scrollRef = useRef<number>(0);


    useEffect(() => {
        const handleScroll = () => {
            if(scrollRef.current < window.scrollY){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
            scrollRef.current = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollClass = isScrolled ? 'transform -translate-y-full' : '';

    return (
        <>
        <MobNav isOpen={closeLoaderClass}/>
        <header className={cn(" px-4 fixed w-full top-0 left-0 z-[599] transition duration-[1.2s] ease-in-out",scrollClass)}>
            <div className="container">
                <div className="flex justify-between items-center py-4 ">
                    <div className=" items-center hidden lg:flex" >
                        <ul className="flex space-x-4" id="menu-left-menu-1">
                            <li className="menu-item"><a href="portfolio/index.html"
                                                         className="text-black">Portfolio</a>
                            </li>
                            <li className="menu-item"><a href="services/index.html" className="text-black">Services</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <a href="/" className={cn(closeLoaderClass?'text-white':"text-black")}>
                            <svg fill="none" height="14" viewBox="0 0 202 14" width="202"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.2281 1.3503L14.0701 13.7194H13.0831C12.0226 11.0103 10.9726 8.29083 9.93305 5.58182C8.88304 8.29083 7.84354 11.0103 6.81453 13.7194H5.75403L1.61701 1.3503L0 1.0143V0.279297H6.84603V1.0143C6.34203 1.1298 5.83803 1.2348 5.33402 1.3713L7.20303 9.35134C8.16904 6.32732 9.16654 3.30331 10.1535 0.279297H11.0881L14.1331 9.38284L15.8866 1.3398L14.3011 1.0038V0.279297H19.8451V1.0143L18.2386 1.3503H18.2281Z"
                                    fill="currentColor"/>
                                <path
                                    d="M28.3301 13.5308V12.8168L30.0101 12.4703V1.53975L28.3301 1.20375V0.46875H34.9031V1.20375L33.2231 1.53975V12.4703L34.9031 12.8168V13.5308H28.3301Z"
                                    fill="currentColor"/>
                                <path
                                    d="M58.9681 6.97878C58.9681 10.0763 56.9206 13.5308 51.9541 13.5308H45.5176V12.8168L47.1976 12.4598V1.53975L45.5176 1.20375V0.46875H51.9541C56.7526 0.46875 58.9681 3.86027 58.9681 6.97878ZM55.4296 6.97878C55.4296 4.09127 54.2851 1.52925 51.7756 1.52925H50.4106V12.4703H51.7756C54.2956 12.4703 55.4296 9.89779 55.4296 6.98928"
                                    fill="currentColor"/>
                                <path
                                    d="M78.5416 7.89228L74.0791 7.28328V12.4703L79.4131 11.1998L79.1401 13.5308H69.0391V12.8168L70.8766 12.4703V1.53975L69.0391 1.20375V0.46875H78.9301V2.65276L74.0791 1.53975V6.30678L78.5416 5.69777V7.89228Z"
                                    fill="currentColor"/>
                                <path
                                    d="M119.081 1.47652L114.923 13.8456H113.936C112.875 11.1366 111.825 8.41705 110.786 5.70804C109.736 8.41705 108.696 11.1366 107.667 13.8456H106.607L102.48 1.47652L100.863 1.14052V0.416016H107.709V1.14052C107.205 1.25602 106.701 1.36102 106.197 1.49752L108.066 9.48806C109.032 6.46404 110.019 3.44003 111.017 0.426516H111.951L114.996 9.53006L116.75 1.48702L115.164 1.15102V0.416016H120.708V1.14052L119.102 1.47652H119.081Z"
                                    fill="currentColor"/>
                                <path
                                    d="M129.193 13.4781V12.7641L130.873 12.4071V1.47652L129.193 1.14052V0.416016H135.756V1.14052L134.076 1.47652V12.4071L135.756 12.7641V13.4781H129.193Z"
                                    fill="currentColor"/>
                                <path
                                    d="M160.662 1.11952L158.835 1.47652V13.5306L157.89 13.8141L149.29 4.35353V12.4071L151.117 12.7641V13.4781H145.951V12.7641L147.778 12.4071V1.47652L145.972 1.11952C145.972 0.899018 145.951 0.657517 145.951 0.416016H149.941L157.333 8.53255V1.47652L155.37 1.11952V0.416016H160.672V1.11952H160.662Z"
                                    fill="currentColor"/>
                                <path
                                    d="M182.44 12.0508C180.907 12.7649 179.227 13.4474 177.474 13.7309C172.791 13.7309 170.313 11.1163 170.313 7.07383C170.312 3.39881 174.061 0.154297 178.345 0.154297C180.046 0.154297 181.81 0.584799 181.81 0.584799L181.285 2.74781C180.592 2.50631 177.894 1.8343 176.77 1.8343C174.534 1.8343 173.746 4.14432 173.746 7.07383C173.746 10.3183 175.647 11.9458 178.387 11.9458C178.671 11.9458 178.965 11.9248 179.28 11.8723V7.00033H182.419V12.0508H182.44Z"
                                    fill="currentColor"/>
                                <path
                                    d="M196.812 13.7519C195.206 13.7519 193.515 12.7229 192.35 11.9983L192.665 11.3053C194.208 11.8828 195.857 12.2188 196.865 12.2188C198.156 12.2188 199.238 11.6413 199.238 10.5073C199.238 7.50433 193.085 8.45983 193.085 4.03931C193.085 1.9918 195.027 0.154297 197.82 0.154297C199.532 0.154297 201.453 0.542799 201.453 0.542799L200.97 2.70581C199.416 2.25431 197.684 1.6978 197.18 1.6978C195.983 1.6978 195.447 2.42231 195.447 3.09431C195.447 5.92932 201.999 4.90032 201.999 9.60434C201.999 11.5573 200.319 13.7414 196.812 13.7414"
                                    fill="currentColor"/>
                            </svg>
                        </a>
                    </div>
                    <div className=" items-center hidden lg:flex">
                        <ul className="flex space-x-4" id="menu-right-menu-1">
                            <li className="menu-item"><a href="about/index.html" className="text-black">About</a></li>
                            <li className="menu-item"><a href="contact/index.html" className="text-black">Contact</a>
                            </li>
                        </ul>
                        <div className="ml-4">
                            <div className="flex space-x-2">
                                <a href="lt/index.html" className="text-black">Lt</a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <div className="lg:hidden">
                            <Hamburger onChangeToggle={handleClick}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        </>
    )
}