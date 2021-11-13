import React from "react";
import "./Contact.css";
import Navigation from "./../Shared/Navigation/Navigation";
import { Button, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Shared/Footer/Footer";

const Contact = () => {
  const location = <FontAwesomeIcon icon={faLocationArrow} />;
  const phone = <FontAwesomeIcon icon={faPhone} />;
  const email = <FontAwesomeIcon icon={faEnvelope} />;
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
          <div className="col-lg-6  contact-info">
            <p>contact information</p>
            <h1>Our Address Support</h1>
            <p className="text-dark my-4 w-75">
              Contact information is the data you provide that lets recruiters
              get in touch with you. For all professionals.
            </p>
            <div className="info-details">
              <div className="single-info">
                <Row>
                  <div className="col-2 fs-2 mt-1 info-i">{location}</div>
                  <div className="col-10">
                    <h5 className="fw-bold">Company Office</h5>
                    <p>Khulshi, Chittagong, Bangladesh.</p>
                  </div>
                </Row>
              </div>

              <div className="single-info">
                <Row>
                  <div className="col-2 fs-2 mt-1 info-i">{phone}</div>
                  <div className="col-10">
                    <h5 className="fw-bold">Hotline Number</h5>
                    <p>+880 1641656113</p>
                  </div>
                </Row>
              </div>
              <div className="single-info">
                <Row>
                  <div className="col-2 fs-2 mt-1 info-i">{email}</div>
                  <div className="col-10">
                    <h5 className="fw-bold">Ask your question</h5>
                    <p>maruf.moni.mm@gmail.com</p>
                  </div>
                </Row>
              </div>
            </div>
          </div>
          <div className="col-lg-6 contact-box">
            <h1>
              Send Your <span>Request</span>
            </h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="email" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button className="button" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
