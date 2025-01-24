import StoryTittle from "@/components/sub/StoryTittle";
import {useState} from "react";
import './style.css';
import {PlayIcon} from "@heroicons/react/16/solid";
import {cn, groupArrayElements} from "@/Utils/lib";
const tabsContents=[

    {
        videPath:'/assets/3Creativeadvideo.mp4',
        title:'Creative ad video',
        key: 'creativeandVideo',
        active:true
    },
    {
        videPath:'/assets/4Branding.mp4',
        title:'Branding',
        key: 'branding',
        active:true
    },
    {
        videPath:'/assets/5WebsiteDevelopment.mp4',
        title:'Website Development',
        key: 'websiteDevelopment',
        active:true
    },
    {
        videPath:'/assets/6Socialmediamarketing.mp4',
        title:'Social media marketing',
        key: 'socialMediaMarketing',
        active:true
    },
    {
        videPath:'/assets/7Socialmediamanagement.mp4',
        title:'Social media management',
        key: 'socialMediaManagement',
        active:true
    },
    {
        videPath:'/assets/3Creativeadvideo.mp4',
        title:'Creative ad video',
        key: 'creativeandVideo',
        active:true
    },
    {
        videPath:'/assets/4Branding.mp4',
        title:'Branding',
        key: 'branding',
        active:true
    },
    {
        videPath:'/assets/5WebsiteDevelopment.mp4',
        title:'Website Development',
        key: 'websiteDevelopment',
        active:true
    },
    {
        videPath:'/assets/6Socialmediamarketing.mp4',
        title:'Social media marketing',
        key: 'socialMediaMarketing',
        active:true
    },
    {
        videPath:'/assets/7Socialmediamanagement.mp4',
        title:'Social media management',
        key: 'socialMediaManagement',
        active:true
    }
];

export default function SectionTab({
    theme='light',
                                   }:{theme:'dark' | 'light'}){

    const titleContainer = theme ==='dark' ?'light':'dark';



    const tabs =[{
        label:'All',
        key:'all',
        onClick:()=>{ handleClickTab('all')}
    },
        {
            label: 'Creative ad video',
            key:'creativeandVideo',
            onClick:()=>{ handleClickTab('creativeandVideo')}
        },
        {
            label: 'Branding',
            key:'branding',
            onClick:()=>{ handleClickTab('branding')}
        },
        {
            label: 'Website Development',
            key:'websiteDevelopment',
            onClick:()=>{ handleClickTab('websiteDevelopment')}
        },
        {
            label: 'Social Media Marketing',
            key:'socialMediaMarketing',
            onClick:()=>{ handleClickTab('socialMediaMarketing')}
        },
        {
            label: 'Social Media Management',
            key:'socialMediaManagement',
            onClick:()=>{ handleClickTab('socialMediaManagement')}
        },


    ]

    const [tabsData,setTabsData] =useState(tabsContents);
    const [activeTab,setActiveTab] = useState('all');
    const [animineClass,setAnimineClass] = useState('')
    const handleClickTab =(key:string)=>{
        setAnimineClass('scale-0 duration-[.7s] opacity-0')
        setTimeout(() => {
            setTabsData(tabsContents?.map(i=>({...i,active: (key =='all' || i.key==key) ?true : false })))
            setActiveTab(key);
            setAnimineClass('')
        }, 500);
        
    }

   
    return(
        <div>
            <StoryTittle title={tabs} mode={titleContainer} isMulti textClassName="font-normal text-[13px] tracking-[2px]" activeTab={activeTab}/>
            <div>

                {
                    groupArrayElements(tabsData.filter(i=>i.active),5).map((item,index)=>(


                        <div className={'grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 '} key={index}>
                            {item.map((tab, idx) => (

                                <div key={idx}
                                     className={cn('relative overflow-hidden group transition-all duration-100 cursor-pointer', ((index+1)%2==0) && idx == 0 &&'md:col-span-2 md:row-span-2' || (index+1)%2!=0 && (idx+1)%3 == 0 && 'md:col-span-2 md:row-span-2',
                                        animineClass
                                     )}>
                                    <video src={tab.videPath} loop muted onMouseEnter={(e) => e.currentTarget.play()}
                                           onMouseLeave={(e) => e?.currentTarget?.pause()}/>
                                    <div className='absolute bottom-[20px] left-[10px] flex items-center gap-4'>
                                        <span
                                            className=' ml-[-40px] group-hover:ml-0 transition-all duration-700 text-white'><PlayIcon
                                            width={20}/></span>
                                        <span className={' text-white '}>{tab.title}</span>
                                    </div>
                                    <div
                                        className='w-full h-full  bg-[#0000003d] group-hover:hidden absolute top-0 left-0'></div>

                                </div>
                            ))}
                    </div>

                    ))
                }

                {/*{*/}
                {/*    tabsData.filter(i=>i.active).map((tab,idx)=>(*/}

                {/*        <div key={idx} className={'relative overflow-hidden group transition-all duration-100 cursor-pointer grid-item'} >*/}
                {/*            <video src={tab.videPath} loop muted onMouseEnter={(e) => e.currentTarget.play()}*/}
                {/*                   onMouseLeave={(e) => e.currentTarget.pause()} />*/}
                {/*            <div className='absolute bottom-[20px] left-[10px] flex items-center gap-4'>*/}
                {/*                <span  className=' ml-[-40px] group-hover:ml-0 transition-all duration-700 text-white'><PlayIcon width={20}/></span>*/}
                {/*                <span className={' text-white '}>{tab.title}</span>*/}
                {/*            </div>*/}
                {/*            <div className='w-full h-full  bg-[#0000003d] group-hover:hidden absolute top-0 left-0'></div>*/}

                {/*        </div>*/}
                {/*    ))*/}
                {/*}*/}

            </div>
        </div>
    )
}

