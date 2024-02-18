import React from 'react';

const SpecialOptionsBar = () => {
    return (
        <div className={'flex justify-center items-center'}>
            <div className={'flex mt-[62px] w-[340px] md:w-full justify-start items-start md:justify-center md:items-center  gap-[50px] lg:gap-[50px] md:gap-[100px] flex-wrap flex-col md:flex-row'}>
                <div className={'flex  justify-center items-center flex-row gap-[10px]'}>
                    <div className={'w-[55px] h-[55px] bg-dark600 rounded-[11px] flex justify-center items-center'}>
                        <svg className={'w-[30px] h-[30px]'} xmlns="http://www.w3.org/2000/svg" width="58" height="53" viewBox="0 0 58 53" fill="none">
                            <path
                                d="M57.8287 31.7872L29.1538 9.53025L0.478851 31.7872V22.7181L29.1538 0.455933L57.8287 22.7129V31.7872ZM50.66 30.9791V52.4879H36.3225V38.1504H21.9851V52.4879H7.64759V30.9817L29.1538 14.8534L50.66 30.9791Z"
                                fill="white"/>
                        </svg>
                    </div>
                    <div className={'flex flex-col gap-[0px]'}>
                        <h3 className={'murecho-medium leading-0 text-[25px] p-0 m-0 flex'}>5,250+</h3>
                        <h2 className={'murecho-regular text-[15px] text-[#515151]'}>number of active House’s</h2>
                    </div>
                </div>
                <div className={'flex justify-center items-center flex-row gap-[10px]'}>
                    <div className={'w-[55px] h-[55px] bg-dark600 rounded-[11px] flex justify-center items-center'}>
                        <svg className={'w-[30px] h-[30px]'} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <g clip-path="url(#clip0_10_25)">
                                <path
                                    d="M4.0943 16.623C4.0943 9.14943 10.1528 3.09094 17.6263 3.09094C25.1 3.09094 31.1584 9.14943 31.1584 16.623C31.1584 24.0965 25.1 30.155 17.6263 30.155C10.1528 30.155 4.0943 24.0965 4.0943 16.623Z"
                                    fill="white"/>
                                <path
                                    d="M36.0789 16.623C36.0789 20.3144 34.9948 23.7526 33.1279 26.6367C35.5315 28.8227 38.725 30.155 42.2298 30.155C49.7034 30.155 55.7619 24.0965 55.7619 16.623C55.7619 9.14943 49.7034 3.09094 42.2298 3.09094C38.725 3.09094 35.5315 4.42331 33.1279 6.60917C34.9948 9.49334 36.0789 12.9316 36.0789 16.623Z"
                                    fill="white"/>
                                <path
                                    d="M0.403748 44.9173C0.403748 39.4821 4.80993 35.0758 10.2452 35.0758H25.0075C30.4427 35.0758 34.8489 39.4821 34.8489 44.9173V54.7588C34.8489 56.1176 33.7474 57.2191 32.3886 57.2191H2.86412C1.5053 57.2191 0.403748 56.1176 0.403748 54.7588V44.9173Z"
                                    fill="white"/>
                                <path
                                    d="M39.7697 44.9173V57.2191H56.9923C58.3509 57.2191 59.4526 56.1176 59.4526 54.7588V44.9173C59.4526 39.4821 55.0464 35.0758 49.6111 35.0758H36.0107C38.3481 37.6875 39.7697 41.1364 39.7697 44.9173Z"
                                    fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_10_25">
                                    <rect width="59.0489" height="59.0489" fill="white"
                                          transform="translate(0.403748 0.630615)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className={'flex flex-col gap-[0px]'}>
                        <h3 className={'murecho-medium leading-0 text-[25px] p-0 m-0 flex'}>10,000+</h3>
                        <h2 className={'murecho-regular text-[15px] text-[#515151]'}>number of active users</h2>
                    </div>
                </div>
                <div className={'flex justify-center items-center flex-row gap-[10px]'}>
                    <div className={'w-[55px] h-[55px] bg-dark600 rounded-[11px] flex justify-center items-center'}>
                        <svg className={'w-[30px] h-[30px]'} xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M23.1448 12.3254C31.1184 4.35181 44.0461 4.35181 52.0197 12.3254C59.9933 20.2991 59.9933 33.2268 52.0197 41.2004C46.7237 46.4967 39.2427 48.2727 32.4861 46.5375C32.0864 46.4348 31.7816 46.5551 31.6328 46.7039L21.733 56.6034C20.4557 57.881 18.6669 58.5084 16.8714 58.309L11.3018 57.69C10.2567 57.5738 9.2822 57.1055 8.5386 56.362L7.98337 55.8066C7.23977 55.0631 6.7714 54.0884 6.65526 53.0434L6.03641 47.4738C5.83692 45.6783 6.46441 43.8895 7.7418 42.6122L17.6407 32.7132C17.7901 32.5639 17.9101 32.2578 17.8077 31.8591C16.0727 25.1026 17.8486 17.6216 23.1448 12.3254ZM49.1915 15.1539C42.7797 8.74234 32.3848 8.74234 25.9732 15.1539C21.7177 19.4094 20.2842 25.4207 21.682 30.8642C22.0849 32.433 21.7562 34.2546 20.4691 35.5418L10.5702 45.4407C10.1521 45.8588 9.94665 46.4444 10.012 47.0322L10.6308 52.6018C10.6466 52.7442 10.7105 52.877 10.8118 52.9783L11.367 53.5335C11.4684 53.6348 11.6012 53.6986 11.7436 53.7146L17.3132 54.3332C17.9009 54.3986 18.4865 54.1932 18.9046 53.7751L20.7904 51.8892L17.556 48.6903C16.7707 47.9138 16.7637 46.6474 17.5405 45.862C18.3172 45.0767 19.5835 45.0698 20.3689 45.8466L23.6188 49.061L28.8043 43.8754C30.092 42.5876 31.9133 42.2607 33.4811 42.6634C38.9245 44.061 44.936 42.6276 49.1915 38.3722C55.6029 31.9604 55.6029 21.5654 49.1915 15.1539ZM32.148 21.8264C35.0117 18.9626 39.6549 18.9626 42.5187 21.8264C45.3827 24.6903 45.3827 29.3335 42.5187 32.1972C39.6549 35.0612 35.0117 35.0612 32.148 32.1972C29.284 29.3335 29.284 24.6903 32.148 21.8264ZM39.6904 24.6549C38.3885 23.3531 36.2781 23.3531 34.9763 24.6549C33.6747 25.9566 33.6747 28.0671 34.9763 29.369C36.2781 30.6706 38.3885 30.6706 39.6904 29.369C40.992 28.0671 40.992 25.9566 39.6904 24.6549Z"
                                  fill="white"/>
                        </svg>
                    </div>
                    <div className={'flex flex-col gap-[0px]'}>
                        <h3 className={'murecho-medium leading-0 text-[25px] p-0 m-0 flex'}>10,000+</h3>
                        <h2 className={'murecho-regular text-[15px] text-[#515151]'}>of waiting customers</h2>
                    </div>
                </div>
                <div className={'flex justify-center items-center  flex-row gap-[10px]'}>
                    <div className={'w-[55px] h-[55px] bg-dark600 rounded-[11px] flex justify-center items-center'}>
                        <svg className={'w-[30px] h-[30px]'} xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
                            <path
                                d="M38.9048 19.9842C40.4837 19.0862 41.5486 17.3887 41.5486 15.4424C41.5486 12.5588 39.2111 10.2212 36.3274 10.2212C33.4437 10.2212 31.1061 12.5588 31.1061 15.4424C31.1061 17.3931 32.1757 19.0939 33.7606 19.9902L33.7371 20.038C32.0253 23.6056 29.6503 28.7168 25.9806 30.6356C22.9698 32.2099 18.6438 31.4178 15.4329 30.8304C15.2914 28.7964 13.5966 27.1902 11.5265 27.1902C9.36381 27.1902 7.6106 28.9434 7.6106 31.1061C7.6106 33.0241 8.98939 34.62 10.8099 34.9565L18.5038 54.8199C19.6718 57.8354 22.5731 59.8229 25.8069 59.8229H46.8479C50.0817 59.8229 52.9828 57.8354 54.1511 54.8199L61.8448 34.9565C63.6652 34.62 65.0441 33.0241 65.0441 31.1061C65.0441 28.9434 63.2909 27.1902 61.1282 27.1902C59.0979 27.1902 57.4285 28.7353 57.2316 30.7138C53.9446 31.1401 49.707 31.6838 46.6743 30.0981C43.0782 28.2178 40.6699 23.459 38.9048 19.9842Z"
                                fill="white"/>
                        </svg>
                    </div>
                    <div className={'flex flex-col gap-[0px]'}>
                        <h3 className={'murecho-medium leading-0 text-[25px] p-0 m-0 flex'}>10,050+</h3>
                        <h2 className={'murecho-regular text-[15px] text-[#515151]'}>the best on the market</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOptionsBar;
