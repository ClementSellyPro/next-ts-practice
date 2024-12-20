import React from 'react'

function TaskCardModify() {
  return (
    <div className='flex flex-col gap-2 p-4 rounded-lg bg-yellow-300'>
        <input className='pl-2 rounded-sm' type='text' placeholder='Tache a faire' />
        <textarea className='pl-2 rounded-sm' placeholder='Description' />
        <input className='pl-2 rounded-sm' type='date' value="2024-07-24" />

        <div className='flex justify-end gap-4 mt-4'>
          <button className='text-sm py-1 px-4 text-white bg-red-500 hover:bg-red-400 rounded-full' type='button'>Discard</button>
        
          <button className='text-sm py-1 px-4 text-white bg-orange-400 hover:bg-orange-300 rounded-full' type='button'>Validate</button>
        </div>
    </div>
  )
}

export default TaskCardModify