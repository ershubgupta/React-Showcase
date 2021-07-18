import React, { useState, useEffect, useMemo } from "react";
import { Col, Container, Row, Form } from 'react-bootstrap';
import CompletedTask from './CompletedTask';
import TodoForm from './TodoForm';
import InprogressTask from './InprogressTask';
import PendingTask from './PendingTask';
import TaskCardGrid from './TaskCardGrid';
import "./formStyling.css"; 

export default function Home() {
  const filterTask = (arr, status) => {
    // arr.filter((e) => e.category === status? e : '');
    // console.log(arr.filter((e) => e.category === status)); 
    return arr.filter((e) => e.category === status);
    // return false;
    // if (e.category === "pending") {
    //   setPendingTask([...pendingTask, task]);
    //   console.log([...pendingTask, task]);
    //   console.log(e);
    //   console.log(task);
    //   console.log(pendingTask);
    //   // return { ...pendingTask, e };
    // }
    // else if (e.category === "inprogress") {
    //   setInProgressTask({ ...inProgressTask, task });
    //   // console.log(e);
    //   // return { ...inProgressTask, e };
    // } else if (e.category === "completed") {
    //   // console.log(e);
    //   // return { ...completedTask, e };
    //   setCompletedTask({ ...completedTask, task });
    // }
  };

  const [isFormActive, setIsFormActive] = useState(false);

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


  // console.log(pendingTask);
  // const [pendingTask, setPendingTask] = useState({})
  // const [inProgressTask, setInProgressTask] = useState({})
  // const [completedTask, setCompletedTask] = useState({})

  const setList = (task) => {
    // task.find(e => console.log(e))

    // Object.values(task).find((obj) => {
    //   return obj.val == "bb";
    // });

    setTaskList([task, ...taskList]);
    console.log(taskList);
    // setPendingTask(filterTask(taskList, "pending"));
    // console.log(taskList);
    // console.log(taskList.filter(e=> e.category === 'todo' ? e: ''));
    // // setTaskList(e)
    // if (task.category === "pending") {
    //   setPendingTask({ ...pendingTask, task });
    //   // console.log([...pendingTask, task]);
    //   //  console.log(e);
    //   console.log(task);
    //   console.log(pendingTask);
    // } else if (task.category === "inprogress") {
    //   setInProgressTask({ ...inProgressTask, task });
    //   console.log(task);
    //   console.log(inProgressTask);
    //   // console.log(e);
    //   // return { ...inProgressTask, e };
    // } else if (task.category === "completed") {
    //   // console.log(e);
    //   // return { ...completedTask, e };
    //   setCompletedTask({ ...completedTask, task });
    //   console.log(task);
    //   console.log(completedTask);
    // }

    // task.filter((e) => {
    //   if (e.category === "pending") {
    //     setPendingTask([...pendingTask, task]);
    //     console.log([...pendingTask, task]);
    //     console.log(e);
    //     console.log(task);
    //     console.log(pendingTask);
    //     // return { ...pendingTask, e };
    //   } else if (e.category === "inprogress") {
    //     setInProgressTask({ ...inProgressTask, task });
    //     // console.log(e);
    //     // return { ...inProgressTask, e };
    //   } else if (e.category === "completed") {
    //     // console.log(e);
    //     // return { ...completedTask, e };
    //     setCompletedTask({ ...completedTask, task });
    //   }
    // });
  };

  const u1TaskID = (id,e) => {
    // console.log(id)
    // console.log(e)
    // console.log(taskList);
    setTaskList([...taskList]);
    //  localStorage.setItem("Todo", JSON.stringify(taskList));
    //  setInProgressTask(filterTask(taskList, "inprogress"));
    // let i = tasklist
// setTaskList([...taskList[id]]);
    
//     console.log(taskList.map((e) => e.id === id) ? e.category = "inprogress" : '');
    // setTaskList(
    //   taskList.map((ele) => ele.id === id ? (ele.category = "inprogress") : "")
    // );
    // console.log(taskList.findIndex((e) => e.id === id));
    // localStorage.setItem("Todo", JSON.stringify(taskList));
    // setTaskList()
  }

  // useMemo(() => filterTask(taskList, "pending"), [taskList]);
  // setPendingTask(() => filterTask(taskList, "pending"));

  // let pendingTask, inProgressTask, completedTask = {}
  useEffect(() => {
    // console.log(pendingTask);
    // console.log(inProgressTask);
    // console.log(completedTask);
    console.log('running')
    localStorage.setItem("Todo", JSON.stringify(taskList));
    setPendingTask(filterTask(taskList, "pending"));
    setInProgressTask(filterTask(taskList, "inprogress"));
    setCompletedTask(filterTask(taskList, "completed"));
    // localStorage.setItem("Pending-Todo", JSON.stringify(pendingTask));
    // localStorage.setItem("Inprogress-Todo", JSON.stringify(inProgressTask));
    // localStorage.setItem("Completed-Todo", JSON.stringify(completedTask));
    // taskList.filter((e) => {
    //   if(e.category === "pending") {
    //     console.log(e)
    //     return {...pendingTask, e}
    //   } else if (e.category === "inprogress") {
    //     console.log(e);
    //     return {...inProgressTask , e};
    //   } else if (e.category === "completed") {
    //     console.log(e);
    //     return { ...completedTask, e };
    //   }
    // });
  }, [taskList]);

  const formStatus = (status) => {
    setIsFormActive(status);
  };

  const [view, setView] = useState(false)
  const switchView = (e) => {
    setView(!view)
    // view ? 'on' : 'off';
    console.log(view)
    console.log(e.target.value)
  }
   
  return (
    <div
      className={`todo-container form-${isFormActive ? "active" : "disabled"}`}
    >
      <div className="overlay"></div>
      <Container>
        <Row>
          <Col>
            <TodoForm
              getTaskList={setList}
              setTaskID={taskList.length + 1}
              formStatus={formStatus}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center" style={{ marginTop: "70px" }}>
            <span className="d-inline-block mr-2">
              <b>Switch to:</b> Grid View
            </span>
            <Form.Check
              type="switch"
              defaultValue={view}
              id="custom-switch"
              // label={`Switch to ${!view ? "List" : "Grid"} View`}
              onChange={switchView}
              className="d-inline-block"
            />
            <span className="d-inline-block"> List View</span>
          </Col>
        </Row>
        <Row className="task-container mt-5">
          {!view ? (
            <>
              <Col xs={4}>
                <PendingTask setPendingTask={pendingTask} u2TaskID={u1TaskID} />
              </Col>
              <Col xs={4}>
                <InprogressTask
                  setProgressTask={inProgressTask}
                  u2TaskID={u1TaskID}
                />
              </Col>
              <Col xs={4}>
                <CompletedTask
                  setCompletedTask={completedTask}
                  u2TaskID={u1TaskID}
                />
              </Col>
            </>
          ) : (
            <Col>
              <TaskCardGrid list={taskList} taskID={u1TaskID} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}
