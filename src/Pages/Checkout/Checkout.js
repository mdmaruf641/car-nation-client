import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Checkout.css";
import { Container } from "react-bootstrap";
import Navigation from "../Shared/Navigation/Navigation";

const Checkout = () => {
  const { _id } = useParams();
  const [checkout, setCheckout] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const checkoutItems = data.find((checkout) => checkout._id === _id);
        setCheckout(checkoutItems);
      });
  }, [_id]);

  return (
    <div>
      <div className="explore-nav">
        <Navigation></Navigation>
      </div>
      <Container>
        <h1 className="dtls-hdr mt-3">Place Your Order</h1>
        <div className="service-dtls mt-4">
          <img className="w-50 h-25 rounded mt-2" src={checkout?.img} alt="" />
          <div className="dtls-content">
            <h3>Name: {checkout?.name}</h3>
            <p>Description: {checkout?.description}</p>
            <h4>Price: ${checkout?.price}</h4>
            <button className="add-btn">Booking Now</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
