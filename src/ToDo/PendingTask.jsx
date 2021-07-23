import React from "react";
import TaskCard from "./TaskCardGridView";
import {TaskCardPlaceholder} from "./TaskCardPlaceholder";

export default function PendingTask(props) {
  // console.log(props.setPendingTask.length);
  return (
    <>
      <h4 className="text-center">Pending task</h4>
      {props.setPendingTask.length > 0 ? (
        props.setPendingTask.map((e) => (
          <TaskCard
            key={e.id}
            color="primary"
            data={e}
            up3TaskID={props.u2TaskID}
            setStatus={["remove", "inprogress"]}
            editAllowed = {true}
          />
        ))
      ) : (
        <TaskCardPlaceholder />
      )}
    </>
  );
}
