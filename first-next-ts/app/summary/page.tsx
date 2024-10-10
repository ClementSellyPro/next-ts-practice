import Link from 'next/link'
import React from 'react'
import Button from '../components/Button'

export default function Summary() {
  return (
    <div className="relative mx-16 w-full py-5">
        Summary
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
