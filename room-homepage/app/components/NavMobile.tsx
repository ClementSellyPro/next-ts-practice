'use client'

import React, { useState } from 'react';
import Image from 'next/image';

import Hamburger from '@/public/images/icon-hamburger.svg';
import CloseIcon from '@/public/images/icon-close.svg';

function NavMobile() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuClick(){
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    }

    return (
        <div className='md:hidden'>
            {
                !isMenuOpen ? <Image onClick={handleMenuClick} className='cursor-pointer' src={Hamburger} alt='Hamburger icon' height={30} width={30} /> : <Image onClick={handleMenuClick} className='cursor-pointer' src={CloseIcon} alt='Close icon' height={30} width={30} />
            }
            
            <div className='w-full h-10 bg-white'>

            </div>
            
        </div>
    )
}

export default NavMobile