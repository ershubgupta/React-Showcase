import { Button } from 'react-bootstrap';
import React from 'react'

export default function AddToCart(props) {
  function addToCart(prodDetail, updateCart) {
    console.log(prodDetail);
    props.getcart(prodDetail);
    console.log(updateCart);
  }
  return (
    <Button
      variant="dark"
      onClick={() => addToCart(props.productDetails, props.updateCart)}
    >
      Add to Cart
    </Button>
  );
}
