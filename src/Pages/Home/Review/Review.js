import React from "react";
import "./Review.css";
import user from "../../../images/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const Review = (props) => {
  const { name, comment, rating } = props.review;
  console.log(parseFloat(rating));
  const star = <FontAwesomeIcon icon={faStar} />;
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img src={user} className="card-img-top w-25 mx-auto mt-3" alt="" />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">
              <Rating
                initialRating={rating}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly
              ></Rating>
            </p>
            <h6 className="fst-italic">" {comment} "</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
