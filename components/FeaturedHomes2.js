'use client'

import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import home1 from "@/public/home1.svg";
import kalpsvg from "@/public/kalp.svg";
import yatakxd from "@/public/yatak.svg";
import banyoxd from "@/public/banyo.svg";
import kapixd from "@/public/oda.svg";
import kalpnotsvg from '@/public/kalpnotfill.svg'
import getData from "@/components/getData";



const FeaturedHomes = () => {
    const [villa,setVilla] = useState([])
    const [filtered,setFiltered] = useState(villa)
    const [type,setType] = useState('house')

    const cevirici = async (veri) => {

         setFiltered(villa.filter(text => text.typesx.includes(veri)))
        setType(veri)
        console.log(veri)

    }
    const likeupdate = (index) => {
        setFiltered((prevState) => [
            ...prevState.map((item, i) =>
                i === index ? { ...item, like: !item.like } : item
            )
        ]);
    }
    useEffect(() => {

        getData.then((res) => {
                setVilla(res);
                setFiltered(res)
            }
        )

    },[])
    return (
        <div className={' mt-[81px]'}>
            <div className={'flex flex-row lg:gap-[90px] xl:gap-[100px] -ml-4 justify-center items-center'}>
                <div className={'flex flex-row gap-0'}>
                    <div onClick={() => {cevirici('house')}} className={'flex flex-col cursor-pointer justify-center items-center '}>
                        <h1 className={`2xl:text-[16px] ${type == 'house' ? '!text-bg700' : 'text-[#818181]'}  text-[14px] murecho-500`}>Home</h1>
                        <div className={`mt-[17px] lg:w-[130px]  xl:w-[150px] ${type == 'house' ? 'bg-bg700' : 'bg-white500'} h-[4px]`}></div>
                    </div>
                    <div onClick={() => {cevirici('appointment')}} className={'flex flex-col cursor-pointer  justify-center items-center text-[#818181]'}>
                        <h1 className={`2xl:text-[16px] ${type == 'appointment' ? '!text-bg700' : 'text-[#818181]'}  text-[14px] murecho-500`}>
                            Appointment
                        </h1>
                        <div className={`mt-[17px] lg:w-[130px]  xl:w-[150px] ${type == 'appointment' ? 'bg-bg700' : 'bg-white500'} h-[4px]`}></div>
                    </div>
                </div>
                <h1 className={'murecho-bold text-[#0ADF9F] text-[25px]'}>
                    Featured Homes
                </h1>
                <div className={'flex flex-row gap-0'}>
                    <div onClick={() => {cevirici('land')}} className={'flex flex-col cursor-pointer  justify-center items-center text-[#818181]'}>
                        <h1 className={`2xl:text-[16px] ${type == 'land' ? '!text-bg700' : 'text-[#818181]'}  text-[14px] murecho-500`}>
                            Land
                        </h1>
                        <div className={`mt-[17px] lg:w-[130px]  xl:w-[150px] ${type == 'land' ? 'bg-bg700' : 'bg-white500'} h-[4px]`}></div>
                    </div>

                    <div onClick={() => {cevirici('all')}} className={'flex flex-col cursor-pointer  justify-center items-center text-[#818181]'}>
                        <h1 className={`2xl:text-[16px] ${type == 'all' ? '!text-bg700' : 'text-[#818181]'}  text-[14px] murecho-500`}>
                            View All
                        </h1>
                        <div className={`mt-[17px] lg:w-[130px]  xl:w-[150px] ${type == 'all' ? 'bg-bg700' : 'bg-white500'} h-[4px]`}></div>

                    </div>

                </div>
            </div>
            <div className={'mt-[55px] justify-center xl:ml-0 lg:ml-2 items-center h-full min-h-[350px] w-full flex flex-row gap-[40px]'}>
                <Swiper
                    className={'xl:w-[1100px] md:w-[600px] w-[300px] sm:w-[450px] lg:w-[900px]'}
                    spaceBetween={30}

                    slidesPerView={3}
                    breakpoints={{
                        300: {slidesPerView: 1},
                        640: {slidesPerView2: 2},
                        1280: { slidesPerView: 3},
                        1080: {slidesPerView: 3, spaceBetween: 20,},
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {filtered.map((item,index) => (
                        <SwiperSlide key={index}><div className={'flex flex-col'}>
                            <div className={'relative lg:w-[250px] xl:w-full h-full'}>
                                <Image className={'rounded-t-[15px] lg:w-[350px] object-cover lg:h-[250px] xl:w-[400px] xl:h-full'} src={`${item.img}.svg`} width={400} height={300} alt={'asd'}/>
                                <div className={'absolute top-[23px] left-[28px] rounded-[15px] w-[140px] h-[41px] bg-white flex justify-center items-center'}>
                                    <h2 className={'poppins-500 text-bg700 text-[19px]'}>{item.location}</h2>
                                </div>
                                <div onClick={() => {
                                    likeupdate(index)

                                }} className={'absolute cursor-pointer right-4 top-4'}>
                                    <Image src={item.like ? kalpsvg : kalpnotsvg} width={33} height={29} alt={'asd'}/>
                                </div>
                            </div>
                            <div className={'xl:w-full lg:w-[250px] lg:h-[200px]  px-[19px] -mt-4 rounded-b-[25px]  bg-hwhite boxshadow1'}>
                                <div className={'flex justify-between flex-row mt-[20px]'}>
                                    <div className={'flex flex-col'}>
                                        <h1 className={'poppins-500 whitespace-nowrap lg:text-[20px] xl:text-[25px]'}>{item.name}</h1>
                                        <div className={'mt-4 flex flex-row poppins-600 gap-[5px] items-center'}>
                                            <h3 className={' text-[#2637D2] text-[20px]'}>{item.price} €</h3>
                                            <h3 className={'text-[#5060F3] text-[14px]'}>a day</h3>
                                        </div>
                                        <div className={'xl:mt-[41px] mt-[15px] h-fit w-full lg flex lg:flex-col xl:flex-row lg:gap-[5px] xl:gap-[20px]'}>
                                            <div className={'flex flex-row gap-[9px]'}>
                                                <Image src={yatakxd} width={20} height={20} alt={'demir'}/>
                                                <h1 className={'text-[#8B8B8B] murecho-400'}>
                                                    {item.bed}
                                                </h1>
                                            </div>
                                            <div className={'h-[20px] xl:flex hidden w-[2px]  bg-gray-300'}></div>
                                            <div className={'flex flex-row gap-[9px]'}>
                                                <Image src={banyoxd} width={20} height={20} alt={'demir'}/>
                                                <h1 className={'text-[#8B8B8B] murecho-400'}>
                                                    {item.bath}
                                                </h1>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={'flex flex-col'}>
                                        <div className={'mt-[25px] gap-[12px] flex flex-row items-center justify-center px-[6px]'}>
                                            <Image src={kapixd} width={26} height={26} alt={'oda sayısı'}/>
                                            <h2 className={'murecho-400  text-[28px] text-[#8B8B8B]'}>{item.door}</h2>
                                        </div>
                                        <div className={'mt-4 xl:flex hidden cursor-pointer w-[120px] h-[56px] relative'}>
                                            <div className={'absolute  top-0 flex justify-center  items-center w-full h-full z-40 left-0'}>
                                                <h4 className={'text-white text-[20px] murechom'}>
                                                    View Offer
                                                </h4>
                                            </div>
                                            <div className={'w-full z-30 h-full  bgemre1'}></div>
                                            <div className={'w-full z-20 flex absolute top-0 left-0 opacity-60 rounded-[10px] bg-[#EDE63A] '}>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'absolute right-14 bottom-7'}>
                                    <div className={'mt-4 flex xl:hidden cursor-pointer w-[120px] h-[56px] relative'}>
                                        <div className={'absolute  top-0 flex justify-center  items-center w-full h-full z-40 left-0'}>
                                            <h4 className={'text-white text-[20px] murechom'}>
                                                View Offer
                                            </h4>
                                        </div>
                                        <div className={'w-full z-30 h-full  bgemre1'}></div>
                                        <div className={'w-full z-20 flex absolute top-0 left-0 opacity-60 rounded-[10px] bg-[#EDE63A] '}>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div></SwiperSlide>
                    ))}



                </Swiper>
            </div>
        </div>
    );
};

export default FeaturedHomes;
