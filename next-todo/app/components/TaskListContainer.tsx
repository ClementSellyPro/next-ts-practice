import React from 'react'

function TaskListContainer({children}:{ children:React.ReactNode }) {
  return (
    <div className='lg:w-1/2 md:w-4/6 w-5/6 py-6 px-4 mt-10 rounded-xl bg-white'>
        <div  className='flex justify-between items-center'>
            <h1 className='font-bold md:text-3xl text-2xl'>TODO List</h1>
            <button className='py-1 px-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white'  type="button">+ add new task</button>
        </div>
        <section className='flex flex-col gap-4 w-full py-2 mt-4 '>
            {children}
        </section>
    </div>
  )
}

export default TaskListContainer