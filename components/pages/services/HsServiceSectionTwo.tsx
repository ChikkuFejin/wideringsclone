import FontHeadM from "@/components/UI/font/FontHeadM";
import { cn } from "@/Utils/lib";
import Image from "next/image";
import { ReactElement } from "react";

interface content {
    title: string;
    content: string | ReactElement;
}
interface PropsInterface {
    innerRef: React.Ref<HTMLDivElement>;
    bgImages: string[];
    heading: string;
    contents: content[];
    isHideHeading?: boolean;

}

const HsServiceSectionTwo: React.FC<PropsInterface> = ({
    innerRef,
    bgImages = [],
    heading,
    contents = [],
    isHideHeading = false

}) => {
    return (
        <>
            <div className="section section-2 bg-black " ref={innerRef}>
                {
                    bgImages.map((item,index) => (
                        <Image key={index} width='584' height={329}
                            src={item}
                            alt=""
                            className={cn("absolute  w-[20%] max-w-[30rem]  z-[-1] moving-dev-img",
                                index % 2 == 0
                                ?'left-[20%] bottom-[5%]'
                                :'right-[20%] top-[8%]'
                            )}

                        />
                    ))
                }

                <div>
                    <FontHeadM className={`fm-reckless-n px-[10%] ${isHideHeading ? 'text-black' : 'text-white'}`}>{heading}</FontHeadM>
                    <ul className="flex mt-[50px]">
                        {
                            contents.map((item, index) => (
                                <li key={index} className="w-[600px] pr-[10%]">
                                    <p className="py-[50px] block text-white uppercase">{item.title}</p>
                                    <span className="fm-reckless-n text-[1.2rem]">{item.content}</span>
                                </li>
                            ))
                        }

                    </ul>


                </div>

            </div>
        </>
    )
}

export default HsServiceSectionTwo;