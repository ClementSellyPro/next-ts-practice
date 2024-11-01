import React from 'react'

interface TaskPropsType {
    title: string,
    description: string,
    limit: string
}

function TaskCard({title, description, limit}: TaskPropsType) {
  return (
    <div className='py-2 px-4 rounded-lg bg-yellow-300'>
      <h2 className='font-bold text-lg'>{title}</h2>
      <p className='text-sm'>{description}</p>

      <div className='flex items-center justify-between my-2'>
        <p className='mt-2 text-xs'>Limit date: {limit}</p>
        <div className='flex justify-end gap-4 mt-4'>
          <button className='text-sm py-1 px-5 text-white bg-orange-400 hover:bg-orange-300 rounded-full' type='button'>modify</button>
          <button className='text-sm py-1 px-5 text-white bg-cyan-500 hover:bg-cyan-400 rounded-full' type='button'>Finish</button>
        </div>
      </div>
    </div>
  )
}

export default TaskCard