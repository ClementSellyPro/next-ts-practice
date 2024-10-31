import React from 'react'

interface TaskPropsType {
    title: string,
    description: string,
    limit: string
}

function TaskCard({title, description, limit}: TaskPropsType) {
  return (
    <div className='py-2 px-4 rounded-lg bg-yellow-300'>
        <div className='flex items-center justify-between mb-2'>
            <h2 className='font-bold'>{title}</h2>
            <button className='text-sm py-0.5 px-4 text-white bg-orange-400 hover:bg-orange-300 rounded-full' type='button'>modify</button>
        </div>
        <p className='text-sm'>{description}</p>
        <p className='mt-2 text-xs'>Limit date: {limit}</p>
    </div>
  )
}

export default TaskCard