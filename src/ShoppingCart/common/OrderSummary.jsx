import React from 'react'
import { Col, Row, Toast, ToastBody, ToastHeader } from 'react-bootstrap';

export default function OrderSummary(props) {
  return (
    <Toast>
      <ToastHeader closeButton={false}>
        <h5 className="mb-0 py-1">Order Summary</h5>
      </ToastHeader>
      <ToastBody>
        <Row className="justify-content-between">
          <Col xs="auto">
            <h6>Cart Value:</h6>
          </Col>
          <Col xs="auto">
            $ {props.paymentAmount}
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col xs="auto">
            <h6>Delivery Charges:</h6>
          </Col>
          <Col xs="auto">
            $ {props.cartPrize.length > 0 && !props.orderStatus ? 5 : 0}
          </Col>
        </Row>
        <hr className="hr" />
        <Row className="justify-content-between">
          <Col xs="auto">
            <h6> Amount to Be Paid:</h6>
          </Col>
          <Col xs="auto">
            $ {props.cartPrize.length > 0
              ? props.paymentAmount + 5
              : props.paymentAmount}
          </Col>
        </Row>
      </ToastBody>
    </Toast>
  );
}
