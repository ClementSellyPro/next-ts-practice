import React from 'react';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Image from 'next/image';
import DescriptionText from './DescriptionText';

import test from '@/public/images/desktop-image-hero-1.jpg';
import ArrowSelection from './ui/ArrowSelection';

function HomeTopSection() {
  return (
    <div>
        <div className="relative pl-20 pt-5">
            {/* Nav desktop and Logo */}
            <div className="relative pt-5 z-40">
                <Nav />
            </div>
            {/* Nav mobile with hamburger icon */}
            <div>
                <NavMobile />
            </div>
        </div>

        {/* image section */}
        <div className='absolute top-0 left-0 md:flex w-full z-10'>
            <div className='relative md:w-7/12 w-full'>
                <Image className='bg-cover w-full h-full' src={test} alt='plant' width={100} height={100} />
                <div className='md:hidden block'>
                    <ArrowSelection />
                </div>
            </div>

            <div className='md:w-5/12 border relative'>
                <DescriptionText />
            </div>
        </div>
    </div>
  )
}

export default HomeTopSection