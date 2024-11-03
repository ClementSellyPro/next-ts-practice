"use client"

import FilterNav from './components/FilterNav';
import TaskListContainer from './components/TaskListContainer';
import TaskCard from './components/TaskCard';
// import TaskCardModify from './components/TaskCardModify';
import TaskCardAdd from './components/TaskCardAdd';
import { useContext, useEffect, useState } from 'react';
import TaskContext from './context/TaskContext';
import NoTask from './components/NoTask';
import { taskType } from './type/TaskType';


export default function Home() {
  const {taskList, setTaskList, filter} = useContext(TaskContext);
  const [isAddingTask, setIsAddingTask] = useState<boolean>(false);
  const [tasksToDisplay, setTasksToDisplay] = useState<taskType[]>(taskList);

  // fetch taskList from localStorage
  useEffect(() => {
    try{
      const fetchStorage = localStorage.getItem("taskListStorage");
      if(fetchStorage){
        setTaskList(JSON.parse(fetchStorage));
      }
    } catch(error) {
      console.log(error)
    }

    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if(filter === "Completed"){
      const copyList = [...taskList].filter(task => task.completed === true)
      setTasksToDisplay(copyList);
    }
    if(filter === "Active"){
      const copyList = [...taskList].filter(task => task.completed === false);
      setTasksToDisplay(copyList);
    }
    if(filter === "All tasks"){
      setTasksToDisplay(taskList);
    }
  }, [filter, taskList])

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
        {/* list the task according filter (All, completed or active) */}
        { 
          taskList.length > 0 ?
          tasksToDisplay.map(task => <TaskCard key={task.id} id={task.id} title={task.title} description={task.description} limit={task.date} completed={task.completed} />) 
          : 
          <NoTask />
        }
      </TaskListContainer>
    </div>
  );
}
