import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Button,
  Col,
  Form,
  Image,
  Row,
  Toast,
  ToastBody,
  ToastHeader,
} from "react-bootstrap";
import Address from "./Address";

export default function Cart(props) {
  const [productList, setProductList] = useState([]);
  const [cartPrize, setCartPrize] = useState([0]);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [userDetials, setUserDetials] = useState([]);
  const [userDetialsModal, setUserDetialsModal] = useState(false);

  useEffect(() => {
    setProductList(props.addedInCart);
    // setCartPrize((currVal) => [...currVal, productList.map((i) => i.price)]);
    setCartPrize(productList.map((i) => i.price));
    const amount =
      productList.map((i) => i.price).length > 0
        ? productList.map((i) => i.price).reduce((total, num) => total + num)
        : 0;
    setPaymentAmount(amount);

    // console.log(amount);
    // console.log(productList.map((i) => i.price));
    // console.log(amount.reduce((total, num) => total + num));
    return () => {
      setProductList(props.addedInCart);
    };
  }, [props.addedInCart, productList, setPaymentAmount]);

  const updatedUserDetails = (info) => {
    setUserDetials(info);
    console.log(info)
    // console.log(userDetials)
  }

  const box_shadown = {
    // boxShadow: "0 0 1px 1px #00000026",
    // borderRadius: "2px",
    // padding: "15px",
  };
  return (
    <>
      <Row>
        <Col md={8}>
          <Row>
            {productList === null ||
            productList === undefined ||
            productList.length < 1 ? (
              <Col xs={12} md={6}>
                <h4>Your cart is Empty.</h4>
              </Col>
            ) : (
              <>
                {productList.map((list) => (
                  <Col
                    sm={6}
                    key={list.id}
                    style={box_shadown}
                    className="mb-3"
                  >
                    <Toast>
                      <ToastBody>
                        <Row className="align-items-center">
                          <Col sm={4} md={2}>
                            <Image
                              src={list.image}
                              rounded
                              className="img-fluid"
                            />
                          </Col>
                          <Col>
                            <Link
                              to={`products/${list.id}`}
                              className="text-dark"
                            >
                              <h6>{list.title}</h6>
                              <Badge
                                variant="info"
                                className="text-capitalize mr-2"
                              >
                                {list.category}
                              </Badge>
                              <Badge
                                variant="secondary"
                                className="text-capitalize"
                              >
                                Price: ${list.price}
                              </Badge>
                            </Link>
                          </Col>
                        </Row>
                        {/* <hr className="hr" /> */}
                      </ToastBody>
                    </Toast>
                  </Col>
                ))}
              </>
            )}
          </Row>
        </Col>
        <Col md={4}>
          <Toast>
            <ToastHeader closeButton={false}>
              <b className="mr-auto">Delivery Address:</b>
              <Button
                size="sm"
                variant="warning"
                onClick={() => setUserDetialsModal(true)}
              >
                Edit
              </Button>
              <Address
                // show={userDetialsModal}
                show={userDetialsModal}
                onHide={() => setUserDetialsModal(false)}
                updatedDetails={updatedUserDetails}
              />
            </ToastHeader>
            <ToastBody>
              <p>Name:{userDetials}</p>
              <p>Address</p>
              {cartPrize.length > 0 ? (
                <Button variant="success" size="sm" className="mb-3 ml-auto">
                  Checkout
                </Button>
              ) : (
                ""
              )}
            </ToastBody>
          </Toast>

          <Toast>
            <ToastHeader closeButton={false}>
              <b>Order Summary</b>
            </ToastHeader>
            <ToastBody>
              <p>
                Cart Value: <Badge variant="success">${paymentAmount}</Badge>
              </p>
              <p>
                Delivery Charges:{" "}
                <Badge variant="primary">${cartPrize.length > 0 ? 5 : 0}</Badge>
              </p>
              <hr className="hr" />
              <p className="mb-0">
                Amount to Be Paid:
                <Badge variant="info">
                  ${cartPrize.length > 0 ? paymentAmount + 5 : 0}
                </Badge>
              </p>
            </ToastBody>
          </Toast>
        </Col>
      </Row>
    </>
  );
}
