import React from "react";
import "./Review.css";
import user from "../../../images/user.png";

const Review = (props) => {
  const { name, comment, rating } = props.review;
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img src={user} className="card-img-top w-25 mx-auto mt-3" alt="" />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">rating</p>
            <h6 className="fst-italic">" {comment} "</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
