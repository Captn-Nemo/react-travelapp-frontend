import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavStyle.css";
function CustomNavbar() {
  return (
    <Navbar
      sticky="top"
      bg="light"
      expand="lg"
      className="mx-2 mt-2 rounded shadow-lg"
    >
      <Container>
        <Navbar.Brand href="#home">Travel App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link>
              <Link className="navItem" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navItem" to="/signup">
                Sign Up
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
