'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import NavLinks from './NavLinks';

import Hamburger from '@/public/images/icon-hamburger.svg';
import CloseIcon from '@/public/images/icon-close.svg';

function NavMobile() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuClick(){
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    }

    return (
        <div className='flex justify-around items-center md:hidden'>
            <div className='z-50'>
            {
                !isMenuOpen ? <Image onClick={handleMenuClick} className='cursor-pointer absolute top-12 left-10' src={Hamburger} alt='Hamburger icon' height={20} width={20} /> : <Image onClick={handleMenuClick} className='cursor-pointer absolute top-12 left-10' src={CloseIcon} alt='Close icon' height={20} width={20} />
            }
            </div>
            
            {
                isMenuOpen ? 
                <div className='flex items-center justify-center w-full h-32 bg-white absolute top-0 left-0 z-40'>
                    <NavLinks />
                </div> :
                <></>
            }
            
        </div>
    )
}

export default NavMobile