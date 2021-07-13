import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import MiniCart from "./MiniCart";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

export default function Home() {
  const [category, setCategory] = useState("products");
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("Cart")) ?? [];
    } catch {
      return "there is some error";
    }
  });
  const getCategory = (cat) => {
    setCategory(cat);
  };

  const getcart = (cartValue, isAdded) => {
    setCart([...cart, cartValue]);
    console.log(isAdded);
    // if (isAdded) {
      // let devicesArray = JSON.parse(localStorage.getItem("Cart"));

      // console.log(devicesArray.splice(devicesArray.indexOf(prodDetail), 1));
      // devicesArray.splice(devicesArray.indexOf(prodDetail), 1);
      // cart.filter((e) => console.log(e.id, cartValue.id));
      if (cart.filter((e) => e.id === cartValue.id).length > 0) {
        // props.getcart({ ...cartValue, quantity: ++cartValue["quantity"] });
        setCart([...cart, cartValue.quantity = ++cartValue["quantity"]]);
        console.log("in if", cartValue);
        console.log("in if", cart);
        // console.log("in if", cartValue);
      } else {
        console.log("in else");
        // props.getcart({ ...cartValue, quantity: cartValue["quantity"] + 0 });
      }
      console.log(cartValue.quantity);
      // console.log(devicesArray.hasOwnProperty("id"));
      // console.log(devicesArray.indexOf(prodDetail));
      // console.log(devicesArray.category);
      // localStorage.setItem("list", JSON.stringify(devicesArray));
    // }
  };
  const onCheckout = (cartStatus) => {
    setCart(cartStatus);
  };

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <Row className="justify-content-end mb-4">
        <Col xs="auto">
          <Link to="/shopping-cart" className="btn btn-dark">
            Home
          </Link>
        </Col>
        <Col xs="auto">
          <Link to="/shopping-cart/products" className="btn btn-dark">
            Products
          </Link>
        </Col>
        <Col xs="auto">
          <Link to="/shopping-cart/cart">
            <MiniCart setCart={cart} />
          </Link>
        </Col>
      </Row>
      <Switch>
        <Route exact path="/shopping-cart/products/:id">
          <ProductDetail getcart={getcart} updateCart={cart} />
        </Route>
        <Route path="/shopping-cart/cart">
          <Cart addedInCart={cart} resetCart={onCheckout} />
        </Route>
        <Route path="/shopping-cart/products">
          <ProductList
            getCategory={getCategory}
            getcart={getcart}
            updateCart={cart}
          />
        </Route>
        <Route path="/shopping-cart">
          <h1>Shopping Cart Home Page</h1>
          <p>
            Click on the&nbsp;
            <Link to="/shopping-cart/products" className="">
              Products
            </Link>
            &nbsp;to see the all the available products.
          </p>
        </Route>
      </Switch>
    </>
  );
}
