import Image from 'next/image'
import React from 'react'

import ArrowLeft from '@/public/images/icon-angle-left.svg';
import ArrowRight from '@/public/images/icon-angle-right.svg';

function ArrowSelection() {
  return (
    <div className='flex bg-gray-900 hover:cursor-pointer absolute bottom-0 md:left-0 right-0 md:right-auto'>
            <div className='py-5 px-7 hover:bg-gray-800'>
                <Image src={ArrowLeft} alt='Arrow left' height={10} width={10} />
            </div>
            <div className='py-5 px-7 hover:bg-gray-800'>
                <Image src={ArrowRight} alt='Arrow right' height={10} width={10} />
            </div>
        </div>
  )
}

export default ArrowSelection