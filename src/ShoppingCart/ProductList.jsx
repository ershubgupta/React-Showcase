// import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, Image, Pagination, Row } from "react-bootstrap";
import Loader from "../Loader";
import ProductCard from "./ProductCard";
import { ProductFilter, FilterByCategory } from "./ProductFilter";
import useFetch from "./Services/useFetch";

// import ProductDetail from "./ProductDetail"

export default function ProductList(props) {
  const [list, setList] = useState('products')
  const { data: product, error, loading } = useFetch(list);

  function selectCategory(catgry) {
    setList(catgry);
    // this.props.category = catgry;
  }

  function loadNextList () {
    // setList(`products?limit=9 + `);
  }
  function cartItem () {
    
  }

  if (error) throw error
  if (loading) return <Loader />;

  return (
    <>
      <Row>
        <Col xs={12}>Total Items: {product.length}</Col>
        {/* <Col xs={12}>In cart: </Col> */}
        <FilterByCategory
          category={props.category}
          selectCategory={selectCategory}
        />
        {product.map((e) => (
          <ProductCard key={e.id} productdetails={e} cartItem={cartItem} />
        ))}
        {/* <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination> */}
      </Row>
    </>
  );
}
