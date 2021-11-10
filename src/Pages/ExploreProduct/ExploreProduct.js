import React from "react";
import { Button, Card } from "react-bootstrap";
import "./exploreProduct.css";

const exploreProduct = (props) => {
  const { name, description, img, price } = props.product;
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img src={img} className="card-img-top" height="200px" alt="" />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <h5>Price: ${price}</h5>
            <p className="card-text">{description}</p>
            <Card.Footer>
              <Button className="button">Book Now</Button>
            </Card.Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default exploreProduct;
