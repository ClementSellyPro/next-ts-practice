import Image from 'next/image'
import React from 'react';
import ArrowSelection from './ui/ArrowSelection';

import ArrowButton from '@/public/images/icon-arrow.svg';

function DescriptionText() {
  return (
    <div className='flex flex-col items-start gap-5 md:pl-20 pl-10 pr-10 md:py-28 py-10 md:relative border h-full'>
        <h1 className='font-bold xl:text-4xl md:text-3xl text-2xl'> Discover innovative ways to decorate </h1>

        <p className='text-gray-400 leading-7 xl:text-base text-sm'>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>

        <button className='flex items-center hover:text-gray-500 group'>
            <p className='flex gap-4'>
                <span>S</span>
                <span>H</span>
                <span>O</span>
                <span>P</span>
            </p>
            <p className='flex gap-4 ml-8'>
                <span>N</span>
                <span>O</span>
                <span>W</span>
            </p>
            <Image className='ml-8 group-hover:translate-x-5 transition-all' src={ArrowButton} alt='Arrow' height={40} width={40} />
        </button>

        {/* buttons to change image and description */}
        <div className='hidden md:block'>
            <ArrowSelection />
        </div>
    </div>
  )
}

export default DescriptionText