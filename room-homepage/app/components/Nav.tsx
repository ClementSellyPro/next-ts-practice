import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

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


      <ul className='md:flex items-center gap-5 mt-3 hidden'>
        <li className='flex flex-col items-center group hover:pointer h-10 w-14'>
          <Link className='nav-link group-hover:font-semibold' href={'/'}>home</Link>
          <div className='hidden group-hover:block w-4 h-0.5 bg-white mt-2'></div>
        </li>
        
        <li className='flex flex-col items-center group hover:pointer h-10 w-14'>
          <Link className='nav-link group-hover:font-semibold' href={'/'}>shop</Link>
          <div className='hidden group-hover:block w-4 h-0.5 bg-white mt-2'></div>
        </li>

        <li className='flex flex-col items-center group hover:pointer h-10 w-14'>
          <Link className='nav-link group-hover:font-semibold' href={'/'}>about</Link>
          <div className='hidden group-hover:block w-4 h-0.5 bg-white mt-2'></div>
        </li>

        <li className='flex flex-col items-center group hover:pointer h-10 w-14'>
          <Link className='nav-link group-hover:font-semibold' href={'/'}>contact</Link>
          <div className='hidden group-hover:block w-4 h-0.5 bg-white mt-2'></div>
        </li>
      </ul>
    </div>
  )
}

export default Nav