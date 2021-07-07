import React from 'react';
import {Link, useParams} from "react-router-dom";
import { Badge, Button, Col, Image, Row } from 'react-bootstrap';
import AddToCart from './AddToCart';

export default function ProductCard(props) {
  const {prodID} = useParams()
   
  const productDetails = props.productdetails;
  return (
    <Col xs={12} md={6} lg={4} className="mb-5">
      <Row className="align-items-center">
        <Col xs={4}>
          {/* <Badge pill variant="primary">
            Primary
          </Badge> */}
          <Image src={productDetails.image} rounded className="img-fluid" />
        </Col>
        <Col>
          <Link to={`products/${productDetails.id}`}>
            <h6>{productDetails.title}</h6>
          </Link>
          <p>Price: {productDetails.price}$</p>
          <AddToCart
            updateCart={props.updateCart}
            getcart={props.getcart}
            productDetails={productDetails}
          />
        </Col>
      </Row>
    </Col>
  );
}
