import React from 'react';
import Image from "next/image";
import todo from '/public/img/light-todo-svgrepo-com 1.svg'
import stepgo from '/public/img/go1.svg'
import stepleft from '/public/img/go2.svg'
import deal from '/public/img/deal-svgrepo-com 1.svg'
import happy from '/public/img/happy.svg'

const FollowingStep = () => {
    return (
        <div className={'flex flex-col  items-center gap-[100px]'}>
            <h1 className={'text-4xl tracking-wide murechor text-[#37317D]'}>
                We are Following 3 working steps
            </h1>
            <div className={'flex flex-col  lg:flex-row  items-start h-full gap-[90px] lg:gap-[0px]'}>
                <div className={'flex flex-col items-center gap-[20px]'}>
                    <div className={'p-[20px] w-fit bg-[#5046C7]'}>
                        <Image src={todo} class={'lg:w-[45px] lg:h-[45px] xl:w-[100px] xl:p-2 xl:h-[100px]'} width={60} height={60}  alt={''}/>
                    </div>
                    <h3 className={'lg:text-2xl 2xl:text-4xl text-[30px] xl:text-3xl text-[#37317D] murecho-medium'}>Evalute property</h3>
                    <h4 className={'lg:w-[200px] xl:w-[300px] text-[19px]   2xl:text-[16px]  xl:text-[15px] lg:text-[13px] text-center murecho-regular text-gray-400'}>
                        Evaluated is very important your property buy and sell.
                    </h4>
                </div>
                <Image className={'mt-6 lg:flex hidden lg:w-[150px] xl:w-[200px]'} src={stepgo} width={200} height={144} alt={''}/>
                <div className={'flex flex-col items-center gap-[20px]'}>
                    <div className={'p-[20px] w-fit bg-[#FE4D00]'}>
                        <Image src={deal} class={'lg:w-[45px] lg:h-[45px] xl:w-[100px] xl:p-2 xl:h-[100px]'} width={60} height={60}  alt={''}/>
                    </div>
                    <h3 className={'lg:text-2xl xl:text-3xl text-[30px] text-[#37317D] murecho-medium'}>Evalute property</h3>
                    <h4 className={'lg:w-[200px] xl:w-[300px] text-[19px]  2xl:text-[16px]  xl:text-[15px] lg:text-[13px] text-center murecho-regular text-gray-400'}>
                        Evaluated is very important your property buy and sell.
                    </h4>
                </div>
                <Image className={'mt-6 lg:flex hidden lg:w-[150px] xl:w-[200px]'} src={stepleft} width={200} height={144} alt={''}/>
                <div className={'flex flex-col w-fit  items-center gap-[20px]'}>
                    <div className={'p-[20px] w-fit bg-[#1AC3FF]'}>
                        <Image src={happy} class={'lg:w-[45px] lg:h-[45px] xl:w-[100px] xl:p-2 xl:h-[100px]'} width={60} height={60}  alt={''}/>
                    </div>
                    <h3 className={'lg:text-2xl xl:text-3xl text-[30px] text-[#37317D] murecho-medium'}>Evalute property</h3>
                    <h4 className={' lg:w-[200px] xl:w-[300px] text-[19px]  2xl:text-[16px] lg:text-[13px] text-center murecho-regular text-gray-400'}>
                        Evaluated is very important your property buy and sell.
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default FollowingStep;
