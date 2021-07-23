import React from 'react'
import TaskCard from './TaskCardGridView';
import {TaskCardPlaceholder} from './TaskCardPlaceholder';

export default function InprogressTask(props) {
  return (
    <div>
      <h4 className="text-center">Inprogress task</h4>
      {props.setProgressTask.length > 0 ? (
        props.setProgressTask.map((e) => (
          <TaskCard
            key={e.id}
            color="success"
            data={e}
            up3TaskID={props.u2TaskID}
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
