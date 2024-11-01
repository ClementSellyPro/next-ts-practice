import React from 'react'

function FilterNav() {

    
  return (
    <nav className='flex start gap-4 mt-5'>
        <p className='border border-yellow-400 rounded-full py-1 px-4'>All tasks</p>
        <p className='border border-yellow-400 rounded-full py-1 px-4'>Completed</p>
        <p className='border border-yellow-400 rounded-full py-1 px-4'>Active</p>
    </nav>
  )
}

export default FilterNav