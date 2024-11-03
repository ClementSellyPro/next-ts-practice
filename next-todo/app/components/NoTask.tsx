"use client"

import React, { useContext, useEffect, useState } from 'react'
import TaskContext from '../context/TaskContext'

function NoTask() {
  const {filter} = useContext(TaskContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if(filter === "All tasks" || filter === "Active"){
      setMessage("No Task yet. Add new tasks to display them here.");
    }
    if(filter === "Completed"){
      setMessage("No Task yet or no completed tasks.")
    }
  }, [filter])

  return (
    <div className='flex justify-center py-10 mt-5 border rounded-lg'>
        {message}
    </div>
  )
}

export default NoTask