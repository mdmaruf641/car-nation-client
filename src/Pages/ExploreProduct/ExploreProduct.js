import React from "react";
import { Button, Card } from "react-bootstrap";
// import { useHistory } from "react-router";
import "./exploreProduct.css";

const exploreProduct = (props) => {
  const { name, description, img, price /* _id */ } = props.product;
  // handle service details button
  /*   const history = useHistory();
  const handleDetailsBtn = () => {
    history.push(`/checkOut/${_id}`);
  };
 */
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
