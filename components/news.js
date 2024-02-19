import React from 'react';
import Image from "next/image";
import unsplash1 from '/public/unsplash1.svg'
import unsplash2 from '/public/Mask Group.svg'
import unsplash3 from '/public/Mask Group-1.svg'

const News = () => {
    return (
        <div className={'w-fit mt-[100px] justify-center items-center gap-[20px] flex flex-col'}>
            <div className={'w-full poppins-semibold text-[30px] flex justify-center xl:justify-start'}>
                <h1>News & Update</h1>
            </div>
            <div className={'flex flex-row justify-center flex-wrap w-full gap-[80px]'}>
                <div className={'flex flex-col w-fit justify-center items-center gap-[20px]'}>
                    <Image className={'lg:w-[250px] xl:w-[350px] h-[330px]'} src={unsplash1} width={420} height={330} alt={''}/>
                    <div className={'flex gap-[10px]  flex-col w-[300px]'}>
                        <div className={'w-full text-start  flex flex-row gap-[20px]'}>
                            <div className={'flex poppins-medium leading-3 flex-col gap-[5px]'}>
                                <h4 className={'text-[20px]'}>12</h4>
                                <h5 className={'text-[9px]'}>Jan</h5>
                            </div>
                            <h4 className={'poppins-medium -mt-2'}>Elements of Content in Epoxy Paint</h4>
                        </div>
                        <div className={'lg:w-[90%] xl:w-full text-[#C4C4C4] text-wrap leading-8'}>
                            Epoxy paint and epoxy floor
                            contractor. Have you heard the two
                            terms? And what does that have to
                            do with the construction of existing
                            buildings? Epoxy itself is included in
                            the type of resin... <span className={'text-[#0A72AD] cursor-pointer leading-3'}>Read More</span>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col w-fit justify-center items-center gap-[20px]'}>
                    <Image className={'lg:w-[250px] xl:w-[350px] h-[330px]'} src={unsplash1} width={420} height={330} alt={''}/>
                    <div className={'flex gap-[10px]  flex-col w-[300px]'}>
                        <div className={'w-full text-start  flex flex-row gap-[20px]'}>
                            <div className={'flex poppins-medium leading-3 flex-col gap-[5px]'}>
                                <h4 className={'text-[20px]'}>12</h4>
                                <h5 className={'text-[9px]'}>Jan</h5>
                            </div>
                            <h4 className={'poppins-medium -mt-2'}>Elements of Content in Epoxy Paint</h4>
                        </div>
                        <div className={'lg:w-[90%] xl:w-full text-[#C4C4C4] text-wrap leading-8'}>
                            Epoxy paint and epoxy floor
                            contractor. Have you heard the two
                            terms? And what does that have to
                            do with the construction of existing
                            buildings? Epoxy itself is included in
                            the type of resin... <span className={'text-[#0A72AD] cursor-pointer leading-3'}>Read More</span>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col w-fit justify-center items-center gap-[20px]'}>
                    <Image className={'lg:w-[250px] xl:w-[350px] h-[330px]'} src={unsplash1} width={420} height={330} alt={''}/>
                    <div className={'flex gap-[10px]  flex-col w-[300px]'}>
                        <div className={'w-full text-start  flex flex-row gap-[20px]'}>
                            <div className={'flex poppins-medium leading-3 flex-col gap-[5px]'}>
                                <h4 className={'text-[20px]'}>12</h4>
                                <h5 className={'text-[9px]'}>Jan</h5>
                            </div>
                            <h4 className={'poppins-medium -mt-2'}>Elements of Content in Epoxy Paint</h4>
                        </div>
                        <div className={'lg:w-[90%] xl:w-full text-[#C4C4C4] text-wrap leading-8'}>
                            Epoxy paint and epoxy floor
                            contractor. Have you heard the two
                            terms? And what does that have to
                            do with the construction of existing
                            buildings? Epoxy itself is included in
                            the type of resin... <span className={'text-[#0A72AD] cursor-pointer leading-3'}>Read More</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex flex-row mt-[80px] items-center lg:gap-[50px] xl:gap-[100px]'}>
                {/*<Image src={logo1} width={140} height={60} alt={''}/>*/}
                {/*<Image src={logo2} width={140} height={60} alt={''}/>*/}
                {/*<Image src={logo3} width={140} height={60} alt={''}/>*/}
                {/*<Image src={logo4} width={140} height={60} alt={''}/>*/}
                {/*<Image src={logo5} width={140} height={60} alt={''}/>*/}
            </div>
        </div>
    );
};

export default News;
