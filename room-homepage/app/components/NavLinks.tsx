import Link from 'next/link'
import React from 'react'

function NavLinks() {
  return (
    <ul className='flex items-center gap-5 mt-3 md:text-white text-black font-semibold md:font-normal'>
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
  )
}

export default NavLinks