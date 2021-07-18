import React from 'react'
import TaskCard from './TaskCard';
import TaskCardPlaceholder from './TaskCardPlaceholder';

export default function CompletedTask(props) {
  return (
    <div>
      <h4 className="text-center">Completed task</h4>
      {props.setCompletedTask.length > 0 ? (
        props.setCompletedTask.map((e) => (
          <TaskCard
            key={e.id}
            color="secondary"
            data={e}
            up3TaskID={props.u2TaskID}
            setStatus={["pending", "remove"]}
          />
        ))
      ) : (
        <TaskCardPlaceholder />
      )}
    </div>
  );
}
