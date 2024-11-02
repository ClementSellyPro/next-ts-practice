"use client"

import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext';

interface TaskPropsType {
    id: string,
    title: string,
    description: string,
    limit: string
}

function TaskCard({id, title, description, limit}: TaskPropsType) {
  const {taskList, setTaskList} = useContext(TaskContext)

  function handleDeleteButton(e: React.MouseEvent){
    // get the ID to delete
    const target = e.currentTarget;
    const parentTarget = target?.parentElement?.parentElement;
    const ID = parentTarget?.dataset.id;

    // filter to remove the item
    const updateList = taskList.filter(element => element.id !== ID);
    localStorage.setItem("taskListStorage", JSON.stringify(updateList));
    setTaskList(updateList);
  }

  return (
    <div className="py-2 px-4 rounded-lg bg-yellow-300" data-id={id}>
      {/* header card, title and delete button */}
      <div className='flex justify-between'>
        <h2 className='font-bold text-lg'>{title}</h2>
        <button className='flex justify-center items-center font-bold w-5 h-5 rounded-md text-white bg-red-600' type="button" onClick={e => handleDeleteButton(e)}>x</button>
      </div>
 
      <p className='text-sm'>{description}</p>

      {/* bottom card, date and buttons section */}
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