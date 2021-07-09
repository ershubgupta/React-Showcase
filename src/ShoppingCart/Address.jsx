import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function Address(props) {
  const addressProps = Object.assign({}, props);
  delete addressProps.updatedDetails;
  delete addressProps.userDetials;
  
  const [userInfo, setUserInfo] = useState(props.userDetials);
  const [error, setError] = useState(true);

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
    addressProps.onHide(true);
    localStorage.setItem("User_Info", JSON.stringify(userInfo));
    props.updatedDetails(userInfo);
    setError(true);
  };

  const onValueChange = (event) => {
    if (event.target.value === "") {
      setError(true);
    } else {
      setError(false);
      setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    }
  };
  return (
    <>
      <Modal {...addressProps} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Your Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Form onSubmit={handleSubmit}>
            {formFields.map((field, i) => (
              <Form.Group key={i} controlId={field.field_id} className="small">
                <Form.Label>{field.field_name}</Form.Label>
                <Form.Control
                  type="text"
                  name={field.field_id}
                  onChange={onValueChange}
                  placeholder={
                    userInfo[field.field_id] ??
                    "Please enter your " + field.field_name
                  }
                  style={{ fontSize: "90%" }}
                />
              </Form.Group>
            ))}
            <Form.Group>
              <Button
                type="submit"
                onClick={props.onHide}
                disabled={error}
                className={error ? "btn-secondary" : ""}
              >
                Update
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
