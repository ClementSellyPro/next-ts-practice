import Link from 'next/link'
import React from 'react'
import Button from '../components/Button'
import Title from '../components/Title'
import AddonCard from '../components/AddonCard'

export default function Addon() {
  return (
    <div className="relative mx-16 w-full py-5">

      <Title title="Pick add-ons" >
        Add-ons help enhance your gaming experience.
      </Title>

      {/* add-ons section */}
      <div className='flex flex-col justify-between items-center h-4/6 mt-5'>
        <AddonCard title="Online service" price="1">Access to multiplayer games</AddonCard>
        <AddonCard title="Larger storage" price="2">Extra 1TB of cloud save</AddonCard>
        <AddonCard title="Customizable profile" price="2">Custom theme on your profile</AddonCard>
      </div>
        
      {/* buttons section */}
      <Link href='/plan' className="absolute left-0 bottom-5 text-blue-900 font-bold hover:text-blue-700">
          Go Back
      </Link>
      <Link href='/summary' className="absolute right-0 bottom-5">
        <Button>
          Next Step
        </Button>
      </Link>
    </div>
  )
}
