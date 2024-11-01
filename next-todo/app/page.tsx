"use client"

import FilterNav from './components/FilterNav';
import TaskListContainer from './components/TaskListContainer';
import TaskCard from './components/TaskCard';
// import TaskCardModify from './components/TaskCardModify';
import TaskCardAdd from './components/TaskCardAdd';
import { useEffect, useState } from 'react';
import { taskType } from './type/TaskType';


export default function Home() {
  const [data, setData] = useState<taskType[]>([]); 
  const [isAddingTask, setIsAddingTask] = useState<boolean>(false);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/tasks.json");
      const data: taskType[] = await res.json();
      setData(data);
    }
    fetchData();
  },[])

  // toogle isAddingTask task to display or hide the TaskCardAdd component
  function handleAddButton(){
    setIsAddingTask(!isAddingTask);
  }

  return (
    <div className="flex flex-col items-center justify-center lg:w-1/2 md:w-4/6 w-5/6 py-6 px-4 mt-10 rounded-xl bg-white">
      <div  className='flex justify-between items-center w-full'>
          <h1 className='font-bold md:text-3xl text-2xl'>TODO List</h1>
          <button className='py-1 px-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white'  type="button" onClick={handleAddButton}>+ add new task</button>
      </div>
      <FilterNav />

      {isAddingTask ? <TaskCardAdd setIsAddingTask={setIsAddingTask} /> : null}
      {/* <TaskCardModify /> */}

      <TaskListContainer>
        {data.map((task) => {
          return <TaskCard key={task.id} title={task.title} description={task.description} limit={task.date} />
        } )}
      </TaskListContainer>
    </div>
  );
}
