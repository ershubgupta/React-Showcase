import React from 'react'
import { Badge, Button, Col, Container, Form, FormControl, Image, InputGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router'
import Loader from '../Loader';
import AddToCart from './AddToCart';
import useFetch from './Services/useFetch';

export default function ProductDetail(props) {
  const {id} = useParams();
  console.log(`products/${id}`);
  const { data: product, error, loading } = useFetch(`products/${id}`);
  if (error) throw error;
  if (loading) return <Loader/>;

  console.log(product);
  return (
    <Container>
      <Row>
        <Col md={12} lg={5}>
          <Image src={product.image} rounded className="img-fluid" />
        </Col>
        <Col md={12} lg={7}>
          <Badge variant="info" className="text-capitalize mb-2">
            {product.category}
          </Badge>
          <h2>{product.title}</h2>
          <p className="mb-4">{product.description}</p>
          <p>Price: ${product.price}</p>
          <Row>
            {/* <Col xs="3">
              <InputGroup className="mb-2">
                <InputGroup.Text>-</InputGroup.Text>
                <FormControl placeholder="0" className="text-center" />
                <InputGroup.Text>+</InputGroup.Text>
              </InputGroup>
            </Col> */}
            <Col>
              <AddToCart
                productDetails={product}
                updateCart={props.updateCart}
                getcart={props.getcart}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
