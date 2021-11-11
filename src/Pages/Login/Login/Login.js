import React, { useState } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import Navigation from "../../Shared/Navigation/Navigation";
import "./Login.css";
import useAuth from "./../../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, loading, authError } = useAuth();
  const location = useLocation();
  const history = useHistory();

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
    loginUser(loginData.email, loginData.password, location, history);
  };
  return (
    <div>
      <div className="explore-nav">
        <Navigation></Navigation>
      </div>
      <Container>
        <div className="form-container">
          {" "}
          <h1 className="mb-4">Login</h1>
          <Form onSubmit={handleLoginSubmit}>
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

            <Button className="button" variant="primary" type="submit">
              Login
            </Button>
          </Form>
          {loading && <Spinner animation="border" />}
          {user?.email && (
            <Alert className="mt-3" variant={"success"}>
              Your Are Successfully Logged In!
            </Alert>
          )}
          {authError && (
            <Alert className="mt-3" variant={"danger"}>
              {authError}
            </Alert>
          )}
          <NavLink className="my-3 d-block text-decoration-none" to="/signUp">
            New User? Please Sign Up
          </NavLink>
        </div>
      </Container>
    </div>
  );
};

export default Login;
