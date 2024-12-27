import ImageIcons from '@/utilities/ImageIcons'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className="bg-white">
            <div className="relative isolate px-6 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-[-10%] -z-10 transform-gpu overflow-hidden blur-3xl lg:top-[-30%]"
                >
                    <div
                        style={{
                            clipPath: 'ellipse(50% 50% at 50% 50%)',
                        }}
                        className="relative right-[0px] h-[5rem] w-[5rem] lg:w-[860px] lg:h-[860px] -translate-x-1/2 bg-[#8D9EC9] opacity-10 lg:right-[0px]"
                    />
                </div>
                <div className="lg:mx-auto lg:max-w-6xl py-36">
                    <div className="flex lg:justify-center">
                        <div className="text-lg md:text-4xl lg:text-6xl text-[#1A1A1A] lg:leading-[80px] font-semibold text-center">
                            Simplifying financial management for online businesses
                        </div>
                    </div>
                    <Image
                        src={ImageIcons.Hero}
                        className='w-full lg:mt-[-58px]'
                        alt='Hero'
                    />
                    <div className='block md:ms-12 lg:ms-24 mt-2 md:mt-[-80px] lg:mt-[-120px] md:w-[450px] lg:w-[690px] text lg:text-center text-[10px] md:text-base lg:text-lg font-medium text-[#24365E]'>
                        FinFlow integrates banking and commerce data to streamline cash flow management, capital access, and <b className='text-[#8156FE]'>financial decision-making for digital commerce businesses. </b>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-15rem)] -z-10 transform-gpu overflow-hidden blur-3xl lg:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath: 'ellipse(50% 50% at 50% 50%)',
                        }}
                        className="relative left-[calc(80%+3rem)] h-[5rem] w-[5rem] lg:w-[860px] lg:h-[860px] -translate-x-1/2 bg-[#67C9CB] opacity-10 lg:left-[calc(70%+36rem)]"
                    />
                </div>
            </div>

        </div>
    )
}

export default Hero