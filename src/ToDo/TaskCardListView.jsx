import React from "react";
import { Badge, Button, Table } from "react-bootstrap";
import { taskButtonGenerator } from "./ComFunction";
import { TaskCardListPlaceholder } from "./TaskCardPlaceholder";

export default function TaskCardGrid(props) {
  const taskList = [...props.list];
  // const newl = (...taskList.reverse())
  // console.log(newl);
  // console.log(taskList);
  //  const updateTask = (ele, id, status) => {
  //    taskStatusModifier(ele, id, status, props.taskID);
  //  };

  return (
    <>
      <Table striped bordered hover size="sm" className="task-grid">
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Status</th>
            <th>Last Updated</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskList.length > 0
            ? taskList.reverse().map((e) => (
                <tr
                  key={e.id}
                  className={`bg-light-${
                    e.category === "pending"
                      ? "primary"
                      : e.category === "inprogress"
                      ? "success"
                      : e.category === "completed"
                      ? "secondary"
                      : "done"
                  }`}
                >
                  <td>{e.id}</td>
                  <td>
                    <strong className="mr-auto">{e.title}</strong>
                    <p>{e.desc}</p>
                    <section className="mb-2">
                      {e.label !== undefined
                        ? e.label.map((ele, i) => (
                            <Badge
                              key={i}
                              pill
                              variant="warning"
                              className="mr-1"
                            >
                              {ele}
                            </Badge>
                          ))
                        : ""}
                    </section>
                  </td>
                  <td className="text-capitalize">{e.category}</td>
                  <td>{e.created}</td>
                  <td>
                    <section>
                      <span className="align-middle">Mark: </span>
                      {taskButtonGenerator(e, "dark", props.taskID)}
                    </section>
                  </td>
                </tr>
              ))
            : <TaskCardListPlaceholder />}
        </tbody>
      </Table>
    </>
  );
}
