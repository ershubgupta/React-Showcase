import React from 'react'
import { Badge, Button } from 'react-bootstrap';

export default function MiniCart(props) {
  return (
    <Button variant="dark">
      In Cart
      {props.setCart !== null &&
      props.setCart !== undefined &&
      props.setCart !== "" ? (
        <Badge variant="light" className="ml-1">{props.setCart.length}</Badge>
      ) : (
        ""
      )}
      <span className="sr-only">unread messages</span>
    </Button>
  );
}
