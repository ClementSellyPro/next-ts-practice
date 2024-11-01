"use client"

import { Dispatch, SetStateAction, createContext, useState } from "react";
import { taskType } from "../type/TaskType";

interface contextType {
    taskList: taskType[],
    setTaskList: Dispatch<SetStateAction<taskType[]>>
}


const TaskContext = createContext<contextType>({
    taskList: [],
    setTaskList: () => {}
});

export default TaskContext;

export const TaskContextProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [taskList, setTaskList] = useState<taskType[]>([]);

    return (
        <TaskContext.Provider value={{
            taskList,
            setTaskList
        }}>
            {children}
        </TaskContext.Provider>
        
    )
}