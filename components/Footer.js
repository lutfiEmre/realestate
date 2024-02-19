import React from 'react';
import logo from '/public/img/reshot-icon-house-XJ53QBRVTC 1.svg'
import Image from "next/image";
import phonelogo from '/public/img/footer/Vector.svg'
import mektuplogo from '/public/img/footer/mektup.svg'
import righl from '/public/img/footer/right.svg'
import linked from '/public/img/footer/linkedin.svg'
import instagra from '/public/img/footer/instagram.svg'
import faceboo from '/public/img/footer/facebook.svg'

const Footer = () => {
    return (
        <>
            <div className={'md:hidden  flex flex-col py-[50px] gap-[30px] items-center'}>
                <div className={'flex flex-row items-center gap-4'}>
                    <div className={'bg-[#181F37] p-4 rounded-full'}>
                        <Image src={logo} width={30} height={30} alt={''}/>
                    </div>
                    <h3 className={'poppins-600 text-[23px]'}>Reale State</h3>
                </div>
                <div className={'flex flex-row gap-0 gap-[20px] sm:gap-[50px]'}>
                     <span className={'poppins-500'}>
                    Turkey <br/> EmreLutfi
                </span>
                    <div className={'poppins-500 flex flex-row items-center gap-4'}>
                        <Image src={phonelogo} width={20} height={20} alt={''}/>
                        <span className={'tracking-tighter text-[14px]'}>+0 00 0 0 0 0</span>
                    </div>
                    <div className={'poppins-500 flex flex-row items-center gap-4'}>
                        <Image src={mektuplogo} width={20} height={20} alt={''}/>
                        <span className={'tracking-tight text-[14px] '}>mail@emrelutfi.com</span>
                    </div>
                </div>
            </div>
            <div
                className={'w-full md:mt-[60px]  pb-[50px] justify-around gap-[50px]   xl:px-[150px] flex md:items-start'}>
                <div className={'flex flex-col hidden md:flex gap-[50px]'}>
                    <div className={'flex flex-row items-center gap-4'}>
                        <div className={'bg-[#181F37] p-4 rounded-full'}>
                        <Image src={logo} width={30} height={30} alt={''}/>
                        </div>
                        <h3 className={'poppins-600 text-[23px]'}>Reale State</h3>
                    </div>
                    <span className={'poppins-500'}>
                    Turkey <br/> EmreLutfi
                </span>
                    <div className={'poppins-500 flex flex-row items-center gap-4'}>
                        <Image src={phonelogo} width={20} height={20} alt={''}/>
                        <span className={'tracking-tighter text-[14px]'}>+0 00 0 0 0 0</span>
                    </div>
                    <div className={'poppins-500 flex flex-row items-center gap-4'}>
                        <Image src={mektuplogo} width={20} height={20} alt={''}/>
                        <span className={'tracking-tight text-[14px] '}>mail@emrelutfi.com</span>
                    </div>
                </div>
                <div className={'flex flex-col gap-[50px]'}>
                    <h1 className={'poppins-500'}>Quick Links</h1>
                    <ul className={'flex poppins-400 flex-col gap-[10px]'}>
                        <li>Home</li>
                        <li>For Sale</li>
                        <li>For Rent</li>
                        <li>Profile</li>

                        <li>Blogs</li>
                    </ul>

                </div>
                <div className={'flex flex-col gap-[50px]'}>
                    <h1 className={'poppins-500'}>Discovery</h1>
                    <ul className={'flex poppins-400 flex-col gap-[10px]'}>
                        <li>Turkey</li>
                        <li>Canada</li>
                        <li>England</li>
                        <li>Italy</li>

                        <li>Germany</li>
                    </ul>

                </div>
                <div className={'flex flex-col gap-[70px]'}>
                    <h1 className={'poppins-500'}>
                        Subscribe to our Newsletter!
                    </h1>
                    <div
                        className={'flex poppins-400 w-full lg:w-[300px] items-center h-[60px] boxshadow3 rounded-[15px]  flex-row gap-[10px]'}>
                        <input placeholder={'Email Adress'}
                               className={'placeholder:text-gray-300 flex items-center rounded-[15px]  justify-center active:outline-none  px-2 outline-none w-full  h-full'}
                               type="text"/>
                        <div
                            className={' w-[50px] cursor-pointer flex items-center justify-center h-[40px] rounded-full mr-4 bg-[#181F37]'}>
                            <Image className={''} src={righl} width={16} height={16} alt={''}/>
                        </div>

                    </div>
                    <div className={'poppins-500 flex-col flex gap-[20px]'}>
                        <h1>Follow us on!</h1>
                        <div className={'flex flex-row gap-[10px]'}>
                            <Image className={'cursor-pointer'} src={linked} width={18} height={20} alt={''}/>
                            <Image className={'cursor-pointer'} src={faceboo} width={12} height={20} alt={''}/>
                            <Image className={'cursor-pointer'} src={instagra} width={18} height={29} alt={''}/>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;
