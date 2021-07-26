import React, { useContext } from 'react'
import TaskCard from './TaskCardGridView';
import {TaskCardPlaceholder} from './TaskCardPlaceholder';
import { TaskContext } from './TaskContext';

export default function InprogressTask(props) {
  const { taskList, setTaskList, inProgressTask } =
    useContext(TaskContext);
  return (
    <div>
      <h4 className="text-center">Inprogress task</h4>
      {inProgressTask.length > 0 ? (
        inProgressTask.map((e) => (
          <TaskCard
            key={e.id}
            color="success"
            data={e}
            updateTask={() => setTaskList([...taskList])}
            setStatus={["pending", "completed"]}
            editAllowed={true}
          />
        ))
      ) : (
        <TaskCardPlaceholder />
      )}
    </div>
  );
}
