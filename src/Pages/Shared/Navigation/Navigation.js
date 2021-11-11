import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import logo from "../../../images/logo.png";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import useAuth from "./../../../Hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  const signOut = <FontAwesomeIcon icon={faSignOutAlt} />;
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
            </Nav>
            <Nav className="text-end">
              {user?.email ? (
                <>
                  <Nav.Link
                    className="menu-items mt-1 fs-5 text-white"
                    as={HashLink}
                    to="/dashboard"
                  >
                    Dashboard
                  </Nav.Link>
                  <Nav.Link
                    className="menu-items mt-1 fs-5 text-white"
                    as={HashLink}
                    to="/"
                  >
                    {user.displayName}
                  </Nav.Link>
                  <Nav.Link
                    className="menu-items fs-3 text-white"
                    as={HashLink}
                    to="/"
                    onClick={logout}
                  >
                    {signOut}
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    className="menu-items mt-1 fs-5 text-white"
                    as={HashLink}
                    to="/login"
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    className="menu-items mt-1 fs-5 text-white"
                    as={HashLink}
                    to="/signUp"
                  >
                    Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
