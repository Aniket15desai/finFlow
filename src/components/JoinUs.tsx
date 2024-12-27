'use client';

import Image from "next/image";
import ImageIcons from "@/utilities/ImageIcons";

export default function JoinUs() {
    return (
        <section className="w-full flex-col bg-white my-24">
            <div className="my-16 flex-col lg:space-y-2 text-center">
                <h3 className="text-2xl lg:text-[40px] font-semibold uppercase tracking-wide text-black">
                    Join Us
                </h3>
                <h2 className="text-base font-bold text-[#6772FF] lg:text-sm lg:tracking-[2px] uppercase">
                    Please connect with us
                </h2>
            </div>

            <div className="relative w-full lg:h-[800px] md:w-[90%] lg:w-[80%] mx-auto isolate overflow-hidden">
                <div className="grid grid-cols-1 px-6 lg:px-16 py-10 lg:mt-[200px] rounded-[50px] lg:py-16  lg:grid-cols-2 items-center gap-12 mx-auto bg-[#EDEEFC]">
                    {/* Left Section */}
                    <div className="space-y-6 text-center lg:text-left">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                            Our Waiting List
                        </h3>
                        <p className="text-base md:text-lg text-gray-600">
                            We empower digital businesses with integrated financial solutions,
                            providing intelligent tools designed for full visibility and control of cash flow.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <button className="relative px-[2px] py-3 text-[#6772FF] bg-white rounded-full font-medium overflow-hidden group cursor-pointer">
                                <span
                                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full p-[2px] group-hover:from-blue-500 group-hover:to-purple-500"
                                    aria-hidden="true"
                                ></span>
                                <span className="relative lg:font-semibold text-white rounded-full px-8 py-3">

                                    Explore
                                </span>
                            </button>
                            <button className="flex gap-2 bg-transparent hover:bg-gray-200 text-[#2563EB] font-medium rounded-full px-6 py-3">
                                <Image src={ImageIcons.View} alt="View" />View Demo
                            </button>
                        </div>

                        <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-6">
                            <Image
                                src={ImageIcons.Noon}
                                alt="Company Logo 1"
                                width={40}
                                height={40}
                                className="opacity-80 hover:opacity-100"
                            />
                            <Image
                                src={ImageIcons.Snapchat}
                                alt="Company Logo 2"
                                width={40}
                                height={40}
                                className="opacity-80 hover:opacity-100"
                            />
                            <Image
                                src={ImageIcons.Zid}
                                alt="Company Logo 3"
                                width={40}
                                height={40}
                                className="opacity-80 hover:opacity-100"
                            />
                            <Image
                                src={ImageIcons.Meta}
                                alt="Company Logo 4"
                                width={40}
                                height={40}
                                className="opacity-80 hover:opacity-100"
                            />
                            <Image
                                src={ImageIcons.Amazon}
                                alt="Company Logo 4"
                                width={40}
                                height={40}
                                className="opacity-80 hover:opacity-100"
                            />
                            <Image
                                src={ImageIcons.Tiktok}
                                alt="Company Logo 4"
                                width={40}
                                height={40}
                                className="opacity-80 hover:opacity-100"
                            />
                            <Image
                                src={ImageIcons.Google}
                                alt="Company Logo 4"
                                width={40}
                                height={40}
                                className="opacity-80 hover:opacity-100"
                            />
                            <Image
                                src={ImageIcons.Salla}
                                alt="Company Logo 4"
                                width={40}
                                height={40}
                                className="opacity-80 hover:opacity-100"
                            />
                            <Image
                                src={ImageIcons.RiyadBank}
                                alt="Company Logo 4"
                                width={40}
                                height={40}
                                className="opacity-80 hover:opacity-100"
                            />
                        </div>
                    </div>

                </div>
                <div className="lg:absolute flex justify-center bottom-0 right-16">
                    <Image
                        src={ImageIcons.JoinUs}
                        alt="Mobile Preview"
                        className="w-[300px] md:w-[350px] lg:w-[400px] aspect-auto"
                    />
                </div>
            </div>
        </section>
    );
}
