"use client"

import { Dispatch, SetStateAction, createContext, useState } from "react";
import { taskType } from "../type/TaskType";

interface contextType {
    taskList: taskType[],
    setTaskList: Dispatch<SetStateAction<taskType[]>>,
    filter: string,
    setFilter: Dispatch<SetStateAction<string>>
}


const TaskContext = createContext<contextType>({
    taskList: [],
    setTaskList: () => {},
    filter: "",
    setFilter: () => {}
});

export default TaskContext;

export const TaskContextProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [taskList, setTaskList] = useState<taskType[]>([]);
    const [filter, setFilter] = useState<string>('All tasks')

    return (
        <TaskContext.Provider value={{
            taskList,
            setTaskList,
            filter,
            setFilter
        }}>
            {children}
        </TaskContext.Provider>
        
    )
}