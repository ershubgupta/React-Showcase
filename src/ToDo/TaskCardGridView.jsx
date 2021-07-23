import React, { useState } from "react";
import { Badge, Button, ButtonGroup, Toast } from "react-bootstrap";
import { taskButtonGenerator } from "./ComFunction";
import UpdateTask from "./UpdateTask";

export default function TaskCard(props) {
   const [userDetialsModal, setUserDetialsModal] = useState(false);
  const e = props.data;
  // const updateTask = (ele, id, status) => {
  //   taskStatusModifier(ele, id, status, props.up3TaskID);
  // };

  // const btnList = taskButtonGenerator(e);
  // console.log(e)

  return (
    <>
      {e !== undefined ? (
        <Toast key={e.id}>
          <Toast.Body
            className={`border-${props.color}`}
            style={{ borderTop: "3px solid" }}
          >
            {props.editAllowed ? (
              <Badge
                pill
                variant={props.color}
                className="d-block ml-auto"
                style={{ width: "30px", cursor: 'pointer' }}
                size="sm"
                onClick={() => setUserDetialsModal(true)}
              >
                Edit
              </Badge>
            ) : (
              ""
            )}
            <strong className="d-block mr-auto">{e.title}</strong>
            <UpdateTask
              show={userDetialsModal}
              onHide={() => setUserDetialsModal(false)}
              data={e}
              updateTask={props.up3TaskID}
            />
            <p>{e.desc}</p>
            <section className="mb-2">
              {e.label !== undefined
                ? e.label.map((ele, i) => (
                    <Badge key={i} pill variant="warning" className="mr-1">
                      {ele}
                    </Badge>
                  ))
                : ""}
            </section>
            <section className="text-right">
              <span className="align-middle">Mark: </span>
              {taskButtonGenerator(e, props.color, props.up3TaskID)}
            </section>
          </Toast.Body>
        </Toast>
      ) : (
        ""
      )}
    </>
  );
}
