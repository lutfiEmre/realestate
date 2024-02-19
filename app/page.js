import Image from "next/image";
import backgroundHome from '/public/img/home/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering 1.svg'
import LocationSelect from "@/components/LocationSelect";
import PropertyType from "@/components/PropertyType";

import SpecialOptionsBar from "@/components/SpecialOptionsBar";
import ReactRange from '@/components/ReactRange'
import FeaturedHomes from "@/components/FeaturedHomes";
import FeaturedHomesAlt from "@/components/FeaturedHomesAlt";
import Comments from "@/components/Comments";
import FollowingStep from "@/components/following3";
export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
          <div className={'flex flex-col w-full h-full min-h-screen pb-24 relative'}>
              <Image className={'w-full absolute top-0 left-0 h-full object-cover'} src={backgroundHome} width={1920} height={1052}
                     alt={'Real Estate Background'}/>ü
              <div className={'relative flex md:w-full lg:w-fit flex-col lg:justify-start lg:items-start justify-center items-center gap-[0px] sm:gap-[0px] md:gap-[50px] md:mt-[50px] lg:gap-[100px] xl:gap-0   lg:flex-row xl:left-[250px] lg:left-[200px] lg:top-[0px] xl:top-[0px] min-[1500px]:left-[200px] min-[1600px]:left-[300px] min-[1700px]:left-[350px] min-[1800px]:left-[450px] min-[2300px]:left-[600px] min-[2000px]:left-[500px] 2xl:top-[100px] 2xl:left-[200px]'}>
                  <div className={'flex flex-col w-full  mt-12 justify-center items-center lg:items-start gap-[35px]  mb-4'}>
                      <h2 className={'text-dark600 flex justify-center  lg:ml-0 items-center murecho-semibold lg:text-[70px] w-[300px] sm:w-[490px] text-center sm:text-start  sm:text-[60px] text-[50px]  md:w-[655px] md:text-[80px] lg:w-[300px] xl:w-[400px] 2xl:w-fit xl:text-[60px] 2xl:text-[90px]'}>Easy way to find a <br className={'2xl:flex hidden'}/> perfect
                          property</h2>

                      <h3 className={'text-black murecho-medium text-[20px] xl:text-[20px] md:text-[30px] lg:w-[300px] 2xl:w-full lg:text-[20px] 2xl:text-[32px]'}>We provide a complete service for the sale, <br/>
                          purchase or rental of real estate</h3>

                  </div>
                  <div className={'relative h-[600px] p-44 lg:w-[350px] w-[350px] sm:w-[400px] xl:w-[500px]  mt-[50px]'}>
                      <div
                          className={'absolute gap-[50px] px-[22px] py-[30px] top-0 left-0 w-full h-full z-20  flex flex-col'}>
                          <div className={'flex gap-[15px] flex-col'}>
                              <div className={'flex flex-row gap-[5px] items-center'}>
                                  <h4 className={'murecho-medium text-dark600 lg:text-[30px] xl:text-[40px]'}>City</h4>
                                  <svg className={'fill-dark600 lg:w-[30px] xl:w-[40px] mt-1 h-auto'}
                                       xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"
                                       fill="none">
                                      <g clip-path="url(#clip0_4_95)">
                                          <path
                                              d="M18.0614 0.984924C10.9646 0.984924 5.21069 6.73884 5.21069 13.8357C5.21069 16.6301 6.12684 19.1944 7.64965 21.2944C7.67696 21.3448 7.68125 21.401 7.7123 21.4492L16.2795 34.2999C16.6768 34.8959 17.3461 35.2535 18.0614 35.2535C18.7768 35.2535 19.4461 34.8959 19.8434 34.2999L28.4105 21.4492C28.4421 21.401 28.4459 21.3448 28.4732 21.2944C29.996 19.1944 30.9121 16.6301 30.9121 13.8357C30.9121 6.73884 25.1582 0.984924 18.0614 0.984924ZM18.0614 18.1192C15.6958 18.1192 13.7778 16.2013 13.7778 13.8357C13.7778 11.47 15.6958 9.55208 18.0614 9.55208C20.427 9.55208 22.345 11.47 22.345 13.8357C22.345 16.2013 20.427 18.1192 18.0614 18.1192Z"
                                              fill=""/>
                                      </g>
                                      <defs>
                                          <clipPath id="clip0_4_95">
                                              <rect width="34.2686" height="34.2686" fill="white"
                                                    transform="translate(0.927124 0.984924)"/>
                                          </clipPath>
                                      </defs>
                                  </svg>
                              </div>
                              <LocationSelect/>
                          </div>
                          <div className={'flex gap-[15px] flex-col'}>
                              <div className={'flex flex-row gap-[5px] items-center'}>
                                  <h4 className={'murecho-medium text-dark600 lg:text-[30px] xl:text-[40px]'}>Property Type</h4>
                              </div>
                              <PropertyType/>
                          </div>
                          <div className={'flex gap-[15px] flex-col'}>
                              <div className={'flex flex-row gap-[5px] items-center'}>
                                  <h4 className={'murecho-medium text-dark600 lg:text-[30px] xl:text-[40px]'}>Price Range</h4>
                              </div>
                              <ReactRange/>

                          </div>
                          <div className={'absolute cursor-pointer flex justify-center items-center right-0 bottom-0 w-[77px] h-[82px] home-bg3'}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="53" height="54" viewBox="0 0 53 54"
                                   fill="none">
                                  <path
                                      d="M36.546 37.2661L46.0318 47.0272M41.6478 24.6333C41.6478 34.5276 33.7968 42.5484 24.1119 42.5484C14.427 42.5484 6.57593 34.5276 6.57593 24.6333C6.57593 14.7391 14.427 6.7182 24.1119 6.7182C33.7968 6.7182 41.6478 14.7391 41.6478 24.6333Z"
                                      stroke="white" stroke-width="4.56289" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                              </svg>
                          </div>
                      </div>
                      <div className={'w-full  absolute top-0 left-0 h-full home-bg2'}>
                          <div className={'w-full absolute top-0 left-0  h-full home-bg1'}></div>

                      </div>
                  </div>
              </div>
          </div>
             <SpecialOptionsBar/>
          <FeaturedHomesAlt/>
          <Comments/>
          <FollowingStep/>
      </main>
  );
}
