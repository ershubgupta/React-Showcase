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

  const getcart = (cartValue) => {
    setCart([...cart, cartValue]);
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
        <Route path="/shopping-cart">home page</Route>
      </Switch>
    </>
  );
}
