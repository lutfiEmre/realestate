'use client'
import React, {useEffect, useState} from 'react';
import getData from "@/components/getData";
import home1 from '/public/home1.svg'

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const FeaturedHomesAlt2 = () => {
    const [activeF,setActivef] = useState('home');
    const [villa,setVilla] = useState([])
    const [filtered,setFiltered] = useState(villa)
    useEffect(() => {

        getData.then((res) => {
                setVilla(res);
                setFiltered(res)
            }
        )

    },[])
    const cevirici = (veri) => {
        setFiltered(villa.filter(text => text.typesx.includes(veri)))
        console.log(filtered)
        setActivef(veri)


    }
    const likeupdate = (index) => {
        setFiltered((prevState) => [
            ...prevState.map((item, i) =>
                i === index ? { ...item, like: !item.like } : item
            )
        ]);
    }
  /*  useEffect(() => {
        console.log(activeF)
    },[activeF])*/
    return (
        <div className={' flex flex-col justify-start items-center gap-[50px]'}>
             <div className={' w-full h-full flex justify-center items-center'}>
                <div className={'xl:w-full flex justify-center items-center md:ml-16 lg:mr-10 md:w-[700px] w-[300px] sm:w-[600px] lg:w-[900px]'}>
                    <Swiper spaceBetween={120}
                            className={'w-full h-full ml-4 flex justify-center items-center'}
                        slidesPerView={2}
                        breakpoints={{
                            300: {slidesPerView: 1},
                            600 : {slidesPerView2: 2},
                            1040: { slidesPerView: 2},
                            1080: {slidesPerView: 3, spaceBetween: 40, centeredSlidesBounds: true}
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {filtered.map((item,index) => (
                            <SwiperSlide> <div key={index} className={'relative  w-full'}>
                                <div className={'absolute w-full flex justify-between p-4 top-0 left-0'}>
                                    <div className={'bg-white rounded-[15px] flex justify-center items-center w-[110px] h-[35px] top-[23px] left-[28px]'}>
                                        <h4 className={'poppins-medium text-black'}>{item.location}</h4>
                                    </div>
                                    <svg onClick={() => {
                                        likeupdate(index)
                                    }} className={`${item.like === true ? '!fill-   red-600' : 'fill-white'} !fill-white right-2 top-2 `} xmlns="http://www.w3.org/2000/svg" width="33" height="30" viewBox="0 0 33 30" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 3.60927C13.2011 -0.235261 7.68858 -1.42339 3.55525 2.09705C-0.578088 5.61749 -1.16001 11.5034 2.08593 15.6671C4.78471 19.1288 12.9521 26.4301 15.629 28.7932C15.9284 29.0576 16.0781 29.1898 16.2529 29.2417C16.4052 29.287 16.572 29.287 16.7246 29.2417C16.8993 29.1898 17.0489 29.0576 17.3485 28.7932C20.0253 26.4301 28.1926 19.1288 30.8915 15.6671C34.1374 11.5034 33.6264 5.58046 29.4221 2.09705C25.2177 -1.38636 19.7989 -0.235261 16.5 3.60927Z" fill=""/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 3.60927C13.2011 -0.235261 7.68858 -1.42339 3.55525 2.09705C-0.578088 5.61749 -1.16001 11.5034 2.08593 15.6671C4.78471 19.1288 12.9521 26.4301 15.629 28.7932C15.9284 29.0576 16.0781 29.1898 16.2529 29.2417C16.4052 29.287 16.572 29.287 16.7246 29.2417C16.8993 29.1898 17.0489 29.0576 17.3485 28.7932C20.0253 26.4301 28.1926 19.1288 30.8915 15.6671C34.1374 11.5034 33.6264 5.58046 29.4221 2.09705C25.2177 -1.38636 19.7989 -0.235261 16.5 3.60927Z" fill=""/>
                                    </svg>
                                </div>
                                <Image className={'rounded-t-[10px] w-full'} src={`${item.img}.svg`} width={400} height={400} alt={''}/>
                                <div className={'px-[19px] bg1 pb-[30px] py-[10px] bg-white w-full'}>
                                    <h4 className={'poppins-medium text-[20px] tracking-wide'}>
                                        {item.name}
                                    </h4>
                                    <div className={'w-full h-fit flex justify-between items-center'}>
                                        <h2 className={'poppins-semibold text-[12px] text-[#2637D2]'}>{item.price} € <span className={' text-[#5060F3] text-[10px]'}>a day</span></h2>
                                        <div className={'flex flex-row gap-1 items-center'}>
                                            <svg className={'w-[20px]'} xmlns="http://www.w3.org/2000/svg" width="36" height="34" viewBox="0 0 36 34" fill="none">
                                                <g clip-path="url(#clip0_41_373)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.68555 31.7459H5.93917V-0.602628V-1.1709H6.50744H30.1892H30.7574V-0.602628V31.7459H32.2252V33.9191H4.68555V31.7459ZM8.64916 1.20499H28.0446H28.2816V1.442V31.3947H29.6209V-0.0372136H7.07285V31.7459H8.41214V1.442V1.20499H8.64916ZM9.23742 31.3947H26.1313L26.0228 31.3519L18.0956 30.2696V8.50969L27.4592 2.60995V2.02741H9.23742V31.3947ZM19.4492 15.8658L20.6571 15.5203V20.035L19.4492 19.5981V15.8658Z" fill="#8B8B8B"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_41_373">
                                                        <rect width="35.09" height="33.7404" fill="white" transform="translate(0.910156 0.129883)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <h4 className={'murecho-regular text-[#8B8B8B]'}>{item.door}</h4>
                                        </div>
                                    </div>
                                    <div className={'w-full flex mt-2 gap-[20px] justify-between items-center'}>
                                        <div className={'flex flex-row w-full h-full'}>
                                            <div className={'flex flex-row items-center gap-2'}>
                                                <svg className={'w-[18px]'} xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
                                                    <path d="M2 1.625V17.375M2 14H22.25M22.25 17.375V10.85C22.25 9.58989 22.25 8.95977 22.0047 8.4785C21.7891 8.05516 21.4448 7.71091 21.0215 7.49525C20.5402 7.25 19.9101 7.25 18.65 7.25H11V13.6932M6.5 9.5H6.51125M7.625 9.5C7.625 10.1213 7.12132 10.625 6.5 10.625C5.87868 10.625 5.375 10.1213 5.375 9.5C5.375 8.87866 5.87868 8.375 6.5 8.375C7.12132 8.375 7.625 8.87866 7.625 9.5Z" stroke="#8B8B8B" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <h5 className={'murecho-regular text-[#8B8B8B]'}>{item.bed}</h5>
                                                <div className={'w-[2px] mx-1 mt-1 rounded-full h-full bg-[#D9D9D9]'}></div>
                                                <svg className={'w-[18px]'} xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91339 4.80895L1.91357 4.80274C1.92505 4.4584 2.0176 4.10301 2.17116 3.7959C2.29379 3.55064 2.46272 3.33447 2.6982 3.17749C2.92769 3.02449 3.27668 2.88971 3.82679 2.88971C4.37691 2.88971 4.72589 3.02449 4.95537 3.17749C5.25098 3.37456 5.4457 3.67497 5.56584 3.98491C4.99551 4.13464 4.5216 4.39851 4.13824 4.74074C3.54388 5.27133 3.23583 5.92825 3.07399 6.45018C2.88979 7.0442 3.05432 7.62306 3.41315 8.02753C3.75753 8.4157 4.26173 8.62989 4.78348 8.62989H8.61027C9.13205 8.62989 9.63623 8.4157 9.98064 8.02753C10.3394 7.62306 10.504 7.0442 10.3198 6.45018C10.1579 5.92825 9.84986 5.27133 9.25556 4.74074C8.80965 4.3427 8.24128 4.05066 7.54118 3.92093C7.47516 3.63175 7.3683 3.2892 7.19381 2.94022C6.95768 2.46796 6.58847 1.9666 6.01674 1.58545C5.43902 1.2003 4.71172 0.976318 3.82679 0.976318C2.94186 0.976318 2.21456 1.2003 1.63683 1.58545C1.0651 1.9666 0.695891 2.46796 0.45976 2.94022C0.225512 3.40872 0.113149 3.86565 0.057861 4.19737C0.0248263 4.39558 0.00121502 4.59757 9.57996e-06 4.79882L0 12.4567C0.000105237 12.5434 0.00196128 12.629 0.00826591 12.7835C0.0163404 12.9811 0.0323364 13.2602 0.0640987 13.5938C0.127212 14.2564 0.25452 15.1557 0.515162 16.0679C0.772619 16.969 1.17996 17.9542 1.84474 18.7297C2.53384 19.5337 3.50341 20.1103 4.78348 20.1103V21.0669C4.78348 21.5953 5.21182 22.0236 5.74018 22.0236C6.26855 22.0236 6.69688 21.5953 6.69688 21.0669V20.1103H14.3504V21.0669C14.3504 21.5953 14.7788 22.0236 15.3071 22.0236C15.8355 22.0236 16.2638 21.5953 16.2638 21.0669V20.1103C18.2613 20.1103 19.4215 18.7383 20.0525 17.3771C20.681 16.021 20.9071 14.4535 20.9924 13.4939C21.0932 12.3595 20.1741 11.5 19.1339 11.5H1.91339V4.80895ZM1.96898 13.4134C2.02548 14.0062 2.13734 14.7807 2.35493 15.5423C2.57582 16.3154 2.886 17.0044 3.2975 17.4846C3.68469 17.9363 4.15016 18.1969 4.78348 18.1969H16.2638C17.1849 18.1969 17.8304 17.621 18.3165 16.5724C18.7889 15.5531 18.9939 14.2993 19.0783 13.4134H1.96898ZM7.98128 6.16811C8.15226 6.32074 8.28118 6.51142 8.37695 6.7165H5.0168C5.11257 6.51142 5.24149 6.32074 5.41247 6.16811C5.64609 5.95956 6.026 5.7598 6.69688 5.7598C7.36775 5.7598 7.74767 5.95956 7.98128 6.16811Z" fill="#8B8B8B"/>
                                                </svg>

                                                <h5 className={'murecho-regular text-[#8B8B8B]'}>{item.bath}</h5>
                                            </div>
                                        </div>
                                        <div className={'relative cursor-pointer flex justify-center items-center'}>
                                            <h1 className={' absolute z-20 poppins-medium text-white'}>View Offer</h1>
                                            <div className={'w-[120px] h-[40px] bg2'}>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div></SwiperSlide>
                        ))}


                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default FeaturedHomesAlt2;
