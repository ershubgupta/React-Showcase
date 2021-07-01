import React, { Component } from "react";
import { Route, Switch } from "react-router";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      cart: [],
    };

  }
  getCategory = (cat) => {
    this.setState({category: cat});    
  }
  getcart = (cart) => {
    this.setState({cart: cart});    
  }

  render() {
    console.log('in home page',this.state.category)
    return (
      <>
        <ProductList category={this.getCategory} cart={this.getcart} />
      </>
    );
  }
}
