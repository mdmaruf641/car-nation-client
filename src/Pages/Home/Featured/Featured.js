import React from "react";
import { Container, Row } from "react-bootstrap";

import featured from "../../../images/fetured.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import "./Featured.css";

const Featured = () => {
  const star = <FontAwesomeIcon icon={faCog} />;
  return (
    <div>
      <Container>
        <div className="section-heading my-5">
          <p className="w-75 mx-auto">our service Cars</p>
          <h2 className="fw-bold">Exclusive Car Featured</h2>
        </div>

        <div className="about-items">
          <Row>
            <div className="col-lg-4">
              <Row className="single-items">
                <div className="items-head d-flex justify-content-center align-items-center">
                  <div className="icon-body">
                    <h3 className="icon me-3 fs-4">{star}</h3>
                  </div>
                  <div className="title">
                    <h4 className="fw-bolder">SUPER FAST CAR</h4>
                  </div>
                </div>
                <div className="desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </Row>
              <Row className="single-items">
                <div className="items-head d-flex justify-content-center align-items-center">
                  <div className="icon-body">
                    <h3 className="icon me-3 fs-4">{star}</h3>
                  </div>
                  <div className="title ">
                    <h4 className="fw-bolder">SUPER FAST CAR</h4>
                  </div>
                </div>
                <div className="desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </Row>
            </div>
            <div className="col-lg-4">
              <img
                className="w-100  mx-auto featured-img"
                src={featured}
                alt=""
              />
            </div>
            <div className="col-lg-4">
              <Row className="single-items">
                <div className="items-head d-flex justify-content-center align-items-center">
                  <div className="icon-body">
                    <h3 className="icon me-3 fs-4">{star}</h3>
                  </div>
                  <div className="title">
                    <h4 className="fw-bolder">SUPER FAST CAR</h4>
                  </div>
                </div>
                <div className="desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </Row>
              <Row className="single-items">
                <div className="items-head d-flex justify-content-center align-items-center">
                  <div className="icon-body">
                    <h3 className="icon me-3 fs-4">{star}</h3>
                  </div>
                  <div className="title ">
                    <h4 className="fw-bolder">SUPER FAST CAR</h4>
                  </div>
                </div>
                <div className="desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </Row>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Featured;
