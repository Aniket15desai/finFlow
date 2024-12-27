'use client'
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';
import ImageIcons from '@/utilities/ImageIcons';

const navigation = [
    { name: 'Features', href: '#' },
    { name: 'Why Us', href: '#' },
    { name: 'Reviews', href: '#' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex w-full h-28 items-center justify-between px-6 lg:px-28">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image
                            alt="Company Logo"
                            src={ImageIcons.Logo}
                            className="h-4 lg:h-8 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <div className='flex gap-x-12 items-center'>
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold text-gray-900">
                                {item.name}
                            </a>
                        ))}
                        <button className="relative px-[2px] py-3 text-[#6772FF] bg-white rounded-full font-medium overflow-hidden group cursor-pointer">
                            <span
                                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full p-[2px] group-hover:from-blue-500 group-hover:to-purple-500"
                                aria-hidden="true"
                            ></span>
                            <span className="relative bg-white rounded-full px-8 py-3">
                                Log In
                            </span>
                        </button>
                    </div>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 lg:max-w-sm lg:ring-1 lg:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                alt="Company Logo"
                                src={ImageIcons.Logo}
                                className="h-4 lg:h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <button className="relative px-[2px] py-3 text-[#6772FF] bg-white rounded-full font-medium overflow-hidden group cursor-pointer">
                                <span
                                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full p-[2px] group-hover:from-blue-500 group-hover:to-purple-500"
                                    aria-hidden="true"
                                ></span>
                                <span className="relative bg-white rounded-full px-8 py-3">
                                    Log In
                                </span>
                            </button>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}