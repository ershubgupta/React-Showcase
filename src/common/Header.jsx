import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap"

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/" className="navbar-brand">React App Showcase</Link>
        <Nav className="ml-auto">
          <Link to="/github-cards" className="nav-link">Github Card</Link>
          <Link to="/shopping-cart" className="nav-link">Shopping Cart</Link>
          <Link to="/todo-app" className="nav-link">ToDo App</Link>
        </Nav>
      </Navbar>
    </>
  )
}
