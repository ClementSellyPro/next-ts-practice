"use client"

import FilterNav from './components/FilterNav';
import TaskListContainer from './components/TaskListContainer';
import TaskCard from './components/TaskCard';
// import TaskCardModify from './components/TaskCardModify';
import TaskCardAdd from './components/TaskCardAdd';
import { useContext, useEffect, useState } from 'react';
import TaskContext from './context/TaskContext';
import Loading from './components/Loading';
import NoTask from './components/NoTask';


export default function Home() {
  const {taskList, setTaskList} = useContext(TaskContext);
  const [isAddingTask, setIsAddingTask] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      setIsLoading(true);
    try{
      const fetchStorage = localStorage.getItem("taskListStorage");
      if(fetchStorage){
        setTaskList(JSON.parse(fetchStorage));
      }
    } catch(error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }

    // eslint-disable-next-line
  }, [])

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
        
        {isLoading ? <Loading /> : null}


        { 
        taskList.length > 0 ?
        taskList.map(task => <TaskCard key={task.id} id={task.id} title={task.title} description={task.description} limit={task.date} />) : <NoTask />
        }
      </TaskListContainer>
    </div>
  );
}
