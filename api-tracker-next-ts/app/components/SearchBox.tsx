import Image from 'next/image';
import React from 'react';

function SearchBox() {
  return (
    <div className='flex flex-col items-center gap-4 md:p-8 py-8 md:w-3/4 w-full'>
        <h1 className='text-white text-2xl font-semibold'>IP Address Tracker</h1>

        <div className='flex items-center md:h-8 h-10 w-3/4'>
            <input className='h-10 pl-4 md:text-sm text-xs rounded-l-md md:w-11/12 w-5/6' type='text' placeholder='Search for any IP address or domain'/>
            <button className='md:pl-2 pl-4 h-10 rounded-r-md md:w-1/12 w-1/6 bg-slate-950 text-white hover:bg-slate-900'>
            <Image src='/image/icon-arrow.svg' alt='Arrow search' width={10} height={10} />
            </button>
        </div>
    </div>
  )
}

export default SearchBox