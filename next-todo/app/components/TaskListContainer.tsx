import React from 'react'

function TaskListContainer({children}:{ children:React.ReactNode }) {
  return (
    <div className='w-full'>
        <section className='flex flex-col gap-4 w-full py-2 mt-4'>
            {children}
        </section>
    </div>
  )
}

export default TaskListContainer