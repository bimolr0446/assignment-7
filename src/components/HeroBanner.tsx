import React from 'react';
import DateDisplay from './DateDisplay';
import Link from 'next/link';
import Image from 'next/image';
import BannerLogo from "../../public/bazar-hero.png"

const HeroBanner = () => {
    return (
        <section className='md:flex justify-between bg-white p-4 md:rounded-4xl lg:rounded-2xl rounded-xl'>
            <div>
                {/* Left Content */}
                <div className="order-1">
                    {/* Date Badge */}
                    <span className="inline-flex rounded-full bg-[#e2f2e7] px-4 py-2 text-sm font-semibold text-[#07883e] sm:text-base">
                        <DateDisplay></DateDisplay>
                    </span>

                    {/* Heading */}
                    <h1 className="mt-4 max-w-3xl text-3xl leading-tight font-extrabold tracking-tight text-[#202820] sm:text-4xl lg:text-[42px]">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    {/* Description */}
                    <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#687168] sm:text-base sm:leading-7">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                        বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
                    </p>

                    {/* Button */}
                    <Link
                        href="/"
                        className="mt-7 inline-flex items-center justify-center rounded-[10px] bg-[#07883e] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_5px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#066d33] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#07883e]"
                    >
                        সব পণ্য দেখুন
                    </Link>
                </div>
            </div>
            <div>
                <Image src={BannerLogo} width={400} height={400} alt='banner logo'></Image>
            </div>
    
        </section>
    );
};

export default HeroBanner;