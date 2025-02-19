import React from 'react';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Image from 'next/image';
import DescriptionText from './DescriptionText';

import test from '@/public/images/desktop-image-hero-1.jpg';

function HomeTopSection() {
  return (
    <div>
        <div className="relative">
            {/* Nav desktop and Logo */}
            <div className="pt-5 z-50">
                <Nav />
            </div>
            {/* Nav mobile with hamburger icon */}
            <div>
                <NavMobile />
            </div>
        </div>

        {/* image section */}
        <div className='absolute top-0 left-0 flex w-full z-10'>
            <Image className='w-7/12' src={test} alt='plant' width={100} height={100} />

            <div className='w-5/12 border'>
                <DescriptionText />
            </div>
        </div>
    </div>
  )
}

export default HomeTopSection