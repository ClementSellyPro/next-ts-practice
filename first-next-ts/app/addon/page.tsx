import Link from 'next/link'
import React from 'react'
import Button from '../components/Button'

export default function Addon() {
  return (
    <div className="relative mx-16 w-full py-5">
        Addon
        
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
