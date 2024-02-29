'use client'

import Image from "next/image";
import topsvg from '/public/forsale/top.svg'
import {useState} from "react";
import FeaturedHomesAlt from "@/components/FeaturedHomesAlt";
import FeaturedHomesAlt2 from "@/components/FeaturedHomesAlt2";
import home1 from '/public/forsale/home1.svg';
import home2 from '/public/forsale/home2.svg';
import home3 from '/public/forsale/home3.svg'
import home4 from '/public/forsale/home4.svg'
import map from '/public/forsale/map.svg'
import final1 from '/public/forsale/final1.svg'
import GetContact from "@/components/GetContact";
import Footer from "@/components/Footer";
export default function Home() {
    const [forsale,setForsale] = useState({
        mapview: false,
    })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className={'flex flex-col  w-full h-full'}>
          <div className={'w-full h-[100px] sm:h-[120px] overflow-hidden'}>
              <Image className={'w-full h-full object-cover'} src={topsvg} width={1920} height={150} alt={''}/>
          </div>
          <div className={'px-[40px]'}>
              <div className={' w-full  pt-[36px]  h-full flex flex-col justify-start items-start'}>
                  <div className={'w-full h-fit flex justify-between items-center'}>
                      <h4 className={'quicksand-semibold text-[39px]'}>For Sale</h4>
                      <div className={'flex flex-row gap-[10px]'}>
                          <h3 className={'quicksand-medium text-[26px]'}>Map View</h3>
                          <div onClick={() => {setForsale({...forsale, mapview: !forsale.mapview})}} className={'w-[81px] relative cursor-pointer h-[45px] bg-[#EEEEEE] rounded-[442px] items-center flex p-2'}>
                              <div className={`w-[30px] transition-all duration-300 absolute left-0 ${forsale.mapview ? 'ml-[45px]' :  'ml-[6px]'} h-[30px] bg-white rounded-[50%]`}></div>
                          </div>
                      </div>
                  </div>
                  <div className={'flex flex-row flex-wrap items-center justify-center gap-[25px] md:gap-[48px]'}>
                      <div className={'mt-[26px] px-[19px] py-[10px] justify-between items-center flex w-[300px] h-[50px] rounded-[167px] border-[1.98px] border-[#B7BFC5]'}>
                          <input placeholder={'Search Here...'} className={'text-[15px] w-full active:outline-none outline-none'} type="text"/>
                          <div className={'w-[1px] mr-[29px] h-full bg-[#B7BFC5]'}></div>
                          <svg className={'w-[29px] h-auto cursor-pointer'} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                              <path d="M15.1845 0.505188C23.3232 0.505188 29.9285 7.11051 29.9285 15.2492C29.9285 23.3879 23.3232 29.9932 15.1845 29.9932C7.04575 29.9932 0.44043 23.3879 0.44043 15.2492C0.44043 7.11051 7.04575 0.505188 15.1845 0.505188ZM15.1845 26.7168C21.5195 26.7168 26.652 21.5842 26.652 15.2492C26.652 8.91256 21.5195 3.78164 15.1845 3.78164C8.8478 3.78164 3.71688 8.91256 3.71688 15.2492C3.71688 21.5842 8.8478 26.7168 15.1845 26.7168ZM29.0848 26.8331L33.7193 31.466L31.4012 33.7841L26.7683 29.1496L29.0848 26.8331Z" fill="#FDBC43"/>
                          </svg>
                      </div>

                      <div className={'mt-[26px] px-[19px] py-[10px] justify-between items-center flex w-[150px] h-[50px] rounded-[167px] border-[1.98px] border-[#B7BFC5]'}>
                          <input placeholder={'Price'} className={'text-[15px] w-full active:outline-none outline-none'} type="text"/>
                          <h5 className={'font-normal text-[#FDBC43]'}>
                              $$
                          </h5>
                      </div>
                      <div className={'mt-[26px] px-[19px] py-[10px] bg-[#FDBC43] gap-[10px] justify-center cursor-pointer items-center flex w-[180px] h-[50px] rounded-[167px] '}>
                          <h5 className={'text-white font-medium text-[16px]'}>
                              2-4 Beds
                          </h5>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                              <path d="M20.0922 21.8074L28.2014 13.6982L30.5178 16.0146L20.0922 26.4403L9.66649 16.0146L11.9829 13.6982L20.0922 21.8074Z" fill="white"/>
                          </svg>
                      </div>
                      <div className={'mt-[26px] cursor-pointer px-[19px] py-[10px] justify-between items-center flex w-[300px] h-[50px] rounded-[167px] border-[1.98px] border-[#B7BFC5]'}>
                          <h5 className={'text-[#B7BFC5] font-medium text-[16px]'}>
                              Property Type
                          </h5>
                          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                              <path d="M20.4369 21.8074L28.5461 13.6982L30.8625 16.0146L20.4369 26.4403L10.0112 16.0146L12.3277 13.6982L20.4369 21.8074Z" fill="#B7BFC5"/>
                          </svg>
                      </div>
                      <div className={'mt-[26px] cursor-pointer px-[19px] py-[10px] justify-between items-center flex w-[200px] h-[50px] rounded-[167px] border-[1.98px] border-[#B7BFC5]'}>
                          <h5 className={'text-[#B7BFC5] font-medium text-[16px]'}>
                              Filters
                          </h5>
                          <svg className={'w-[25px]'} xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                              <g clip-path="url(#clip0_1_999)">
                                  <path d="M5.75435 6.78162L17.2219 6.78162" stroke="#B7BFC5" stroke-width="3.27645" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M23.7746 6.78162L35.2422 6.78162" stroke="#B7BFC5" stroke-width="3.27645" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M5.75451 19.8874L20.4985 19.8874" stroke="#B7BFC5" stroke-width="3.27645" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M27.0511 19.8874L35.2422 19.8874" stroke="#B7BFC5" stroke-width="3.27645" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M5.75467 32.9932L13.9458 32.9932" stroke="#B7BFC5" stroke-width="3.27645" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M20.4982 32.9932L35.2422 32.9932" stroke="#B7BFC5" stroke-width="3.27645" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M17.2219 1.86694L17.2219 11.6963" stroke="#B7BFC5" stroke-width="3.27645" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M27.0513 14.9727L27.0513 24.8021" stroke="#B7BFC5" stroke-width="3.27645" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M13.9458 28.0786L13.9458 37.9079" stroke="#B7BFC5" stroke-width="3.27645" stroke-linecap="round" stroke-linejoin="round"/>
                              </g>
                              <defs>
                                  <clipPath id="clip0_1_999">
                                      <rect width="39.3174" height="39.3174" fill="white" transform="translate(40.1575 0.228699) rotate(90)"/>
                                  </clipPath>
                              </defs>
                          </svg>
                      </div>

                  </div>
              </div>
              <div className={'mt-[20px] md:flex-row flex-col items-center  w-full  flex gap-[50px]'}>
                  <h4 className={'text-[#FDBC43] cursor-pointer text-[30px] quicksand-bold'}>
                      Recommended
                  </h4>
                  <h5 className={'quicksand-normal cursor-pointer text-[30px] text-[#18]'}>Popular</h5>
                  <h5 className={'quicksand-normal cursor-pointer text-[30px] text-[#18]'}>Nearest</h5>
              </div>
              <div className={'mt-[40px] px-[40px] flex flex-col gap-[30px]'}>
                  <FeaturedHomesAlt2/>
                  <FeaturedHomesAlt2/>
              </div>
              <div className={'mt-[60px] p-[37px] w-full flex-col md:flex-row flex gap-[50px]  border-[#F4F4F4] border-[2.5px] rounded-[37px]'}>
                  <div className={'flex flex-col lg:w-[40%] gap-[15px]'}>
                      <Image className={'w-[100%] rounded-[20px]  object-cover h-[350px]'} width={400} height={250} src={home1} alt={''}/>
                      <div className={'flex flex-row items-center justify-center w-full flex-wrap gap-[15px]'}>
                          <Image className={'w-[32%] rounded-[10px] rounded-[10px]  object-cover h-[120px]'} width={400} height={250} src={home2} alt={''}/>
                          <Image className={'w-[32%] object-cover rounded-[10px] h-[120px]'} width={400} height={250} src={home3} alt={''}/>
                          <Image className={'xl:w-[30%] w-[32%] object-cover rounded-[10px] h-[120px]'} width={400} height={250} src={home4} alt={''}/>
                          <Image className={'w-[32%] object-cover rounded-[10px] h-[120px]'} width={400} height={250} src={home4} alt={''}/>

                      </div>
                  </div>
                  <div className={'flex flex-col justify-center items-center'}>
                      <h5 className={'quicksand-semibold text-[50px] text-black'}>
                          $ 685.000/ Year
                      </h5>
                      <div className={'flex flex-row justify-center mt-[10px] items-center gap-[20px]'}>
                          <svg className={'w-[30px] h-auto'} xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                              <g clip-path="url(#clip0_1_747)">
                                  <path d="M19.6186 3.33838C13.5649 3.33838 8.6687 8.23455 8.6687 14.2883C8.6687 22.5007 19.6186 34.6238 19.6186 34.6238C19.6186 34.6238 30.5685 22.5007 30.5685 14.2883C30.5685 8.23455 25.6723 3.33838 19.6186 3.33838ZM19.6186 18.1989C17.4599 18.1989 15.7079 16.447 15.7079 14.2883C15.7079 12.1296 17.4599 10.3776 19.6186 10.3776C21.7773 10.3776 23.5293 12.1296 23.5293 14.2883C23.5293 16.447 21.7773 18.1989 19.6186 18.1989Z" fill="#7F7F7F"/>
                              </g>
                              <defs>
                                  <clipPath id="clip0_1_747">
                                      <rect width="37.5425" height="37.5425" fill="white" transform="translate(0.847168 0.209717)"/>
                                  </clipPath>
                              </defs>
                          </svg>
                          <h5 className={'font-normal text-[20px] text-[#7F7F7F]'}>
                              Doane Street, Fremont CA 94538
                          </h5>
                      </div>
                      <div className={'flex flex-col items-center lg:flex-row gap-[50px] mt-[30px]'}>
                          <div className={'flex flex-col gap-[20px]'}>
                              <h5 className={'quicksand-nnormal text-black text-[30px]'}>
                                  Overview
                              </h5>
                              <div className={'flex flex-row gap-[30px]'}>
                                  <div className={'p-[19px] w-fit border-[1px] border-[#7F7F7F] rounded-full'}>
                                      <svg className={'w-[46px] h-auto !stroke-[#7F7F7F]'} xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                                          <path d="M3 5V19M3 16H21M21 19V13.2C21 12.0799 21 11.5198 20.782 11.092C20.5903 10.7157 20.2843 10.4097 19.908 10.218C19.4802 10 18.9201 10 17.8 10H11V15.7273M7 12H7.01M8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12Z" stroke="#7F7F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                  </div>
                                  <div className={'flex flex-col gap-[0px]'}>
                                      <h5 className={'quicksand-normal text-black text-[28px]'}>
                                          Bedroom
                                      </h5>
                                      <h4 className={'text-[#7F7F7F] text-[20px] quicksand-nnormal'}>4</h4>
                                  </div>
                              </div>
                              <div className={'flex flex-row gap-[30px]'}>
                                  <div className={'p-[19px] bg-[#FDBC43] w-fit  rounded-full'}>

                                      <svg className={'w-[46px] h-auto !stroke-white !fill-white'}  width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3 13.0827C3 13.0059 3 12.9675 3.00211 12.9351C3.0347 12.4339 3.43395 12.0347 3.93511 12.0021C3.96752 12 4.00591 12 4.08268 12H19.9173C19.9941 12 20.0325 12 20.0649 12.0021C20.5661 12.0347 20.9653 12.4339 20.9979 12.9351C21 12.9675 21 13.0059 21 13.0827C21 13.4784 21 13.6762 20.9859 13.8977C20.7773 17.1854 17.983 20.0867 14.7053 20.4186C14.4845 20.441 14.3558 20.4458 14.0982 20.4555C13.364 20.4831 12.6493 20.5 12 20.5C11.3507 20.5 10.636 20.4831 9.90183 20.4555C9.64425 20.4458 9.51545 20.441 9.29467 20.4186C6.01705 20.0867 3.22272 17.1854 3.01406 13.8977C3 13.6762 3 13.4784 3 13.0827Z" stroke="" stroke-width="1.5"/>
                                          <path d="M6 20L5 22" stroke="" stroke-width="1.5" stroke-linecap="round"/>
                                          <path d="M18 20L19 22" stroke="" stroke-width="1.5" stroke-linecap="round"/>
                                          <path d="M2 12H22" stroke="" stroke-width="1.5" stroke-linecap="round"/>
                                          <path d="M2.25 13C2.25 13.4142 2.58579 13.75 3 13.75C3.41421 13.75 3.75 13.4142 3.75 13H2.25ZM7.59973 3.49934L8.29609 3.22079L8.29609 3.22079L7.59973 3.49934ZM7.97885 4.44713L8.30713 5.12147L7.97885 4.44713ZM6.36212 6.19232L7.05701 6.47451L6.36212 6.19232ZM10.577 4.37783L10.2824 5.06753L10.577 4.37783ZM6.34559 8.74156L5.6478 9.01651C5.72221 9.20535 5.86997 9.35596 6.05735 9.43396C6.24473 9.51197 6.45572 9.51069 6.64215 9.43044L6.34559 8.74156ZM12.3063 6.17548L12.6029 6.86436C12.975 6.70417 13.1526 6.27744 13.0041 5.90053L12.3063 6.17548ZM3.75 13V4.38516H2.25V13H3.75ZM5.38516 2.75C6.05379 2.75 6.65506 3.15708 6.90338 3.77788L8.29609 3.22079C7.81998 2.0305 6.66715 1.25 5.38516 1.25V2.75ZM3.75 4.38516C3.75 3.48209 4.48209 2.75 5.38516 2.75V1.25C3.65366 1.25 2.25 2.65366 2.25 4.38516H3.75ZM6.90338 3.77788L7.2825 4.72568L8.67521 4.16859L8.29609 3.22079L6.90338 3.77788ZM7.04337 8.46661C6.80167 7.85321 6.78638 7.14092 7.05701 6.47451L5.66723 5.91014C5.24692 6.94515 5.26959 8.05665 5.6478 9.01651L7.04337 8.46661ZM12.0098 5.4866L6.04903 8.05268L6.64215 9.43044L12.6029 6.86436L12.0098 5.4866ZM10.2824 5.06753C10.9039 5.33307 11.367 5.83741 11.6086 6.45043L13.0041 5.90053C12.6258 4.94029 11.887 4.12189 10.8717 3.68813L10.2824 5.06753ZM7.05701 6.47451C7.31118 5.8486 7.76827 5.3838 8.30713 5.12147L7.65058 3.77279C6.78337 4.19496 6.06253 4.93671 5.66723 5.91014L7.05701 6.47451ZM8.30713 5.12147C8.91452 4.82579 9.62506 4.78672 10.2824 5.06753L10.8717 3.68813C9.79386 3.22768 8.62874 3.29661 7.65058 3.77279L8.30713 5.12147Z" fill=""/>
                                      </svg>
                                  </div>
                                  <div className={'flex flex-col gap-[0px] !text-[#FDBC43]'}>
                                      <h5 className={'quicksand-normal text-[#FDBC43] text-[28px]'}>
                                          Bath
                                      </h5>
                                      <h4 className={'text-[#FDBC43] text-[20px] quicksand-nnormal'}>3</h4>
                                  </div>
                              </div>
                              <div className={'flex flex-row gap-[30px]'}>
                                  <div className={'p-[19px] w-fit border-[1px] border-[#7F7F7F] rounded-full'}>

                                      <svg className={'w-[46px] h-auto !stroke-[#7F7F7F]'} width="800px" height="800px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M19 3.32001H16C14.8954 3.32001 14 4.21544 14 5.32001V8.32001C14 9.42458 14.8954 10.32 16 10.32H19C20.1046 10.32 21 9.42458 21 8.32001V5.32001C21 4.21544 20.1046 3.32001 19 3.32001Z" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M8 3.32001H5C3.89543 3.32001 3 4.21544 3 5.32001V8.32001C3 9.42458 3.89543 10.32 5 10.32H8C9.10457 10.32 10 9.42458 10 8.32001V5.32001C10 4.21544 9.10457 3.32001 8 3.32001Z" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M19 14.32H16C14.8954 14.32 14 15.2154 14 16.32V19.32C14 20.4246 14.8954 21.32 16 21.32H19C20.1046 21.32 21 20.4246 21 19.32V16.32C21 15.2154 20.1046 14.32 19 14.32Z" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M8 14.32H5C3.89543 14.32 3 15.2154 3 16.32V19.32C3 20.4246 3.89543 21.32 5 21.32H8C9.10457 21.32 10 20.4246 10 19.32V16.32C10 15.2154 9.10457 14.32 8 14.32Z" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                  </div>
                                  <div className={'flex flex-col gap-[0px]'}>
                                      <h5 className={'quicksand-normal text-black text-[28px]'}>
                                          Sqft
                                      </h5>
                                      <h4 className={'text-[#7F7F7F] text-[20px] quicksand-nnormal'}>1500</h4>
                                  </div>
                              </div>
                          </div>
                          <Image className={'w-full h-full'} src={map} width={411} height={380} alt={''}/>
                      </div>
                  </div>
              </div>
              <div className={'relative '}>
                  <Image  className={'w-[500px] z-30 absolute right-[-200px] top-[-320px] md:top-[-300px] h-[500px]'} src={final1} width={1500} height={1500} alt={''}/>
                  <div className={''}>
                      <GetContact/>
                  </div>
              </div>
              <Footer/>
          </div>
      </div>
    </main>
  );
}
