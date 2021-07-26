import React, {useContext} from "react";
import TaskCard from "./TaskCardGridView";
import {TaskCardPlaceholder} from "./TaskCardPlaceholder";

import { TaskContext } from "./TaskContext";

export default function PendingTask() {
  const { taskList, setTaskList, pendingTask } = useContext(TaskContext);
  return (
    <>
      <h4 className="text-center">Pending task</h4>
      {pendingTask.length > 0 ? (
        pendingTask.map((e) => (
          <TaskCard
            key={e.id}
            color="primary"
            data={e}
            updateTask={() => setTaskList([...taskList])}
            setStatus={["remove", "inprogress"]}
            editAllowed={true}
          />
        ))
      ) : (
        <TaskCardPlaceholder />
      )}
    </>
  );
}
