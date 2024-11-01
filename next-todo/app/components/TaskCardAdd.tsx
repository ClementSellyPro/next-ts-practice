import React, { Dispatch, SetStateAction } from 'react'

function TaskCardAdd({setIsAddingTask}: {setIsAddingTask:Dispatch<SetStateAction<boolean>>}) {
    
    function handleDiscardButton(){
        setIsAddingTask(false);
    }
  
    return (
    <div className='flex flex-col gap-2 p-4 rounded-lg bg-yellow-300 mt-5 w-full'>
        <h2 className='font-semibold text-lg'>Add New Task</h2>

        <input className='pl-2 rounded-sm' type='text' placeholder='Tache a faire' />
        <textarea className='pl-2 rounded-sm' placeholder='Description' />
        <input className='pl-2 rounded-sm' type='date' defaultValue="2024-07-24" />

        <div className='flex justify-end gap-4 mt-4'>
          <button className='text-sm py-1 px-4 text-white bg-red-500 hover:bg-red-400 rounded-full' type='button' onClick={handleDiscardButton}>Discard</button>
        
          <button className='text-sm py-1 px-4 text-white bg-orange-400 hover:bg-orange-300 rounded-full' type='button'>Add</button>
        </div>
    </div>
  )
}

export default TaskCardAdd