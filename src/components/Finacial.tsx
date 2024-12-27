'use client';

import ImageIcons from "@/utilities/ImageIcons";
import Image from "next/image";

export default function Financial() {
    return (
        <section className="w-full flex-col mt-14">
            <div className="relative md:w-[90%] lg:w-[80%] mx-auto rounded-[50px] isolate overflow-hidden bg-[#EDFCFC] px-6 py-10 lg:px-16 lg:py-10">
                <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                    <div className="space-y-4 text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start">
                            <div className="h-12 w-12 bg-[#CFE9E9] flex justify-center items-center rounded-[14px]">
                                <Image
                                    src={ImageIcons.Financial}
                                    alt="wallet"
                                    className="flex self-center"
                                />
                            </div>
                        </div>
                        <p className="mt-4 text-sm font-semibold text-[#B6D3D3]">
                            Fast Financial
                        </p>

                        <h3 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-gray-900">
                            Fast & flexible financing
                        </h3>

                        <p className="text-base md:text-lg text-black text-opacity-35">
                            Access interest-free capital made for media buying 
                            or paying suppliers, with up to 90 days to repay. 
                        </p>

                        <button className="relative px-[2px] py-3 text-[#6772FF] bg-white rounded-full font-medium overflow-hidden group cursor-pointer">
                            <span
                                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full p-[2px] group-hover:from-blue-500 group-hover:to-purple-500"
                                aria-hidden="true"
                            ></span>
                            <span className="relative bg-[#EDFCFC] text-[#6772FF] rounded-full px-8 py-3">

                                Join The Waitlist
                            </span>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src={ImageIcons.FinancialHero}
                            alt="Vision"
                            className="w-80 md:w-96 aspect-auto lg:w-[470px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
