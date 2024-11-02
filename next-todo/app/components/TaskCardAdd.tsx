"use client"

import React, { Dispatch, SetStateAction, useContext, useState } from 'react'
import TaskContext from '../context/TaskContext';
import { taskType } from '../type/TaskType';
import { v4 as uuidv4 } from 'uuid';

function TaskCardAdd({setIsAddingTask}: {setIsAddingTask:Dispatch<SetStateAction<boolean>>}) {

  const {taskList, setTaskList} = useContext(TaskContext)

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleChangeTitle(e: React.FormEvent<HTMLInputElement>){
    const target = e.currentTarget.value;
    setTitle(target);
  }

  function handleDescriptionChange(e: React.FormEvent<HTMLTextAreaElement>){
    const target = e.currentTarget.value;
    setDescription(target);
  }

  function handleDateChange(e: React.FormEvent<HTMLInputElement>){
    const target = e.currentTarget.value;
    setDate(target);
  }
  
  function handleAddButon(){
    const newId = uuidv4();
    const newTask: taskType = {id: newId, title: title, description:description, completed: false, date:date};
    const newList = [...taskList , newTask];
    setTaskList(newList);
    localStorage.setItem("taskListStorage", JSON.stringify(newList));
    setIsAddingTask(false);
  }

  function handleDiscardButton(){
      setIsAddingTask(false);
  }

  return (
  <div className='flex flex-col gap-2 p-4 rounded-lg bg-yellow-300 mt-5 w-full'>
      <h2 className='font-semibold text-lg'>Add New Task</h2>

      {/* inputs section */}
      <input className='pl-2 rounded-sm' type='text' placeholder='Tache a faire' value={title} onChange={(e: React.FormEvent<HTMLInputElement>) => {handleChangeTitle(e)}} />
      <textarea className='pl-2 rounded-sm' placeholder='Description' value={description} onChange={(e: React.FormEvent<HTMLTextAreaElement>) => handleDescriptionChange(e)} />
      <input className='pl-2 rounded-sm' type='date' value={date} onChange={(e: React.FormEvent<HTMLInputElement>) => handleDateChange(e)} />

      {/* buttons section */}
      <div className='flex justify-end gap-4 mt-4'>
        <button className='text-sm py-1 px-4 text-white bg-red-500 hover:bg-red-400 rounded-full' type='button' onClick={handleDiscardButton}>Discard</button>
      
        <button className='text-sm py-1 px-4 text-white bg-orange-400 hover:bg-orange-300 rounded-full' type='button' onClick={handleAddButon}>Add</button>
      </div>
  </div>
  )
}

export default TaskCardAdd