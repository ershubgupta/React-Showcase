import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Button,
  Col,
  Image,
  Row,
  Toast,
  ToastBody,
  ToastHeader,
} from "react-bootstrap";
import Address from "./Address";
import UserDetail from "./common/UserDetail";
import OrderSummary from "./common/OrderSummary";

export default function Cart(props) {
  const [productList, setProductList] = useState([]);
  const [cartPrize, setCartPrize] = useState([0]);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [userDetials, setUserDetials] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("User_Info")) ?? [];
    } catch {
      return "there is some error";
    }
  });
  const [userDetialsModal, setUserDetialsModal] = useState(false);
  const [orderStatus, setOrderStatus] = useState(false);

  const { addedInCart, resetCart } = props;
  useEffect(() => {
    setProductList(addedInCart);
    setCartPrize(productList.map((i) => i.price));
    const amount =
      productList.map((i) => i.price).length > 0
        ? productList.map((i) => i.price).reduce((total, num) => total + num)
        : 0;
    setPaymentAmount(amount);
  }, [addedInCart, productList, setPaymentAmount, orderStatus]);

  const updatedUserDetails = (info) => {
    setUserDetials(info);
  };
  const orderConfirmation = () => {
    setOrderStatus(true);
    resetCart([]);
  };

  const box_shadown = {
    // boxShadow: "0 0 1px 1px #00000026",
    // borderRadius: "2px",
    // padding: "15px",
  };
  return (
    <>
      <Row>
        <Col md={8}>
          {orderStatus ? (
            <Row>
              <Col>
                <h3 className="text-center">Thanks for shopping with us.</h3>
                <h5 className="text-center mb-3">
                  Your order is booked and we will deliver your order on below
                  Address
                </h5>
                <Toast className="mx-auto">
                  <ToastBody>{userDetials.address}</ToastBody>
                </Toast>
              </Col>
            </Row>
          ) : (
            <Row>
              {productList === null ||
              productList === undefined ||
              productList.length < 1 ? (
                <Col xs={12} md={6}>
                  <h4>Your Cart is Empty.</h4>
                </Col>
              ) : (
                <>
                  {productList.map((list, index) => (
                    <Col
                      sm={6}
                      key={list.index}
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
          )}
        </Col>
        <Col md={4}>
          <Toast>
            <ToastHeader closeButton={false}>
              <h5 className="mr-auto">User Info:</h5>
              <Button
                size="sm"
                variant="warning"
                onClick={() => setUserDetialsModal(true)}
              >
                Edit
              </Button>
              <Address
                show={userDetialsModal}
                onHide={() => setUserDetialsModal(false)}
                userDetials={userDetials}
                updatedDetails={updatedUserDetails}
              />
            </ToastHeader>
            <ToastBody>
              <UserDetail userDetials={userDetials} />
            </ToastBody>
          </Toast>

          <OrderSummary
            cartPrize={cartPrize}
            paymentAmount={paymentAmount}
            orderStatus={orderStatus}
          />

          {cartPrize.length > 0 ? (
            <Button
              variant="success"
              size="sm"
              className="w-100"
              disabled={false || userDetials.length === 0}
              onClick={orderConfirmation}
            >
              Click to Checkout
            </Button>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </>
  );
}
