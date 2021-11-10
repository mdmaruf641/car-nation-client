import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import logo from "../../../images/logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="main-nav">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                className="menu-items fs-5 text-white"
                as={HashLink}
                to="/home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="menu-items fs-5 text-white"
                as={HashLink}
                to="/explore"
              >
                Explore
              </Nav.Link>
              <Nav.Link
                className="menu-items fs-5 text-white"
                as={HashLink}
                to="/contact"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                className="menu-items fs-5 text-white"
                as={HashLink}
                to="/dashboard"
              >
                Dashboard
              </Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link
                className="menu-items fs-5 text-white"
                as={HashLink}
                to="/login"
              >
                Login
              </Nav.Link>
              <Nav.Link
                className="menu-items fs-5 text-white"
                as={HashLink}
                to="/signUp"
              >
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
