import React from 'react'

export default function Button({children}
  :{
    children: string
  }) {
  return (
    <button className='w-fit py-3 px-6 rounded-lg text-white bg-blue-900 hover:bg-blue-800'>
        {children}
    </button>
  )
}
