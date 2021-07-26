import React, { useContext } from 'react'
import TaskCard from './TaskCardGridView';
import {TaskCardPlaceholder} from './TaskCardPlaceholder';
import { TaskContext } from './TaskContext';

export default function CompletedTask(props) {
   const { taskList, setTaskList, completedTask } =
     useContext(TaskContext);
  return (
    <div>
      <h4 className="text-center">Completed task</h4>
      {completedTask.length > 0 ? (
        completedTask.map((e) => (
          <TaskCard
            key={e.id}
            color="secondary"
            data={e}
            updateTask={() => setTaskList([...taskList])}
            setStatus={["pending", "remove"]}
          />
        ))
      ) : (
        <TaskCardPlaceholder />
      )}
    </div>
  );
}
