import Image from 'next/image'
import React from 'react';

import ArrowButton from '@/public/images/icon-arrow.svg';
import ArrowLeft from '@/public/images/icon-angle-left.svg';
import ArrowRight from '@/public/images/icon-angle-right.svg';

function DescriptionText() {
  return (
    <div className='flex flex-col items-start gap-5 pl-16 pr-10 py-20 relative'>
        <h1 className='font-bold text-4xl'> Discover innovative ways to decorate </h1>

        <p className='text-gray-400'>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>

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

        <div className='flex bg-gray-900 hover:cursor-pointer absolute bottom-0 left-0'>
            <div className='py-5 px-7 hover:bg-gray-800'>
                <Image src={ArrowLeft} alt='Arrow left' height={10} width={10} />
            </div>
            <div className='py-5 px-7 hover:bg-gray-800'>
                <Image src={ArrowRight} alt='Arrow right' height={10} width={10} />
            </div>
        </div>
    </div>
  )
}

export default DescriptionText