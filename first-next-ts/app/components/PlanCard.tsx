import Image from 'next/image'
import React from 'react'

export default function PlanCard({icon, name, price}: {icon:string, name:string, price:number}) {
  return (
    <div className='flex flex-col gap-16 border p-6 w-44 mt-12 rounded-xl
    hover:cursor-pointer hover:border-indigo-700
    '>
        <div>
          <Image src={icon} alt='Plan' />
        </div>
        <div>
            <p className='font-bold text-indigo-700'>{name}</p>
            <p className='text-sm text-slate-400'>${price}/mo</p>
        </div>
    </div>
  )
}
