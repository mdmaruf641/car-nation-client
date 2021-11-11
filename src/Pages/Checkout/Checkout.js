import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Checkout.css";
import { Button, Container, Form, Row } from "react-bootstrap";
import Navigation from "../Shared/Navigation/Navigation";
import useAuth from "./../../Hooks/useAuth";

const Checkout = () => {
  const { _id } = useParams();
  const [checkout, setCheckout] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://peaceful-ocean-27772.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const checkoutItems = data.find((checkout) => checkout._id === _id);
        setCheckout(checkoutItems);
      });
  }, [_id]);

  // handle check out
  const handleCheckOut = (e) => {
    e.preventDefault();

    // data collect
    // send to the server
    alert("check out done");
  };

  return (
    <div>
      <div className="explore-nav">
        <Navigation></Navigation>
      </div>
      <Container>
        <Row>
          <div className="col-lg-6">
            <div className="service-dtls mt-4">
              <img
                className="w-75 h-25 rounded mt-4"
                src={checkout?.img}
                alt=""
              />
              <div className=" mt-3 dtls-content">
                <h3>Name: {checkout?.name}</h3>
                <p>Description: {checkout?.description}</p>
                <h4>Price: ${checkout?.price}</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-container">
              <h3 className="dtls-hdr my-2">Place Your Order</h3>
              <Form onSubmit={handleCheckOut}>
                <Form.Control
                  name="name"
                  required
                  type="text"
                  defaultValue={user.displayName}
                  placeholder="Your Name"
                />
                <br />
                <Form.Control
                  name="email"
                  required
                  type="email"
                  defaultValue={user.email}
                  placeholder="Your Email"
                />
                <br />
                <Form.Control
                  name="address"
                  required
                  type="text"
                  placeholder="Your Address"
                />
                <br />
                <Form.Control
                  name="country"
                  type="text"
                  placeholder="Your Country"
                />
                <br />
                <Form.Control
                  name="phone"
                  required
                  type="number"
                  placeholder="Your Phone Number"
                />
                <br />

                <Button className="button" variant="primary" type="submit">
                  Check Out
                </Button>
              </Form>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
