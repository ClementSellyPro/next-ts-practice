import React from 'react'

function TaskListContainer({children}:{ children:React.ReactNode }) {
  return (
    <div>
        <section className='flex flex-col gap-4 w-full py-2 mt-4 '>
            {children}
        </section>
    </div>
  )
}

export default TaskListContainer