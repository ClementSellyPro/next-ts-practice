import React from 'react'

export default function SideBar() {
  return (
    <div className='flex flex-col gap-7 px-8 py-10 w-2/5 h-sideDesk rounded-lg bg-indigo-700 text-white'>

        <div className='flex items-center'>
            <div className='flex items-center justify-center border rounded-full w-8 h-8'>
                1
            </div>
            <div className='ml-3'>
                <p className='text-xs'>STEP 1</p>
                <p className='text-sm font-bold'>YOUR INFO</p>
            </div>
        </div>
        
        <div className='flex items-center'>
            <div className='flex items-center justify-center border rounded-full w-8 h-8'>
                2
            </div>
            <div className='ml-3'>
                <p className='text-xs'>STEP 2</p>
                <p className='text-sm font-bold'>SELECT PLAN</p>
            </div>
        </div>
        
        <div className='flex items-center'>
            <div className='flex items-center justify-center border rounded-full w-8 h-8'>
                3
            </div>
            <div className='ml-3'>
                <p className='text-xs'>STEP 3</p>
                <p className='text-sm font-bold'>ADD-ONS</p>
            </div>
        </div>
        
        <div className='flex items-center'>
            <div className='flex items-center justify-center border rounded-full w-8 h-8'>
                4
            </div>
            <div className='ml-3'>
                <p className='text-xs'>STEP 4</p>
                <p className='text-sm font-bold'>SUMMARY</p>
            </div>
        </div>
    </div>
  )
}
