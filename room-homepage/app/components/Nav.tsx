import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import NavLinks from './NavLinks';

import Logo from '@/public/images/logo.svg';

function Nav() {
  return (
    <div className='flex items-center gap-16 h-16'>
      {/**Logo part */}
      <div className='md:block flex justify-center items-center md:w-fit w-full'>
        <Link href={'/'}>
          <Image src={Logo} alt='Logo' height={100} width={100} />
        </Link>

      </div>

      <div className='hidden md:flex'>
        <NavLinks />
      </div>
      
    </div>
  )
}

export default Nav