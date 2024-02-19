import React from 'react';
import bina1 from '/public/bina.svg'
import videotest from '/public/youtube.svg'
import Image from "next/image";
import profile1 from '/public/img/users/user1.svg'
import profile2 from '/public/img/users/user2.svg'
import profile3 from '/public/img/users/user3.svg'
import profile4 from '/public/img/users/user4.svg'
import profile5 from '/public/img/users/user5.svg'
import stars from '/public/img/users/star1.svg'
import dstar from '/public/img/users/star2.svg'
import kilit from '/public/kilit.svg'
import timeglas from '/public/img/time-hourglass-sand-bottom-timer-watch-icon-svgrepo-com 1.svg'

const Comments = () => {
    return (
        <div className={'mt-[114px] mb-[150px] max-w-[1500px] relative justify-between items-center flex flex-col xl:flex-row gap-[100px] w-full h-full'}>
            <Image className={'xl:m-0 lg:-ml-12'} src={videotest} width={450} height={450} alt={''}/>
            <div className={'flex flex-col min-h-[550px] lg:min-h-full gap-[66px] items-center xl:items-start'}>
                <div className={'flex-col  gap-[66px] w-fit items-center absolute xl:relative flex'}>
                    <div className={'flex flex-col z-20 xl:ml-[170px] gap-[66px]'}>
                        <div
                            className={'w-fit justify-between pb-[30px] pt-[15px] px-[30px] flex gap-[20px] items-start  h-fit  bg-white boxshadow2'}>
                            <div className={'flex flex-row gap-[20px]'}>
                                <Image src={profile1} className={''} width={70} height={70} alt={'profile'}/>
                                <div className={'flex h-full items-start flex-col gap-[10px] justify-center'}>
                                    <h3 className={'murecho-medium text-[25px]'}>EmreLutfi</h3>
                                    <h3 className={'text-white600 murecho-400'}>Property Seller</h3>
                                </div>
                            </div>
                            <div className={'flex flex-col gap-[15px]'}>
                                <div className={'flex flex-row w-fit items-center gap-[15px]'}>
                                    <h5 className={'text-black text-[18px] murecho-medium'}>4.5</h5>
                                    <div className={'w-fit flex flex-row gap-[5px]'}>

                                        {
                                            Array.from({length: 4}, (_, index) => (
                                                <div key={index}
                                                     className={'flex w-[20px] h-[20px] flex-row gap-[5px]'}>
                                                    <Image src={stars} className={''} width={40} height={20} alt={''}/>
                                                </div>
                                            ))
                                        }
                                        {
                                            Array.from({length: 1}, (_, index) => (
                                                <div key={index}
                                                     className={' w-[20px] h-[20px]  flex flex-row gap-[5px]'}>
                                                    <Image src={dstar} className={''} width={40} height={20} alt={''}/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className={'flex flex-row gap-2'}>
                                    <Image src={timeglas} width={12} height={12} alt={''}/>
                                    <h5 className={'murecho-400 text-[13px]'}>July 2023</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={'flex flex-col z-20 xl:ml-[85px] gap-[66px]'}>
                        <div
                            className={'w-fit flex flex-row gap-[29px] xl:w-[420px] px-[34px] py-[26px] h-[130px] bg-white boxshadow2'}>
                            <div
                                className={'bg-[#F37B0C] flex justify-center items-center rounded-full h-fit w-fit p-[15px]'}>
                                <Image src={kilit} width={50} height={40} alt={''}/>
                            </div>
                            <div className={'flex w-full flex-col gap-[5px]'}>
                                <h1 className={'murecho-medium text-black text-[23px]'}>We have <span
                                    className={'text-[#3CD823] murecho-medium'}>strong</span> security</h1>
                                <h2 className={'text-white600 murecho-regular'}>everything is under our control</h2>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col z-20 gap-[66px]'}>
                        <div
                            className={'  gap-[25px] p-[30px] px-[10px] flex justify-start items-center flex-col bg-white boxshadow2'}>
                            <div className={'flex flex-row gap-[10px] items-center'}>
                                {Array.from({length: 5}, (_, index) =>
                                    <div key={index}>
                                        <Image src={stars} className={''} width={50} height={40} alt={''}/>
                                    </div>)}
                            </div>
                            <div className={'flex flex-row gap-[30px] justify-center items-center'}>
                                <div className={'flex flex-col items-center gap-[5px]'}>
                                    <Image src={profile5} className={''} width={60} height={40} alt={''}/>
                                    <h2 className={'murecho-medium text-2xl'}>Selena</h2>
                                    <h3 className={'murecho-regular text-sm'}>Property Seller</h3>
                                </div>
                                <div className={'flex flex-col items-center gap-[5px]'}>
                                    <Image src={profile2} className={''} width={60} height={40} alt={''}/>
                                    <h2 className={'murecho-medium text-2xl'}>Selena</h2>
                                    <h3 className={'murecho-regular text-sm'}>Property Seller</h3>
                                </div>
                                <div className={'flex flex-col items-center gap-[5px]'}>
                                    <Image src={profile3} className={''} width={60} height={40} alt={''}/>
                                    <h2 className={'murecho-medium text-2xl'}>Selena</h2>
                                    <h3 className={'murecho-regular text-sm'}>Property Seller</h3>
                                </div>
                                <div className={'flex flex-col items-center gap-[5px]'}>
                                    <Image src={profile4} className={''} width={60} height={40} alt={''}/>
                                    <h2 className={'murecho-medium text-2xl'}>Selena</h2>
                                    <h3 className={'murecho-regular text-sm'}>Property Seller</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'xl:absolute flex right-0 top-0'}>
                    <Image className={'md:w-[700px] md:h-[700px] w-[350px] sm:w-[500px]'} src={bina1} width={700} height={1000} alt={'test'}/>
                </div>
            </div>

        </div>
    );
};

export default Comments;
