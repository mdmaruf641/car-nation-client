import React from "react";
import "./Contact.css";
import Navigation from "./../Shared/Navigation/Navigation";
import { Container, Row } from "react-bootstrap";
const Contact = () => {
  return (
    <div>
      <div className="explore-nav">
        <Navigation></Navigation>
      </div>
      <Container>
        <div className="section-heading my-4">
          <h2>Contact Us</h2>
        </div>
        <Row className="mt-4">
          <div className="col-lg-6 text-start contact-info">
            <p>contact information</p>
            <h1>Our Address Support</h1>
            <p className="text-dark mt-4 w-75">
              Contact information is the data you provide that lets recruiters
              get in touch with you. For all professionals.
            </p>
          </div>
          <div className="col-lg-6"></div>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
