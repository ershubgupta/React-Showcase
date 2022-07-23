import React, { useState } from "react";
import { Col, Container, Row, Form } from 'react-bootstrap';
import CompletedTask from './CompletedTask';
import TodoForm from './TodoForm';
import InprogressTask from './InprogressTask';
import PendingTask from './PendingTask';
import TaskCardListView from "./TaskCardListView";
import "./formStyling.css"; 
import { TaskProvider } from "./TaskContext";
import Api from "./Api";

export default function Home() {
  const [isFormActive, setIsFormActive] = useState(false);

  const formStatus = (status) => {
    setIsFormActive(status);
  };

  const [view, setView] = useState(false)
  const switchView = (e) => {
    setView(!view);
  }
   
  return (
    <TaskProvider>
      <div
        className={`todo-container form-${
          isFormActive ? "active" : "disabled"
        }`}
      >
        <div className="overlay"></div>
        <Container>
          <Row>
            <Col>
              <TodoForm formStatus={formStatus} />
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
                  <PendingTask />
                </Col>
                <Col xs={4}>
                  <InprogressTask />
                </Col>
                <Col xs={4}>
                  <CompletedTask />
                </Col>
              </>
            ) : (
              <Col>
                <TaskCardListView />
              </Col>
            )}
          </Row>

        </Container>
      </div>
    </TaskProvider>

    // <Api />
  );
}
