import React from 'react'
import { Badge, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router'
import Loader from '../Loader';
import AddToCart from './AddToCart';
import useFetch from './Services/useFetch';

export default function ProductDetail(props) {
  const {id} = useParams();
  const { data: product, error, loading } = useFetch(`products/${id}`);
  if (error) throw error;
  if (loading) return <Loader/>;

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
