import React, { useState } from 'react'

function FilterNav() {
  const [filterSelected, setFilterSelected] = useState('');

  function handleFilterChange(e: React.MouseEvent<HTMLElement>){
    const target = e.currentTarget;
    const value = target.innerText;
    setFilterSelected(value);
  }
    
  return (
    <nav className='flex start gap-4 mt-5'>
        <p className='border border-yellow-400 rounded-full py-1 px-4 hover:cursor-pointer hover:bg-slate-100' onClick={(e) => handleFilterChange(e)}>All tasks</p>
        <p className='border border-yellow-400 rounded-full py-1 px-4 hover:cursor-pointer hover:bg-slate-100' onClick={handleFilterChange}>Completed</p>
        <p className='border border-yellow-400 rounded-full py-1 px-4 hover:cursor-pointer hover:bg-slate-100' onClick={handleFilterChange}>Active</p>
    </nav>
  )
}

export default FilterNav