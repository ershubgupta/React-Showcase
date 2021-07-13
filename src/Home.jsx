import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Jumbotron fluid className="mb-0 py-3">
        <Container>
          <Row>
            <Col>
              <h1>Overview of React App Showcase</h1>
              <ul>
                <li>
                  <b>Github Card:</b>
                  <ul>
                    <li>
                      We can search any valid Github user using the search
                      field.
                    </li>
                    <li>User info will be listed.</li>
                    <li>
                      Error will come if we try to search user which is already
                      listed.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Shopping Cart:</b>
                  <ul>
                    <li>
                      This is mini shopping app which has limited number of
                      products.
                    </li>
                    <li>
                      Product Listing page which show all the available product.
                    </li>
                    <li>We can Filter the product using category.</li>
                    <li>We can Sort the product Alphabetical Order.</li>
                    <li>We can add products from here to the cart.</li>
                    <li>Individual Product Detail Page show the complete detail of page and also allow to add product in cart.</li>
                    <li>
                      Cart Page will list down all product which are selected and also show the user info & Order Summary
                    </li>
                    <li>
                      Checkout button allow to place the order and post that it will reset the cart and
                      order summary.
                    </li>
                    <li>
                      Special Thanks to&nbsp;
                      <a
                        href="https://fakestoreapi.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i>fakestoreapi</i>
                      </a>
                      &nbsp;for allowing to use there api for free for learning
                      purpose.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Todo App:</b>
                  <ul>
                    <li>Coming Soon.</li>
                  </ul>
                </li>
              </ul>
              <p className="small font-weight-bold mt-3">
                <i>
                  *This page is only for leaning purpose, and all the content
                  here is Dummy data. I'm using this place to learn,
                  practice and implement REACT JS.
                </i>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}
