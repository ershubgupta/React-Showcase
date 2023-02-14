import React from 'react';
import {Link, useParams} from "react-router-dom";
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import AddToCart from './AddToCart';

export default function ProductCard(props) {
  const productDetails = props.productdetails;
  // console.log(productDetails);
  const cardStyle = {
    width: "100%",
    height: "100%",
  };

  const cardBg = {
    backgroundImage: `url(${productDetails.image})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "120px",
    height: "120px",
    margin: "15px auto 0",
  };
  
  return (
    <Col xs={12} md={6} lg={3} className="mb-5">
      {/* <Row className="align-items-top"> */}
      <Card style={cardStyle}>
        <div style={cardBg}></div>
        {/* <Card.Img
          variant="top"
          src={productDetails.image}
          style={{ height: "150px", width: "fit-content", margin: "0 auto" }}
        /> */}
        <Card.Body>
          <Card.Title>
            <Link to={`products/${productDetails.id}`}>
              <h6>{productDetails.title}</h6>
            </Link>
          </Card.Title>
          <Card.Text>Price: ${productDetails.price}</Card.Text>
          <AddToCart
            updateCart={props.updateCart}
            getcart={props.getcart}
            productDetails={productDetails}
          />
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      {/* <Col xs={4}>
          <Image src={productDetails.image} rounded className="img-fluid" />
        </Col>
        <Col>
          <Link to={`products/${productDetails.id}`}>
            <h6>{productDetails.title}</h6>
          </Link>
          <p>Price: ${productDetails.price}</p>
          <AddToCart
            updateCart={props.updateCart}
            getcart={props.getcart}
            productDetails={productDetails}
          />
        </Col> */}
      {/* </Row> */}
    </Col>
  );
}
