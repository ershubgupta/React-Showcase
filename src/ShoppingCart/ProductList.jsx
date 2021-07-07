// import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, Image, Pagination, Row } from "react-bootstrap";
import Loader from "../Loader";
import ProductCard from "./ProductCard";
import { ProductSortingByPrice, FilterByCategory } from "./ProductFilter";
import useFetch from "./Services/useFetch";

// import ProductDetail from "./ProductDetail"

export default function ProductList(props) {
  const [list, setList] = useState("products");
  const [sort, setSort] = useState('');

  let url = sort !== "" ? "?sort="+sort : "";

  const {
    data: product,
    error,
    loading,
  } = useFetch(list+url);

  function selectCategory(catgry) {
    setList(catgry);
    // this.props.category = catgry;
  }

  function loadNextList() {
    // setList(`products?limit=9 + `);
  }
  function cartItem() {}

  if (error) throw error;
  if (loading) return <Loader />;

  return (
    <>
      <Row className="align-items-center">
        <Col xs={4}>
          <FilterByCategory
            getCategory={props.getCategory}
            selectCategory={selectCategory}
          />
        </Col>
        <Col xs={4}>
          <ProductSortingByPrice getSorting={(e) => setSort(e)} />
        </Col>
        <Col xs={4}>Total Items: {product.length}</Col>
      </Row>
      <Row>
        <Col xs={12} className="my-5">
          <Row>
            {product.map((e) => (
              <ProductCard
                getcart={props.getcart}
                key={e.id}
                productdetails={e}
                updateCart={props.updateCart}
              />
            ))}
          </Row>
        </Col>
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
