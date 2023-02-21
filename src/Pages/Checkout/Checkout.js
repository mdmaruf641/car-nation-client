import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Checkout.css";
import { Alert, Button, Container, Form, Row } from "react-bootstrap";
import Navigation from "../Shared/Navigation/Navigation";
import useAuth from "./../../Hooks/useAuth";

const Checkout = () => {
  const { _id } = useParams();
  const [checkout, setCheckout] = useState({});
  const [orderSuccess, setOrderSuccess] = useState(false);
  const { user } = useAuth();
  // check out box state initialize
  const initialInfo = {
    UserName: user.displayName,
    email: user.email,
    phone: "",
    address: "",
    price: "",
  };
  const [orderInfo, setOrderInfo] = useState(initialInfo);

  useEffect(() => {
    fetch("https://car-nation-server-site.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        const checkoutItems = data.find((checkout) => checkout._id === _id);
        setCheckout(checkoutItems);
      });
  }, [_id]);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...orderInfo };
    newInfo[field] = value;
    setOrderInfo(newInfo);
  };

  // handle check out
  const handleCheckOut = (e) => {
    e.preventDefault();

    // data collect
    const order = {
      ...orderInfo,
      productName: checkout?.name,
    };
    console.log(order);
    // send to the server
    fetch("https://car-nation-server-site.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setOrderSuccess(true);
        }
      });
  };

  return (
    <div>
      <div className="explore-nav">
        <Navigation></Navigation>
      </div>
      <Container>
        <h3 className="dtls-hdr my-2">Place Your Order</h3>
        {/* order success message */}
        {orderSuccess && (
          <Alert className="mt-3 w-50 mx-auto" variant={"success"}>
            Checkout Successfully Completed!
          </Alert>
        )}
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
              <h3 className="dtls-hdr mb-3">{checkout?.name}</h3>
              <Form onSubmit={handleCheckOut}>
                <Form.Control
                  name="UserName"
                  onBlur={handleOnBlur}
                  required
                  type="text"
                  defaultValue={user.displayName}
                  placeholder="Your Name"
                />
                <br />
                <Form.Control
                  name="email"
                  onBlur={handleOnBlur}
                  required
                  type="email"
                  defaultValue={user.email}
                  placeholder="Your Email"
                />
                <br />
                <Form.Control
                  name="address"
                  onBlur={handleOnBlur}
                  required
                  type="text"
                  placeholder="Your Address"
                />
                <br />
                <Form.Control
                  name="price"
                  onBlur={handleOnBlur}
                  type="text"
                  defaultValue={checkout?.price}
                  placeholder="Price"
                />
                <br />
                <Form.Control
                  name="phone"
                  onBlur={handleOnBlur}
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
