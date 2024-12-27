'use client';

import ImageIcons from "@/utilities/ImageIcons";
import Image from "next/image";

export default function Vision() {
  return (
    <section className="w-full flex-col">
        <div className="px-6 pb-10 lg:px-16 lg:py-24 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#6772FF]">
            The Process
          </h3>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Our vision
          </h2>
        </div>
        <div className="relative md:w-[90%] lg:w-[80%] mx-auto rounded-[50px] isolate overflow-hidden bg-[#EDEEFC] px-6 py-10 lg:px-16 lg:py-10">
            <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                <div className="flex justify-center lg:block">
                    <Image 
                        src={ImageIcons.Vision}
                        alt="Vision"
                        className="w-72 aspect-auto md:w-80 lg:w-96"
                    />
                </div>
                <div className="space-y-4 text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start">
                        <div className="h-12 w-12 bg-[#D3D6F1] flex justify-center items-center rounded-[14px]">
                            <Image 
                                src={ImageIcons.Assistance}
                                alt="wallet"
                                className="flex self-center"
                            />
                        </div>
                    </div>
                    <p className="mt-4 text-sm font-semibold text-[#A6A5E1]">
                        Finance Management
                    </p>

                    <h3 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-gray-900">
                        Business Accounts and Cards
                    </h3>

                    <p className="text-base md:text-lg text-black text-opacity-35">
                        Set up multi-currency IBAN accounts and generate virtual FinFlow
                        Mastercard Corporate cards with generous spending thresholds.
                    </p>

                    <button className="relative px-[2px] py-3 text-[#6772FF] bg-white rounded-full font-medium overflow-hidden group cursor-pointer">
                                <span
                                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full p-[2px] group-hover:from-blue-500 group-hover:to-purple-500"
                                    aria-hidden="true"
                                ></span>
                                <span className="relative bg-[#EDEEFC] text-[#6772FF] rounded-full px-8 py-3">
                                    
                                    Join The Waitlist
                                </span>
                            </button>
                </div>
            </div>
        </div>
    </section>
  );
}
