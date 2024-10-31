import React from 'react'

function ResultSection() {
  return (
    <div className='flex md:flex-row flex-col gap-8 w-5/6 p-8 bg-white border rounded-md shadow-2xl'>
        <div className='md:w-1/4 w-full md:block flex flex-col items-center'>
            <h2 className='text-xs mb-2'>IP ADDRESS</h2>
            <p className='font-semibold text-lg'>192.212.174.101</p>
        </div>
        
        <div className='md:border-l md:pl-4 md:w-1/4 w-full md:block flex flex-col items-center'>
            <h2 className='text-xs mb-2'>LOCATION</h2>
            <p className='font-semibold text-lg'>Brooklyn, NY 10001</p>
        </div>
        
        <div className='md:border-l md:pl-4 md:w-1/4 w-full md:block flex flex-col items-center'>
            <h2 className='text-xs mb-2'>TIMEZONE</h2>
            <p className='font-semibold text-lg'>UTC-05:00</p>
        </div>
        
        <div className='md:border-l md:pl-4 md:w-1/4 w-full md:block flex flex-col items-center'>
            <h2 className='text-xs mb-2'>ISP</h2>
            <p className='font-semibold text-lg'>SpaceX Starlink</p>
        </div>
    </div>
  )
}

export default ResultSection