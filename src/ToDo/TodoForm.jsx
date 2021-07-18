import React , {useEffect, useState} from "react";
import { Button, Col, Form, Row, Toast } from "react-bootstrap";
// import Labels from "./Labels";

export default function TodoForm(props) {
  let labelarr;
  const [task, setTask] = useState([]);
  // const [isFormActive, setIsFormActice] = useState(false);
  // const [taskList, setTaskList] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  
  const resetForm = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
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
    // if (task.title) {

    // }
    //  console.log(props.taskID);
    e.preventDefault();
    // setTaskList([...taskList, task]);
    // console.log({...task, ['category']:'todo'})
    // props.getTaskList({ ...task, ["category"]: "todo" });
    // console.log(labelarr)
    // console.log(labelarr.split(","));
    labelarr = labelarr ?? ''
    const currentdate = new Date();
    const generateDate = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes();
      // date.getDate() +
      // "/" +
      // date.getMonth() +
      // "/" +
      // date.getFullYear() +
      // "/" +
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
    // setTaskList([...taskList, { task }]);
    // console.log(task.title);
    // setTaskList({...taskList, ...task });
    // setTaskList((state) => ({
    //   ...state,
    //   task
    // }));
   resetForm();
    labelarr='';
     isFormActive = false;
     return props.formStatus(isFormActive);
    // console.log(task);
    // console.log(taskList);
  }

  
  
  const onChange = (e) => {
    // setTask({ ...task, [e.target.name]: e.target.value});
    if(e.target.type === "text") {
      setTask({ ...task, [e.target.name]: e.target.value});
    }

    // setTask((val) => if(e.target.type === "text")  { ...val, [e.target.name]: e.target.value })

    // e.target.type === "text"
    //   ? setTask({ ...task, [e.target.name]: e.target.value })
    //   : setTask({ ...task, label: [e.target.value] });
    // console.log(task);
    // if ()
    // isFormValid = e.target.attributes.hasOwnProperty("required") && e.target.value !== '' ? true : false;
    // console.log(isFormValid);
    // return isFormValid;
    // console.log(
    //   e.target.attributes.hasOwnProperty("required"),
    //   e.target.value !== ""
    // );
    // setTask({
    //   ...task,
    //   [e.target.name]: e.target.value,
    //   label: (e.target.type === "checkbox" ? [task.label, e.target.value] : [task.label]),
    // });
    // console.log(e.target.checked)
    //  let a =
    //    e.target.type === "text"
    //      ? { [e.target.name]: e.target.value }
    //      : { label: [e.target.value] };
    // console.log(a)
    // setTask({ ...task, a});
    // setTask((val) => {
    //   console.log(val.label)
    //  return e.target.type === "text"
    //     ? { ...val, [e.target.name]: e.target.value }
    //     : { ...val, label: [val.label, e.target.value] };
    // })
    // e.target.type === "text"
    //   ? setTask({ ...task, [e.target.name]: e.target.value })
    //   : setTask({ ...task, label: [ e.target.value] });
    // console.log(task);

    // console.log(task);
  }
  
  const onLabeladd = (e) => {
    return labelarr = e.target.value;
    // console.log(labelarr)

  }
  useEffect(() => {
    setIsFormValid(() =>  (task.desc ?? 0) ? true : false);
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
