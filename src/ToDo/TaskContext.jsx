import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskProvider(props) {

  const filterTask = (arr, status) => arr.filter((e) => e.category === status);

  const [taskList, setTaskList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("Todo")) ?? [];
    } catch {
      return "there is some error";
    }
  });

  const [pendingTask, setPendingTask] = useState(
    filterTask(taskList, "pending")
  );
  const [inProgressTask, setInProgressTask] = useState(
    filterTask(taskList, "inprogress")
  );
  const [completedTask, setCompletedTask] = useState(
    filterTask(taskList, "completed")
  );

   useEffect(() => {
     localStorage.setItem("Todo", JSON.stringify(taskList));
     setPendingTask(filterTask(taskList, "pending"));
     setInProgressTask(filterTask(taskList, "inprogress"));
     setCompletedTask(filterTask(taskList, "completed"));
   }, [taskList]);

  return (
    <TaskContext.Provider
      value={{
        taskList,
        setTaskList,
        pendingTask,
        inProgressTask,
        completedTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
