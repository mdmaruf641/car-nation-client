import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import logo from "../../../images/footer-logo.png";

const Footer = () => {
  const email = <FontAwesomeIcon icon={faEnvelope} />;
  const phone = <FontAwesomeIcon icon={faPhone} />;
  const location = <FontAwesomeIcon icon={faLocationArrow} />;
  return (
    <div>
      <div className="footer  py-5 mt-4">
        <Container>
          <Row>
            <div className="col-lg-3 col-md-6">
              <div className="footer-heading text-start text-white mb-3">
                <img src={logo} alt="" />
              </div>

              <div className="footer-info ps-2">
                <div className="d-flex align-items-center">
                  <div className=" me-4  fs-3">{email}</div>
                  <div className=" text-start contact-info">
                    <p>Email Address</p>
                    <p>maruf.moni.mm@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex  align-items-center my-3">
                  <div className=" me-4 fs-3">{phone}</div>
                  <div className=" text-start contact-info">
                    <p>Phone Number</p>
                    <p>+880 1641656113</p>
                  </div>
                </div>
                <div className="d-flex  align-items-center">
                  <div className=" me-4 fs-3">{location}</div>
                  <div className=" text-start contact-info">
                    <p>Address</p>
                    <p>Khulshi, Chittagong, Bangladesh.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 ps-4">
              <div className="footer-heading text-start text-white ps-2 mb-3">
                <h3>Quick Links</h3>
              </div>
              <div className="footer-links ps-2 text-start">
                <ul>
                  <li>About Us</li>
                  <li>Blogs</li>
                  <li>Contact Us</li>
                  <li>FAQ</li>
                  <li>Team</li>
                  <li>Privacy & Policy</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-heading text-start text-white ps-2 mb-3">
                <h3>Our Info</h3>
              </div>
              <div className="footer-links ps-2 text-start">
                <ul>
                  <li>About Us</li>
                  <li>Blogs</li>
                  <li>Contact Us</li>
                  <li>FAQ</li>
                  <li>Team</li>
                  <li>Privacy & Policy</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-heading text-start text-white ps-2 mb-3">
                <h3>Subscribe Us</h3>
              </div>

              <div className="footer-links text-center">
                <Form>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Button>Subscribe</Button>
                </Form>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <div className="mini-footer">
        <Container>
          <p className="py-4 m-0">
            Copyright © 2021 | All Rights Reserved by <span>Md. Maruf</span>
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
