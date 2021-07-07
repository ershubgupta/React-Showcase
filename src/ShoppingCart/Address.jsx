import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";

export default function Address(props) {
  // const {updatedUserDetails } = props;
  const addressProps = Object.assign({}, props);
  delete addressProps.updatedDetails;
  const [userInfo, setUserInfo] = useState([]);
  const formFields = [
    {
      field_name: "Name",
      field_id: "name",
    },
    {
      field_name: "Email ID",
      field_id: "email",
    },
    {
      field_name: "Phone Number",
      field_id: "phone",
    },
    {
      field_name: "Address",
      field_id: "address",
    },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
    // setUserInfo((i) => [...i, (info[event.target.id] = event.target.value)]);
    // setUserInfo((arr) => [...arr, `${arr.length}`]);
    addressProps.onHide(true);
    console.log(userInfo);
    props.updatedDetails(userInfo);
    // console.log(info);
  };

  const onValueChange = (event) => {
    setUserInfo((arr) => ([ ...arr, [event.target.id]= event.target.value]));
    // console.log(userInfo);
    // console.log(event.target.value);
    // console.log(event.target.id);
    // setUserInfo((i) => console.log(i.info['name']));
    // setUserInfo((i) => console.log(Object.keys(i.info)));
    // console.log(info);
  };
  return (
    <>
      <Modal {...addressProps} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update User Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Form onSubmit={handleSubmit}>
            {formFields.map((field, i) => (
              <Form.Group key={i} controlId={field.field_id} className="small">
                <Form.Label>{field.field_name}</Form.Label>
                <Form.Control
                  type="text"
                  // ref={React.createRef}
                  onChange={onValueChange}
                  placeholder={"Please enter your " + field.field_name}
                  style={{ fontSize: "90%" }}
                />
              </Form.Group>
            ))}
            <Form.Group>
              <Button
                type="submit"
                // onClick={props.onHide}
              >
                Sign in
              </Button>
              {/* <Col sm={{ span: 10, offset: 2 }}>
              </Col> */}
            </Form.Group>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Update</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
