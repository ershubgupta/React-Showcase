import React, { useContext } from "react";
import { Badge, Table } from "react-bootstrap";
import { taskButtonGenerator } from "./ComFunction";
import { TaskCardListPlaceholder } from "./TaskCardPlaceholder";
import { TaskContext } from "./TaskContext";

export default function TaskCardGrid() {
  
  const { taskList, setTaskList } = useContext(TaskContext);
  const reverseTaskList = [...taskList];

  const updateTask = () => setTaskList([...taskList]);

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
          {reverseTaskList.length > 0 ? (
            reverseTaskList.reverse().map((e) => (
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
                    {taskButtonGenerator(e, "dark", updateTask)}
                  </section>
                </td>
              </tr>
            ))
          ) : (
            <TaskCardListPlaceholder />
          )}
        </tbody>
      </Table>
    </>
  );
}
