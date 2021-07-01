import React from 'react'
import { Col, Form } from "react-bootstrap";
import useFetch from './Services/useFetch';

export function ProductFilter() {
  return (
    <Col xs={12}>
      <Form>
        <Form.Group>
          <Form.Label>Filter:</Form.Label>
          <Form.Control as="select" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </Col>
  );
}


export function FilterByCategory(props) {
  const {data:categories, error, loading} = useFetch("products/categories");


// Check for selected value is present in the categories then show category product else show all
  const onValueChange = (e) => {
    console.log(e.target.value, categories.includes(e.target.value));
    categories.includes(e.target.value)
      ? props.selectCategory("products/category/" + e.target.value)
      : props.selectCategory("products");
  }
  
if (error) throw error;
// if (loading) return <Spinner />;
  return (
    <Col xs={12}>
      <Form>
        <Form.Group>
          <Form.Label>Filter:</Form.Label>
          <Form.Control
            as="select"
            custom
            className="text-capitalize"
            onChange={onValueChange}
          >
            <option defaultValue>
              Show all
            </option>
            {categories !== null
              ? categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))
              : ""}
          </Form.Control>
        </Form.Group>
      </Form>
    </Col>
  );
}

// export default ProductFilter
