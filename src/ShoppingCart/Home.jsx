import React, { Component, useEffect, useState } from "react";
import { Badge, Button, Col, Nav, Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import MiniCart from "./MiniCart";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

export default function Home() {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     category: "products",
  //     cart: [],
  //   };

  // }
  const [category, setCategory] = useState("products")
  // const [cart, setCart] = useState(() =>
  //   JSON.parse(localStorage.getItem("Cart"))
  // );
  const [cart, setCart] = useState(()=> {
    try {
      return JSON.parse(localStorage.getItem("Cart")) ?? [];
    } catch {
      return "there is some error"
    }
  }
    // localStorage.getItem("Cart") === null 
    // || localStorage.getItem("Cart") === undefined 
    // || localStorage.getItem("Cart") === ''
    //   ? []
    //   : JSON.parse(localStorage.getItem("Cart"))
  );
// ()=> JSON.parse(localStorage.getItem("Cart"))
  const getCategory = (cat) => {
    setCategory(cat);    
  }

  const getcart = (cartValue) => {
    // console.log(JSON.parse(localStorage.getItem("Cart")));
    // let newCart = [...cart, cart];
    // setCart((prevItems) => [...prevItems, cart]);
    setCart([...cart,cartValue]);
    // setCart((prevItems) => console.log([prevItems]));
    // console.log("hello",cartValue);
    // setCart(newCart);
    // setCart((prevCart) => ({
    //   cart:  [...prevCart.cart, cart],
    // }));    
  }


  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart))
    // return () => {
    //   cleanup
    // }
  }, [cart])

  // render() {
    // let { path, url } = useRouteMatch();
    // console.log('in home',this.state.category)
    // console.log("in home", this.state.cart);
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
            <ProductDetail
              getcart={getcart}
              updateCart={cart}
            />
          </Route>
          <Route path="/shopping-cart/cart">
            <Cart addedInCart = {cart} />
          </Route>
          <Route path="/shopping-cart/products">
            <ProductList
              getCategory={getCategory}
              getcart={getcart}
              updateCart={cart}
            />
          </Route>
          <Route path="/shopping-cart">
            home page
          </Route>
        </Switch>
      </>
    );
  }
// }
