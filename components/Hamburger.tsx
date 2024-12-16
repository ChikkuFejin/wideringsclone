import { cn } from '@/Utils/lib';
import { useState } from 'react';

interface HamburgerProps {
    onChangeToggle?: (value:boolean) => void;
}

export default function Hamburger({
    onChangeToggle
}: HamburgerProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        onChangeToggle&&onChangeToggle(!isOpen);
        setIsOpen(!isOpen);
    };

    return (
        <div className={cn("hamburger hamburger--squeeze js-hamburger cursor-pointer z-[402] position-relative right-[4%] top-[3%]",isOpen&&"is-active ")} onClick={toggleMenu}>
             <div className="relative inline-block w-3.5 h-5 float-right">
        
        <div className="hamburger-inner "></div>
    </div>
</div>
    );
}