import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { taskModifier } from "./ComFunction";

export default function UpdateTask(props) {
  const taskProps = Object.assign({}, props);
  delete taskProps.data;
  delete taskProps.updateTask;

  const [error, setError] = useState(true);
  const [taskModified, setTaskModified] = useState(props.data);

  const handleSubmit = (event) => {
    event.preventDefault();
    taskProps.onHide(true);

    setError(true);
    taskModifier(
      props.data,
      {
        title: taskModified.title,
        desc: taskModified.desc,
      },
      props.updateTask
    );
  };

  const onChange = (event) => {
    if (event.target.value === "") {
      setError(true);
    } else {
      setError(false);
      setTaskModified({
        ...taskModified,
        [event.target.name]: event.target.value,
      });
    }
  };

  const onFormFocus = () => {};

  return (
    <Modal {...taskProps} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Form onSubmit={handleSubmit}>
          <Form.Control
            name="title"
            className="mb-3"
            type="text"
            onChange={onChange}
            value={taskModified.title}
            // placeholder="Title"
            // placeholder={taskModified.title ?? "Title"}
          />
          <Form.Control
            name="desc"
            className="mb-3"
            type="text"
            value={taskModified.desc}
            // placeholder="Take a note..."
            onChange={onChange}
            // placeholder={taskModified.desc ?? "Take a note..."}
            onFocus={onFormFocus}
          />
          <Form.Group className="text-right">
            <Button
              type="submit"
              onClick={props.onHide}
              disabled={error}
              size="md"
              className={error ? "btn-secondary" : ""}
            >
              Update
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
