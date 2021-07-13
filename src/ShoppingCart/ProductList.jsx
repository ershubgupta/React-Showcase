// import axios from "axios";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Loader from "../common/Loader";
import ProductCard from "./ProductCard";
import { ProductSortingByPrice, FilterByCategory } from "./ProductFilter";
import useFetch from "./Services/useFetch";

export default function ProductList(props) {
  const [list, setList] = useState("products");
  const [sort, setSort] = useState("");

  let url = sort !== "" ? "?sort=" + sort : "";

  const { data: product, error, loading } = useFetch(list + url);

  function selectCategory(catgry) {
    setList(catgry);
  }

  if (error) throw error;
  if (loading) return <Loader />;
  // for (let i=0; i<Object.keys(product).length; i++) {
  //     // product[i]["quantity"]
  //   }
  // product.map((i) => (!i.hasOwnProperty("qunatity") ? i["quantity"] = 0 : ''));
  product.map((i) => (i["quantity"] = 0));
  // console.log(product);
    // console.log(product[i].hasOwnProperty("quantity"));
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
      </Row>
    </>
  );
}
