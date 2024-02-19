import React from 'react';
import homebg from '/public/img/homebg.svg'
import Image from "next/image";
import houselogo from '/public/img/contact/Vector.svg'
import phonelogo from '/public/img/contact/Group.svg'
import mektuplogo from '/public/img/contact/Vector-1.svg'
import instagramlogo from '/public/img/contact/akar-icons_instagram-fill.svg'
import {Input} from "postcss";
const GetContact = () => {
    return (
        <div className={'w-full relative mt-[150px]'}>
            <div className={'z-20 flex absolute left-0  justify-center items-center gap-[90px] w-full h-full items-start p-[60px] flex-col lg:flex-row text-white'}>
                <div className={'flex flex-col  gap-[40px]'}>
                    <h1 className={'text-white poppins-semibold mt-4 text-[35px] w-[450px]'}>
                        stay in instant communication and rest assured
                    </h1>
                    <div className={'flex flex-col gap-[25px]'}>
                        <div className={'flex flex-col gap-[15px]'}>
                            <h3 className={'poppins-semibold text-[20px]'}>
                                Contact
                            </h3>
                            <div className={'flex flex-col gap-[10px]'}>
                                <div className={'flex flex-row gap-[15px]'}><Image src={houselogo} width={20} height={20} alt={''}/>
                                    <h4 className={'poppins-400'}>
                                        www.emrelutfi.com
                                    </h4>
                                </div>
                                <div className={'flex flex-row gap-[15px]'}><Image src={phonelogo} width={20} height={20} alt={''}/>
                                    <h4 className={'poppins-400'}>
                                        00-00-000-000
                                    </h4>
                                </div>
                                <div className={'flex flex-row gap-[15px]'}><Image src={mektuplogo} width={20} height={20} alt={''}/>
                                    <h4 className={'poppins-400'}>
                                        mail@emrelutfi.com
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-[15px]'}>
                            <h3 className={'poppins-semibold text-[20px]'}>
                                Social Media
                            </h3>
                            <div className={'flex flex-col gap-[10px]'}>
                                <div className={'flex flex-row gap-[15px]'}><Image src={instagramlogo} width={20} height={20} alt={''}/>
                                    <h4 className={'poppins-400'}>
                                        emrelutffi
                                    </h4>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={'bg-white w-[500px] p-[66px] flex flex-col items-center h-[400px] rounded-[10px]'}>
                    <h1 className={'text-[#00985B] poppins-semibold text-[30px]'}>
                        Get Contact with
                    </h1>
                    <div className={'w-full mt-[30px] h-[60px] bg-[#E4E4E4]'}>
                        <input placeholder={'Phone Number'} className={'w-full h-full text-black pl-4 bg-[#E4E4E4] active:outline-none outline-none'} type={'text'} name={'text'}/>
                    </div>
                    <div className={'w-full mt-[30px] h-[60px] bg-[#E4E4E4]'}>
                        <input placeholder={'E-mail Adress'} className={'w-full h-full text-black pl-4 bg-[#E4E4E4] active:outline-none outline-none'} type={'text'} name={'text'}/>
                    </div>
                    <div className={'w-full text-white flex items-center justify-center mt-[30px] h-[60px] bg-[#00985B]'}>
                        <h1 className={'poppins-medium'}>Send</h1>
                    </div>
                </div>
            </div>
            <Image className={'w-full -z-10 h-[1000px] lg:h-[600px] object-cover'} src={homebg} width={1920} height={1080} alt={''}/>

        </div>
    );
};

export default GetContact;
