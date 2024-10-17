"use client"

import React, { MouseEvent } from 'react'

export default function AddonCard({title, children, price}
:{
    title:string, 
    children:string, 
    price:string
}) {

    // const [selected, setSelected] = useState(); useState

    function handleSelection(e: MouseEvent<HTMLElement>){
        const target = e.currentTarget as HTMLElement;
        console.log(target);
    }

    return (
        <div className='flex items-center p-8 border rounded-xl w-full relative hover:bg-slate-50 hover:border-indigo-600 hover:cursor-pointer' onClick={(e: MouseEvent<HTMLElement>) => handleSelection (e)}>
            <input className='w-8' type="checkbox" />
            <div className='ml-4'>
                <h2 className='font-semibold text-blue-900'>{title}</h2>
                <p className='text-slate-400'>{children}</p>
            </div>
            <p className='absolute right-8 text-indigo-600'>+${price}/mo</p>
        </div>
    )
}
