"use client"

import Link from 'next/link'
import React, { useContext } from 'react'
import Button from '../components/Button'
import Title from '../components/Title'
import ChoiceContext from '../context/ChoiceContext'

export default function Summary() {

  const {billingChoice, planChoice, addSelection} = useContext(ChoiceContext);

  return (
    <div className="relative mx-16 w-full py-5">
      <Title title="Finishing up" >
        Double-check everything looks OK before confirming
      </Title>

      {/* summary section */}
      <div className='mt-8 p-6 rounded-lg bg-slate-100'>
        <div className='flex items-center justify-between pb-4 border-b'>
          <div>
            <p className='text-blue-900 font-semibold'>{planChoice[0].name} ({billingChoice})</p>
            <Link href='/plan' className='underline hover:cursor-pointer  hover:text-blue-700'>Change</Link>
          </div>
          <p className='text-blue-900 font-semibold'>${planChoice[0].price}/{billingChoice === 'Monthly'? 'mo':'yr'}</p>
        </div>
        
        <div className='flex flex-col gap-4 pt-4'>
        {
          addSelection.map((addon, index) => {
            return(
              <div key={index} className='flex justify-between'>
                <p className='text-slate-400'>{addon.name}</p>
                <p className='text-blue-900'>+${addon.price}/{billingChoice === 'Monthly'? 'mo':'yr'}</p>
              </div>
            )
          })
        }
        </div>

        {/* <div className='flex flex-col gap-4 pt-4'>
          <div className='flex justify-between'>
            <p className='text-slate-400'>Online service</p>
            <p className='text-blue-900'>+$1/mo</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-slate-400'>Larger storage</p>
            <p className='text-blue-900'>+$2/mo</p>
          </div>
        </div> */}
      </div>

      <div className='flex justify-between p-6'>
        <p className='text-slate-400'>Total (per {billingChoice === 'Monthly' ? 'month':'year'})</p>
        <p className='text-indigo-700 font-semibold text-xl'>+${planChoice[0].price}/{billingChoice === 'Monthly'? 'mo':'yr'}</p>
      </div>
      
      {/* buttons section */}
      <Link href='/addon' className="absolute left-0 bottom-5 text-blue-900 font-bold hover:text-blue-700">
          Go Back
      </Link>
      <Link href='/' className="absolute right-0 bottom-5">
        <Button>
          {'>_Confirm'}
        </Button>
      </Link>
    </div>
  )
}
