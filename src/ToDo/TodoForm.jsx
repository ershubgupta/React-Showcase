import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Toast } from "react-bootstrap";

export default function TodoForm(props) {
  let labelarr;
  const [task, setTask] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  const resetForm = () => {
    Array.from(document.querySelectorAll("input")).forEach(function (ele) {
      ele.value = "";
      ele.blur();
    });
  };

  let isFormActive = false;
  const onFormFocus = () => {
    isFormActive = true;
    return props.formStatus(isFormActive);
  };

  const onCancel = () => {
    resetForm();
    isFormActive = false;
    return props.formStatus(isFormActive);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    labelarr = labelarr ?? "";
    const currentdate = new Date();
    const generateDate =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes();
    props.getTaskList({
      // todo: {
      id: props.setTaskID,
      title: task.title,
      desc: task.desc,
      label: labelarr.split(","),
      category: "pending",
      created: generateDate,
      // },
    });
    setTask([]);
    resetForm();
    labelarr = "";
    isFormActive = false;
    return props.formStatus(isFormActive);
  };

  const onChange = (e) => {
    if (e.target.type === "text") {
      setTask({ ...task, [e.target.name]: e.target.value });
    }
  };

  const onLabeladd = (e) => {
    return (labelarr = e.target.value);
  };
  useEffect(() => {
    setIsFormValid(() => (task.desc ?? 0 ? true : false));
  }, [task]);

  return (
    <>
      {/* {taskList.map((e)=> <p>{e.title}</p>)} */}
      <Form onSubmit={onSubmit} autoComplete="off" className="task-form">
        <Toast className="mx-auto">
          <Toast.Header className={``} closeButton={false}>
            <Form.Control
              name="title"
              type="text"
              onChange={onChange}
              placeholder="Title"
            />
          </Toast.Header>
          <Toast.Body>
            <Form.Control
              name="desc"
              className="mb-3 take-desc"
              type="text"
              onChange={onChange}
              placeholder="Take a note..."
              onFocus={onFormFocus}
            />
            <Form.Control
              name="label"
              className="mb-1"
              type="text"
              onChange={onLabeladd}
              placeholder="Enter Label"
            />
            <Form.Text>
              You can add Multiple Lable separted by comma (,)
            </Form.Text>
            {/* <Form.Group>
              <Form.Label>Choose Label</Form.Label>
              <Form.Check
                type="checkbox"
                label="Primary"
                name="label"
                value="Primary"
                onChange={onChange}
              />
              <Form.Check
                type="checkbox"
                label="Secondary"
                name="label 1"
                value="Secondary"
                onChange={onLabeladd}
              />
            </Form.Group> */}
            <Col xs="auto" className="mt-4 mb-2">
              <Button
                type="submit"
                variant="outline-success"
                size="sm"
                disabled={!isFormValid}
                className="mr-2"
              >
                Add Note
              </Button>
              <Button variant="outline-secondary" size="sm" onClick={onCancel}>
                Cancel
              </Button>
            </Col>
          </Toast.Body>
        </Toast>
      </Form>
    </>
  );
}
