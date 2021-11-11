import React, { useState } from "react";
import { Container, Form, Button, Spinner, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Navigation from "../../Shared/Navigation/Navigation";
import "./SignUp.css";
import useAuth from "./../../../Hooks/useAuth";
import { useHistory } from "react-router";

const SignUp = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, loading, authError } = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  // handle login button
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (loginData.password !== loginData.password2) {
      alert("Your Password Did Not Match");
      return;
    }
    registerUser(
      loginData.email,
      loginData.password,
      loginData.name,
      loginData.name,
      history
    );
  };
  return (
    <div>
      <div className="explore-nav">
        <Navigation></Navigation>
      </div>
      <Container>
        <div className="form-container">
          <h1 className="mb-4">Sign Up</h1>
          {!loading && (
            <Form onSubmit={handleLoginSubmit}>
              <Form.Control
                name="name"
                onChange={handleOnChange}
                required
                type="text"
                placeholder="Your Name"
              />
              <br />
              <Form.Control
                name="email"
                onChange={handleOnChange}
                required
                type="email"
                placeholder="Your Email"
              />
              <br />
              <Form.Control
                name="password"
                onChange={handleOnChange}
                required
                type="password"
                placeholder="Your Password"
              />
              <br />
              <Form.Control
                name="password2"
                onChange={handleOnChange}
                required
                type="password"
                placeholder="Confirm Password"
              />
              <br />
              <Button className="button" variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          )}
          {loading && <Spinner animation="border" />}
          {user?.email && (
            <Alert className="mt-3" variant={"success"}>
              You Are Successfully Signed Up!
            </Alert>
          )}
          {authError && (
            <Alert className="mt-3" variant={"danger"}>
              {authError}
            </Alert>
          )}
          <NavLink className="my-3 d-block text-decoration-none" to="/login">
            Have an Account? Please Login
          </NavLink>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
