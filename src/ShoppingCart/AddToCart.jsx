import { Button } from 'react-bootstrap';
import React from 'react'

export default function AddToCart(props) {
  function addToCart(prodDetail) {
    console.log(prodDetail);
  }
  return (
    <Button variant="dark" onClick={() => addToCart(props.productDetails)}>
      Add
    </Button>
  );
}
