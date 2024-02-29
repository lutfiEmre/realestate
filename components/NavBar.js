'use client'
import React, {useRef} from 'react';
import Image from "next/image";

import logo from '/public/img/navbar/logo.svg'
import user from '/public/img/navbar/user.svg'
import menu from '/public/img/navbar/menu.svg'
import close from '/public/img/navbar/close.svg'
import housesvg from '/public/img/navbar/house1.svg'


import {usePathname} from "next/navigation";
import Link from "next/link";



const NavBar = () => {
    const pathname = usePathname()
    const menuasd = useRef()

    const closemenu = () => {
        const x = menuasd.current;
        x.style.right === '0px' ? x.style.right = '-500px' : x.style.right = '0px';
    }
    return (
        <>
            <div className={'w-full sticky top-0 right-0 shadow z-40 bg-white flex items-center px-[90px] justify-between h-[80px]'}>
                <Image className={'2xl:w-[45px] lg:w-[35px]'} src={logo} width={45} height={45}
                       alt={'Real Estate Logo'}/>
                <div className={'lg:flex hidden flex-row lg:gap-[50px] xl:gap-[60px] 2xl:gap-[135px]'}>
                    <div
                        className={'flex text-[#181F37] lg:gap-[50px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px] murecho-semibold flex-row xl:gap-[80px] 2xl:gap-[104px]'}>
                        <Link href={'/'}>
                            <h4 className={'cursor-pointer'}>Home</h4>
                        </Link>
                        <Link href={'/forsale'}>      <h4 className={'cursor-pointer'}>For Sale</h4></Link>
                        <h4 className={'cursor-pointer'}>To Rent</h4>
                    </div>
                    <div className={'flex flex-row lg:gap-[40px] xl:gap-[60px] 2xl:gap-[134px]'}>
                        <Image className={'2xl:w-[45px] lg:w-[35px]'} src={user} width={46} height={46}
                               alt={'Real Estate User Logo'}/>
                        <div
                            className={'w-[150px] lg:h-[35px] 2xl:h-[45px] cursor-pointer murecho-medium flex justify-center items-center  rounded-[10px] bg-dark600'}>
                            <h1 className={'text-white text-[22px]'}>
                                Post Ad
                            </h1>
                        </div>
                    </div>
                </div>
                <div className={'lg:hidden  flex items-center'}>
                    <Image onClick={closemenu} className={'cursor-pointer z-30 '} src={menu} width={35} height={45}
                           alt={'Real Estate Logo'}/>
                </div>
            </div>
            <div className={'sticky z-40   right-0 top-0 w-[720px] h-full overflow-hidden'}>
                <div ref={menuasd}
                     className={'w-[310px] lg:!right-[-500px] px-[24px] flex-col py-[60px] justify-start right-[-500px] items-center gap-[50px] transition-all z-30 fixed top-0    shadow-2xl overflow-hidden ease-linear duration-300 flex  h-full  bg-white '}>
                    <div className={'flex flex-col gap-[50px]'}>
                        <Link
                            href={'/'}
                            className={`w-full px-[29px] flex flex-row items-center justify-start gap-[27px] rounded-[12px] h-[82px] ${pathname === '/' ? "bg-dark600" : ''}`}>
                            <svg className={`${pathname === '/' ? 'stroke-white' : '!stroke-gray600'}`} width="44"
                                 height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M2.40252 19.1084V32.1144C2.28357 37.2312 6.3326 41.4771 11.4493 41.6008H32.5557C37.6724 41.4771 41.7215 37.2312 41.6025 32.1144V19.1084C41.6084 15.2709 39.818 11.6518 36.7641 9.32796L28.1961 4.13396C24.3898 1.82203 19.6127 1.82203 15.8061 4.13396L7.24092 9.32796C4.1871 11.6518 2.39672 15.2709 2.40252 19.1084Z"
                                      stroke="" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M28.0337 30.913C26.62 32.8268 24.382 33.956 22.0025 33.956C19.6234 33.956 17.385 32.8268 15.9713 30.913"
                                    stroke="" stroke-width="4.2" stroke-linecap="round"/>
                            </svg>
                            <h2 className={`poppins-semibold text-[25px] ${pathname === '/' ? 'text-white' : 'text-gray600'}`}>Home</h2>
                        </Link>
                        <Link
                            href={'/forsale'}
                            className={`w-full px-[29px] flex flex-row items-center justify-start gap-[27px] rounded-[12px] h-[82px] ${pathname === '/forsale' ? "bg-dark600" : ''}`}>
                            <svg className={`${pathname === '/forsale' ? 'fill-white' : '!fill-gray600'}`} width="47"
                                 height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_161_5120)">
                                    <path
                                        d="M23.2576 10.2202C15.7372 10.2202 9.61963 16.3378 9.61963 23.8581C9.61963 31.3785 15.7372 37.4961 23.2576 37.4961C30.7779 37.4961 36.8956 31.3785 36.8956 23.8581C36.8956 16.3378 30.778 10.2202 23.2576 10.2202ZM30.7958 22.8372L28.1262 25.4406L28.7566 29.1144C28.8542 29.6837 28.6204 30.2578 28.1537 30.5972C27.8894 30.7886 27.5766 30.8862 27.2629 30.8862C27.0211 30.8862 26.7795 30.829 26.5576 30.7116L23.2576 28.9762L19.9576 30.7116C19.4475 30.982 18.829 30.9366 18.3614 30.5971C17.8947 30.2578 17.6609 29.6836 17.7585 29.1143L18.3889 25.4405L15.7193 22.8371C15.3059 22.4336 15.1579 21.8318 15.3355 21.2832C15.5142 20.7347 15.9887 20.3351 16.5588 20.2523L20.2485 19.7166L21.899 16.3732C22.1536 15.8563 22.6803 15.5288 23.2574 15.5288C23.8346 15.5288 24.3613 15.8562 24.6158 16.3732L26.2663 19.7166L29.956 20.2523C30.5263 20.3351 31.0008 20.7347 31.1793 21.2832C31.3571 21.8319 31.2091 22.4337 30.7958 22.8372Z"
                                        fill=""/>
                                    <path
                                        d="M8.4293 16.2815H1.53775C1.01297 16.2815 0.524577 16.5538 0.248298 16.9997C-0.0269826 17.4466 -0.0526682 18.005 0.182223 18.4746L2.87449 23.8581L0.182223 29.2418C-0.0525774 29.7113 -0.0268918 30.2697 0.248298 30.7167C0.524486 31.1626 1.01288 31.4348 1.53775 31.4348H8.4293C7.26128 29.1587 6.58892 26.5875 6.58892 23.8582C6.58892 21.1289 7.2611 18.5577 8.4293 16.2815Z"
                                        fill=""/>
                                    <path
                                        d="M46.3326 29.2418L43.6404 23.8582L46.3326 18.4747C46.5674 18.0052 46.5418 17.4467 46.2666 16.9998C45.9904 16.5539 45.502 16.2816 44.9771 16.2816H38.0856C39.2537 18.5578 39.9259 21.1289 39.9259 23.8582C39.9259 26.5875 39.2537 29.1586 38.0856 31.4349H44.9771C45.5019 31.4349 45.9903 31.1626 46.2666 30.7167C46.5419 30.2697 46.5675 29.7115 46.3326 29.2418Z"
                                        fill=""/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_161_5120">
                                        <rect width="46.4701" height="46.4701" fill="white"
                                              transform="translate(0.0223999 0.623138)"/>
                                    </clipPath>
                                </defs>
                            </svg>

                            <h2 className={`poppins-semibold text-[25px] ${pathname === '/forsale' ? 'text-white' : 'text-gray600'}`}>For
                                Sale</h2>
                        </Link>
                        <Link
                            href={'/forrent'}
                            className={`w-full px-[29px] flex flex-row items-center justify-start gap-[27px] rounded-[12px] h-[82px] ${pathname === '/forrent' ? "bg-dark600" : ''}`}>
                            <svg className={`${pathname === '/forrent' ? 'stroke-white' : '!stroke-gray600'}`} width="46"
                                 height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M29.9598 16.3311H29.9822M29.9598 29.736C37.3631 29.736 43.3647 23.7344 43.3647 16.3311C43.3647 8.92785 37.3631 2.9263 29.9598 2.9263C22.5566 2.9263 16.555 8.92785 16.555 16.3311C16.555 16.9426 16.5959 17.5445 16.6752 18.1342C16.8056 19.1042 16.8708 19.5892 16.8269 19.8959C16.7812 20.2157 16.723 20.3877 16.5655 20.6696C16.4142 20.9402 16.1477 21.2067 15.6147 21.7398L4.19713 33.1574C3.81074 33.5436 3.61753 33.7369 3.47937 33.9623C3.35687 34.1623 3.26661 34.3801 3.21188 34.6082C3.15015 34.8654 3.15015 35.1386 3.15015 35.6848V39.5662C3.15015 40.8176 3.15015 41.4431 3.39365 41.921C3.60785 42.3415 3.94963 42.6831 4.37001 42.8973C4.84792 43.1409 5.47354 43.1408 6.72477 43.1408H10.6061C11.1525 43.1408 11.4257 43.1409 11.6828 43.0792C11.9108 43.0245 12.1287 42.9342 12.3286 42.8115C12.5541 42.6735 12.7473 42.4802 13.1337 42.0939L24.5512 30.6764C25.0843 30.1433 25.3508 29.8768 25.6214 29.7255C25.9033 29.568 26.0753 29.5097 26.395 29.4641C26.7018 29.4201 27.1868 29.4853 28.1569 29.6158C28.7465 29.6951 29.3484 29.736 29.9598 29.736Z"
                                    stroke="" stroke-width="4.46828" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>


                            <h2 className={`poppins-semibold text-[25px] ${pathname === '/forrent' ? 'text-white' : 'text-gray600'}`}>For
                                Rent</h2>
                        </Link>
                        <Link
                            href={'/profile'}
                            className={`w-full px-[29px] flex flex-row items-center justify-start gap-[27px] rounded-[12px] h-[82px] ${pathname === '/profile' ? "bg-dark600" : ''}`}>
                            <svg  className={`${pathname === '/profile' ? 'stroke-white ' : '!stroke-gray600 '}`} width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.69259 38.5455C5.51576 40.5324 6.98299 42.2863 8.96986 42.4632C10.9567 42.64 12.7106 41.1727 12.8875 39.1859C13.0643 37.1991 11.5971 35.4451 9.6102 35.2683"
                                    stroke="" stroke-width="2.70875" stroke-linecap="round"/>
                                <path
                                    d="M21.9309 42.4774C23.9256 42.4774 25.5426 40.8604 25.5426 38.8658C25.5426 36.8711 23.9256 35.2541 21.9309 35.2541C19.9363 35.2541 18.3193 36.8711 18.3193 38.8658C18.3193 40.8604 19.9363 42.4774 21.9309 42.4774Z"
                                    stroke="" stroke-width="2.70875"/>
                                <path
                                    d="M38.1835 38.8658C38.1835 40.8605 36.5665 42.4774 34.5718 42.4774C32.5771 42.4774 30.9601 40.8605 30.9601 38.8658C30.9601 36.871 32.5771 35.2541 34.5718 35.2541"
                                    stroke="" stroke-width="2.70875" stroke-linecap="round"/>
                                <g clip-path="url(#clip0_161_408)">
                                    <path
                                        d="M1.86066 22.5279C1.86066 12.8626 1.86066 8.02996 4.86329 5.02735C7.8659 2.02472 12.6985 2.02472 22.3639 2.02472C32.0291 2.02472 36.8619 2.02472 39.8644 5.02735C42.867 8.02996 42.8671 12.8626 42.8671 22.5279C42.8671 32.1931 42.867 37.0259 39.8644 40.0284C36.8619 43.0311 32.0291 43.0311 22.3639 43.0311C12.6985 43.0311 7.8659 43.0311 4.86329 40.0284C1.86066 37.0259 1.86066 32.1931 1.86066 22.5279Z"
                                        stroke="#" stroke-width="3.07548"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M34.9533 22.528C34.9533 29.8688 29.4127 35.8197 22.5782 35.8197C15.7437 35.8197 10.2032 29.8688 10.2032 22.528C10.2032 15.1872 15.7437 9.23627 22.5782 9.23627C29.4127 9.23627 34.9533 15.1872 34.9533 22.528ZM26.2908 18.5405C26.2908 20.7428 24.6287 22.528 22.5782 22.528C20.5278 22.528 18.8657 20.7428 18.8657 18.5405C18.8657 16.3382 20.5278 14.553 22.5782 14.553C24.6287 14.553 26.2908 16.3382 26.2908 18.5405ZM22.5782 33.826C24.786 33.826 26.8349 33.0955 28.5268 31.8471C29.2741 31.2958 29.5934 30.2454 29.1591 29.3908C28.2584 27.6191 26.4024 26.5155 22.5781 26.5155C18.754 26.5155 16.8981 27.619 15.9974 29.3908C15.5629 30.2454 15.8822 31.2956 16.6295 31.847C18.3214 33.0953 20.3704 33.826 22.5782 33.826Z"
                                          fill=""/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_161_408">
                                        <rect width="44.6828" height="44.6828" fill="white"
                                              transform="translate(0.0223999 0.186584)"/>
                                    </clipPath>
                                </defs>
                            </svg>


                            <h2 className={`poppins-semibold text-[25px] ${pathname === '/profile' ? 'text-white' : 'text-gray600'}`}>Profile</h2>
                        </Link>

                    </div>
                    <div className={'bg-gray600 cursor-pointer w-[170px] h-[49px] rounded-[10px] flex justify-center items-center poppins-semibold'}>
                        <h5 className={'text-white'}>Post Ad</h5>
                    </div>
                    <Image onClick={closemenu} className={'cursor-pointer w-[54px] h-[54px] '} src={close} width={54} height={54}
                           alt={'Real Estate Logo'}/>
                </div>
            </div>

        </>
    )
        ;
};

export default NavBar;
