"use client"

import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext';

function FilterNav() {
  const {filter, setFilter} = useContext(TaskContext);

  function handleFilterChange(e: React.MouseEvent<HTMLElement>){
    const target = e.currentTarget;
    const value = target.innerText;
    setFilter(value);
  }
  // style in global.css
    
  return (
    <nav className='flex start gap-4 mt-5'>
        <p className={`${filter === "All tasks" ? "filter-selected" : ''}  border border-yellow-400 rounded-full py-1 px-4 hover:cursor-pointer hover:bg-slate-100`} onClick={(e) => handleFilterChange(e)}>All tasks</p>
        <p className={`${filter === "Completed" ? "filter-selected" : ''} border border-yellow-400 rounded-full py-1 px-4 hover:cursor-pointer hover:bg-slate-100`} onClick={handleFilterChange}>Completed</p>
        <p className={`${filter === "Active" ? "filter-selected" : ''} border border-yellow-400 rounded-full py-1 px-4 hover:cursor-pointer hover:bg-slate-100`} onClick={handleFilterChange}>Active</p>
    </nav>
  )
}

export default FilterNav