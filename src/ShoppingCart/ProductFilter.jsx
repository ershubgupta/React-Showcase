import React from "react";
import { Col, Form } from "react-bootstrap";
import Loader from "../Loader";
import useFetch from "./Services/useFetch";

export function ProductSortingByPrice(props) {
  
  const onSortChange = (e) => {
      e.target.value !== ""
        ? props.getSorting(e.target.value)
        : props.getSorting('');
  }
  return (
    <Form>
      <Form.Group className="mb-0">
        <Form.Row className="align-items-center">
          <Form.Label className="mb-0">Sort By ID:</Form.Label>
          <Col>
            <Form.Control
              as="select"
              custom
              className="text-capitalize"
              onChange={onSortChange}
            >
              <option value="">None</option>
              <option value="asc">High to Low</option>
              <option value="desc">Low to High</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form.Group>
    </Form>
  );
}

export function FilterByCategory(props) {
  const { data: categories, error, loading } = useFetch("products/categories");

  // Check for selected value is present in the categories then show category product else show all
  const onValueChange = (e) => {
    categories.includes(e.target.value)
      ? props.selectCategory("products/category/" + e.target.value)
      : props.selectCategory("products");
    props.getCategory(e.target.value);
  };

  if (error) throw error;
  // if (loading) return <Loader />;
  return (
    <Form>
      <Form.Group className="mb-0">
        <Form.Row className="align-items-center">
          <Form.Label className="mb-0">Filter By Category:</Form.Label>
          <Col>
            <Form.Control
              as="select"
              custom
              className="text-capitalize"
              onChange={onValueChange}
            >
              <option defaultValue>Show all</option>
              {categories !== null
                ? categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))
                : ""}
            </Form.Control>
          </Col>
        </Form.Row>
      </Form.Group>
    </Form>
  );
}

