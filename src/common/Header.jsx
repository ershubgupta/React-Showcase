import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap"

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/" className="navbar-brand">
          React App Showcase
        </Link>
        <Nav className="ml-auto">
          <a href="https://social-chat-frontend.vercel.app/social/" target="_blank" rel="noreferrer" className="nav-link">Social Chat</a>
          <Link to="/github-cards" className="nav-link">
            Github Card
          </Link>
          <Link to="/shopping-cart" className="nav-link">
            Shopping Cart
          </Link>
          <Link to="/todo-app" className="nav-link">
            ToDo App
          </Link>
          <Link to="/meetup" className="nav-link">
            MeetUp
          </Link>
        </Nav>
      </Navbar>
    </>
  );
}
